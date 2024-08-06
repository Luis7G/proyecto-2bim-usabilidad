import React from "react";

function MultimediaComponent({ question }) {
  // Función para leer la pregunta y las opciones en voz alta
  const readAloud = () => {
    const synth = window.speechSynthesis;
    const questionText = question.pregunta;
    const optionsText = Object.entries(question.respuestas)
      .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
      .join(", ");
    const utterThis = new SpeechSynthesisUtterance(
      `Pregunta: ${questionText}. Opciones: ${optionsText}`
    );
    synth.speak(utterThis);
  };

  // Transformar la URL del video para incrustar desde un enlace corto de YouTube
  const videoId = question.ayuda.video.split("/").pop(); // Extrae el ID del video del enlace corto
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="flex justify-between items-center">
      <iframe
        className="w-1/3 h-96"
        src={embedUrl}
        title="Video de ayuda"
        allowFullScreen
        tabIndex="0" // Permite la navegación con el teclado
        aria-label="Video de ayuda"
      ></iframe>
      <div className="flex-1 text-center">
        <h2
          className="text-3xl font-bold mb-2"
          tabIndex="0"
          aria-label={`Pregunta: ${question.pregunta}`}
        >
          {question.pregunta}
        </h2>
        <button
          onClick={readAloud}
          aria-label="Leer pregunta y opciones en voz alta"
          tabIndex="0"
          className="text-8xl"
        >
          ▶️
        </button>
      </div>
      <img
        className="w-1/3 h-auto"
        src={question.ayuda.imagen}
        alt="Imagen de ayuda"
        tabIndex="0"
        aria-label="Imagen de ayuda"
      />
    </div>
  );
}

export default MultimediaComponent;
