import React from "react";
import retrocesoIcon from "../../assets/images/retroceso.png";
function ResultComponent({
  isCorrect,
  justification,
  handleNextQuestion,
  handleRetract,
  imageSrc,
  imageAlt,
}) {
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
        {imageSrc && (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="mt-4 mx-auto w-1/3 h-auto"
            tabIndex="0"
            aria-label={imageAlt}
          />
        )}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg text-5xl"
          onClick={handleNextQuestion}
          aria-label="Continuar a la siguiente pregunta"
          tabIndex="0"
        >
          CONTINUAR
        </button>
        <button
          className="bg-gray-500 text-white p-2 rounded-lg text-5xl"
          onClick={handleRetract}
          aria-label="Retroceder y cambiar respuesta"
          tabIndex="0"
        >
          RETROCEDER
        </button>
      </div>
    </div>
  );
}

export default ResultComponent;
