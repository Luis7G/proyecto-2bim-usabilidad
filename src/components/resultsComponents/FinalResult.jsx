import React from "react";
import PropTypes from "prop-types";
import ResultHeader from "./ResultHeader";
import QuestionCard from "./QuestionCard";
import AnswerCard from "./AnswerCard";
import FeedbackCard from "./FeedbackCard";
import ShareSection from "./ShareSection";

function FinalResult({
  results,
  totalPoints,
  totalTime,
  totalCorrectAnswers,
  onRestartQuiz,
}) {
  return (
    <div className="p-4">
      <ResultHeader
        points={totalPoints}
        time={totalTime}
        correctAnswers={totalCorrectAnswers}
      />
      <div className="overflow-auto max-h-[440px]">
        {results.map((result, index) => (
          <div
            key={index}
            className={`text-2xl p-4 rounded-lg mb-4 shadow-md ${
              result.chosenAnswer === result.correctAnswer
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            <QuestionCard question={result.question} />
            <AnswerCard
              answer={result.chosenAnswer}
              title="Respuesta Elegida"
            />
            <FeedbackCard feedback={result.justification} />
          </div>
        ))}
      </div>
      <div className="w-full">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full mb-4 mt-4 text-3xl"
          onClick={onRestartQuiz}
        >
          Reiniciar Quiz
        </button>
      </div>

      <ShareSection />
    </div>
  );
}

FinalResult.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      chosenAnswer: PropTypes.string.isRequired,
      correctAnswer: PropTypes.string.isRequired,
      justification: PropTypes.string.isRequired,
    })
  ).isRequired,
  totalPoints: PropTypes.number.isRequired,
  totalTime: PropTypes.string.isRequired,
  totalCorrectAnswers: PropTypes.number.isRequired,
  onRestartQuiz: PropTypes.func.isRequired,
};

export default FinalResult;
