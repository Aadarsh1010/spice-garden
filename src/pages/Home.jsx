import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const highlights = [
    {
      number: "14",
      label: "Years of Excellence",
    },
    {
      number: "52",
      label: "Signature Nepali Dishes",
    },
    {
      number: "4.98",
      label: "Average Rating",
      icon: Star,
    },
  ];

  return (
    <div className="bg-[#F8F1E3] min-h-screen overflow-hidden">
      <Navbar />
      
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#5C2A2A_0.8px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
        
        <div className="absolute inset-0 bg-cover bg-center" 
             style={{ 
               backgroundImage: "url('https://picsum.photos/id/1015/2000/1200')",
               filter: 'brightness(0.65) contrast(1.1)'
             }}>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-xs tracking-[4px] px-8 py-3 rounded-full mb-8 border border-white/30">
              KATHMANDU'S MOST AWARDED NEPALI RESTAURANT
            </div>
            
            <h1 className="font-display text-[92px] md:text-[120px] leading-[0.9] text-white tracking-tighter mb-6">
              SPICE<br />GARDEN
            </h1>
            
            <p className="max-w-md mx-auto text-xl text-white/90 font-light tracking-wide mb-12">
              Where the soul of Nepal finds its most exquisite expression
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                to="/reservations"
                className="group inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-white text-[#2C1810] px-10 py-5 rounded-2xl font-medium text-lg transition-all duration-300 active:scale-95"
              >
                RESERVE YOUR TABLE
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
              
              <Link 
                to="/menu"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/80 hover:border-white text-white px-10 py-5 rounded-2xl font-medium text-lg backdrop-blur-sm transition-all"
              >
                EXPLORE THE MENU
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 text-xs tracking-widest">
          <div className="mb-3">SCROLL TO DISCOVER</div>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-32 right-12 hidden xl:block">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="text-[#D4AF37] text-[180px] font-display font-black tracking-[-20px] opacity-10 select-none">ॐ
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS BAR */}
      <div className="bg-[#2C1810] py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 px-6">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center border-r border-white/10 last:border-r-0"
            >
              <div className="flex items-center gap-2 text-[#D4AF37]">
                {item.icon && <item.icon size={22} />}
                <span className="font-display text-6xl font-light text-white tracking-tighter">{item.number}</span>
              </div>
              <div className="text-[#D4AF37]/70 text-sm mt-1 tracking-widest uppercase">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WELCOME SECTION */}
      <section className="py-28 bg-[#F8F1E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <div className="uppercase text-[#E67E22] text-sm tracking-[3px] mb-3">SINCE 2010</div>
              <h2 className="font-display text-[#2C1810] text-6xl md:text-7xl leading-none tracking-tighter mb-8">
                A JOURNEY THROUGH<br />THE FLAVOURS OF NEPAL
              </h2>
              <div className="max-w-lg text-lg text-[#5C2A2A]/80 leading-relaxed">
                Nestled in the heart of Thamel, Spice Garden celebrates the rich culinary tapestry of Nepal. 
                Our chefs honor centuries-old family recipes while embracing modern techniques to create an unforgettable dining experience.
              </div>
              
              <Link 
                to="/about"
                className="mt-10 inline-flex items-center gap-4 group text-sm uppercase tracking-widest font-medium"
              >
                <span className="border-b border-[#5C2A2A] pb-1 group-hover:border-[#D4AF37] transition-colors">OUR STORY</span>
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
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl max-w-[260px]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-[#D4AF37]" size={18} fill="#D4AF37" />
                  ))}
                </div>
                <p className="italic text-[#5C2A2A]">\"The most refined Nepali dining experience in the country. A true masterpiece.\"</p>
                <div className="mt-6 text-xs text-[#D4AF37]">— MICHELIN GUIDE 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="bg-[#2C1810] py-24 text-[#F8F1E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <div className="text-[#D4AF37] tracking-[4px] text-sm">SIGNATURE CREATIONS</div>
              <h3 className="font-display text-6xl tracking-tight">Our Most Cherished Nepali Dishes</h3>
            </div>
            <Link to="/menu" className="hidden md:flex items-center gap-3 text-sm group">
              VIEW FULL MENU 
              <div className="transition group-hover:translate-x-2">→</div>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Momo Platter",
                desc: "Steamed dumplings with traditional Nepali spices and chutneys",
                price: "₹850",
                img: "https://picsum.photos/id/106/600/400"
              },
              {
                name: "Thukpa with Chicken",
                desc: "Hearty Himalayan noodle soup with tender chicken and aromatic spices",
                price: "₹650",
                img: "https://picsum.photos/id/431/600/400"
              },
              {
                name: "Sel Roti with Achar",
                desc: "Traditional rice flour doughnuts served with spicy tomato pickle",
                price: "₹450",
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
          <div className="text-6xl mb-8">“</div>
          <p className="text-3xl md:text-4xl leading-tight text-[#2C1810] font-light max-w-3xl mx-auto">
            Every dish tells a story — of ancient Himalayan spice routes, of family kitchens passed down through generations, 
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
