import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Flame } from 'lucide-react';

const TodaysSpecial = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3400);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="fixed bottom-28 right-8 z-[999] bg-white rounded-3xl shadow-2xl max-w-xs overflow-hidden"
    >
      <div className="bg-gradient-to-r from-[#D4AF37] to-[#E67E22] px-6 py-4 text-white flex items-center gap-3">
        <Flame className="animate-pulse" />
        <div className="font-medium tracking-wider">TODAY'S SPECIAL</div>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-auto text-white/70 hover:text-white"
        >
          ✕
        </button>
      </div>
      
      <div className="p-8">
        <div className="text-3xl font-display tracking-tight text-[#2C1810]">Truffle Butter Chicken</div>
        <div className="text-[#5C2A2A] mt-3">Our signature dish elevated with black truffle and 24k gold leaf. Available today only.</div>
        
        <div className="mt-8 flex justify-between items-end">
          <div>
            <div className="text-xs text-[#D4AF37]">ONLY</div>
            <div className="text-5xl font-light text-[#2C1810]">8</div>
            <div className="text-xs -mt-1">portions left</div>
          </div>
          <div className="text-right">
            <div className="line-through text-xs text-[#5C2A2A]/60">$38</div>
            <div className="text-4xl font-light text-[#D4AF37]">$32</div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => {
          window.location.href = '/menu';
          setIsVisible(false);
        }}
        className="block w-full py-5 bg-[#2C1810] text-white text-sm tracking-widest hover:bg-black transition-colors"
      >
        ADD TO YOUR TABLE
      </button>
    </motion.div>
  );
};

export default TodaysSpecial;
