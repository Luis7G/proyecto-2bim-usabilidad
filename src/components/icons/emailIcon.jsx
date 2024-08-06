// src/components/icons/EmailIcon.jsx
import React from "react";

const EmailIcon = (props) => (
  <div className="flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={375}
      height={289}
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 4C15.4 4 2 17.4 2 34s13.4 30 30 30 30-13.4 30-30S48.6 4 32 4zm0 54c-13.3 0-24-10.7-24-24S18.7 10 32 10s24 10.7 24 24-10.7 24-24 24z"
      />
      <path
        fill="currentColor"
        d="M41 21H23c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V23c0-1.1-.9-2-2-2zm-1 3v2.8l-8 5.3-8-5.3V24h16zm-8 11.4L23 28.6v-1.1l9 6 9-6v1.1l-9 6.8z"
      />
    </svg>
  </div>
);

export default EmailIcon;
