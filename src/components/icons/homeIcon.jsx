const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 59 56" // Cambiado para usar viewBox
    className="w-full h-full" // Asegura que el icono se ajuste al contenedor
    {...props}
  >
    <path
      fill="#6F5F9E"
      d="M29.5 0 0 24h7.375v32h14.75V40h14.75v16h14.75V23.76L59 24 29.5 0Z"
    />
  </svg>
);

export default SvgComponent;
