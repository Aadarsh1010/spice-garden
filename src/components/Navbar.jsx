import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  
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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Thin Top Info Bar */}
      <div className="bg-[#2C1810] text-[#D4AF37] py-2 text-xs hidden md:block border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8 text-[10px] tracking-widest">
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Tue–Sun 12PM–3PM, 7PM–10:30PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <a href="tel:+97714445555" className="hover:text-white transition-colors">+977 1 444 5555</a>
            </div>
            <div>Thamel, Kathmandu, Nepal</div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-[10px] text-[#D4AF37]/70">EST 2010 • KATHMANDU</div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Thinner */}
      <nav className={`bg-[#2C1810]/95 backdrop-blur-lg text-[#F8F1E3] fixed w-full z-50 border-b border-[#D4AF37]/20 transition-all duration-300 ${scrolled ? 'h-16 shadow-2xl' : 'h-20'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 flex items-center justify-center border border-[#D4AF37] rounded-xl">
                <span className="text-3xl text-[#D4AF37]">ॐ</span>
              </div>
              <div className="leading-none">
                <div className="font-display text-3xl tracking-[-1.5px] font-medium text-white group-hover:text-[#D4AF37] transition-colors">SPICE GARDEN</div>
                <div className="text-[9px] text-[#D4AF37] -mt-0.5 tracking-[2px]">NEPALI FINE DINING</div>
              </div>
            </Link>

            {/* Desktop Navigation - More Compact */}
            <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 transition-colors hover:text-[#D4AF37] ${isActive(link.path) ? 'text-[#D4AF37]' : ''}`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#D4AF37]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-6">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="text-[#D4AF37] hover:text-white transition-colors p-2"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a 
                href="tel:+97714445555"
                className="text-[#D4AF37] hover:text-white transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#D4AF37] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
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
              className="lg:hidden bg-[#2C1810] border-t border-[#D4AF37]/20"
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
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating Book Now Button */}
      <motion.a
        href="/reservations"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-br from-[#D4AF37] to-[#E67E22] text-[#2C1810] px-6 py-4 rounded-3xl font-medium tracking-widest shadow-2xl hover:shadow-[#D4AF37]/50 flex items-center gap-3 text-sm hidden xl:flex"
      >
        BOOK NOW
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
      </motion.a>
    </>
  );
};

export default Navbar;
