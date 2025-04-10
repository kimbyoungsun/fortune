from fastapi import APIRouter

router = APIRouter()

@router.get("/fortune")
def get_fortune():
    return {"message": "오늘의 운세는 대박!"}
