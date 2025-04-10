// src/api/fortuneApi.js
import axios from "axios";

export const getFortune = async () => {
  const response = await axios.get("http://localhost:8000/fortune");
  return response.data;
};
