import React from 'react';

function FormsComponent({ question, handleAnswer, handleNextQuestion }) {
  return (
    <div>
      {/* Opciones de Respuesta */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {Object.entries(question.respuestas).map(([key, value]) => (
          <button
            key={key}
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={() => {
              handleAnswer(key);
              handleNextQuestion();
            }}
          >
            {key.toUpperCase()}. {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FormsComponent;
