import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstructionsPage from "./pages/InstructionsPage";
import GamePage from "./pages/QuestionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ruta a HomePage */}
        <Route path="/instructions" element={<InstructionsPage />} /> {/* Ruta a InstructionsPage */}
        <Route path="/game" element={<GamePage />} /> {/* Ruta a GamePage */}
      </Routes>
    </Router>
  );
}

export default App;
