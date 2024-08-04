import { useParams, useNavigate } from "react-router-dom";
import MinimizeButton from "./icons/minimizeButton";

const ShortcutSectionDetail = () => {
  const { id } = useParams(); // Obtén el ID del shortcut
  const navigate = useNavigate();

  const shortcuts = [
    {
      id: 1,
      title: "1. Imagen de Ayuda",
      content: "Presiona 'H' para mostrar/ocultar la imagen de ayuda.",
    },
    {
      id: 2,
      title: "2. Audio de Pregunta",
      content: "Presiona 'A' para reproducir el audio de la pregunta.",
    },
    {
      id: 3,
      title: "3. Responder Pregunta",
      content:
        "Presiona las teclas numéricas '1', '2', '3' o '4' para seleccionar la opción de respuesta correspondiente.",
    },
    {
      id: 4,
      title: "4. Regresar al Menú Principal",
      content: "Presiona 'Esc' para regresar al menú principal.",
    },
  ];

  const shortcut = shortcuts.find((item) => item.id === Number(id));

  if (!shortcut) {
    return <div>No se encontró el acceso directo.</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white p-4">
      <h2 className="text-3xl font-bold mb-4">{shortcut.title}</h2>
      <p className="text-lg text-center">{shortcut.content}</p>
      <div
        className="bg-[#0070c2] rounded-full p-2 mt-6 cursor-pointer flex items-center justify-center shadow-lg w-10 h-10"
        onClick={() => navigate("/shortcuts")} // Navega de regreso a la lista de shortcuts
      >
        <MinimizeButton className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

export default ShortcutSectionDetail;
