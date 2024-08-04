// import Header from "../components/Header";
import HomeBody from "../components/homeBody";
import Footer from "./../components/FooterPuntuation";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center">
      <HomeBody/>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
