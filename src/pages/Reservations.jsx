import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, Users, MapPin, Shirt, AlertCircle, Check } from 'lucide-react';

const Reservations = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 2,
    occasion: '',
    name: '',
    email: '',
    phone: '',
    dietary: '',
    seating: 'Indoor',
  });
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [availability, setAvailability] = useState(12);

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  // Generate time slots from 12:00 PM to 10:00 PM in 30 min intervals
  const timeSlots = [];
  for (let h = 12; h <= 22; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour = h % 12 || 12;
      const ampm = h >= 12 ? 'PM' : 'AM';
      const time = `${hour}:${m.toString().padStart(2, '0')} ${ampm}`;
      timeSlots.push(time);
    }
  }

  const occasions = [
    'Birthday', 'Anniversary', 'Business Dinner', 
    'Date Night', 'Proposal', 'Other'
  ];

  const seatingOptions = ['Indoor', 'Outdoor', 'Bar'];

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate booking
    const ref = 'SG' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsBooked(true);
    setShowConfetti(true);
    
    // Stop confetti after 4 seconds
    setTimeout(() => setShowConfetti(false), 4200);
  };

  // Simple canvas confetti
  useEffect(() => {
    if (!showConfetti) return;
    
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '100';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#D4AF37', '#E67E22', '#2C1810', '#F8F1E3'];
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 9 + 6;
        this.speed = Math.random() * 4 + 3;
        this.angle = Math.random() * Math.PI * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * 0.1 - 0.05;
        this.spin = 0;
      }
      
      update() {
        this.y += this.speed;
        this.spin += this.rotation;
        this.angle += 0.05;
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.spin);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
      }
    }
    
    for (let i = 0; i < 180; i++) {
      particles.push(new Particle());
    }
    
    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        p.draw();
        
        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrame);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, [showConfetti]);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-[#F8F1E3] min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-12 bg-[#2C1810]">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-3 bg-[#D4AF37]/10 text-[#D4AF37] px-8 py-3 rounded-3xl text-sm tracking-widest mb-6">
            RESERVE YOUR TABLE
          </div>
          <h1 className="font-display text-7xl tracking-tighter">Make a Reservation</h1>
          <p className="mt-6 text-[#D4AF37] max-w-md mx-auto">Experience fine Indian dining at its most intimate</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
        {/* MAIN BOOKING WIZARD */}
        <div className="flex-1">
          <div className="flex items-center gap-8 mb-12 border-b pb-8">
            {[1, 2, 3].map((s) => (
              <div 
                key={s}
                className={`flex-1 h-2.5 rounded-full transition-all ${step >= s ? 'bg-[#D4AF37]' : 'bg-[#EDE4D4]'}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: DATE, TIME, GUESTS */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="max-w-lg"
              >
                <h2 className="font-display text-5xl tracking-tight mb-3">When are you joining us?</h2>
                <p className="text-[#5C2A2A] mb-12">Select your preferred date and time</p>
                
                <div className="space-y-10">
                  <div>
                    <label className="block text-xs tracking-widest text-[#5C2A2A] mb-4">DATE</label>
                    <input 
                      type="date" 
                      value={formData.date}
                      min={today}
                      max={maxDateStr}
                      onChange={(e) => updateForm('date', e.target.value)}
                      className="w-full bg-white border border-[#EDE4D4] focus:border-[#D4AF37] rounded-2xl px-8 py-7 text-2xl font-light"
                    />
                    {formData.date && (
                      <div className="mt-3 text-sm text-[#D4AF37]">{formatDate(formData.date)}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest text-[#5C2A2A] mb-4">TIME</label>
                    <div className="grid grid-cols-4 gap-3">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          onClick={() => updateForm('time', time)}
                          className={`py-4 text-sm border rounded-2xl transition-all ${formData.time === time 
                            ? 'bg-[#2C1810] text-white border-[#2C1810]' 
                            : 'hover:bg-white border-[#EDE4D4]'}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest text-[#5C2A2A] mb-4">NUMBER OF GUESTS</label>
                    <div className="flex items-center gap-6 bg-white border border-[#EDE4D4] rounded-3xl px-8 py-6">
                      <button 
                        onClick={() => updateForm('guests', Math.max(1, formData.guests - 1))}
                        className="w-12 h-12 flex items-center justify-center text-4xl text-[#D4AF37] hover:bg-[#F8F1E3] rounded-2xl transition-all active:scale-95"
                      >
                        −
                      </button>
                      <div className="flex-1 text-center">
                        <div className="text-6xl font-display text-[#2C1810]">{formData.guests}</div>
                        <div className="text-xs tracking-widest text-[#5C2A2A] -mt-1">GUESTS</div>
                      </div>
                      <button 
                        onClick={() => updateForm('guests', Math.min(20, formData.guests + 1))}
                        className="w-12 h-12 flex items-center justify-center text-4xl text-[#D4AF37] hover:bg-[#F8F1E3] rounded-2xl transition-all active:scale-95"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-xs text-center text-[#5C2A2A] mt-4">Maximum 20 guests per booking</div>
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  disabled={!formData.date || !formData.time}
                  className="mt-16 w-full disabled:opacity-40 py-7 bg-[#2C1810] text-white text-lg tracking-widest rounded-3xl transition-all active:scale-[0.985]"
                >
                  CONTINUE TO DETAILS →
                </button>
              </motion.div>
            )}

            {/* STEP 2: PERSONAL DETAILS */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="max-w-lg"
              >
                <h2 className="font-display text-5xl tracking-tight mb-3">Tell us about yourself</h2>
                <p className="text-[#5C2A2A] mb-12">We'd love to make your evening perfect</p>
                
                <div className="space-y-9">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs tracking-widest text-[#5C2A2A] block mb-3">FULL NAME</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => updateForm('name', e.target.value)}
                        placeholder="Aarav Sharma"
                        className="w-full bg-white border border-[#EDE4D4] focus:border-[#D4AF37] rounded-2xl px-7 py-6 text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest text-[#5C2A2A] block mb-3">PHONE</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => updateForm('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white border border-[#EDE4D4] focus:border-[#D4AF37] rounded-2xl px-7 py-6 text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-widest text-[#5C2A2A] block mb-3">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                      placeholder="you@email.com"
                      className="w-full bg-white border border-[#EDE4D4] focus:border-[#D4AF37] rounded-2xl px-7 py-6 text-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs tracking-widest text-[#5C2A2A] block mb-3">OCCASION</label>
                    <div className="flex flex-wrap gap-3">
                      {occasions.map(occasion => (
                        <button
                          key={occasion}
                          onClick={() => updateForm('occasion', occasion)}
                          className={`px-7 py-3 text-sm rounded-3xl border transition-all ${formData.occasion === occasion 
                            ? 'bg-[#2C1810] text-white border-[#2C1810]' 
                            : 'border-[#EDE4D4] hover:bg-white'}`}
                        >
                          {occasion}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-widest text-[#5C2A2A] block mb-3">SEATING PREFERENCE</label>
                    <div className="flex gap-4">
                      {seatingOptions.map(pref => (
                        <button
                          key={pref}
                          onClick={() => updateForm('seating', pref)}
                          className={`flex-1 py-5 text-sm rounded-3xl border transition-all ${formData.seating === pref 
                            ? 'bg-[#2C1810] text-white' 
                            : 'hover:bg-white border-[#EDE4D4]'}`}
                        >
                          {pref}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-widest text-[#5C2A2A] block mb-3">DIETARY REQUIREMENTS OR SPECIAL REQUESTS</label>
                    <textarea 
                      value={formData.dietary}
                      onChange={(e) => updateForm('dietary', e.target.value)}
                      placeholder="Vegetarian, nut allergy, anniversary surprise, etc."
                      className="w-full h-32 bg-white border border-[#EDE4D4] focus:border-[#D4AF37] rounded-3xl px-7 py-6 resize-y"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-16">
                  <button 
                    onClick={prevStep}
                    className="flex-1 py-7 border border-[#2C1810] text-[#2C1810] rounded-3xl text-lg tracking-widest hover:bg-[#F8F1E3]"
                  >
                    BACK
                  </button>
                  <button 
                    onClick={nextStep}
                    disabled={!formData.name || !formData.email}
                    className="flex-1 py-7 bg-[#2C1810] disabled:opacity-40 text-white text-lg tracking-widest rounded-3xl transition-all active:scale-[0.985]"
                  >
                    REVIEW BOOKING →
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: CONFIRMATION */}
            {step === 3 && !isBooked && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="max-w-lg"
              >
                <h2 className="font-display text-5xl tracking-tight mb-3">Confirm Your Reservation</h2>
                <p className="text-[#5C2A2A] mb-12">Please review your details below</p>
                
                <div className="bg-white border border-[#EDE4D4] rounded-3xl p-10 space-y-8">
                  <div className="flex justify-between border-b pb-6">
                    <div>
                      <div className="text-xs text-[#5C2A2A]">DATE &amp; TIME</div>
                      <div className="font-medium mt-1">{formatDate(formData.date)} at {formData.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#5C2A2A]">GUESTS</div>
                      <div className="font-medium mt-1">{formData.guests} people</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-[#5C2A2A]">GUEST NAME</div>
                    <div className="font-medium mt-1">{formData.name}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs text-[#5C2A2A]">EMAIL</div>
                      <div className="font-medium text-sm mt-1 break-all">{formData.email}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#5C2A2A]">PHONE</div>
                      <div className="font-medium mt-1">{formData.phone || '—'}</div>
                    </div>
                  </div>
                  
                  {formData.occasion && (
                    <div>
                      <div className="text-xs text-[#5C2A2A]">OCCASION</div>
                      <div className="font-medium mt-1">{formData.occasion}</div>
                    </div>
                  )}
                  
                  {formData.dietary && (
                    <div>
                      <div className="text-xs text-[#5C2A2A]">SPECIAL REQUESTS</div>
                      <div className="mt-2 text-sm text-[#5C2A2A] leading-snug border-l-2 border-[#D4AF37] pl-5">{formData.dietary}</div>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex items-center gap-3 text-xs bg-amber-50 border border-amber-200 text-amber-700 p-5 rounded-2xl">
                  <AlertCircle size={18} />
                  A member of our team will call to confirm your booking within 2 hours
                </div>

                <div className="flex gap-4 mt-12">
                  <button 
                    onClick={prevStep}
                    className="flex-1 py-7 border border-[#2C1810] text-[#2C1810] rounded-3xl text-lg tracking-widest hover:bg-[#F8F1E3]"
                  >
                    EDIT
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="flex-1 py-7 bg-[#D4AF37] text-[#2C1810] text-lg tracking-widest rounded-3xl transition-all active:scale-[0.985]"
                  >
                    CONFIRM RESERVATION
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SUCCESS SCREEN */}
          <AnimatePresence>
            {isBooked && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-lg text-center py-8"
              >
                <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="text-emerald-600" size={52} />
                </div>
                
                <h2 className="font-display text-6xl tracking-tighter text-[#2C1810]">You're Confirmed!</h2>
                <p className="mt-4 text-xl text-[#5C2A2A]">Reservation <span className="font-mono text-[#D4AF37]">{bookingRef}</span></p>
                
                <div className="mt-16 bg-white rounded-3xl p-10 text-left">
                  <div className="uppercase text-xs tracking-widest text-[#D4AF37] mb-6">YOUR RESERVATION</div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between">
                      <div className="text-[#5C2A2A]">Date &amp; Time</div>
                      <div className="text-right font-medium">{formatDate(formData.date)}<br />{formData.time}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-[#5C2A2A]">Guests</div>
                      <div className="font-medium">{formData.guests} people • {formData.seating}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-[#5C2A2A]">Name</div>
                      <div className="font-medium">{formData.name}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-sm text-[#5C2A2A]">
                  A confirmation has been sent to <span className="font-medium">{formData.email}</span>.<br />
                  We look forward to welcoming you at Spice Garden.
                </div>
                
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-12 text-sm tracking-widest border border-[#2C1810] px-10 py-4 rounded-3xl hover:bg-[#2C1810] hover:text-white transition-all"
                >
                  MAKE ANOTHER RESERVATION
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SIDE INFORMATION PANEL */}
        <div className="lg:w-96 bg-white border border-[#EDE4D4] rounded-3xl h-fit lg:sticky lg:top-28 p-8 text-sm">
          <div className="uppercase text-[#E67E22] text-xs tracking-widest mb-8">SPICE GARDEN</div>
          
          {/* Hours */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <Clock className="text-[#D4AF37]" />
              <div className="font-medium">Opening Hours</div>
            </div>
            <div className="space-y-4 text-[#5C2A2A]">
              <div className="flex justify-between">
                <span>Tuesday – Sunday</span>
                <span className="font-light">12:00 PM – 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday – Sunday</span>
                <span className="font-light">7:00 PM – 10:30 PM</span>
              </div>
              <div className="pt-4 border-t text-xs">Closed on Mondays</div>
            </div>
          </div>
          
          {/* Location */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <MapPin className="text-[#D4AF37]" />
              <div className="font-medium">Location</div>
            </div>
            <div className="text-[#5C2A2A]">
              42 Marine Drive<br />
              Colaba, Mumbai 400005
            </div>
            <div className="mt-6 bg-[#F8F1E3] h-52 rounded-2xl flex items-center justify-center text-xs text-[#5C2A2A]/60 border border-dashed">
              [ Interactive Google Map would go here ]
            </div>
          </div>
          
          {/* Dress Code */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <Shirt className="text-[#D4AF37]" />
              <div className="font-medium">Dress Code</div>
            </div>
            <div className="text-[#5C2A2A] text-sm leading-relaxed">
              Smart casual elegance is encouraged. We kindly ask that gentlemen wear collared shirts and closed-toe shoes. No athletic wear or beach attire please.
            </div>
          </div>
          
          {/* Cancellation Policy */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <AlertCircle className="text-[#D4AF37]" />
              <div className="font-medium">Cancellation Policy</div>
            </div>
            <div className="text-xs text-[#5C2A2A] leading-relaxed">
              Please provide 24 hours notice for cancellations. Bookings cancelled within 24 hours will incur a charge of 50% of the minimum spend.
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t text-[10px] text-[#5C2A2A]/60 tracking-widest">
            FOR PARTIES LARGER THAN 8 GUESTS,<br />PLEASE CALL +91 22 2288 4455
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reservations;
