import React, { useState, useEffect } from "react";
import MultimediaComponent from "./Question/MultimediaComponent";
import FormsComponent from "./Question/FormsComponent";
import questionsData from "../data/questions.json";

function QuestionBody() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const questionsArray = Object.entries(questionsData.preguntas).map(
    ([key, value]) => ({
      id: key,
      ...value,
    })
  );

  const currentQuestion = questionsArray[currentQuestionIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.respuestaCorrecta) {
      setScore(score + currentQuestion.puntos);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsArray.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz terminado! Puntuación final: ${score}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-between items-center">
      <div className="flex-grow w-full max-w-3xl p-4">
        <MultimediaComponent question={currentQuestion} />
        <FormsComponent
          question={currentQuestion}
          handleAnswer={handleAnswer}
          handleNextQuestion={handleNextQuestion}
        />
      </div>
      <div className="w-full max-w-3xl flex justify-around items-center bg-white p-4 shadow-md border-t border-gray-300">
        <span className="text-lg font-semibold border-2 border-blue-500 bg-white rounded-full px-4 py-2">
          Pregunta: {currentQuestionIndex + 1}/{questionsArray.length}
        </span>
        <span className="text-lg font-semibold border-2 border-blue-500 bg-white rounded-full px-4 py-2">
          Tiempo: {String(Math.floor(timeElapsed / 60)).padStart(2, '0')}:{String(timeElapsed % 60).padStart(2, '0')}
        </span>
        <span className="text-lg font-semibold border-2 border-blue-500 bg-white rounded-full px-4 py-2">
          Puntuación: {score}
        </span>
      </div>
    </div>
  );
}

export default QuestionBody;

