import PlayButtonIcon from "./icons/playButtonIcon";
import React from "react";

function HomeBody({ handleButtonClick }) {
  return (
    <main>
      <button
        id="playButton"
        onClick={handleButtonClick}
        className="flex flex-col justify-center items-center h-full transform transition-transform duration-200 hover:scale-105"
        aria-label="Iniciar el juego"
        tabIndex="0"
      >
        <PlayButtonIcon />
      </button>
    </main>
  );
}

export default HomeBody;
