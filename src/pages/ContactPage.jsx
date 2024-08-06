// src/pages/ContactPage.jsx
import React from "react";
import Header from "../components/Header";
import emailIcon from "../assets/images/email.png";
import facebookIcon from "../assets/images/facebook.png";
import phoneIcon from "../assets/images/phone.png";

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header name="EDUCAPLAY" />
      <div className="w-full h-2 bg-white"></div>
      <div className="bg-[#0070c2] flex-grow flex flex-col items-center justify-center">
        <div className="bg-white text-black text-6xl font-bold py-2 px-8 rounded-3xl mt-8 mb-28">
          Contáctanos a través de:
        </div>
        <div className="flex justify-around w-full max-w-6xl items-center">
          <div className="flex flex-col items-center">
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="0"
              aria-label="Enlace a Gmail"
            >
              <img src={emailIcon} alt="Email" className="w-80 h-auto" />
            </a>
            <div className="text-white text-3xl font-bold mt-4">EMAIL</div>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="0"
              aria-label="Enlace a Facebook"
            >
              <img src={facebookIcon} alt="Facebook" className="w-64 h-auto" />
            </a>
            <div className="text-white text-3xl font-bold mt-4">FACEBOOK</div>
          </div>
          <div className="flex flex-col items-center">
            <img src={phoneIcon} alt="Phone" className="w-64 h-auto" />
            <div className="text-white text-3xl font-bold mt-4">
              +1 (555) 123-4567
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
