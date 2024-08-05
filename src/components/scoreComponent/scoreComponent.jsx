function ScoreComponent({ user, score }) {
  return (
    <div
      className="h- flex items-center bg-slate-200 rounded-md m-2"
      tabIndex="0"
      aria-label="Componente de puntuación del usuario"
    >
      <div className="p-2.5 flex items-center">
        <img
          className="w-16 h-16"
          src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
          alt="Foto de perfil del usuario"
          tabIndex="0"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <div
          className="flex items-center justify-between px-1 py-2"
          tabIndex="0"
          aria-label={`Usuario: ${user}`}
        >
          <div className="w-60 h-12 bg-white rounded-3xl border-4 border-[#0070c2]">
            <div className="w-48 text-center">
              <span className="text-black text-xl font-extrabold font-['Roboto']">
                Usuario:{" "}
              </span>
              <span className="text-black text-xl font-normal font-['Roboto']">
                {user}
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-between px-1 py-2"
          tabIndex="0"
          aria-label={`Puntaje: ${score}`}
        >
          <div className="w-60 h-10 bg-white rounded-3xl border-4 border-[#0070c2]">
            <div className="w-36 text-center">
              <span className="text-black text-xl font-extrabold font-['Roboto']">
                Puntaje:{" "}
              </span>
              <span className="text-black text-xl font-normal font-['Roboto']">
                {score}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreComponent;
