import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={299}
    fill="none"
    {...props}
  >
    <rect width={299} height={299} x={0.5} fill="#0071C2" rx={77} />
    <path
      fill="#fff"
      d="M238 149.5a15.738 15.738 0 0 1-7.6 13.51L86.32 251.15a15.987 15.987 0 0 1-8.06 2.352 15.992 15.992 0 0 1-8.14-2.052A15.862 15.862 0 0 1 62 237.63V61.37a15.86 15.86 0 0 1 8.12-13.82 16 16 0 0 1 16.2.3l144.08 88.14a15.73 15.73 0 0 1 5.578 5.755A15.732 15.732 0 0 1 238 149.5Z"
    />
  </svg>
)
export default SvgComponent
