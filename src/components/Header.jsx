import LineasMenu from "./icons/LineasMenu";
import UserIcon from "./icons/userIcon";
import PropTypes from "prop-types";

function Header({ name }) {
  return (
    <div className="w-full bg-[#0070c2] flex justify-between items-center p-4">
      <LineasMenu />
      <div className="text-white text-[64px] font-extrabold font-['Roboto'] text-center">
        {name}
      </div>
      <div className="flex items-center">
        <UserIcon />
      </div>
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
