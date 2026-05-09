import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const circumference = 2 * Math.PI * 22; // r = 22
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.6 
      }}
      onClick={scrollToTop}
      className="fixed bottom-8 left-8 z-50 hidden lg:flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all"
      aria-label="Back to top"
    >
      <svg className="w-14 h-14 -rotate-12" viewBox="0 0 50 50">
        <circle 
          cx="25" 
          cy="25" 
          r="22" 
          fill="none" 
          stroke="#EDE4D4" 
          strokeWidth="3"
        />
        <motion.circle 
          cx="25" 
          cy="25" 
          r="22" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ ease: "easeOut" }}
        />
      </svg>
      
      <div className="absolute flex items-center justify-center">
        <ArrowUp size={22} className="text-[#2C1810]" />
      </div>
    </motion.button>
  );
};

export default BackToTop;
