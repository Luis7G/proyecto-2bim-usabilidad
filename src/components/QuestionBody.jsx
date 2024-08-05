import React, { useState, useEffect } from "react";
import MultimediaComponent from "./Question/MultimediaComponent";
import FormsComponent from "./Question/FormsComponent";
import questionsData from "../data/questions.json";

function QuestionBody() {
  // Estado para manejar la pregunta actual, puntaje, y tiempo
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Convertir las preguntas a un array para un acceso más fácil
  const questionsArray = Object.entries(questionsData.preguntas).map(
    ([key, value]) => ({
      id: key,
      ...value,
    })
  );

  const currentQuestion = questionsArray[currentQuestionIndex];

  // Actualizar el tiempo transcurrido
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []); // Solo una vez al cargar el componente

  // Función para manejar la selección de una opción
  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.respuestaCorrecta) {
      setScore(score + currentQuestion.puntos);
    }
  };

  // Función para avanzar a la siguiente pregunta
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsArray.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz terminado
      alert(`Quiz terminado! Puntuación final: ${score}`);
    }
  };

  return (
    <div>
      <MultimediaComponent question={currentQuestion} />
      <FormsComponent
        question={currentQuestion}
        handleAnswer={handleAnswer}
        handleNextQuestion={handleNextQuestion}
      />
      <div className="mt-4 flex justify-between items-center">
        <span>
          Pregunta: {currentQuestionIndex + 1}/{questionsArray.length}
        </span>
        <span>Tiempo: {timeElapsed}s</span>
        <span>Puntuación: {score}</span>
      </div>
    </div>
  );
}

export default QuestionBody;
