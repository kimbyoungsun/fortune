# server.py
# 서버 시작시 실행할 파이썬 스크립트
import uvicorn

if __name__ == "__main__":
    uvicorn.run("app.main:app",host="0.0.0.0",port=8000, reload=True)