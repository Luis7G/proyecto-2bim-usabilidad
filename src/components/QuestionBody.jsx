import React, { useState, useEffect } from "react";
import MultimediaComponent from "./Question/MultimediaComponent";
import FormsComponent from "./Question/FormsComponent";
import ResultComponent from "./Question/ResultComponent";
import FinalResult from "./resultsComponents/FinalResult";
import questionsData from "../data/questions.json";

function QuestionBody() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState([]);
  const [finalTime, setFinalTime] = useState(null);

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
    const correct = selectedOption === currentQuestion.respuestaCorrecta;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + currentQuestion.puntos);
    }
    setResults((prevResults) => [
      ...prevResults,
      {
        question: currentQuestion.pregunta,
        chosenAnswer: currentQuestion.respuestas[selectedOption],
        correctAnswer:
          currentQuestion.respuestas[currentQuestion.respuestaCorrecta],
        justification: currentQuestion.justificación,
      },
    ]);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    if (currentQuestionIndex < questionsArray.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setFinalTime(timeElapsed); // Guardar el tiempo final
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeElapsed(0);
    setResults([]);
    setFinalTime(null);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <FinalResult
        results={results}
        totalPoints={score}
        totalTime={new Date(finalTime * 1000).toISOString().substr(11, 8)}
        totalCorrectAnswers={
          results.filter((r) => r.chosenAnswer === r.correctAnswer).length
        }
        onRestartQuiz={handleRestartQuiz}
      />
    );
  }

  return (
    <div className="flex flex-col justify-between items-center">
        <div className='flex-grow w-full max-w-3xl'>
            
        </div>
      <div className="flex-grow w-full max-w-3xl">
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
      </div>

      <div 
      tabIndex={0}
        aria-label="Sección de preguntas"
      className="w-full max-w-3xl flex justify-around items-center bg-white p-4 shadow-md border-t border-gray-300">
        <span 
        tabIndex={0}
            aria-label={`Pregunta: ${currentQuestionIndex + 1} de ${questionsArray.length}`}
        className="text-lg font-semibold border-2 border-blue-500 bg-white rounded-full px-4 py-2">
          Pregunta: {currentQuestionIndex + 1}/{questionsArray.length}
        </span>
        <span 
        tabIndex={0}
            aria-label={`Tiempo: ${String(Math.floor(timeElapsed / 60)).padStart(2, '0')}:${String(timeElapsed % 60).padStart(2, '0')}`}
        className="text-lg font-semibold border-2 border-blue-500 bg-white rounded-full px-4 py-2">
          Tiempo: {String(Math.floor(timeElapsed / 60)).padStart(2, '0')}:{String(timeElapsed % 60).padStart(2, '0')}
        </span>
        <span 
        tabIndex={0}
            aria-label={`Puntuación: ${score}`}
        className="text-lg font-semibold border-2 border-blue-500 bg-white rounded-full px-4 py-2">
          Puntuación: {score}
        </span>
      </div>
    </div>
  );
}

export default QuestionBody;

