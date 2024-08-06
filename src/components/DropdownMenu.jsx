// src/components/DropdownMenu.jsx
import React from "react";
import { Link } from "react-router-dom";

function DropdownMenu({ isOpen, toggleMenu }) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen bg-[#0070c2] flex flex-col items-center justify-center transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-20`}
    >
      <button
        className="absolute top-4 left-10 text-white text-8xl"
        onClick={toggleMenu}
        aria-label="Cerrar menú"
      >
        X
      </button>
      <div className="flex flex-col items-center mt-20 space-y-8">
        <Link
          to="/"
          className="bg-white text-black text-6xl font-bold py-4 w-96 text-center rounded-3xl"
          onClick={toggleMenu}
          aria-label="Ir a Inicio"
        >
          INICIO
        </Link>
        <Link
          to="/contact"
          className="bg-white text-black text-6xl font-bold py-4 w-96 text-center rounded-3xl"
          onClick={toggleMenu}
          aria-label="Ir a Contacto"
        >
          CONTACTO
        </Link>
        <Link
          to="/credits"
          className="bg-white text-black text-6xl font-bold py-4 w-96 text-center rounded-3xl"
          onClick={toggleMenu}
          aria-label="Ir a Créditos"
        >
          CRÉDITOS
        </Link>
      </div>
    </div>
  );
}

export default DropdownMenu;
