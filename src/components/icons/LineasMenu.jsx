import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={90}
    height={61}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M0 60.5h90v-10H0v10Zm0-25h90v-10H0v10Zm0-35v10h90V.5H0Z"
    />
  </svg>
);
export default SvgComponent;
