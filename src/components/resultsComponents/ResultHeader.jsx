import PropTypes from "prop-types";

function ResultHeader({ points, time, correctAnswers }) {
  return (
    <div className="bg-blue-300 rounded-full p-2 flex justify-between items-center mb-4">
      <span className="text-2xl font-bold text-white">Tu Resultado:</span>
      <div className="flex space-x-2">
        <span className="bg-teal-600 text-white rounded-full px-3 py-1">
          Puntos: {points}
        </span>
        <span className="bg-teal-600 text-white rounded-full px-3 py-1">
          Tiempo: {time}
        </span>
        <span className="bg-teal-600 text-white rounded-full px-3 py-1">
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
