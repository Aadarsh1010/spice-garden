import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('EN');
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/private-dining', label: 'Private Dining' },
    { path: '/reservations', label: 'Reservations' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Information Bar */}
      <div className="bg-[#2C1810] text-[#D4AF37] py-2.5 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Clock size={15} />
              <span>Tue–Sun 12PM–3PM, 7PM–10:30PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={15} />
              <a href="tel:+91222884455" className="hover:text-white">+91 22 2888 4455</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} />
              <span>42 Marine Drive, Mumbai</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-[10px] border border-[#D4AF37]/30 rounded-full px-3 py-1">
              <button 
                onClick={() => setLanguage('EN')}
                className={`${language === 'EN' ? 'text-white' : 'text-[#D4AF37]/70'} hover:text-white`}
              >
                EN
              </button>
              <span className="text-[#D4AF37]/30">/</span>
              <button 
                onClick={() => setLanguage('HI')}
                className={`${language === 'HI' ? 'text-white' : 'text-[#D4AF37]/70'} hover:text-white`}
              >
                हि
              </button>
            </div>
            <div className="text-[#D4AF37]/70 text-[10px] tracking-widest">EST 2010 • MUMBAI</div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-[#2C1810] text-[#F8F1E3] fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl py-2' : 'py-1'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-11 h-11 flex items-center justify-center border border-[#D4AF37] rounded-full">
                  <span className="text-3xl text-[#D4AF37]">ॐ</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37] to-[#E67E22] opacity-10 rounded-full -z-10"></div>
              </div>
              <div className="leading-none">
                <div className="font-display text-4xl tracking-[-2px] font-medium text-white group-hover:text-[#D4AF37] transition-colors">SPICE GARDEN</div>
                <div className="text-[10px] text-[#D4AF37] tracking-[2.5px] -mt-0.5">FINE INDIAN CUISINE</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-9 text-sm uppercase tracking-[1px] font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 transition-colors hover:text-[#D4AF37] ${isActive(link.path) ? 'text-[#D4AF37]' : ''}`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-[#D4AF37]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-5">
              <Link 
                to="/reservations"
                className="bg-[#D4AF37] hover:bg-white active:bg-amber-200 text-[#2C1810] px-9 py-3.5 text-sm font-medium tracking-widest rounded-2xl transition-all shadow-inner shadow-[#D4AF37]/30"
              >
                BOOK NOW
              </Link>
              
              <button className="text-[#D4AF37] hover:text-white transition-colors px-2 py-2">
                <Phone size={22} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#D4AF37] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#2C1810] border-t border-[#D4AF37]/20 overflow-hidden"
            >
              <div className="px-8 py-10 flex flex-col gap-8 text-lg font-light">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 ${isActive(link.path) ? 'text-[#D4AF37]' : 'text-[#F8F1E3]'} hover:text-[#D4AF37]`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
                  <Link 
                    to="/reservations"
                    onClick={() => setIsOpen(false)}
                    className="bg-[#D4AF37] text-center py-6 rounded-3xl text-[#2C1810] font-medium text-lg tracking-widest"
                  >
                    RESERVE YOUR TABLE
                  </Link>
                  
                  <a href="tel:+91222884455" className="flex justify-center items-center gap-4 text-[#D4AF37]">
                    <Phone /> +91 22 2888 4455
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
