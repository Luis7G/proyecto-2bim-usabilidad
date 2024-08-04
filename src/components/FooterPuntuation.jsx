import ScoreComponent from "./scoreComponent/scoreComponent";
import Data from "./../assets/scores/scoreRanking.json";
function FooterPuntuation() {
  return (
    <footer>
      <div>
        <div className="flex justify-center items-center bg-[#0070c2] text-white p-2">
          <div className="flex justify-center items-center">
            <div className="text-[24px] font-bold"> Tabla de Puntuación</div>
          </div>
          </div>
          <div className="flex flex-col items-center p-4 m">
          {
            Data.ranking.map((score, index) => {
              return (
                <ScoreComponent key={index} user={score.name} score={score.score} />
              );
            })
            
          }
        </div>
        </div>
    </footer>
  );
}

export default FooterPuntuation;