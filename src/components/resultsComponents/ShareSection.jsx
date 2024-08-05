import { FaWhatsapp, FaFacebook, FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';

function ShareSection() {
  return (
    <div
      className="bg-purple-400 rounded-lg p-2 flex items-center justify-between"
      tabIndex="0"
      aria-label="Sección para compartir en redes sociales"
    >
      <span className="text-white font-bold" tabIndex="0" aria-label="Compartir con un amigo">
        Compartir con un amigo:
      </span>
      <div className="flex space-x-2">
        <FaWhatsapp
          className="text-white text-2xl"
          tabIndex="0"
          aria-label="Compartir en WhatsApp"
          role="button"
        />
        <FaFacebook
          className="text-white text-2xl"
          tabIndex="0"
          aria-label="Compartir en Facebook"
          role="button"
        />
        <FaInstagram
          className="text-white text-2xl"
          tabIndex="0"
          aria-label="Compartir en Instagram"
          role="button"
        />
        <FaTelegram
          className="text-white text-2xl"
          tabIndex="0"
          aria-label="Compartir en Telegram"
          role="button"
        />
        <FaTiktok
          className="text-white text-2xl"
          tabIndex="0"
          aria-label="Compartir en TikTok"
          role="button"
        />
      </div>
    </div>
  );
}

export default ShareSection;
