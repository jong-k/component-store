from pydantic import BaseModel, EmailStr


class UserEmail(BaseModel):
    email: EmailStr

    model_config = {
        "json_schema_extra": {
            "example": {
                "email": "sample@gmail.com",
            }
        }
    }
