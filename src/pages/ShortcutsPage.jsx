import InstructionsHeader from "../components/InstructionsHeader";
import Shortcuts from "../components/ShortcutsSteps";
import ShortcutSectionDetail from "../components/ShortcutSectionDetail";
import { Routes, Route } from "react-router-dom";
import bgImage from "../assets/images/bg-instructions.png";
import { useNavigate } from "react-router-dom";

const ShortcutsPage = () => {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/game");
  }

  function homeHandleButtonClick() {
    navigate("/");
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
      tabIndex="0"
      aria-label="Página de accesos directos"
    >
      <InstructionsHeader homeActivity={homeHandleButtonClick} />
      <main
        tabIndex="0"
        aria-label="Sección de instrucciones de accesos directos"
      >
        <Routes>
          <Route
            path="/"
            element={<Shortcuts handleButtonClick={handleButtonClick} />}
          />
          <Route path="section/:id" element={<ShortcutSectionDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default ShortcutsPage;
