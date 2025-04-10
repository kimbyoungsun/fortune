// src/pages/FortunePage.js
import React, { useEffect, useState } from "react";
import { getFortune } from "../api/fortuneApi";

function FortunePage() {
  const [fortune, setFortune] = useState(null);

  useEffect(() => {
    getFortune().then((data) => {
      setFortune(data.message); // 백엔드에서 {"message": "운세내용"} 이니까
    });
  }, []);

  return (
    <div style={{ padding: "20px", fontSize: "24px" }}>
      <h2>✨ 오늘의 운세 ✨</h2>
      {fortune ? <p>{fortune}</p> : <p>불러오는 중...</p>}
    </div>
  );
}

export default FortunePage;
