// src/pages/CreditsPage.jsx
import React from "react";
import Header from "../components/Header";

function CreditsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header name="EDUCAPLAY" />
      <div className="w-full h-2 bg-white"></div>
      <div className="bg-[#0070c2] flex-grow flex flex-col items-center justify-center px-4">
        <div
          className="bg-white text-black text-6xl font-bold py-2 px-8 rounded-3xl mt-8 mb-8"
          tabIndex="0"
          aria-label="Créditos"
        >
          Créditos:
        </div>
        <div
          className="bg-white text-black text-2xl max-w-4xl p-8 rounded-3xl"
          aria-labelledby="credits-title"
        >
          <h2 id="credits-title" className="sr-only">
            Detalles de Créditos
          </h2>
          <section aria-labelledby="developers-title">
            <h3 id="developers-title" className="font-bold mb-4" tabIndex="0">
              Desarrolladores:
            </h3>
            <ul className="list-disc list-inside" tabIndex="0">
              <li>Erik Chalacamá (Desarrollador principal)</li>
              <li>Ariel Suntasig (Desarrollador front-end)</li>
              <li>Joel Guingla (Desarrollador front-end)</li>
            </ul>
          </section>
          <section aria-labelledby="designers-title">
            <h3 id="designers-title" className="font-bold mb-4" tabIndex="0">
              Diseñadores:
            </h3>
            <ul className="list-disc list-inside" tabIndex="0">
              <li>Santiago Salazar (Diseñador gráfico y de interfaz)</li>
            </ul>
          </section>
          <section aria-labelledby="sources-title">
            <h3 id="sources-title" className="font-bold mb-4" tabIndex="0">
              Fuentes de información:
            </h3>
            <ul className="list-disc list-inside" tabIndex="0">
              <li>Enciclopedia de Ciencias Naturales - Editorial Santillana</li>
              <li>Explorando la Naturaleza - Smithsonian Institution</li>
              <li>Naturaleza Interactiva - National Geographic</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CreditsPage;
