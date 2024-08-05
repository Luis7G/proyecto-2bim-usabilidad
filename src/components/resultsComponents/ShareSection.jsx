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

  return (
    <div className="bg-purple-400 rounded-lg p-2 flex items-center justify-between">
      <span className="text-white font-bold">Compartir con un amigo:</span>
      <div className="flex space-x-2">
        <FaWhatsapp
          className="text-white text-2xl cursor-pointer"
          onClick={() => openLink("https://www.whatsapp.com")}
        />
        <FaFacebook
          className="text-white text-2xl cursor-pointer"
          onClick={() => openLink("https://www.facebook.com")}
        />
        <FaInstagram
          className="text-white text-2xl cursor-pointer"
          onClick={() => openLink("https://www.instagram.com")}
        />
        <FaTelegram
          className="text-white text-2xl cursor-pointer"
          onClick={() => openLink("https://www.telegram.org")}
        />
        <FaTiktok
          className="text-white text-2xl cursor-pointer"
          onClick={() => openLink("https://www.tiktok.com")}
        />
      </div>
    </div>
  );
}

export default ShareSection;
