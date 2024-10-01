from fastapi import APIRouter
from app.models.auth import EmailRequest


router = APIRouter()


@router.post("/email")
async def simple_send(email: EmailRequest):
    return {"message": email.email}
