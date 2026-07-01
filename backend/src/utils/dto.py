import datetime

from sqlmodel import SQLModel

from database.models import SubmissionBase


class SubmissionDTO(SubmissionBase):
    pass


class SubmissionReadDTO(SQLModel):
    id: int
    name: str
    email: str
    consent: bool
    created_at: datetime.datetime


class SubmissionCountDTO(SQLModel):
    quantity: int


class HealthDTO(SQLModel):
    status: str
