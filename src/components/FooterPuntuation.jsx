function ScoreComponent({ user, score, time }) {
  return (
    <div
      className="flex items-center bg-slate-200 rounded-md m-2"
      tabIndex="0"
      aria-label={`Componente de puntuación del usuario: ${user}, Puntaje: ${score}, Tiempo: ${time}`}
    >
      <div className="p-2.5 flex items-center">
        <img
          className="w-16 h-16"
          src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
          alt={`Foto de perfil de ${user}`}
          tabIndex="0"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <div className="flex items-center justify-between px-1 py-2">
          <div className="w-60 h-12 bg-white rounded-3xl border-4 border-[#0070c2]">
            <div className="w-48 text-center">
              <span
                className="text-black text-xl font-extrabold font-['Roboto']"
                tabIndex="0"
                aria-label={`Usuario: ${user}`}
              >
                Usuario: {user}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-1 py-2">
          <div className="w-60 h-10 bg-white rounded-3xl border-4 border-[#0070c2]">
            <div className="w-36 text-center">
              <span
                className="text-black text-xl font-extrabold font-['Roboto']"
                tabIndex="0"
                aria-label={`Puntaje: ${score}`}
              >
                Puntaje: {score}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-1 py-2">
          <div className="w-60 h-10 bg-white rounded-3xl border-4 border-[#0070c2]">
            <div className="w-36 text-center">
              <span
                className="text-black text-xl font-extrabold font-['Roboto']"
                tabIndex="0"
                aria-label={`Tiempo: ${time}`}
              >
                Tiempo: {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreComponent;
