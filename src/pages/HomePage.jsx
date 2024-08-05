import Header from "../components/Header";
import HomeBody from "../components/homeBody";
import Footer from "../components/FooterPuntuation";
import background from "../assets/images/g-home.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/instructions");
  }

  return (
    <div
      className="relative flex flex-col min-h-screen"
      tabIndex="0"
      aria-label="Página de inicio de Educaplay"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 z-0"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden="true"
      ></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header name="EDUCAPLAY" />
        <main
          className="flex-grow flex justify-center"
          tabIndex="0"
          aria-label="Cuerpo de la página principal"
        >
          <HomeBody handleButtonClick={handleButtonClick} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
