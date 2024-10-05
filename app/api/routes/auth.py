import secrets
import string
from fastapi import APIRouter
from app.models.auth import UserEmail

DUMMY_EMAILS = ["jhkcompany710@gmail.com"]


def generate_verification_code(length=8) -> str:
    letters = string.digits + string.ascii_letters
    return "".join(secrets.choice(letters) for _ in range(length))


router = APIRouter()


@router.post("/email")
async def verify_email(user_email: UserEmail):
    # TODO: DB 연결 후 중복 이메일 검사 로직 구현
    if user_email.email in DUMMY_EMAILS:
        return {"message": "이미 존재하는 이메일입니다"}

    # TODO: 인증번호를 이메일로 발송
    code = generate_verification_code()
    print(code)

    return {"message": "인증번호가 발송되었습니다"}
