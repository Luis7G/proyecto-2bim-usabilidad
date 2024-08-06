// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstructionsPage from "./pages/InstructionsPage";
import ShortcutsPage from "./pages/ShortcutsPage";
import GamePage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";
import ContactPage from "./pages/ContactPage"; // Nueva página de contacto
import CreditsPage from "./pages/CreditsPage"; // Nueva página de créditos

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instructions/*" element={<InstructionsPage />} />
        <Route path="/shortcuts/*" element={<ShortcutsPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/credits" element={<CreditsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
