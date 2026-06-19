from typing import Annotated
from fastapi import Depends
from pydantic_settings import BaseSettings, SettingsConfigDict
from sqlmodel import SQLModel, Session, create_engine

class Settings(BaseSettings):
    DB_USER: str
    DB_PASSWORD: str
    DB_HOST: str
    DB_PORT: int = 5432
    DB_NAME: str

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    @property
    def database_url(self) -> str:
        return f"postgresql://{self.DB_USER}:{self.DB_PASSWORD}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"


settings = Settings()

engine = create_engine(settings.database_url, echo=True)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]