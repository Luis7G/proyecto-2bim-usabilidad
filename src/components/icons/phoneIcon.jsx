// src/components/icons/PhoneIcon.jsx
import React from "react";

const PhoneIcon = (props) => (
  <div className="flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={282}
      height={282}
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 4C15.4 4 2 17.4 2 34s13.4 30 30 30 30-13.4 30-30S48.6 4 32 4zm0 54c-13.3 0-24-10.7-24-24S18.7 10 32 10s24 10.7 24 24-10.7 24-24 24z"
      />
      <path
        fill="currentColor"
        d="M32.4 41.3c-5.8 0-10.6-4.7-10.6-10.6s4.7-10.6 10.6-10.6c5.8 0 10.6 4.7 10.6 10.6s-4.7 10.6-10.6 10.6zm0-18.5c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8-3.5-7.8-7.8-7.8z"
      />
    </svg>
  </div>
);

export default PhoneIcon;
