const MinimizeButton = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" // Ajusta el viewBox para un tamaño estándar
      fill="currentColor"
      className="w-full h-full" // Permite que el SVG se escale con el contenedor
      {...props}
    >
      <path d="M19 13H5v-2h14v2z" />
    </svg>
  );
  
export default MinimizeButton;
