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
        <span>
          Pregunta: {currentQuestionIndex + 1}/{questionsArray.length}
        </span>
        <span>
          Tiempo: {new Date(timeElapsed * 1000).toISOString().substr(11, 8)}
        </span>
        <span>Puntuación: {score}</span>
      </div>
    </div>
  );
}

export default QuestionBody;
