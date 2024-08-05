import LineasMenu from "./icons/LineasMenu";
import UserIcon from "./icons/userIcon";
import PropTypes from "prop-types";

function Header({ name }) {
  return (
    <header
      className="w-full bg-[#0070c2] flex justify-between items-center p-4"
      tabIndex="0"
      aria-label="Encabezado del sitio"
    >
      <LineasMenu
        tabIndex="0"
        aria-label="Menú de navegación"
        role="button"
      />
      <div
        className="text-white text-[64px] font-extrabold font-['Roboto']"
        tabIndex="0"
        aria-label={`Titulo de la página: ${name}`}
      >
        {name}
      </div>
      <div className="flex items-center">
        <UserIcon
          tabIndex="0"
          aria-label="Icono de usuario"
          role="button"
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
