import HomeIcon from "./icons/homeIcon";


function InstructionsHeader({ homeActivity }) {
  return (
    <div className="w-full bg-[#0070c2] flex items-center justify-between p-3">
      <div className="text-white text-[40px] font-extrabold font-['Roboto'] mx-auto">
        Ciencias Naturales
      </div>
      <div className="flex items-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute left-[-10px] w-[2px] h-full bg-white bg-black" />
          <button 
          onClick={homeActivity}
          className="bg-white rounded-full p-2 flex items-center justify-center">
            <HomeIcon className="text-[#0070c2] w-12 h-12" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstructionsHeader;
