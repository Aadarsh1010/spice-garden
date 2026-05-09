import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setShowConsent(true), 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#D4AF37] shadow-2xl z-[999] p-6 md:p-8"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="flex-1 text-sm text-[#5C2A2A]">
          We use cookies to enhance your experience, analyze traffic, and personalize content. 
          By continuing to use our site, you agree to our <span className="underline">Cookie Policy</span>.
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <button 
            onClick={acceptCookies}
            className="flex-1 md:flex-none px-10 py-3.5 bg-[#2C1810] text-white rounded-2xl text-sm tracking-widest hover:bg-black transition-colors"
          >
            ACCEPT ALL
          </button>
          <button 
            onClick={() => setShowConsent(false)}
            className="flex-1 md:flex-none px-8 py-3.5 border border-[#EDE4D4] rounded-2xl text-sm tracking-widest hover:bg-[#F8F1E3]"
          >
            DECLINE
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;
