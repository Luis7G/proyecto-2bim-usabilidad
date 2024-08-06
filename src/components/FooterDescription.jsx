// src/components/FooterDescription.jsx
function FooterDescription() {
    return (
      <footer
        className="bg-[#0070c2] text-white py-8"
        aria-labelledby="quiz-description-title"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2
            id="quiz-description-title"
            className="text-4xl font-extrabold mb-6"
            tabIndex={0}
          >
            Sobre el Quiz
          </h2>
          <p
            className="text-xl leading-relaxed mb-8 text-justify"
            tabIndex={0}
            aria-label="Descripción del Quiz de Ciencias Naturales"
          >
            Este quiz de Ciencias Naturales está diseñado para poner a prueba tu
            conocimiento en una variedad de temas fascinantes. Desde la biología
            hasta la química, cada pregunta te desafiará y te ayudará a aprender
            algo nuevo. ¡Explora el mundo natural de una manera divertida y
            educativa!
          </p>
        </div>
      </footer>
    );
  }
  
  export default FooterDescription;
  