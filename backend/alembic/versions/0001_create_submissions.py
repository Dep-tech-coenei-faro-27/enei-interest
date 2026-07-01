from alembic import op
import sqlalchemy as sa


revision = "0001_create_submissions"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "submissions",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("email", sa.String(), nullable=False),
        sa.Column("name", sa.String(), nullable=False),
        sa.Column("consent", sa.Boolean(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_submissions_email", "submissions", ["email"], unique=True)


def downgrade() -> None:
    op.drop_index("ix_submissions_email", table_name="submissions")
    op.drop_table("submissions")
