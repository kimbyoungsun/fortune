// src/pages/FortunePage.jsx
import React from "react";
// import "./FortunePage.css"; // 스타일 분리
import "../styles/FortunePage.css";

function FortunePage() {
  return (
    <div className="fortune-container">
      <div className="overlay">
        <h1 className="title">🔮 오늘의 운세</h1>
        <p className="subtitle">
          마녀 누나가 수정구로 당신의 운명을 봐드립니다...
        </p>
        <button className="fortune-button">운세 보기</button>
      </div>
    </div>
  );
}

export default FortunePage;
