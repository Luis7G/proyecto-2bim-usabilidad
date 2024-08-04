import InstructionsHeader from "../components/InstructionsHeader";
import InstructionsSteps from "../components/InstructionsSteps";
import { Routes, Route } from "react-router-dom";
import SectionDetail from "../components/SectionDetail";
import bgImage from "../assets/images/bg-instructions.png"; // Importa la imagen

function InstructionsPage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <InstructionsHeader />
      <Routes>
        <Route path="/" element={<InstructionsSteps />} />
        <Route path="section/:id" element={<SectionDetail />} />
      </Routes>
    </div>
  );
}

export default InstructionsPage;
