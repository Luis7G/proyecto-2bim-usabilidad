import InstructionsHeader from "../components/InstructionsHeader";
import InstructionsSteps from "../components/InstructionsSteps";
import { Routes, Route } from "react-router-dom";
import SectionDetail from "../components/SectionDetail";
import bgImage from "../assets/images/bg-instructions.png"; // Importa la imagen
import { useNavigate } from "react-router-dom";

function InstructionsPage() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/");
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
      tabIndex="0"
      aria-label="Página de instrucciones"
    >
      <InstructionsHeader homeActivity={handleButtonClick} />
      <main
        tabIndex="0"
        aria-label="Sección principal de instrucciones"
      >
        <Routes>
          <Route path="/" element={<InstructionsSteps />} />
          <Route path="section/:id" element={<SectionDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default InstructionsPage;
