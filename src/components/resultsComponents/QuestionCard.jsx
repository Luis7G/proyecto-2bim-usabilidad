import PropTypes from "prop-types";

function QuestionCard({ question }) {
    return (
      <div className="bg-blue-600 rounded-lg p-4 mb-4">
        <h3 className="text-white font-bold mb-2">Pregunta</h3>
        <p className="text-white">{question}</p>
      </div>
    );
  }

    QuestionCard.propTypes = {
        question: PropTypes.string.isRequired
    };
export default QuestionCard;