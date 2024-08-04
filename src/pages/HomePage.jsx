import Header from "../components/Header";
import HomeBody from "../components/homeBody";
import Footer from "../components/FooterPuntuation";
import background from "../assets/images/g-home.png";

function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 z-0"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header name="EDUCAPLAY" />
        <div className="flex-grow flex justify-center">
          <HomeBody />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
