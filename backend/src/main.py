from contextlib import asynccontextmanager

from sqlmodel import select, func
from database.config import SessionDep, create_db_and_tables
from fastapi import FastAPI, HTTPException
from database.models import Submissions
from utils.dto import SubmissionDTO, SubmissionCountDTO
from fastapi import status

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield

app = FastAPI(lifespan=lifespan)

@app.post("/api/submissions", status_code=status.HTTP_201_CREATED)
def create_submission(submission_dto: SubmissionDTO, session: SessionDep) -> Submissions:
    result = session.exec(select(Submissions).where(Submissions.email == submission_dto.email)).all()

    submission = Submissions.model_validate(obj = submission_dto)

    if result:
        raise HTTPException(status_code=409, detail="Duplicate submission!")
    
    session.add(submission)
    session.commit()
    session.refresh(submission)

    return submission

@app.get("/api/submissions/quantity")
def get_submission_quantity(session: SessionDep) -> SubmissionCountDTO:

    statement = select(func.count()).select_from(Submissions)
    quantity = session.exec(statement).one()
    
    return {"quantity": quantity}
