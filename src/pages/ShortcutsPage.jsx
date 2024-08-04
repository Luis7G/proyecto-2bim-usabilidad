// pages/ShortcutsPage.jsx
import InstructionsHeader from "../components/InstructionsHeader";
import Shortcuts from "../components/ShortcutsSteps";
import ShortcutSectionDetail from "../components/ShortcutSectionDetail";
import { Routes, Route } from "react-router-dom";
import bgImage from "../assets/images/bg-instructions.png";
import { useNavigate } from "react-router-dom";
const ShortcutsPage = () => {
  const Navigate = useNavigate();
  function handleButtonClick() {
    Navigate("/game");
  }
  function HomehandleButtonClick() {
    Navigate("/");
  }
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <InstructionsHeader homeActivity={HomehandleButtonClick}/>
      <Routes>
        <Route path="/" element={<Shortcuts handleButtonClick={handleButtonClick}/>} />
        <Route path="section/:id" element={<ShortcutSectionDetail />} />
      </Routes>
    </div>
  );
};

export default ShortcutsPage;
