from fastapi import FastAPI
from app.api import fortune
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React 주소
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(fortune.router)
