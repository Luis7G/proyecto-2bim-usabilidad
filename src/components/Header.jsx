import React from "react";
import LineasMenu from "./icons/LineasMenu";
import UserIcon from "./icons/userIcon";

function Header() {
  return (
    <div className="w-full bg-[#0070c2] flex justify-between items-center p-4">
        <LineasMenu />
        <div className="text-white text-[64px] font-extrabold font-['Roboto']">
          EDUCAPLAY
        </div>
      <div className="flex items-center">
        <UserIcon />
      </div>
    </div>
  );
}

export default Header;
