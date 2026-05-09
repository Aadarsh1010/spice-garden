import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Calendar, ChefHat, Award, ChevronDown, Check } from 'lucide-react';

const PrivateDining = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    room: '',
    specialRequests: ''
  });

  const rooms = [
    {
      id: 1,
      name: "The Maharaja Suite",
      capacity: "Up to 20 guests",
      minSpend: "$500",
      image: "https://picsum.photos/id/1015/800/600",
      features: [
        "Opulent hand-painted murals",
        "Crystal chandeliers",
        "Private bar station",
        "Dedicated AV system",
        "Panoramic city views"
      ],
      description: "Our most luxurious private room, perfect for intimate celebrations and important business dinners."
    },
    {
      id: 2,
      name: "The Spice Room",
      capacity: "Up to 10 guests",
      minSpend: "$250",
      image: "https://picsum.photos/id/201/800/600",
      features: [
        "Intimate and romantic setting",
        "Signature saffron lighting",
        "Custom scent diffusion",
        "Fireplace feature wall",
        "Perfect for proposals"
      ],
      description: "An intimate jewel box of a room ideal for smaller gatherings, anniversaries, and special occasions."
    },
    {
      id: 3,
      name: "The Garden Terrace",
      capacity: "Up to 50 guests",
      minSpend: "$1000",
      image: "https://picsum.photos/id/1016/800/600",
      features: [
        "Stunning open-air setting",
        "Arabian Sea views",
        "Custom lighting & sound",
        "Dedicated bar & service kitchen",
        "Weather-protected pergola"
      ],
      description: "Our breathtaking outdoor terrace perfect for larger celebrations, weddings, and corporate events."
    }
  ];

  const occasions = [
    { 
      title: "Birthdays", 
      icon: "🎂", 
      desc: "Make your celebration unforgettable with a bespoke menu and private room" 
    },
    { 
      title: "Weddings", 
      icon: "💍", 
      desc: "Intimate ceremonies, rehearsal dinners, or reception after-parties" 
    },
    { 
      title: "Corporate", 
      icon: "💼", 
      desc: "Board meetings, client dinners, product launches and team celebrations" 
    },
    { 
      title: "Anniversaries", 
      icon: "💕", 
      desc: "Romantic dinners and milestone celebrations in beautiful surroundings" 
    }
  ];

  const faqs = [
    {
      q: "What is the minimum spend requirement?",
      a: "Minimum spends vary by room and day of the week. They range from $250 for The Spice Room on weekdays to $1500 for The Garden Terrace on weekends. This covers the exclusive use of the room and contributes toward your food and beverage."
    },
    {
      q: "Can you accommodate dietary requirements?",
      a: "Absolutely. Our chefs are happy to create completely bespoke menus for vegetarian, vegan, gluten-free, nut-free, and other dietary needs. We require advance notice of at least 72 hours for special menus."
    },
    {
      q: "Is there a corkage fee?",
      a: "We have a nominal corkage fee of $35 per bottle for wine and $65 per bottle for spirits if you wish to bring your own. Our sommelier is also happy to make recommendations from our award-winning wine list."
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend booking at least 4-6 weeks in advance for weekends and 2-3 weeks for weekdays. For peak seasons (December and wedding season) we recommend 3 months notice for larger parties."
    },
    {
      q: "Do you offer menu tasting sessions?",
      a: "Yes. For parties of 15 or more, we offer complimentary tasting sessions once the menu has been selected. These are typically scheduled 3-4 weeks before your event."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '', email: '', phone: '', eventType: '', date: '', guests: '', room: '', specialRequests: ''
      });
    }, 3200);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-[#F8F1E3]">
      <Navbar />
      
      {/* HERO */}
      <div className="relative h-[75vh] flex items-center bg-[#2C1810]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://picsum.photos/id/1015/2000/1200')",
            filter: 'brightness(0.45)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/90 to-transparent" />
        
        <div className="relative z-10 max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs tracking-widest px-8 py-3 rounded-3xl mb-8 border border-white/30">
            EXCLUSIVE EXPERIENCES
          </div>
          <h1 className="font-display text-white text-7xl md:text-8xl tracking-[-3px] leading-none mb-6">
            PRIVATE DINING
          </h1>
          <p className="text-white/80 max-w-md text-2xl">Create unforgettable memories in our beautifully appointed private spaces</p>
          
          <div className="flex gap-4 mt-12">
            <a href="#rooms" className="bg-[#D4AF37] hover:bg-amber-200 transition-colors text-[#2C1810] px-10 py-4 rounded-2xl font-medium">EXPLORE OUR ROOMS</a>
            <a href="#enquiry" className="border border-white/70 hover:bg-white/10 text-white px-10 py-4 rounded-2xl transition-all">ENQUIRE NOW</a>
          </div>
        </div>
      </div>

      {/* ROOMS SECTION */}
      <div id="rooms" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-[#E67E22] text-sm tracking-[4px]">EXCLUSIVE SPACES</div>
          <h2 className="font-display text-6xl text-[#2C1810] tracking-tight mt-3">Our Private Dining Rooms</h2>
          <p className="max-w-md mx-auto mt-6 text-[#5C2A2A]">From intimate gatherings to grand celebrations, we offer three distinct spaces to make your event extraordinary.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="relative h-64">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" />
                <div className="absolute top-6 right-6 bg-white text-[#2C1810] text-xs font-mono px-5 py-2.5 rounded-2xl shadow">
                  FROM {room.minSpend}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-display text-3xl tracking-tight text-[#2C1810]">{room.name}</h3>
                  <div className="flex items-center text-xs text-[#5C2A2A] gap-1">
                    <Users size={17} /> {room.capacity}
                  </div>
                </div>
                
                <p className="text-[#5C2A2A] text-[15px] leading-relaxed mb-8">{room.description}</p>
                
                <div className="mb-10">
                  <div className="uppercase text-xs tracking-widest text-[#D4AF37] mb-4">Signature Features</div>
                  <ul className="space-y-3">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className="text-emerald-500 mt-1" size={17} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => document.getElementById('enquiry').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 bg-[#2C1810] hover:bg-black text-white rounded-2xl text-sm tracking-widest transition-all active:scale-[0.985]"
                >
                  ENQUIRE ABOUT THIS ROOM
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OCCASIONS */}
      <div className="bg-[#2C1810] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#D4AF37] text-sm tracking-widest">CELEBRATE WITH US</div>
            <h2 className="font-display text-6xl tracking-tighter mt-3">Perfect for Every Occasion</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-[#D4AF37]/40 transition-all group"
              >
                <div className="text-6xl mb-8 transition-transform group-hover:scale-110 inline-block">{occasion.icon}</div>
                <h4 className="font-display text-3xl mb-4">{occasion.title}</h4>
                <p className="text-white/70 text-[15px]">{occasion.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CUSTOM MENU SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <img 
              src="https://picsum.photos/id/431/800/900" 
              alt="Chef preparing custom menu" 
              className="rounded-3xl shadow-2xl" 
            />
          </div>
          
          <div className="md:col-span-7">
            <div className="text-[#E67E22] text-sm tracking-widest mb-4">PERSONALIZED FOR YOU</div>
            <h2 className="font-display text-[#2C1810] text-6xl tracking-tighter leading-none mb-8">Bespoke Menu Creation</h2>
            
            <div className="max-w-lg text-lg text-[#5C2A2A]">
              Our chefs work closely with you to design a completely custom menu tailored to your event, dietary requirements, and vision. From traditional tasting menus to fusion concepts, the possibilities are endless.
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: "7-Course Tasting", price: "from $145 pp" },
                { title: "Signature Banquet", price: "from $95 pp" },
                { title: "Themed Experiences", price: "from $175 pp" }
              ].map((menu, i) => (
                <div key={i} className="border border-[#EDE4D4] p-6 rounded-3xl">
                  <div className="font-medium text-lg">{menu.title}</div>
                  <div className="text-[#D4AF37] text-sm mt-6">{menu.price}</div>
                </div>
              ))}
            </div>
            
            <div className="text-xs text-[#5C2A2A] mt-12 max-w-xs">
              All menus can be fully customized. Vegetarian, vegan, and allergen-free options are always available.
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#E67E22] tracking-widest text-sm">HAVE QUESTIONS?</div>
            <h2 className="font-display text-6xl text-[#2C1810] mt-3 tracking-tighter">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                onClick={() => toggleFAQ(index)}
                className="border border-[#EDE4D4] rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="flex items-center justify-between px-8 py-7">
                  <div className="font-medium pr-8">{faq.q}</div>
                  <ChevronDown 
                    className={`transition-transform flex-shrink-0 ${openFAQ === index ? 'rotate-180' : ''}`} 
                    size={22}
                  />
                </div>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-[#5C2A2A] text-[15.2px] leading-relaxed border-t pt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ENQUIRY FORM */}
      <div id="enquiry" className="bg-[#2C1810] py-24 text-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#D4AF37] text-sm tracking-[3px]">START PLANNING YOUR EVENT</div>
            <h2 className="font-display text-6xl mt-4 tracking-tighter">Make An Enquiry</h2>
            <p className="mt-6 text-[#D4AF37]/70">Our events team typically responds within 24 hours</p>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-[#D4AF37] mb-3">YOUR NAME</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] rounded-2xl px-7 py-6 text-white placeholder:text-white/40" 
                    placeholder="Priya Sharma" 
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-[#D4AF37] mb-3">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] rounded-2xl px-7 py-6 text-white placeholder:text-white/40" 
                    placeholder="you@email.com" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-[#D4AF37] mb-3">PHONE NUMBER</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] rounded-2xl px-7 py-6 text-white placeholder:text-white/40" 
                    placeholder="+91 98765 43210" 
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-[#D4AF37] mb-3">EVENT TYPE</label>
                  <select 
                    name="eventType" 
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] rounded-2xl px-7 py-6 text-white"
                  >
                    <option value="">Select occasion</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="wedding">Wedding / Reception</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other Special Occasion</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-xs tracking-widest text-[#D4AF37] mb-3">PREFERRED DATE</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] rounded-2xl px-7 py-6 text-white" 
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-[#D4AF37] mb-3">GUESTS</label>
                  <select 
                    name="guests" 
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] rounded-2xl px-7 py-6 text-white"
                  >
                    <option value="">Select</option>
                    <option value="2-6">2 - 6 guests</option>
                    <option value="8-12">8 - 12 guests</option>
                    <option value="15-25">15 - 25 guests</option>
                    <option value="30+">30+ guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-[#D4AF37] mb-3">PREFERRED ROOM</label>
                  <select 
                    name="room" 
                    value={formData.room}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] rounded-2xl px-7 py-6 text-white"
                  >
                    <option value="">Any room</option>
                    <option value="maharaja">The Maharaja Suite</option>
                    <option value="spice">The Spice Room</option>
                    <option value="terrace">The Garden Terrace</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest text-[#D4AF37] mb-3">SPECIAL REQUESTS OR NOTES</label>
                <textarea 
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] rounded-3xl px-7 py-6 text-white placeholder:text-white/40 resize-y"
                  placeholder="Dietary requirements, preferred cuisine style, floral preferences, entertainment needs..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-7 bg-[#D4AF37] hover:bg-white text-[#2C1810] text-lg tracking-widest rounded-3xl transition-all active:scale-[0.985]"
              >
                SEND ENQUIRY
              </button>
            </form>
          ) : (
            <div className="text-center py-20">
              <div className="mx-auto w-20 h-20 bg-emerald-400/20 rounded-full flex items-center justify-center mb-8">
                <Check className="text-emerald-400" size={42} />
              </div>
              <h3 className="font-display text-5xl tracking-tight">Thank You</h3>
              <p className="mt-6 text-xl text-[#D4AF37]">Your enquiry has been received. Our Private Dining team will contact you within 24 hours.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivateDining;
