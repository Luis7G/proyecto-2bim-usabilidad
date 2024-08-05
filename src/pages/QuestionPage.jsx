import Header from "../components/Header";
import QuestionBody from "../components/QuestionBody";
import QuestionFooter from "../components/QuestionFooter";
import background from "../assets/images/g-home.png";

function QuestionPage() {
  return (
    <div
      className="relative flex flex-col min-h-screen"
      tabIndex="0"
      aria-label="Página de preguntas de Ciencias Naturales"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 z-0"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header name="Ciencias Naturales" />
        <main
          className="flex-grow flex justify-center"
          tabIndex="0"
          aria-label="Cuerpo de la pregunta"
        >
          <QuestionBody />
        </main>
        <footer
          className="flex justify-between items-center"
          tabIndex="0"
          aria-label="Pie de página de la pregunta"
        >
          <QuestionFooter />
        </footer>
      </div>
    </div>
  );
}

export default QuestionPage;
