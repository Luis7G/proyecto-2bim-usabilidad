// components/steps/Step.jsx
import PropTypes from "prop-types"; // Importa PropTypes
import MaximizeIcon from "../icons/maximizeButton"; // Asegúrate de que este icono SVG esté correctamente importado

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

// Añade validación de propiedades para InfoCard
InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Step = ({ instructions }) => (
  <div className="flex-1 flex flex-col space-y-4">
    {instructions.map((instruction, index) => (
      <InfoCard
        key={index}
        title={instruction.title}
        description={instruction.description}
      />
    ))}
  </div>
);

// Añade validación de propiedades con PropTypes
Step.propTypes = {
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Step;
