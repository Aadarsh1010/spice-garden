import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const phone = '+919876543210'; // Replace with real number
    const message = encodeURIComponent("Hello Spice Garden! I'd like to make a reservation.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={openWhatsApp}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-3 hover:shadow-[#25D366]/50 transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="hidden group-hover:inline pr-2 text-sm font-medium">Chat with us</span>
    </motion.button>
  );
};

export default WhatsAppButton;
