import ScoreComponent from "./scoreComponent/scoreComponent";
import Data from "./../assets/scores/scoreRanking.json";
function FooterPuntuation() {
  return (
    <footer>
      <div
      tabIndex={0}
        aria-label="Componente de Tabla de puntuación"
      >
        <div 
        tabIndex={0}
        aria-label=" "
        className="flex justify-center items-center bg-[#0070c2] text-white p-2">
          <div className="flex justify-center items-center">
            <div 
            tabIndex={0}
            aria-label="Tabla de Puntuación"
            className="text-[24px] font-bold"> Tabla de Puntuación</div>
          </div>
          </div>
          <div 
          tabIndex={0}
            aria-label="Resultados de la tabla de puntuación"
          className="flex flex-col items-center p-4 m">
          {
            Data.ranking.map((score, index) => {
              return (
                <ScoreComponent 
                tabIndex={0}
                aria-label={`Usuario: ${score.name} Puntaje: ${score.score}`}
                key={index} user={score.name} score={score.score} />
              );
            })
            
          }
        </div>
        </div>
    </footer>
  );
}

export default FooterPuntuation;