import csv
import io
import logging
import time
from contextlib import asynccontextmanager
from typing import Any

from database.config import SessionDep, create_db_and_tables, settings
from database.models import Submissions
from fastapi import Depends, FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from sqlmodel import func, select
from utils.dto import HealthDTO, SubmissionCountDTO, SubmissionDTO, SubmissionReadDTO

logger = logging.getLogger("enei_interest")
logging.basicConfig(level=logging.INFO)


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.rate_limiter = {}
    create_db_and_tables()
    logger.info("Application startup complete")
    yield


app = FastAPI(lifespan=lifespan)

@app.middleware("http")
async def log_origin(request: Request, call_next):
    origin = request.headers.get("origin")
    logger.info(f"DEBUG: Incoming request origin: {origin}")
    return await call_next(request)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def error_detail(message: str, code: str) -> dict[str, str]:
    return {"message": message, "code": code}


def normalize_email(email: Any) -> str:
    return str(email).strip().lower()


def rate_limit_submission(request: Request) -> None:
    client_ip = request.client.host if request.client else "unknown"
    now = time.monotonic()
    window = settings.RATE_LIMIT_WINDOW_SECONDS
    max_requests = settings.RATE_LIMIT_MAX_REQUESTS
    limiter: dict[str, list[float]] = request.app.state.rate_limiter
    recent_attempts = [timestamp for timestamp in limiter.get(client_ip, []) if now - timestamp < window]

    if len(recent_attempts) >= max_requests:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail=error_detail("Too many submissions. Please try again later.", "rate_limited"),
        )

    recent_attempts.append(now)
    limiter[client_ip] = recent_attempts


def require_admin(request: Request) -> None:
    if not settings.ADMIN_TOKEN:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=error_detail("Admin access is not configured.", "admin_not_configured"),
        )

    authorization = request.headers.get("Authorization", "")
    expected = f"Bearer {settings.ADMIN_TOKEN}"

    if authorization != expected:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=error_detail("Invalid admin token.", "invalid_admin_token"),
        )


@app.get("/api/health", response_model=HealthDTO)
def health_check() -> HealthDTO:
    return HealthDTO(status="ok")


@app.post(
    "/api/submissions",
    status_code=status.HTTP_201_CREATED,
    response_model=SubmissionReadDTO,
    dependencies=[Depends(rate_limit_submission)],
)
def create_submission(submission_dto: SubmissionDTO, session: SessionDep) -> Submissions:
    if not submission_dto.consent:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=error_detail("Consent is required to register interest.", "consent_required"),
        )

    normalized_email = normalize_email(submission_dto.email)
    result = session.exec(select(Submissions).where(Submissions.email == normalized_email)).first()

    if result:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=error_detail("This email is already registered.", "duplicate_email"),
        )

    submission_data = submission_dto.model_dump()
    submission_data["email"] = normalized_email
    submission = Submissions(**submission_data)

    session.add(submission)
    session.commit()
    session.refresh(submission)

    logger.info("New interest submission registered: %s", normalized_email)
    return submission


@app.get("/api/submissions/quantity", response_model=SubmissionCountDTO)
def get_submission_quantity(session: SessionDep) -> SubmissionCountDTO:
    statement = select(func.count()).select_from(Submissions)
    quantity = session.exec(statement).one()
    return SubmissionCountDTO(quantity=quantity)


@app.get(
    "/api/admin/submissions",
    response_model=list[SubmissionReadDTO],
    dependencies=[Depends(require_admin)],
)
def get_admin_submissions(session: SessionDep) -> list[Submissions]:
    statement = select(Submissions).order_by(Submissions.created_at.desc())
    return list(session.exec(statement).all())


@app.get(
    "/api/admin/submissions/export.csv",
    dependencies=[Depends(require_admin)],
)
def export_admin_submissions_csv(session: SessionDep) -> StreamingResponse:
    statement = select(Submissions).order_by(Submissions.created_at.desc())
    submissions = session.exec(statement).all()

    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["id", "name", "email", "consent", "created_at"])

    for submission in submissions:
        writer.writerow([
            submission.id,
            submission.name,
            submission.email,
            submission.consent,
            submission.created_at.isoformat(),
        ])

    output.seek(0)
    return StreamingResponse(
        iter([output.getvalue()]),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=submissions.csv"},
    )
