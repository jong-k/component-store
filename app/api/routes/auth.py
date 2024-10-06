from fastapi import APIRouter
from dotenv import load_dotenv
from pydantic import EmailStr
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
import os
import secrets
import string
from app.models.auth import EmailData

load_dotenv()

GMAIL_ADDRESS: EmailStr = os.getenv("GMAIL_ADDRESS")
GMAIL_PASSWORD = os.getenv("GMAIL_PASSWORD")

conf = ConnectionConfig(
    MAIL_USERNAME=GMAIL_ADDRESS,
    MAIL_PASSWORD=str(GMAIL_PASSWORD),
    MAIL_FROM=str(GMAIL_ADDRESS),
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
)


def generate_verification_code(length=8) -> str:
    letters = string.digits + string.ascii_letters
    return "".join(secrets.choice(letters) for _ in range(length))


router = APIRouter()


@router.post("/send-verification-code")
async def send_verification_code(email_data: EmailData):
    # TODO: DB 연결 후 중복 이메일 검사 로직 구현

    # TODO: 이메일 발송 로직 구현
    verification_code = generate_verification_code()

    message = MessageSchema(
        subject=f"[겁쟁이 추적기] 인증번호: {verification_code}",
        recipients=[email_data.email],
        body=f"겁쟁이 추적기 회원 가입을 위한 이메일 인증번호는 {verification_code} 입니다",
        subtype="plain",
    )

    fm = FastMail(conf)
    await fm.send_message(message)

    return {"message": "인증번호가 발송되었습니다"}
