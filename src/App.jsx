import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstructionsPage from "./pages/InstructionsPage";
import ShortcutsPage from "./pages/ShortcutsPage"; // Importa la nueva página
import GamePage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ruta a HomePage */}
        <Route path="/instructions/*" element={<InstructionsPage />} />{" "}
        <Route path="/shortcuts/*" element={<ShortcutsPage />} />{" "}
        <Route path="/game" element={<GamePage />} /> {/* Ruta a GamePage */}
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
