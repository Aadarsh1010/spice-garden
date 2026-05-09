import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FloatingSpice = ({ delay, left, size, symbol, duration }) => {
  return (
    <motion.div
      className="absolute text-[#D4AF37]/40 pointer-events-none select-none text-2xl"
      style={{ 
        left: `${left}%`, 
        top: `${Math.random() * 65 + 20}%`,
        fontSize: size 
      }}
      initial={{ 
        opacity: 0.15, 
        y: 0,
        rotate: Math.random() * 20 - 10 
      }}
      animate={{ 
        y: [0, -180, -80],
        x: [0, Math.random() * 60 - 30],
        rotate: [0, Math.random() * 180 - 90],
        opacity: [0.15, 0.45, 0.15]
      }}
      transition={{ 
        duration: duration || (18 + Math.random() * 12),
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    >
      {symbol}
    </motion.div>
  );
};

const Home = () => {
  const spiceSymbols = ['🌿', '🌾', '⭐', '🧂', '🍂', '🌺', '🔸'];

  return (
    <div className="bg-[#F8F1E3] min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Top Announcement Bar */}
      <div className="bg-[#2C1810] text-[#D4AF37] py-2.5 text-center text-sm tracking-[2px] font-medium flex items-center justify-center gap-3 border-b border-[#D4AF37]/20">
        <div className="flex items-center gap-2">
          <Clock size={15} />
          NOW OPEN FOR SUNDAY BRUNCH
        </div>
        <div className="w-px h-3 bg-[#D4AF37]/40"></div>
        <span className="text-[#E67E22] text-xs">11:30 AM – 3:00 PM • RESERVATIONS RECOMMENDED</span>
      </div>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://picsum.photos/id/1015/2000/1200')",
          }}
        />
        
        {/* Dark Luxurious Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/80 via-[#2C1810]/65 to-[#2C1810]/75" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.6px,transparent_1px)] bg-[length:50px_50px] opacity-10 mix-blend-soft-light" />
        
        {/* Animated Floating Spice Particles */}
        {Array.from({ length: 14 }).map((_, i) => (
          <FloatingSpice 
            key={i}
            delay={i * -1.8}
            left={12 + (i * 5.8) % 78}
            size={22 + Math.random() * 26}
            symbol={spiceSymbols[i % spiceSymbols.length]}
            duration={14 + (i % 7) * 4}
          />
        ))}

        {/* Main Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            {/* Pre-headline accent */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl text-[#F8F1E3] text-xs tracking-[3.5px] px-10 py-4 rounded-3xl mb-8 border border-white/30 shadow-inner"
            >
              <div className="w-2 h-2 rounded-full bg-[#E67E22] animate-pulse"></div>
              MUMBAI • ESTABLISHED 2012
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[78px] md:text-[102px] leading-[0.92] text-white tracking-[-3.2px] mb-6"
            >
              A JOURNEY THROUGH<br />AUTHENTIC INDIAN FLAVORS
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="max-w-lg mx-auto text-xl md:text-2xl text-white/90 font-light tracking-wide mb-14"
            >
              Timeless recipes. Impeccable craft. An experience that transcends the ordinary.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.9 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <Link 
                to="/menu"
                className="group relative inline-flex items-center justify-center gap-4 bg-transparent border-2 border-[#D4AF37] hover:bg-[#D4AF37] text-white hover:text-[#2C1810] px-12 py-6 rounded-2xl font-medium text-lg tracking-wider transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">VIEW OUR MENU</span>
                <ArrowRight className="group-hover:translate-x-1.5 transition-transform relative z-10" />
              </Link>
              
              <Link 
                to="/reservations"
                className="group inline-flex items-center justify-center gap-4 bg-[#D4AF37] hover:bg-white text-[#2C1810] px-12 py-6 rounded-2xl font-medium text-lg tracking-wider transition-all duration-500 shadow-xl shadow-[#D4AF37]/40 active:scale-[0.985]"
              >
                BOOK A TABLE
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute -top-1 -right-1"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Live Reservation Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute top-32 right-10 hidden lg:flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/20 text-white px-7 py-4 rounded-3xl text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <span className="font-medium text-emerald-400">LIVE</span>
          </div>
          <div className="text-white/80 text-xs leading-tight">
            TONIGHT<br />
            <span className="text-[#D4AF37] font-medium">Limited seats available</span>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
          <div className="text-white/70 text-[10px] tracking-[2.5px] font-light mb-4">SCROLL TO EXPLORE THE JOURNEY</div>
          
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ 
              duration: 2.8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="cursor-pointer"
          >
            <ChevronDown 
              className="text-[#D4AF37] opacity-70" 
              size={32} 
              strokeWidth={1.5}
            />
          </motion.div>
        </div>

        {/* Bottom Right Ornament */}
        <div className="absolute bottom-12 right-12 hidden xl:block">
          <motion.div 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
            className="text-[#D4AF37] text-[130px] leading-none font-black tracking-[-10px] opacity-5 select-none"
          >
            ॐ
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS BAR */}
      <div className="bg-[#2C1810] py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 px-6">
          {[
            { number: "12", label: "Years of Excellence" },
            { number: "48", label: "Signature Dishes" },
            { number: "4.98", label: "Average Rating", icon: "★" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center border-r border-white/10 last:border-r-0"
            >
              <div className="flex items-center gap-3 text-[#D4AF37]">
                {item.icon && <span className="text-3xl">{item.icon}</span>}
                <span className="font-display text-6xl font-light text-white tracking-tighter">{item.number}</span>
              </div>
              <div className="text-[#D4AF37]/70 text-sm mt-1 tracking-widest uppercase">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The rest of the page remains similar but updated for consistency */}
      {/* WELCOME SECTION */}
      <section className="py-28 bg-[#F8F1E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <div className="uppercase text-[#E67E22] text-sm tracking-[3px] mb-3">SINCE 2012</div>
              <h2 className="font-display text-[#2C1810] text-6xl md:text-7xl leading-none tracking-tighter mb-8">
                WHERE HERITAGE<br />MEETS EXCELLENCE
              </h2>
              <div className="max-w-lg text-lg text-[#5C2A2A]/80 leading-relaxed">
                Nestled along the Arabian Sea, Spice Garden celebrates the rich culinary tapestry of India. 
                Our chefs honor centuries-old family recipes while embracing modern techniques to create an unforgettable dining experience.
              </div>
              
              <Link 
                to="/about"
                className="mt-10 inline-flex items-center gap-4 group text-sm uppercase tracking-widest font-medium"
              >
                <span className="border-b border-[#5C2A2A] pb-1 group-hover:border-[#D4AF37] transition-colors">DISCOVER OUR STORY</span>
                <div className="w-8 h-px bg-[#5C2A2A] group-hover:bg-[#D4AF37]"></div>
              </Link>
            </div>
            
            <div className="md:col-span-5 relative">
              <div className="aspect-square bg-[#2C1810] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/id/1016/800/800" 
                  alt="Interior of Spice Garden" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl max-w-[260px]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#D4AF37] text-xl">★</span>
                  ))}
                </div>
                <p className="italic text-[#5C2A2A] leading-tight">"The most refined Indian dining experience in the country. A true masterpiece."</p>
                <div className="mt-6 text-xs text-[#D4AF37]">— MICHELIN GUIDE 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES - unchanged for brevity */}
      <section className="bg-[#2C1810] py-24 text-[#F8F1E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <div className="text-[#D4AF37] tracking-[4px] text-sm">SIGNATURE CREATIONS</div>
              <h3 className="font-display text-6xl tracking-tight">Our Most Cherished Dishes</h3>
            </div>
            <Link to="/menu" className="hidden md:flex items-center gap-3 text-sm group">
              VIEW FULL MENU 
              <div className="transition group-hover:translate-x-2">→</div>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Truffle Butter Chicken",
                desc: "Our legendary butter chicken elevated with black truffle and 24k gold leaf",
                price: "₹2850",
                img: "https://picsum.photos/id/106/600/400"
              },
              {
                name: "Goan Lobster Moilee",
                desc: "Fresh lobster in fragrant coconut milk curry with mustard seeds and curry leaves",
                price: "₹4250",
                img: "https://picsum.photos/id/431/600/400"
              },
              {
                name: "Saffron & Rose Phirni",
                desc: "Creamy rice pudding infused with Iranian saffron, rose and pistachio praline",
                price: "₹950",
                img: "https://picsum.photos/id/312/600/400"
              }
            ].map((dish, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -12 }}
                className="group bg-[#3A2720] rounded-3xl overflow-hidden"
              >
                <div className="h-80 relative">
                  <img src={dish.img} alt={dish.name} className="w-full h-full object-cover transition-all group-hover:scale-110 duration-700" />
                  <div className="absolute top-6 right-6 bg-black/70 text-[#D4AF37] text-xs font-mono px-4 py-2 rounded-full">{dish.price}</div>
                </div>
                <div className="p-8">
                  <h4 className="font-display text-3xl mb-3 text-white">{dish.name}</h4>
                  <p className="text-[#D4AF37]/70 text-[15px] leading-relaxed">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / CHEF NOTE */}
      <section className="py-28 bg-[#F8F1E3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-8 text-[#D4AF37]">“</div>
          <p className="text-3xl md:text-4xl leading-tight text-[#2C1810] font-light max-w-3xl mx-auto">
            Every dish tells a story — of ancient spice routes, of family kitchens passed down through generations, 
            and of the love we pour into every plate that leaves our kitchen.
          </p>
          <div className="mt-12 flex justify-center items-center gap-6">
            <div className="w-16 h-px bg-[#D4AF37]"></div>
            <div>
              <div className="font-medium">CHEF VIKRAM SINGH</div>
              <div className="text-xs text-[#E67E22] tracking-widest">EXECUTIVE CHEF &amp; OWNER</div>
            </div>
            <div className="w-16 h-px bg-[#D4AF37]"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
