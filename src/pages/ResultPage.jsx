import InstructionsHeader from "../components/InstructionsHeader";
import ResultHeader from "../components/resultsComponents/ResultHeader";
import QuestionCard from "../components/resultsComponents/QuestionCard";
import AnswerCard from "../components/resultsComponents/AnswerCard";
import FeedbackCard from "../components/resultsComponents/FeedbackCard";
import ShareSection from "../components/resultsComponents/ShareSection";

function ResultPage() {
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
      <InstructionsHeader />
      <div className="container mx-auto p-4">
        <ResultHeader
          points={result.points}
          time={result.time}
          correctAnswers={result.correctAnswers}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <QuestionCard question={result.question} />
          <AnswerCard answer={result.answer} />
          <FeedbackCard feedback={result.feedback} />
        </div>
        <ShareSection />
        <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 w-full">
          Ver más...
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
