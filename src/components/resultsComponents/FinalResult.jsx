import React from "react";
import PropTypes from "prop-types";
import ResultHeader from "./ResultHeader";
import QuestionCard from "./QuestionCard";
import AnswerCard from "./AnswerCard";
import FeedbackCard from "./FeedbackCard";
import ShareSection from "./ShareSection";

function FinalResult({ results, totalPoints, totalTime, totalCorrectAnswers }) {
  return (
    <div className="p-4">
      <ResultHeader
        points={totalPoints}
        time={totalTime}
        correctAnswers={totalCorrectAnswers}
      />
      <div className="overflow-auto max-h-96">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-blue-700 p-4 rounded-lg mb-4 shadow-md"
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
};

export default FinalResult;
