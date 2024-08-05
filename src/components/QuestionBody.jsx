import React, { useState, useEffect } from 'react';
import MultimediaComponent from './Question/MultimediaComponent';
import FormsComponent from './Question/FormsComponent';
import ResultComponent from './Question/ResultComponent';
import questionsData from '../data/questions.json';

function QuestionBody() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questionsArray = Object.entries(questionsData.preguntas).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const currentQuestion = questionsArray[currentQuestionIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (selectedOption) => {
    const correct = selectedOption === currentQuestion.respuestaCorrecta;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + currentQuestion.puntos);
    }
    setShowResult(true); // Mostrar el resultado
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    if (currentQuestionIndex < questionsArray.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz terminado! Puntuación final: ${score}`);
    }
  };

  return (
    <div>
      {showResult ? (
        <ResultComponent
          isCorrect={isCorrect}
          justification={currentQuestion.justificación}
          handleNextQuestion={handleNextQuestion}
        />
      ) : (
        <>
          <MultimediaComponent question={currentQuestion} />
          <FormsComponent
            question={currentQuestion}
            handleAnswer={handleAnswer}
          />
        </>
      )}
      <div className="mt-4 flex justify-between items-center">
        <span>Pregunta: {currentQuestionIndex + 1}/{questionsArray.length}</span>
        <span>Tiempo: {timeElapsed}s</span>
        <span>Puntuación: {score}</span>
      </div>
    </div>
  );
}

export default QuestionBody;
