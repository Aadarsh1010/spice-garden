import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import Preloader from './components/Preloader';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reservations from './pages/Reservations';
import PrivateDining from './pages/PrivateDining';
import Contact from './pages/Contact';
import OrderTracking from './pages/OrderTracking';

const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Preloader />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/private-dining" element={<PrivateDining />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order-tracking" element={<OrderTracking />} />
            </Routes>
          </PageTransition>
          
          <WhatsAppButton />
          <BackToTop />
          <CookieConsent />
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
