import secrets
import string
from fastapi import APIRouter
from app.models.auth import EmailData


def generate_verification_code(length=8) -> str:
    letters = string.digits + string.ascii_letters
    return "".join(secrets.choice(letters) for _ in range(length))


router = APIRouter()


@router.post("/send-verification-code")
async def send_verification_code(email_data: EmailData):
    # TODO: DB 연결 후 중복 이메일 검사 로직 구현

    # TODO: 이메일 발송 로직 구현

    return {"message": "인증번호가 발송되었습니다"}
