import PropTypes from "prop-types";

function QuestionCard({ question }) {
  return (
    <div
      className="bg-blue-600 rounded-lg p-4 mb-4"
      tabIndex="0"
      aria-label="Tarjeta de pregunta"
    >
      <h3
        className="text-white font-bold mb-2"
        tabIndex="0"
        aria-label="Pregunta"
      >
        Pregunta
      </h3>
      <p
        className="text-white"
        tabIndex="0"
        aria-label={`La pregunta es: ${question}`}
      >
        {question}
      </p>
    </div>
  );
}

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
};

export default QuestionCard;
