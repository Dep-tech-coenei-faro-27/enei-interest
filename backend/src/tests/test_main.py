import pytest
from fastapi.testclient import TestClient
from sqlmodel import Session, SQLModel, create_engine
from sqlmodel.pool import StaticPool

from main import app
from database.config import get_session

# ----

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

    client = TestClient(app)  
    yield client  
    app.dependency_overrides.clear()


def test_create_submission_success(client: TestClient):
    response = client.post(
        "/api/submissions", json={"email": "emailTeste@ualg.pt", "name" : "Utilizador de teste"}
    )
    data = response.json()

    print("\n--- ERRO DO FASTAPI ---")
    print(data) # Isto vai revelar o motivo do erro 422!
    print("-----------------------\n")

    assert response.status_code == 201
    assert data["id"] == 1
    assert data["email"] == "emailTeste@ualg.pt"

def test_create_submission_duplicate(client: TestClient):  
    response1 = client.post(
        "/api/submissions", json={"email": "emailTeste@ualg.pt",  "name" : "Utilizador de teste"}
    )
    
    assert response1.status_code == 201

    response2 = client.post(
        "/api/submissions", json={"email": "emailTeste@ualg.pt",  "name" : "Utilizador de segundo teste"}
    )
    
    assert response2.status_code == 409


    assert response2.json()["detail"] == "Duplicate submission!"

def test_create_submission_missing_fields(client: TestClient):  
    response = client.post(
        "/api/submissions", json={}
    )

    assert response.status_code == 422


def test_create_submission_extra_fields(client: TestClient):  
    response = client.post(
        "/api/submissions", json={"id": 10001243, "email": "emailTeste@ualg.pt", "name" : "Utilizador de teste", "created_at": "1231231"}
    )

    assert response.status_code == 422


def test_quantity_submission_success(client: TestClient):
    response = client.post(
        "/api/submissions", json={"email": "emailTeste@ualg.pt",  "name" : "Utilizador de teste"}
    )
    response = client.post(
        "/api/submissions", json={"email": "email2Teste@ualg.pt",  "name" : "Utilizador de teste"}
    )
    response = client.post(
        "/api/submissions", json={"email": "email3Teste@ualg.pt",  "name" : "Utilizador de teste"}
    ) 

    response = client.get(
        "/api/submissions/quantity"
    )

    data = response.json()

    assert data["quantity"] == 3 
