import React, { useEffect } from "react";

function ResultComponent({ isCorrect, justification, handleNextQuestion }) {
  useEffect(() => {
    const readJustificationAloud = () => {
      const synth = window.speechSynthesis;
      const utterThis = new SpeechSynthesisUtterance(justification);
      synth.speak(utterThis);
    };

    const handleKeyDown = (event) => {
      if (event.key === "a" || event.key === "A") {
        readJustificationAloud();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [justification]);

  return (
    <div className="text-center p-4">
      <h2
        className={`text-7xl font-bold ${
          isCorrect ? "text-green-500" : "text-red-500"
        }`}
        tabIndex="0" // Permite la navegación con el teclado
        aria-label={`Resultado: ${isCorrect ? "Correcto" : "Incorrecto"}`}
      >
        {isCorrect ? "¡Correcto!" : "Incorrecto"}
      </h2>
      <div className="mt-4">
        <h3
          className="font-bold text-4xl"
          tabIndex="0"
          aria-label="Justificación"
        >
          Justificación:
        </h3>
        <p className="text-3xl mt-2" tabIndex="0" aria-label={justification}>
          {justification}
        </p>
        <button
          onClick={() => {
            const synth = window.speechSynthesis;
            const utterThis = new SpeechSynthesisUtterance(justification);
            synth.speak(utterThis);
          }}
          aria-label="Leer justificación en voz alta"
          tabIndex="0"
          className="text-8xl"
        >
          ▶️
        </button>
      </div>
      <button
        className="mt-6 bg-blue-500 text-white p-2 rounded-lg text-5xl"
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
