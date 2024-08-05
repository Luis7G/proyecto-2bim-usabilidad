import PropTypes from "prop-types";

function FeedbackCard({ feedback }) {
  return (
    <div
      className="bg-blue-600 rounded-lg p-4 mb-4"
      tabIndex="0"
      aria-label="Tarjeta de retroalimentación"
    >
      <h3
        className="text-white font-bold mb-2"
        tabIndex="0"
        aria-label="Retroalimentación"
      >
        Retroalimentación
      </h3>
      <p
        className="text-white"
        tabIndex="0"
        aria-label={`La retroalimentación es ${feedback}`}
      >
        {feedback}
      </p>
    </div>
  );
}

FeedbackCard.propTypes = {
  feedback: PropTypes.string.isRequired,
};

export default FeedbackCard;
