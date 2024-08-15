// src/components/DropdownMenu.jsx
import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function DropdownMenu({ isOpen, toggleMenu }) {
  const tabIndexValue = isOpen ? 0 : -1; // Define el tabIndex en función del estado
  const firstFocusableElement = useRef(null);
  const lastFocusableElement = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      // Enfoca el primer elemento al abrir el menú
      firstFocusableElement.current.focus();

      const handleTabKey = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            // Si se presiona Shift + Tab y estamos en el primer elemento, mover el foco al último
            if (document.activeElement === firstFocusableElement.current) {
              e.preventDefault();
              lastFocusableElement.current.focus();
            }
          } else {
            // Si se presiona Tab y estamos en el último elemento, mover el foco al primero
            if (document.activeElement === lastFocusableElement.current) {
              e.preventDefault();
              firstFocusableElement.current.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleTabKey);

      return () => {
        document.removeEventListener("keydown", handleTabKey);
      };
    }
  }, [isOpen]);

  const handleKeyDown = (event, path) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita el comportamiento por defecto del botón
      toggleMenu(); // Cierra el menú después de la navegación

      // Retrasa la navegación para asegurarse de que el menú se cierre antes
      setTimeout(() => {
        navigate(path);
      }, 100); // 100ms de retraso, suficiente para que se cierre el menú
    }
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen bg-[#0070c2] flex flex-col items-center justify-center transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-20`}
    >
      <button
        ref={firstFocusableElement}
        className="absolute top-4 left-10 text-white text-8xl"
        onClick={toggleMenu}
        aria-label="Cerrar menú"
        tabIndex={tabIndexValue} // Controla el tabIndex
      >
        X
      </button>
      <div className="flex flex-col items-center mt-20 space-y-8">
        <Link
          to="/"
          className="bg-white text-black text-6xl font-bold py-4 w-96 text-center rounded-3xl"
          onClick={toggleMenu}
          onKeyDown={(e) => handleKeyDown(e, "/")}
          aria-label="Ir a Inicio"
          tabIndex={tabIndexValue} // Controla el tabIndex
        >
          INICIO
        </Link>
        <Link
          to="/contact"
          className="bg-white text-black text-6xl font-bold py-4 w-96 text-center rounded-3xl"
          onClick={toggleMenu}
          onKeyDown={(e) => handleKeyDown(e, "/contact")}
          aria-label="Ir a Contacto"
          tabIndex={tabIndexValue} // Controla el tabIndex
        >
          CONTACTO
        </Link>
        <Link
          to="/credits"
          className="bg-white text-black text-6xl font-bold py-4 w-96 text-center rounded-3xl"
          onClick={toggleMenu}
          onKeyDown={(e) => handleKeyDown(e, "/credits")}
          aria-label="Ir a Créditos"
          tabIndex={tabIndexValue} // Controla el tabIndex
          ref={lastFocusableElement} // Último elemento enfocable
        >
          CRÉDITOS
        </Link>
      </div>
    </div>
  );
}

export default DropdownMenu;
