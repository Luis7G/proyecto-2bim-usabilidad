import InstructionsHeader from "../components/InstructionsHeader";
import ResultHeader from "../components/resultsComponents/ResultHeader";
import QuestionCard from "../components/resultsComponents/QuestionCard";
import AnswerCard from "../components/resultsComponents/AnswerCard";
import FeedbackCard from "../components/resultsComponents/FeedbackCard";
import ShareSection from "../components/resultsComponents/ShareSection";
import { useNavigate } from "react-router-dom";

function ResultPage() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/");
  }

  // Estos datos deberían venir de tu estado o props
  const result = {
    points: 100,
    time: "5:55",
    correctAnswers: 6,
    question:
      "El invento del microscopio ha servido para ver seres u objetos muy pequeños.",
    answer: "Observar",
    feedback:
      "El microscopio es como una lupa gigante que nos permite ver cosas tan pequeñas que nuestros ojos no pueden ver solos. Gracias a él hemos descubierto un mini mundo lleno de bacterias y células invisibles.",
  };

  return (
    <div className="min-h-screen bg-blue-100">
      <InstructionsHeader homeActivity={handleButtonClick} />
      <div className="container mx-auto p-4">
        <ResultHeader
          points={result.points}
          time={result.time}
          correctAnswers={result.correctAnswers}
          tabIndex="0"
          aria-label={`Resultados: Puntos ${result.points}, Tiempo ${result.time}, Respuestas correctas ${result.correctAnswers}`}
        />
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
          tabIndex="0"
          aria-label="Sección de resultados detallados"
        >
          <QuestionCard question={result.question} tabIndex="0" aria-label={`Pregunta: ${result.question}`} />
          <AnswerCard answer={result.answer} tabIndex="0" aria-label={`Respuesta: ${result.answer}`} />
          <FeedbackCard feedback={result.feedback} tabIndex="0" aria-label={`Retroalimentación: ${result.feedback}`} />
        </div>
        <ShareSection tabIndex="0" aria-label="Sección para compartir resultados" />
        <button
          className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
          tabIndex="0"
          aria-label="Ver más resultados"
        >
          Ver más...
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
