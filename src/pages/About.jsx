import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Leaf, Users, Heart, Clock } from 'lucide-react';

const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let startTime;
        
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const currentCount = Math.floor(progress * end);
          setCount(currentCount);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };
        
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.6 });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const philosophyCards = [
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Farm to Table",
      desc: "We partner directly with local organic farms across Maharashtra to ensure the freshest ingredients reach your plate within hours of harvest.",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Family Recipes",
      desc: "Each dish is rooted in recipes passed down through generations of Indian home cooks, lovingly refined by our culinary team.",
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Award Winning",
      desc: "Recognized by Michelin, Asia's 50 Best Restaurants, and India's National Culinary Awards for our commitment to excellence.",
      color: "from-rose-600 to-purple-600"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Indian Hospitality",
      desc: "We treat every guest like family. Our warm, attentive service is as important as the food itself.",
      color: "from-indigo-600 to-blue-600"
    }
  ];

  const timelineEvents = [
    {
      year: "2010",
      title: "The Beginning",
      desc: "Chef Vikram Singh opens Spice Garden with just 18 seats in a small Colaba storefront, introducing Mumbai to refined regional Indian cuisine."
    },
    {
      year: "2013",
      title: "First Recognition",
      desc: "Named 'Best New Restaurant' by Mumbai Food & Wine. Our Butter Chicken becomes an instant classic."
    },
    {
      year: "2016",
      title: "Expansion",
      desc: "Moved to our current elegant location on Marine Drive overlooking the Arabian Sea. Private dining rooms added."
    },
    {
      year: "2019",
      title: "Michelin Recognition",
      desc: "Received Bib Gourmand distinction. Our tasting menu concept launched to critical acclaim."
    },
    {
      year: "2022",
      title: "Sustainability Focus",
      desc: "Established direct relationships with 12 regional farms. Zero-waste kitchen initiative implemented."
    },
    {
      year: "2024",
      title: "Today",
      desc: "Celebrating 14 years. Named one of Asia's 50 Best Restaurants. Continuing to evolve while honoring our roots."
    }
  ];

  const suppliers = [
    { name: "Aarav Farms", location: "Pune, Maharashtra", product: "Organic vegetables & herbs", image: "https://picsum.photos/id/1016/600/340" },
    { name: "Saffron Valley", location: "Kashmir", product: "Premium saffron & spices", image: "https://picsum.photos/id/870/600/340" },
    { name: "Coastal Catch", location: "Goa", product: "Fresh sustainable seafood", image: "https://picsum.photos/id/201/600/340" },
    { name: "Heritage Dairy", location: "Gujarat", product: "Artisanal paneer & ghee", image: "https://picsum.photos/id/312/600/340" },
  ];

  return (
    <div className="bg-[#F8F1E3]">
      <Navbar />

      {/* HERO BANNER */}
      <div className="relative h-[70vh] flex items-center bg-[#2C1810] overflow-hidden">
        <motion.div 
          style={{ y: parallaxY }}
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('https://picsum.photos/id/1015/2000/1200')",
            filter: 'brightness(0.45) contrast(1.15)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#2C1810]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="inline tracking-[6px] text-[#D4AF37] text-sm font-medium mb-6 block">OUR LEGACY • EST. 2010</div>
          <h1 className="font-display text-7xl md:text-8xl tracking-[-2px] leading-[1.05] mb-8">
            A STORY WRITTEN<br />IN SPICE
          </h1>
          <p className="max-w-lg mx-auto text-lg text-white/80">From humble beginnings to Mumbai's most celebrated fine dining destination</p>
        </div>
        
        <div className="absolute bottom-12 left-1/2 flex flex-col items-center text-white/60 text-xs tracking-widest">
          SCROLL TO BEGIN THE JOURNEY
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="mt-6"
          >
            ↓
          </motion.div>
        </div>
      </div>

      {/* OUR STORY - SPLIT LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <div className="sticky top-28">
              <div className="uppercase text-[#E67E22] text-sm tracking-[3px]">CHAPTER ONE</div>
              <h2 className="font-display text-[#2C1810] text-6xl leading-none tracking-tighter mt-3 mb-10">
                Our Story
              </h2>
              
              <div className="prose prose-lg text-[#3F2A1F] max-w-none">
                <p className="text-xl leading-relaxed">
                  Founded in 2010 by Chef Vikram Singh, Spice Garden began as a modest 18-seat restaurant with a simple mission: to bring the soul of Indian home cooking to fine dining.
                </p>
                <p className="mt-8">
                  What started as an intimate neighborhood establishment quickly gained recognition for its refined approach to regional Indian cuisine. By honoring traditional family recipes while incorporating modern techniques and the finest ingredients, we created something truly special.
                </p>
                <p className="mt-8">
                  Today, our Marine Drive location has become a destination for those seeking an authentic yet elevated Indian dining experience. Every plate tells a story — of ancient spice routes, cherished family traditions, and our deep respect for India's incredible culinary heritage.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="aspect-[4/5] bg-[#2C1810] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://picsum.photos/id/64/800/1100" 
                  alt="Spice Garden Interior" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl max-w-[260px]"
              >
                <div className="text-[#D4AF37] text-xs tracking-widest mb-4">OUR ROOTS</div>
                <div className="text-[#2C1810] font-display text-4xl leading-none tracking-tight">From the kitchens of Rajasthan to the tables of Mumbai</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* CHEF PROFILE */}
      <div className="bg-[#2C1810] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://picsum.photos/id/64/800/900" 
                  alt="Chef Vikram Singh" 
                  className="rounded-3xl shadow-2xl" 
                />
                <div className="absolute -bottom-6 right-6 bg-[#D4AF37] text-[#2C1810] px-8 py-6 rounded-3xl text-center shadow-xl">
                  <div className="text-xs tracking-widest">EXECUTIVE CHEF</div>
                  <div className="font-display text-4xl mt-1">VIKRAM SINGH</div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="max-w-lg">
                <div className="uppercase text-[#D4AF37] text-sm tracking-widest mb-2">MEET THE VISIONARY</div>
                <h3 className="font-display text-6xl tracking-tighter leading-none">Chef Vikram Singh</h3>
                
                <div className="mt-8 text-[#D4AF37]/80 text-lg leading-relaxed">
                  With over 25 years of experience across India's finest kitchens and prestigious establishments in Europe and the Middle East, Chef Vikram's philosophy is simple: respect the ingredients, honor tradition, and never stop innovating.
                </div>
                
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {[
                    { number: "14", label: "YEARS AT SPICE GARDEN" },
                    { number: "28", label: "YEARS OF EXPERIENCE" },
                    { number: "9", label: "MAJOR AWARDS" }
                  ].map((stat, index) => (
                    <div key={index} className="border border-white/20 p-6 rounded-3xl">
                      <div className="text-5xl font-display text-[#D4AF37]">{stat.number}</div>
                      <div className="text-xs tracking-widest text-white/60 mt-2 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16">
                  <div className="text-[#D4AF37] text-sm tracking-widest mb-6">AWARDS &amp; RECOGNITION</div>
                  <div className="flex flex-wrap gap-3">
                    {["MICHELIN BIB GOURMAND", "ASIA'S 50 BEST", "NATIONAL CULINARY AWARD", "TIMES FOOD AWARD"].map((award, i) => (
                      <div key={i} className="bg-white/10 text-xs border border-white/30 px-5 py-4 rounded-2xl">{award}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR PHILOSOPHY */}
      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div className="text-[#E67E22] tracking-[4px] text-sm">OUR VALUES</div>
          <h2 className="font-display text-6xl text-[#2C1810] tracking-tight mt-3">The Spice Garden Philosophy</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group bg-white rounded-3xl p-10 shadow hover:shadow-2xl transition-all border border-transparent hover:border-[#D4AF37]/30"
            >
              <div className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color} text-white mb-8 transition-all group-hover:scale-110`}>
                {card.icon}
              </div>
              <h4 className="font-display text-3xl text-[#2C1810] tracking-tight mb-4">{card.title}</h4>
              <p className="text-[#5C2A2A] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="bg-[#2C1810] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#D4AF37] text-sm tracking-widest">OUR JOURNEY</div>
            <h2 className="font-display text-6xl mt-3 tracking-tighter">From Vision to Legacy</h2>
          </div>
          
          <div className="space-y-16 relative before:absolute before:left-8 before:top-6 before:bottom-6 before:w-px before:bg-white/20">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-[70px,1fr] gap-10 relative"
              >
                <div className="font-display text-6xl text-[#D4AF37] font-light z-10">{event.year}</div>
                
                <div className="pt-4">
                  <div className="w-5 h-5 rounded-full border-[3px] border-[#D4AF37] absolute left-[29px] -mt-1"></div>
                  <h4 className="font-medium text-2xl text-white mb-3">{event.title}</h4>
                  <p className="text-white/70 leading-relaxed">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATED STATS */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: 50000, suffix: "+", label: "Happy Guests" },
            { number: 100, suffix: "+", label: "Authentic Recipes" },
            { number: 14, suffix: "", label: "Years of Excellence" },
            { number: 5, suffix: "", label: "Star Rating", icon: "★" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center border border-[#EDE4D4] rounded-3xl py-14 px-6"
            >
              <div className="text-7xl font-display text-[#2C1810] tracking-tighter mb-2">
                <Counter end={stat.number} suffix={stat.suffix} />
                {stat.icon}
              </div>
              <div className="text-sm uppercase tracking-[2px] text-[#D4AF37]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SUPPLIERS */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="text-[#E67E22] text-sm tracking-widest">BEHIND THE SCENES</div>
            <h2 className="font-display text-6xl text-[#2C1810] tracking-tighter">Our Trusted Partners</h2>
          </div>
          <p className="max-w-xs text-right text-[#5C2A2A]">We work directly with small family farms and artisan producers who share our values of quality, sustainability and respect for tradition.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {suppliers.map((supplier, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden border border-[#EDE4D4] bg-white"
            >
              <div className="h-56 relative">
                <img src={supplier.image} alt={supplier.name} className="absolute inset-0 w-full h-full object-cover transition-all group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="font-medium text-xl tracking-tight">{supplier.name}</div>
                  <div className="text-xs text-white/70">{supplier.location}</div>
                </div>
              </div>
              <div className="px-6 py-7 text-sm text-[#5C2A2A]">
                {supplier.product}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
