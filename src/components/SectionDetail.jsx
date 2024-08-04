import { useParams, useNavigate } from "react-router-dom";
import MinimizeButton from "./icons/minimizeButton";

const SectionDetail = () => {
  const { id } = useParams(); // Obtén el ID de la sección
  const navigate = useNavigate();

  const details = [
    {
      id: 1,
      title: "1. Tiempo y Score",
      content:
        "Observa el tiempo restante y tu puntaje actual en la parte superior de la pantalla.",
    },
    {
      id: 2,
      title: "2. Audio de Pregunta",
      content:
        "Haz clic en el ícono de audio para escuchar la pregunta en voz alta.",
    },
    {
      id: 3,
      title: "3. Menú de Secciones",
      content:
        "Abre el menú de secciones haciendo clic en el ícono de tres barras para acceder a diferentes partes del Quiz.",
    },
    {
      id: 4,
      title: "4. Retroalimentación y Resultados Finales",
      content:
        "Después de responder, verás la justificación de la respuesta correcta y si acertaste o no. Al terminar, verás tu puntaje total, tiempo, aciertos y respuestas elegidas.",
    },
  ];

  const section = details.find((item) => item.id === Number(id));

  if (!section) {
    return <div>No se encontró la sección.</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white p-4">
      <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
      <p className="text-lg text-center">{section.content}</p>
      <div
        className="bg-[#0070c2] rounded-full p-2 mt-6 cursor-pointer flex items-center justify-center shadow-lg w-10 h-10"
        onClick={() => navigate("/instructions")} // Navega de regreso a la lista de instrucciones
      >
        <MinimizeButton className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

export default SectionDetail;
