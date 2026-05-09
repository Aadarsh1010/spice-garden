import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C1810] text-[#F8F1E3] pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter */}
        <div className="border border-[#D4AF37]/20 rounded-3xl p-12 mb-20 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-5/12">
            <div className="uppercase text-[#D4AF37] text-sm tracking-widest mb-3">STAY IN THE KNOW</div>
            <div className="font-display text-4xl tracking-tight leading-none">Join our table.</div>
            <p className="text-[#D4AF37]/70 mt-4">Receive seasonal menus, chef's specials, and exclusive invitations.</p>
          </div>
          
          <div className="flex-1 w-full">
            <form className="flex">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 bg-transparent border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-l-3xl px-8 py-6 text-white placeholder:text-[#D4AF37]/40 outline-none"
              />
              <button 
                type="submit"
                className="bg-[#D4AF37] hover:bg-white hover:text-[#2C1810] transition-all px-14 rounded-r-3xl text-sm font-medium tracking-widest text-[#2C1810]"
              >
                SUBSCRIBE
              </button>
            </form>
            <div className="text-[10px] text-[#D4AF37]/50 mt-4">We respect your inbox. Unsubscribe anytime.</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16">
          {/* Brand & Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] via-amber-300 to-[#E67E22] flex items-center justify-center shadow-inner">
                <span className="text-[#2C1810] text-4xl">ॐ</span>
              </div>
              <div>
                <div className="font-display text-5xl tracking-tighter">SPICE GARDEN</div>
                <div className="text-xs text-[#D4AF37] tracking-[3px]">MUMBAI • EST 2010</div>
              </div>
            </div>
            
            <p className="max-w-sm text-[#D4AF37]/70 text-[15.5px] leading-relaxed">
              An oasis of authentic Indian fine dining where centuries-old recipes are lovingly reinterpreted with the finest ingredients and modern technique.
            </p>
            
            <div className="flex gap-6 mt-12">
              <a href="#" className="hover:text-[#D4AF37] transition-colors"><Instagram size={26} /></a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors"><Facebook size={26} /></a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors"><Twitter size={26} /></a>
            </div>
            
            <div className="mt-16 flex gap-8">
              <div>
                <div className="text-xs text-[#D4AF37]/60">TRIPADVISOR</div>
                <div className="text-4xl font-light text-amber-400">5.0</div>
              </div>
              <div>
                <div className="text-xs text-[#D4AF37]/60">GOOGLE</div>
                <div className="text-4xl font-light text-amber-400">4.9</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="uppercase text-[#D4AF37] text-sm tracking-widest mb-8">EXPLORE</div>
            <div className="flex flex-col gap-y-4 text-sm">
              <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              <Link to="/menu" className="hover:text-[#D4AF37] transition-colors">The Menu</Link>
              <Link to="/about" className="hover:text-[#D4AF37] transition-colors">Our Story</Link>
              <Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</Link>
              <Link to="/private-dining" className="hover:text-[#D4AF37] transition-colors">Private Dining</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="uppercase text-[#D4AF37] text-sm tracking-widest mb-8">EXPERIENCE</div>
            <div className="flex flex-col gap-y-4 text-sm">
              <Link to="/reservations" className="hover:text-[#D4AF37] transition-colors">Reservations</Link>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Wine List</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Chef's Table</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Events Calendar</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Gift Vouchers</a>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-3">
            <div className="uppercase text-[#D4AF37] text-sm tracking-widest mb-8">VISIT US</div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-[#D4AF37] mt-1" size={22} />
                <div className="text-sm">
                  42 Marine Drive<br />
                  Colaba, Mumbai<br />
                  Maharashtra 400005
                </div>
              </div>
              
              <div className="flex gap-4">
                <Phone className="text-[#D4AF37] mt-1" size={22} />
                <div>
                  <a href="tel:+912228884455" className="block hover:text-[#D4AF37]">+91 22 2888 4455</a>
                  <a href="mailto:reservations@spicegarden.in" className="block text-xs text-[#D4AF37]/70 mt-1 hover:text-[#D4AF37]">reservations@spicegarden.in</a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Clock className="text-[#D4AF37] mt-1" size={22} />
                <div className="text-sm leading-tight">
                  Lunch: Tue–Sun 12:00 – 15:00<br />
                  Dinner: Tue–Sun 19:00 – 22:30<br />
                  <span className="text-[#D4AF37]/60 text-xs">Closed Mondays</span>
                </div>
              </div>
            </div>
            
            {/* Awards */}
            <div className="mt-16">
              <div className="text-xs text-[#D4AF37]/60 mb-4 tracking-widest">RECOGNIZED BY</div>
              <div className="flex gap-6 text-4xl opacity-75">
                <div>★</div>
                <div>🍷</div>
                <div>🏆</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Map & Legal */}
        <div className="mt-24 pt-12 border-t border-white/10 grid md:grid-cols-12 gap-8 text-xs">
          <div className="md:col-span-7">
            <div className="bg-[#1F130D] h-56 rounded-3xl flex items-center justify-center text-[#D4AF37]/30 text-sm tracking-widest border border-[#D4AF37]/10">
              MINI INTERACTIVE MAP WOULD GO HERE
            </div>
          </div>
          
          <div className="md:col-span-5 text-[#D4AF37]/50 flex flex-col justify-between">
            <div>
              Dress code is smart casual. We respectfully request no athletic wear or flip-flops.
            </div>
            
            <div className="mt-auto pt-8 text-[10px] leading-loose">
              © {new Date().getFullYear()} SPICE GARDEN. ALL RIGHTS RESERVED.<br />
              A HERITAGE BRAND BY THE SINGH FAMILY
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center py-8 text-[10px] text-[#D4AF37]/30 tracking-[1.5px] border-t border-white/5 mt-12">
        CRAFTED WITH PASSION • A JOURNEY THROUGH INDIA'S FINEST FLAVOURS
      </div>
    </footer>
  );
};

export default Footer;
