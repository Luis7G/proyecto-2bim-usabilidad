import PropTypes from "prop-types"; // Importa PropTypes
import MaximizeIcon from "./icons/maximizeButton"; // Importa el icono SVG

const InfoCard = ({ title, description }) => (
  <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-md mb-4">
    <div>
      <h2 className="text-black font-bold">{title}</h2>
      <p className="text-black">{description}</p>
    </div>
    <div className="bg-white rounded-full p-2 flex items-center justify-center shadow-lg w-10 h-10">
      <MaximizeIcon />
    </div>
  </div>
);

// Agrega validación de propiedades
InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const InfoSection = () => {
  return (
    <div className="max-w-4xl mx-auto bg-[#0070c2] p-6 rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8">
      <div className="flex-1">
        <InfoCard
          title="1. Imagen de Ayuda"
          description="Haz clic en la imagen para ver pistas y recordar detalles importantes sobre la pregunta."
        />
        <InfoCard
          title="2. Tiempo y Score"
          description="Observa el tiempo restante y tu puntaje actual en la parte superior de la pantalla."
        />
        <InfoCard
          title="3. Audio de Pregunta"
          description="Haz clic en el ícono de audio para escuchar la pregunta en voz alta."
        />
        <InfoCard
          title="4. Pantalla Completa"
          description="Maximiza la pantalla haciendo clic en el ícono de pantalla completa para una mejor experiencia."
        />
      </div>
    </div>
  );
};

export default InfoSection;
