// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FortunePage from "./pages/FortunePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/fortune" element={<FortunePage />} />
      </Routes>
    </Router>
  );
}

export default App;
