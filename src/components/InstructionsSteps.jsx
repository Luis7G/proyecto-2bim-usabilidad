import Steps from "./steps";

const InstructionsSteps = () => {
  const instructionsSet1 = [
    {
      title: "1. Imagen de Ayuda",
      description:
        "Haz clic en la imagen para ver pistas y recordar detalles importantes sobre la pregunta.",
    },
    {
      title: "2. Tiempo y Score",
      description:
        "Observa el tiempo restante y tu puntaje actual en la parte superior de la pantalla.",
    },
    {
      title: "3. Audio de Pregunta",
      description:
        "Haz clic en el ícono de audio para escuchar la pregunta en voz alta.",
    },
    {
      title: "4. Pantalla Completa",
      description:
        "Maximiza la pantalla haciendo clic en el ícono de pantalla completa para una mejor experiencia.",
    },
  ];

  const instructionsSet2 = [
    {
      title: "5. Menú de Secciones",
      description:
        "Abre el menú de secciones haciendo clic en el ícono de tres barras para acceder a diferentes partes del Quiz.",
    },
    {
      title: "6. Iniciar Sesión/Registrarse",
      description:
        "Haz clic en el logotipo para iniciar sesión o registrarte y guardar tus puntuaciones.",
    },
    {
      title: "7. Retroalimentación y Resultados Finales",
      description:
        "Después de responder, verás la justificación de la respuesta correcta y si acertaste o no. Al terminar, verás tu puntaje total, tiempo, aciertos y respuestas elegidas.",
    },
    {
      title: "8. Compartir y Reiniciar",
      description:
        "Comparte tus resultados en redes sociales o recarga la página para jugar de nuevo.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-[#0070c2] p-6 rounded-lg mt-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <Steps instructions={instructionsSet1} />
        <Steps instructions={instructionsSet2} />
      </div>
    </div>
  );
};

export default InstructionsSteps;
