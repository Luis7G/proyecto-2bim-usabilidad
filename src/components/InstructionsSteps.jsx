import { useNavigate } from "react-router-dom";
import MaximizeButton from "./icons/maximizeButton";
import PropTypes from "prop-types";

const InfoCard = ({ title, description, onMaximize }) => (
  <div className="bg-white rounded-lg p-4 shadow-md mb-4 flex justify-between items-start">
    <div>
      <h2 className="text-black font-bold">{title}</h2>
      <p className="text-black mt-1 text-sm text-justify">{description}</p>
    </div>
    <div
      className="bg-white rounded-full p-1 flex items-center justify-center shadow-lg w-8 h-8 ml-2 cursor-pointer"
      onClick={onMaximize} // Navega a la sección maximizada
    >
      <MaximizeButton className="w-5 h-5 text-[#0070c2]" />
    </div>
  </div>
);

const InstructionsSteps = () => {
  const navigate = useNavigate();

  const instructions = [
    {
      id: 1,
      title: "1. Tiempo y Score",
      description:
        "Observa el tiempo restante y tu puntaje actual en la parte superior de la pantalla.",
    },
    {
      id: 2,
      title: "2. Audio de Pregunta",
      description:
        "Haz clic en el ícono de audio para escuchar la pregunta en voz alta.",
    },
    {
      id: 3,
      title: "3. Menú de Secciones",
      description:
        "Abre el menú de secciones haciendo clic en el ícono de tres barras para acceder a diferentes partes del Quiz.",
    },
    {
      id: 4,
      title: "4. Retroalimentación y Resultados Finales",
      description:
        "Después de responder, verás la justificación de la respuesta correcta y si acertaste o no. Al terminar, verás tu puntaje total, tiempo, aciertos y respuestas elegidas.",
    },
  ];

  const handleMaximize = (id) => {
    navigate(`/instructions/section/${id}`); // Navega a la ruta de la sección específica
  };

  const handleContinue = () => {
    navigate("/shortcuts"); // Navega a la página de shortcuts
  };

  return (
    <>
      <div className="bg-[#568CDD] rounded-full p-4 mb-6 mt-6">
        <h1 className="text-white text-3xl font-bold flex justify-center">
          Manual de usuario para la actividad
        </h1>
      </div>

      <div className="max-w-4xl mx-auto bg-[#0070c2] p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {instructions.map((instruction) => (
            <InfoCard
              key={instruction.id}
              title={instruction.title}
              description={instruction.description}
              onMaximize={() => handleMaximize(instruction.id)}
            />
          ))}
        </div>
        <button
          className="w-full bg-[#568CDD] text-white font-bold py-2 px-4 rounded mt-6"
          onClick={handleContinue} // Añade el evento onClick
        >
          CONTINUAR
        </button>
      </div>
    </>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onMaximize: PropTypes.func.isRequired,
};

export default InstructionsSteps;
