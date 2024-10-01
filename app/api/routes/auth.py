from fastapi import APIRouter
from app.models.auth import EmailRequest


router = APIRouter()


@router.post("/email")
async def simple_send(email: EmailRequest):
    if email.email.split("@")[1] == "inu.ac.kr":
        return {"message": "인천대학교 이메일을 확인했습니다"}

    return {"message": "이메일을 확인했습니다"}
