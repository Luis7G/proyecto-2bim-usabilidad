import HomeIcon from "./icons/homeIcon";
import PropTypes from "prop-types";

function InstructionsHeader({ homeActivity }) {
  return (
    <header className="w-full bg-[#0070c2] flex items-center justify-between p-3">
      <h1
        className="text-white text-6xl font-extrabold font-['Roboto'] mx-auto"
        tabIndex="0"
        aria-label="Sección de Ciencias Naturales"
      >
        Ciencias Naturales
      </h1>
      <div className="flex items-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute left-[-10px] w-[2px] h-full bg-white" />
          <button
            onClick={homeActivity}
            className="bg-white rounded-full p-2 flex items-center justify-center"
            aria-label="Botón para ir al inicio"
            tabIndex="0"
          >
            <HomeIcon className="text-[#0070c2] w-12 h-12" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

InstructionsHeader.propTypes = {
  homeActivity: PropTypes.func.isRequired,
};

export default InstructionsHeader;
