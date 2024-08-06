import PropTypes from "prop-types";

function ResultHeader({ points, time, correctAnswers }) {
  return (
    <div
      className="bg-blue-300 rounded-full p-2 flex justify-between items-center mb-4"
      tabIndex="0"
      aria-label="Encabezado de resultados"
    >
      <span
        className="text-3xl font-bold text-white"
        tabIndex="0"
        aria-label="Tu Resultado"
      >
        Tu Resultado:
      </span>
      <div className="flex space-x-2 text-2xl">
        <span
          className="bg-teal-600 text-white rounded-full px-3 py-1"
          tabIndex="0"
          aria-label={`Puntos obtenidos: ${points}`}
        >
          Puntos: {points}
        </span>
        <span
          className="bg-teal-600 text-white rounded-full px-3 py-1"
          tabIndex="0"
          aria-label={`Tiempo utilizado: ${time}`}
        >
          Tiempo: {time}
        </span>
        <span
          className="bg-teal-600 text-white rounded-full px-3 py-1"
          tabIndex="0"
          aria-label={`Número de respuestas correctas: ${correctAnswers}`}
        >
          Aciertos: {correctAnswers}
        </span>
      </div>
    </div>
  );
}

ResultHeader.propTypes = {
  points: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  correctAnswers: PropTypes.number.isRequired,
};

export default ResultHeader;
