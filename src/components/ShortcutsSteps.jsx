import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import MaximizeButton from "./icons/maximizeButton";

const ShortcutCard = ({ title, description, onMaximize }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onMaximize(); // Ejecuta la acción de maximizar al presionar Enter
    }
  };

  return (
    <div
      className="bg-white rounded-lg p-4 shadow-md mb-4 flex justify-between items-start"
      tabIndex="0"
      aria-label={`Acceso directo: ${title}`}
    >
      <div>
        <h2
          className="text-black font-bold text-xl"
          tabIndex="0"
          aria-label={title}
        >
          {title}
        </h2>
        <p
          className="text-black mt-1 text-base text-justify"
          tabIndex="0"
          aria-label={`Descripción: ${description}`}
        >
          {description}
        </p>
      </div>
      <div
        className="bg-white rounded-full p-1 flex items-center justify-center shadow-lg w-8 h-8 ml-2 cursor-pointer"
        onClick={onMaximize}
        onKeyDown={handleKeyDown} // Maneja la tecla Enter
        tabIndex="0"
        aria-label="Maximizar acceso directo"
        role="button"
      >
        <MaximizeButton
          className="w-24 h-auto text-[#0070c2]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

const Shortcuts = ({ handleButtonClick }) => {
  const navigate = useNavigate();

  const shortcuts = [
    {
      id: 1,
      title: "1. Audio de Pregunta",
      description: "Presiona la tecla 'A' para reproducir el audio de la pregunta.",
    },
    {
      id: 2,
      title: "2. Responder Pregunta",
      description:
        "Presiona las teclas numéricas '1', '2', '3' o '4' para seleccionar la opción de respuesta correspondiente.",
    },
    {
      id: 3,
      title: "3. Navegar entre Respuestas",
      description:
        "Usa las flechas del teclado 'Arriba', 'Abajo', 'Derecha' e 'Izquierda' para moverte entre las opciones de respuesta.",
    },
  ];

  const handleMaximize = (id) => {
    navigate(`/shortcuts/section/${id}`); // Navega a la vista detallada del shortcut
  };

  return (
    <>
      <div
        className="bg-[#568CDD] rounded-full p-4 mb-6 mt-6"
        tabIndex="0"
        aria-label="Encabezado de accesos directos"
      >
        <h1
          className="text-white text-5xl font-bold flex justify-center"
          tabIndex="0"
          aria-label="Accesos Directos"
        >
          Accesos Directos
        </h1>
      </div>

      <div
        className="max-w-4xl mx-auto bg-[#0070c2] p-6 rounded-lg"
        tabIndex="0"
        aria-label="Lista de accesos directos"
      >
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
        <button
          onClick={handleButtonClick}
          className="w-full bg-[#568CDD] text-white font-bold py-2 px-4 rounded mt-6 text-4xl"
          tabIndex="0"
          aria-label="Continuar a la siguiente sección"
        >
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
