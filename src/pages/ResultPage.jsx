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
          points={totalPoints}
          time={new Date(totalTime * 1000).toISOString().substr(11, 8)}
          correctAnswers={totalCorrectAnswers}
        />
        <div className="overflow-auto max-h-96 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {results.map((result, index) => (
            <div key={index} className="col-span-3 md:col-span-1">
              <QuestionCard question={result.question} />
              <AnswerCard answer={result.correctAnswer} />
              <FeedbackCard feedback={result.justification} />
            </div>
          ))}
        </div>
        <ShareSection />
        <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 w-full">
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
