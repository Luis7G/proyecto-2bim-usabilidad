import React from "react";

function MultimediaComponent({ question }) {
  // Transformar la URL del video para incrustar desde un enlace corto de YouTube
  const videoId = question.ayuda.video.split("/").pop();
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="flex justify-between items-center">
      <iframe
        className="w-1/3 h-96"
        src={embedUrl}
        title="Video de ayuda"
        allowFullScreen
        tabIndex="0"
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
      </div>
    </div>
  );
}

export default MultimediaComponent;
