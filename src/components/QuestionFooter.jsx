function QuestionFooter({ handlePrevious, handleNext }) {
  return (
    <footer className="flex justify-between p-4 bg-gray-200">
      <button
        onClick={handlePrevious}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        tabIndex="0"
        aria-label="Ir a la pregunta anterior"
      >
        Anterior
      </button>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        tabIndex="0"
        aria-label="Ir a la siguiente pregunta"
      >
        Siguiente
      </button>
    </footer>
  );
}

export default QuestionFooter;
