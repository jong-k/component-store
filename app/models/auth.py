from pydantic import BaseModel, EmailStr


class EmailRequest(BaseModel):
    email: EmailStr

    model_config = {
        "json_schema_extra": {
            "example": {
                "email": "sample@inu.ac.kr",
            }
        }
    }
