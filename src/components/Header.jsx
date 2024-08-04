const Header = () => {
  return (
    <div className="w-96 h-96 relative bg-white shadow">
      <img
        className="w-96 h-96 left-0 top-[-4px] absolute"
        src="https://via.placeholder.com/1728x1121"
      />
      <div className="w-80 h-9 left-[150px] top-[739px] absolute text-center text-white text-4xl font-extrabold font-['Inter']">
        ÚLTIMO JUGADO
      </div>
      <div className="h-96 left-0 top-[-4px] absolute flex-col justify-start items-center gap-32 inline-flex">
        <div className="self-stretch h-44 px-14 py-12 bg-sky-600 flex-col justify-start items-start gap-2.5 flex">
          <div className="justify-start items-center gap-96 inline-flex">
            <div className="w-96 text-center text-white text-6xl font-extrabold font-['Roboto']">
              EDUCAPLAY
            </div>
            <div className="w-16 h-16 px-1.5 py-1 justify-center items-center flex" />
          </div>
        </div>
        <div className="w-72 h-72 bg-sky-600 rounded-3xl justify-center items-center gap-2.5 inline-flex" />
        <div className="w-96 justify-between items-center inline-flex">
          <div className="w-96 flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-16 px-24 py-3.5 justify-between items-center inline-flex">
              <div className="w-96 h-16 bg-sky-600 rounded-3xl border-4 border-sky-600" />
              <div className="w-80 h-9 text-center text-white text-4xl font-extrabold font-['Inter']">
                ÚLTIMO JUGADO
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <img
                className="w-52 h-60 mix-blend-darken rounded-lg border-4 border-sky-600"
                src="https://via.placeholder.com/209x238"
              />
              <div className="w-72 flex-col justify-start items-start gap-7 inline-flex">
                <div className="self-stretch grow shrink basis-0 px-7 py-2.5 justify-between items-center inline-flex">
                  <div className="w-72 h-20 bg-white rounded-3xl border-4 border-sky-600" />
                  <div className="w-60 h-12 text-center text-black text-xl font-extrabold font-['Roboto']">
                    Juego sobre Ciencias Naturales
                  </div>
                </div>
                <div className="self-stretch grow shrink basis-0 px-7 py-5 justify-between items-center inline-flex">
                  <div className="w-72 h-14 bg-white rounded-3xl border-4 border-sky-600" />
                  <div className="w-60 h-5 text-center">
                    <span style="text-black text-xl font-extrabold font-['Roboto']">
                      Creador por:{" "}
                    </span>
                    <span style="text-black text-xl font-normal font-['Roboto']">
                      User123
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 flex-col justify-start items-center gap-4 inline-flex">
            <div className="self-stretch h-16 px-2.5 py-3.5 justify-between items-center inline-flex">
              <div className="w-96 h-16 bg-sky-600 rounded-3xl border-4 border-sky-600" />
              <div className="w-96 h-9 text-center text-white text-4xl font-extrabold font-['Inter']">
                TABLAS DE PUNTUACIÓN
              </div>
            </div>
            <div className="h-64 flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch justify-start items-center inline-flex">
                <div className="p-2.5 justify-start items-center gap-2.5 flex">
                  <img
                    className="w-28 h-28"
                    src="https://via.placeholder.com/113x113"
                  />
                </div>
                <div className="w-60 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch grow shrink basis-0 px-6 py-3.5 justify-between items-center inline-flex">
                    <div className="w-60 h-12 bg-white rounded-3xl border-4 border-sky-600" />
                    <div className="w-48 h-4 text-center">
                      <span style="text-black text-xl font-extrabold font-['Roboto']">
                        Usuario:{" "}
                      </span>
                      <span style="text-black text-xl font-normal font-['Roboto']">
                        User46
                      </span>
                    </div>
                  </div>
                  <div className="self-stretch grow shrink basis-0 px-6 py-3.5 justify-between items-center inline-flex">
                    <div className="w-60 h-12 bg-white rounded-3xl border-4 border-sky-600" />
                    <div className="w-48 h-4 text-center">
                      <span style="text-black text-xl font-extrabold font-['Roboto']">
                        Puntaje:{" "}
                      </span>
                      <span style="text-black text-xl font-normal font-['Roboto']">
                        700
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-1.5 inline-flex">
                <img
                  className="w-28 h-28"
                  src="https://via.placeholder.com/113x113"
                />
                <div className="w-60 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch grow shrink basis-0 px-6 py-3.5 justify-between items-center inline-flex">
                    <div className="w-60 h-12 bg-white rounded-3xl border-4 border-sky-600" />
                    <div className="w-48 h-4 text-center">
                      <span style="text-black text-xl font-extrabold font-['Roboto']">
                        Usuario:{" "}
                      </span>
                      <span style="text-black text-xl font-normal font-['Roboto']">
                        Ren11
                      </span>
                    </div>
                  </div>
                  <div className="self-stretch grow shrink basis-0 px-6 py-3.5 justify-between items-center inline-flex">
                    <div className="w-60 h-12 bg-white rounded-3xl border-4 border-sky-600" />
                    <div className="w-48 h-4 text-center">
                      <span style="text-black text-xl font-extrabold font-['Roboto']">
                        Puntaje:{" "}
                      </span>
                      <span style="text-black text-xl font-normal font-['Roboto']">
                        600
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
