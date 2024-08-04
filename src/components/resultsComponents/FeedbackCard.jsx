import PropTypes from "prop-types";

function FeedbackCard({ feedback }) {
    return (
      <div className="bg-blue-600 rounded-lg p-4 mb-4">
        <h3 className="text-white font-bold mb-2">Retroalimentación</h3>
        <p className="text-white">{feedback}</p>
      </div>
    );
  }

  FeedbackCard.propTypes = {
    feedback: PropTypes.string.isRequired,
  };

export default FeedbackCard;