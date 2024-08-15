import React, { useState, useEffect } from "react";
import MultimediaComponent from "./Question/MultimediaComponent";
import FormsComponent from "./Question/FormsComponent";
import ResultComponent from "./Question/ResultComponent";
import FinalResult from "./resultsComponents/FinalResult";
import questionsData from "../data/questions.json";
import retrocesoIcon from "../assets/images/retroceso.png";

function QuestionBody() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState([]);
  const [finalTime, setFinalTime] = useState(null);
  const [previousScore, setPreviousScore] = useState(0);
  const [retractMode, setRetractMode] = useState(false);
  const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = useState(false);

  const imageDescriptions = [
    "Descripción de la imagen: La imagen muestra un diagrama de fotosíntesis. La planta absorbe energía del sol, dióxido de carbono del aire y agua del suelo. Produce glucosa para su crecimiento y libera oxígeno al aire.",
    "Descripción de la imagen: La imagen muestra un dibujo simple de un corazón humano en tonos rojos y rosados, destacando sus arterias principales.",
    "Descripción de la imagen: La imagen muestra un microscopio con etiquetas en sus partes principales: oculares, perilla de enfoque, iluminación superior e inferior, dioptrías, cabezal, platina, pinzas y alimentación.",
    "Descripción de la imagen: La imagen muestra un espejo ovalado con un marco dorado ornamentado con detalles florales.",
    "Descripción de la imagen: La imagen muestra un diagrama de una planta de energía, con una chimenea emitiendo humo, un generador conectado a una turbina, y una torre de enfriamiento que libera vapor.",
    "Descripción de la imagen: La imagen muestra una bombilla a la izquierda, de la cual salen dos representaciones de la luz: una onda roja con la etiqueta Luz como onda electromagnética (Huygens) y una flecha amarilla recta con la etiqueta Luz como flujo de partículas (Newton)",
    "Descripción de la imagen: La imagen muestra al sol a la izquierda emitiendo rayos hacia la Tierra, que se encuentra a la derecha. Los rayos son ondulados y se dirigen hacia el planeta, representando la luz solar que alcanza la superficie terrestre. El fondo es azul oscuro con estrellas dispersas.",
    "Descripción de la imagen: La imagen ilustra un árbol con sus partes y los elementos que necesita para realizar la fotosíntesis. En la parte superior hay un sol que representa la luz solar. Las hojas del árbol absorben dióxido de carbono (CO2) y emiten oxígeno (O2). Las raíces absorben agua (H2O) y minerales del suelo, mientras que el tronco y las ramas transportan la glucosa producida por la fotosíntesis.",
    "Descripción de la imagen: La imagen muestra un hígado humano el cuál tiene una forma curva característica y un color rojizo.",
    "Descripción de la imagen: La imagen muestra un dibujo simple de un par de pulmones humanos adorable.",
  ];

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

    if (retractMode) {
      setRetractMode(false);
      if (correct && !hasAnsweredCorrectly) {
        setScore(previousScore + currentQuestion.puntos);
        setHasAnsweredCorrectly(true);
      } else {
        setScore(previousScore);
      }
    } else {
      setPreviousScore(score);
      if (correct && !hasAnsweredCorrectly) {
        setScore(score + currentQuestion.puntos);
        setHasAnsweredCorrectly(true);
      }
    }

    setIsCorrect(correct);

    setResults((prevResults) => [
      ...prevResults,
      {
        question: currentQuestion.pregunta,
        chosenAnswer: currentQuestion.respuestas[selectedOption],
        correctAnswer:
          currentQuestion.respuestas[currentQuestion.respuestaCorrecta],
        justification: currentQuestion.justificación,
        imageSrc: currentQuestion.ayuda.imagen,
        imageAlt: imageDescriptions[currentQuestionIndex],
      },
    ]);

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setHasAnsweredCorrectly(false); // Resetear el estado para la siguiente pregunta
    if (currentQuestionIndex < questionsArray.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setFinalTime(timeElapsed);
      setQuizCompleted(true);
    }
  };

  const handleRetract = () => {
    setShowResult(false);
    setRetractMode(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeElapsed(0);
    setResults([]);
    setFinalTime(null);
    setRetractMode(false);
    setPreviousScore(0);
    setHasAnsweredCorrectly(false);
    setQuizCompleted(false); // Asegura que el quiz no esté completado al reiniciar
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
      <div className="flex-grow w-full max-w-3xl"></div>
      <div className="flex-grow w-full max-w-6xl">
        {showResult ? (
          <ResultComponent
            isCorrect={isCorrect}
            justification={currentQuestion.justificación}
            imageSrc={currentQuestion.ayuda.imagen}
            imageAlt={imageDescriptions[currentQuestionIndex]}
            handleNextQuestion={handleNextQuestion}
            handleRetract={handleRetract}
            retrocesoIcon={retrocesoIcon}
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
        className="w-full max-w-3xl flex justify-around items-center bg-white p-4 shadow-md border-t border-gray-300"
      >
        <span
          tabIndex={0}
          aria-label={`Pregunta: ${currentQuestionIndex + 1} de ${
            questionsArray.length
          }`}
          className="text-2xl font-semibold border-2 border-blue-500 bg-white rounded-full px-4 py-2"
        >
          Pregunta: {currentQuestionIndex + 1}/{questionsArray.length}
        </span>
        <span
          tabIndex={0}
          aria-label={`Tiempo: ${String(Math.floor(timeElapsed / 60)).padStart(
            2,
            "0"
          )}:${String(timeElapsed % 60).padStart(2, "0")}`}
          className="text-2xl font-semibold border-2 border-blue-500 bg-white rounded-full px-4 py-2"
        >
          Tiempo: {String(Math.floor(timeElapsed / 60)).padStart(2, "0")}:
          {String(timeElapsed % 60).padStart(2, "0")}
        </span>
        <span
          tabIndex={0}
          aria-label={`Puntuación: ${score}`}
          className="text-2xl font-semibold border-2 border-blue-500 bg-white rounded-full px-4 py-2"
        >
          Puntuación: {score}
        </span>
      </div>
    </div>
  );
}

export default QuestionBody;
