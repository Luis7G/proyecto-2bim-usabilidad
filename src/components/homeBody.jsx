import PlayButtonIcon from "./icons/playButtonIcon";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
function HomeBody() {
    const Navigate = useNavigate();
    function handleButtonClick() {
        Navigate("/game");
    }
  return (
    <body>
        <button id="playButton"
        onClick={handleButtonClick} 
        className="flex flex-col justify-center items-center h-full transform transition-transform duration-200 hover:scale-105" 
        aria-label="Iniciar el juego">
      <PlayButtonIcon></PlayButtonIcon>
      </button>
    </body>
  );
}

export default HomeBody;