import React from "react";
import PropTypes from "prop-types";

function AnswerCard({ answer, title }) {
  return (
    <div
      className="bg-blue-600 rounded-lg p-4 mb-4"
      tabIndex="0"
      aria-label="Tarjeta de respuesta correcta"
    >
      <h3
        className="text-white font-bold mb-2"
        tabIndex="0"
        aria-label="Respuesta correcta"
      >
        {title}
      </h3>
      <p
        className="text-white"
        tabIndex="0"
        aria-label={`La respuesta es ${answer}`}
      >
        {answer}
      </p>
    </div>
  );
}

AnswerCard.propTypes = {
  answer: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AnswerCard;
