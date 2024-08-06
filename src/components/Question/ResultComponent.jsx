import React from 'react';

function ResultComponent({ isCorrect, justification, handleNextQuestion }) {
  // Función para leer la justificación en voz alta
  const readJustificationAloud = () => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(justification);
    synth.speak(utterThis);
  };

  return (
    <div className="text-center p-4">
      <h2
        className={`text-2xl font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
        tabIndex="0" // Permite la navegación con el teclado
        aria-label={`Resultado: ${isCorrect ? 'Correcto' : 'Incorrecto'}`}
      >
        {isCorrect ? '¡Correcto!' : 'Incorrecto'}
      </h2>
      <div className="mt-4">
        <h3 className="font-bold" tabIndex="0" aria-label="Justificación">Justificación:</h3>
        <p className="text-lg mt-2" tabIndex="0" aria-label={justification}>
          {justification}
        </p>
        <button
          onClick={readJustificationAloud}
          aria-label="Leer justificación en voz alta"
          tabIndex="0"
        >
          🎤
        </button>
      </div>
      <button
        className="mt-6 bg-blue-500 text-white p-2 rounded-lg"
        onClick={handleNextQuestion}
        aria-label="Continuar a la siguiente pregunta"
        tabIndex="0"
      >
        CONTINUAR
      </button>
    </div>
  );
}

export default ResultComponent;
