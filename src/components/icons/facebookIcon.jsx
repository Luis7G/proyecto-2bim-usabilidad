// src/components/icons/FacebookIcon.jsx
import React from "react";

const FacebookIcon = (props) => (
  <div className="flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={294}
      height={294}
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 4C15.4 4 2 17.4 2 34s13.4 30 30 30 30-13.4 30-30S48.6 4 32 4zm0 54c-13.3 0-24-10.7-24-24S18.7 10 32 10s24 10.7 24 24-10.7 24-24 24z"
      />
      <path
        fill="currentColor"
        d="M40.9 24.1h-4.7v-2.9c0-1.4.8-2.1 1.3-2.1h3.4V16h-4.5c-5.5 0-6.5 4.1-6.5 6.6v3.4h-3.4v4.5h3.4v13.8h5.6V28.5h4.1l.4-4.5z"
      />
    </svg>
  </div>
);

export default FacebookIcon;
