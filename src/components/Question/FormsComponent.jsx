import React, { useRef } from "react";

function FormsComponent({ question, handleAnswer, handleNextQuestion }) {
  const buttonsRef = useRef([]);

  const handleKeyDown = (event) => {
    const currentIndex = buttonsRef.current.indexOf(document.activeElement);
    let nextIndex = currentIndex;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % buttonsRef.current.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + buttonsRef.current.length) % buttonsRef.current.length;
    }

    buttonsRef.current[nextIndex].focus();
  };

  return (
    <div>
      {/* Opciones de Respuesta */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {Object.entries(question.respuestas).map(([key, value], index) => (
          <button
            key={key}
            className="bg-blue-500 text-white p-2 rounded-lg text-2xl"
            onClick={() => {
              handleAnswer(key);
              handleNextQuestion();
            }}
            ref={(el) => (buttonsRef.current[index] = el)}
            onKeyDown={handleKeyDown}
            tabIndex="0"
            aria-label={`Respuesta ${key.toUpperCase()}: ${value}`}
          >
            {key.toUpperCase()}. {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FormsComponent;
