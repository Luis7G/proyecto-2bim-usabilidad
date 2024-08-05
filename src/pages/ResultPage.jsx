import React from "react";
import InstructionsHeader from "../components/InstructionsHeader";
import ResultHeader from "../components/resultsComponents/ResultHeader";
import QuestionCard from "../components/resultsComponents/QuestionCard";
import AnswerCard from "../components/resultsComponents/AnswerCard";
import FeedbackCard from "../components/resultsComponents/FeedbackCard";
import ShareSection from "../components/resultsComponents/ShareSection";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ResultPage({ results, totalPoints, totalTime, totalCorrectAnswers }) {
  const navigate = useNavigate();
  function handleButtonClick() {
    navigate("/");
  }

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
          <QuestionCard
            question={result.question}
            tabIndex="0"
            aria-label={`Pregunta: ${result.question}`}
          />
          <AnswerCard
            answer={result.answer}
            tabIndex="0"
            aria-label={`Respuesta: ${result.answer}`}
          />
          <FeedbackCard
            feedback={result.feedback}
            tabIndex="0"
            aria-label={`Retroalimentación: ${result.feedback}`}
          />
        </div>
        <ShareSection
          tabIndex="0"
          aria-label="Sección para compartir resultados"
        />
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

ResultPage.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      correctAnswer: PropTypes.string.isRequired,
      justification: PropTypes.string.isRequired,
    })
  ).isRequired,
  totalPoints: PropTypes.number.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCorrectAnswers: PropTypes.number.isRequired,
};

export default ResultPage;