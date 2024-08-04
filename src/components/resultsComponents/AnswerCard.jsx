import PropTypes from "prop-types";

function AnswerCard({ answer }) {
  return (
    <div className="bg-blue-600 rounded-lg p-4 mb-4">
      <h3 className="text-white font-bold mb-2">Respuesta correcta</h3>
      <p className="text-white">{answer}</p>
    </div>
  );
}

AnswerCard.propTypes = {
  answer: PropTypes.string.isRequired,
};

export default AnswerCard;
