import os

os.environ.setdefault("DB_USER", "postgres")
os.environ.setdefault("DB_PASSWORD", "postgres")
os.environ.setdefault("DB_HOST", "localhost")
os.environ.setdefault("DB_NAME", "enei_interest_test")
os.environ.setdefault("ADMIN_TOKEN", "test-admin-token")

import pytest
from fastapi.testclient import TestClient
from sqlmodel import Session, SQLModel, create_engine
from sqlmodel.pool import StaticPool

from database.config import get_session, settings
from main import app


@pytest.fixture(name="session")
def session_fixture():
    engine = create_engine(
        "sqlite://", connect_args={"check_same_thread": False}, poolclass=StaticPool
    )
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        yield session


@pytest.fixture(name="client")
def client_fixture(session: Session):
    def get_session_override():
        return session

    app.dependency_overrides[get_session] = get_session_override
    app.state.rate_limiter = {}
    settings.ADMIN_TOKEN = "test-admin-token"

    client = TestClient(app)
    yield client
    app.dependency_overrides.clear()


def payload(email="emailTeste@ualg.pt", name="Utilizador de teste", consent=True):
    return {"email": email, "name": name, "consent": consent}


def test_health_success(client: TestClient):
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_create_submission_success(client: TestClient):
    response = client.post("/api/submissions", json=payload("EmailTeste@ualg.pt"))
    data = response.json()

    assert response.status_code == 201
    assert data["id"] == 1
    assert data["email"] == "emailteste@ualg.pt"
    assert data["consent"] is True


def test_create_submission_duplicate_case_insensitive(client: TestClient):
    response1 = client.post("/api/submissions", json=payload("emailTeste@ualg.pt"))
    assert response1.status_code == 201

    response2 = client.post("/api/submissions", json=payload("EMAILTESTE@ualg.pt", "Segundo teste"))
    assert response2.status_code == 409
    assert response2.json()["detail"]["code"] == "duplicate_email"


def test_create_submission_missing_fields(client: TestClient):
    response = client.post("/api/submissions", json={})
    assert response.status_code == 422


def test_create_submission_extra_fields(client: TestClient):
    response = client.post(
        "/api/submissions",
        json={"id": 10001243, "email": "emailTeste@ualg.pt", "name": "Utilizador", "consent": True, "created_at": "123"},
    )
    assert response.status_code == 422


def test_create_submission_consent_required(client: TestClient):
    response = client.post("/api/submissions", json=payload(consent=False))
    assert response.status_code == 400
    assert response.json()["detail"]["code"] == "consent_required"


def test_quantity_submission_success(client: TestClient):
    client.post("/api/submissions", json=payload("email1@ualg.pt"))
    client.post("/api/submissions", json=payload("email2@ualg.pt"))
    client.post("/api/submissions", json=payload("email3@ualg.pt"))

    response = client.get("/api/submissions/quantity")
    data = response.json()

    assert response.status_code == 200
    assert data["quantity"] == 3


def test_admin_submissions_requires_token(client: TestClient):
    response = client.get("/api/admin/submissions")
    assert response.status_code == 401


def test_admin_submissions_success(client: TestClient):
    client.post("/api/submissions", json=payload("admin@ualg.pt"))

    response = client.get(
        "/api/admin/submissions",
        headers={"Authorization": "Bearer test-admin-token"},
    )

    assert response.status_code == 200
    assert response.json()[0]["email"] == "admin@ualg.pt"


def test_admin_csv_export_success(client: TestClient):
    client.post("/api/submissions", json=payload("csv@ualg.pt"))

    response = client.get(
        "/api/admin/submissions/export.csv",
        headers={"Authorization": "Bearer test-admin-token"},
    )

    assert response.status_code == 200
    assert "text/csv" in response.headers["content-type"]
    assert "csv@ualg.pt" in response.text
