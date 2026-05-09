import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-[#F8F1E3]">
      <Navbar />
      
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="md:col-span-2 pt-8">
              <div>
                <div className="inline text-xs font-medium px-5 py-2 rounded-3xl bg-[#D4AF37] text-[#2C1810]">GET IN TOUCH</div>
                <h1 className="font-display text-[#2C1810] text-6xl tracking-tighter mt-6 leading-none">We'd love to hear from you</h1>
              </div>
              
              <div className="mt-16 space-y-14">
                <div className="flex gap-6">
                  <div className="text-[#D4AF37]">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <div className="font-medium text-xl">Spice Garden</div>
                    <div className="text-[#5C2A2A] mt-3 leading-relaxed">
                      42 Marine Drive,<br />
                      Colaba, Mumbai,<br />
                      Maharashtra 400005
                    </div>
                    <a href="#" className="text-xs inline-block mt-6 border-b border-[#D4AF37] text-[#D4AF37] pb-0.5">GET DIRECTIONS →</a>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="text-[#D4AF37]">
                    <Phone size={32} />
                  </div>
                  <div>
                    <a href="tel:+912222884455" className="font-medium text-3xl hover:text-[#D4AF37] transition-colors">+91 22 2288 4455</a>
                    <div className="text-sm text-[#5C2A2A] mt-4">Reservations &amp; Inquiries</div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="text-[#D4AF37]">
                    <Mail size={32} />
                  </div>
                  <div>
                    <a href="mailto:hello@spicegarden.in" className="font-medium text-xl hover:text-[#D4AF37] transition-colors">hello@spicegarden.in</a>
                    <div className="text-xs text-[#5C2A2A] mt-8 tracking-widest">PRESS &amp; MEDIA: press@spicegarden.in</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-20">
                <div className="flex items-center gap-2 text-xs tracking-widest text-[#5C2A2A]">
                  <Clock size={17} /> HOURS
                </div>
                <div className="mt-6 text-sm space-y-2 text-[#5C2A2A]">
                  <div className="flex justify-between">
                    <span>Tuesday — Sunday</span>
                    <span className="font-light">12 PM – 3 PM &amp; 7 PM – 11 PM</span>
                  </div>
                  <div>Monday: Closed</div>
                </div>
              </div>
            </div>
            
            {/* Map / Image Placeholder */}
            <div className="md:col-span-3 rounded-3xl overflow-hidden shadow-2xl relative h-[640px] bg-[#2C1810]">
              <img 
                src="https://picsum.photos/id/1015/1200/900" 
                alt="Spice Garden Location" 
                className="absolute inset-0 w-full h-full object-cover opacity-75" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"></div>
              
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <div className="uppercase text-[#D4AF37] text-xs mb-2 tracking-widest">LOCATED ON</div>
                <div className="font-display text-5xl">MARINE DRIVE</div>
                <div className="text-white/70 text-sm mt-8 max-w-[260px]">Overlooking the beautiful Arabian Sea with the iconic Queen's Necklace view</div>
              </div>
              
              <div className="absolute top-8 right-8 bg-white/95 text-[#2C1810] text-xs px-5 py-6 rounded-2xl backdrop-blur">
                <div className="font-mono text-[#D4AF37]">GPS</div>
                <div>18.9271° N</div>
                <div>72.8242° E</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="bg-[#2C1810] mt-20 py-20">
        <div className="max-w-xl mx-auto text-center px-6">
          <span className="px-5 py-2 text-xs border border-[#D4AF37] text-[#D4AF37] rounded-3xl">LAST NOTE</span>
          <h2 className="font-display text-white text-6xl tracking-tighter mt-7">We can't wait to welcome you</h2>
          <p className="mt-8 text-[#D4AF37]/70">Whether it's your first visit or your twentieth, we promise an evening of exceptional Indian cuisine and warm hospitality.</p>
          
          <div className="flex justify-center gap-4 mt-12">
            <a href="/reservations" className="bg-[#D4AF37] text-[#2C1810] px-10 py-4 rounded-2xl font-medium">BOOK A TABLE</a>
            <a href="/private-dining" className="border border-white/40 text-white px-10 py-4 rounded-2xl">HOST AN EVENT</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
