import datetime
import sqlalchemy as sa
from pydantic import ConfigDict, EmailStr
from sqlmodel import Field, SQLModel
from pydantic import EmailStr
from utils.time import get_current_time

class SubmissionBase(SQLModel):
    email: EmailStr = Field(unique=True, index=True, nullable=False)
    model_config = ConfigDict(extra="forbid")

class Submissions(SubmissionBase, table=True):
    __tablename__ = "submissions"

    id: int | None = Field(default=None, primary_key=True)
    created_at: datetime.datetime = Field(sa_column=sa.Column(sa.DateTime(timezone=True), nullable=False), default_factory=get_current_time)