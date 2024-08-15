import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";

function ShareSection() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const handleKeyDown = (event, url) => {
    if (event.key === "Enter") {
      openLink(url);
    }
  };

  return (
    <div
      className="bg-purple-400 rounded-lg p-2 flex items-center justify-between"
      tabIndex="0"
      aria-label="Sección para compartir en redes sociales"
    >
      <span
        className="text-white font-bold text-2xl"
        tabIndex="0"
        aria-label="Compartir con un amigo"
      >
        Compartir con un amigo:
      </span>
      <div className="flex space-x-2">
        <FaWhatsapp
          className="text-white text-4xl cursor-pointer"
          onClick={() => openLink("https://www.whatsapp.com")}
          onKeyDown={(event) =>
            handleKeyDown(event, "https://www.whatsapp.com")
          }
          tabIndex="0"
          aria-label="Compartir en WhatsApp"
          role="button"
        />
        <FaFacebook
          className="text-white text-4xl cursor-pointer"
          onClick={() => openLink("https://www.facebook.com")}
          onKeyDown={(event) =>
            handleKeyDown(event, "https://www.facebook.com")
          }
          tabIndex="0"
          aria-label="Compartir en Facebook"
          role="button"
        />
        <FaInstagram
          className="text-white text-4xl cursor-pointer"
          onClick={() => openLink("https://www.instagram.com")}
          onKeyDown={(event) =>
            handleKeyDown(event, "https://www.instagram.com")
          }
          tabIndex="0"
          aria-label="Compartir en Instagram"
          role="button"
        />
        <FaTelegram
          className="text-white text-4xl cursor-pointer"
          onClick={() => openLink("https://www.telegram.org")}
          onKeyDown={(event) =>
            handleKeyDown(event, "https://www.telegram.org")
          }
          tabIndex="0"
          aria-label="Compartir en Telegram"
          role="button"
        />
        <FaTiktok
          className="text-white text-4xl cursor-pointer"
          onClick={() => openLink("https://www.tiktok.com")}
          onKeyDown={(event) => handleKeyDown(event, "https://www.tiktok.com")}
          tabIndex="0"
          aria-label="Compartir en TikTok"
          role="button"
        />
      </div>
    </div>
  );
}

export default ShareSection;
