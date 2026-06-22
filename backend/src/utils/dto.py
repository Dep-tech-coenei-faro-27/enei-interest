from sqlmodel import SQLModel

from database.models import SubmissionBase


class SubmissionDTO(SubmissionBase):
    pass

class SubmissionCountDTO(SQLModel):
    quantity: int