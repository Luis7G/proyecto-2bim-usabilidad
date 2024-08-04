import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import MaximizeButton from "./icons/maximizeButton";

const ShortcutCard = ({ title, description, onMaximize }) => (
  <div className="bg-white rounded-lg p-4 shadow-md mb-4 flex justify-between items-start">
    <div>
      <h2 className="text-black font-bold">{title}</h2>
      <p className="text-black mt-1 text-sm text-justify">{description}</p>
    </div>
    <div
      className="bg-white rounded-full p-1 flex items-center justify-center shadow-lg w-8 h-8 ml-2 cursor-pointer"
      onClick={onMaximize}
    >
      <MaximizeButton className="w-5 h-5 text-[#0070c2]" />
    </div>
  </div>
);

const Shortcuts = () => {
  const navigate = useNavigate();

  const shortcuts = [
    {
      id: 1,
      title: "1. Imagen de Ayuda",
      description: "Presiona 'H' para mostrar/ocultar la imagen de ayuda.",
    },
    {
      id: 2,
      title: "2. Audio de Pregunta",
      description: "Presiona 'A' para reproducir el audio de la pregunta.",
    },
    {
      id: 3,
      title: "3. Responder Pregunta",
      description:
        "Presiona las teclas numéricas '1', '2', '3' o '4' para seleccionar la opción de respuesta correspondiente.",
    },
    {
      id: 4,
      title: "4. Regresar al Menú Principal",
      description: "Presiona 'Esc' para regresar al menú principal.",
    },
  ];

  const handleMaximize = (id) => {
    navigate(`/shortcuts/section/${id}`); // Navega a la vista detallada del shortcut
  };

  return (
    <>
      <div className="bg-[#568CDD] rounded-full p-4 mb-6 mt-6">
        <h1 className="text-white text-3xl font-bold flex justify-center">
          Accesos Directos
        </h1>
      </div>

      <div className="max-w-4xl mx-auto bg-[#0070c2] p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {shortcuts.map((shortcut) => (
            <ShortcutCard
              key={shortcut.id}
              title={shortcut.title}
              description={shortcut.description}
              onMaximize={() => handleMaximize(shortcut.id)}
            />
          ))}
        </div>
        <button className="w-full bg-[#568CDD] text-white font-bold py-2 px-4 rounded mt-6">
          CONTINUAR
        </button>
      </div>
    </>
  );
};

ShortcutCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onMaximize: PropTypes.func.isRequired,
};

export default Shortcuts;
