import { FaWhatsapp, FaFacebook, FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';

function ShareSection() {
  return (
    <div className="bg-purple-400 rounded-lg p-2 flex items-center justify-between">
      <span className="text-white font-bold">Compartir con un amigo:</span>
      <div className="flex space-x-2">
        <FaWhatsapp className="text-white text-2xl" />
        <FaFacebook className="text-white text-2xl" />
        <FaInstagram className="text-white text-2xl" />
        <FaTelegram className="text-white text-2xl" />
        <FaTiktok className="text-white text-2xl" />
      </div>
    </div>
  );
}

export default ShareSection;