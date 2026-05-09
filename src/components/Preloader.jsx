import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="fixed inset-0 bg-[#2C1810] z-[9999] flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Lotus */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity }
          }}
          className="text-[120px] mb-8 text-[#D4AF37]"
        >
          🌸
        </motion.div>
        
        <div className="font-display text-4xl text-white tracking-[-2px]">SPICE GARDEN</div>
        <div className="text-[#D4AF37] text-xs tracking-[4px] mt-2">ESTABLISHED 2010</div>
        
        {/* Loading dots */}
        <div className="flex gap-2 mt-16">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.6, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
              className="w-2 h-2 bg-[#D4AF37] rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
