// src/components/Header.jsx
import React, { useState } from "react";
import LineasMenu from "./icons/LineasMenu";
import PropTypes from "prop-types";
import DropdownMenu from "./DropdownMenu";

function Header({ name }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleClick = () => {
    // Controla solo los clics, no se afectará por Enter en KeyDown
    toggleMenu();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Evita doble trigger por defecto
      toggleMenu();
    }
  };

  return (
    <header
      className="w-full bg-[#0070c2] flex justify-between items-center p-4 relative"
      tabIndex="0"
    >
      <LineasMenu
        tabIndex="0"
        aria-label="Menú de navegación"
        role="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      />
      <div className="flex-1 flex justify-center">
        <div
          className="text-white text-[64px] font-extrabold font-['Roboto'] pr-24"
          tabIndex="0"
          aria-label={`Titulo del sitio de juegos: ${name}`}
        >
          {name}
        </div>
      </div>
      <DropdownMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
