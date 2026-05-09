import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, Truck, Clock, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const OrderTracking = () => {
  const [orderStatus, setOrderStatus] = useState('preparing');
  const [estimatedTime, setEstimatedTime] = useState(28);
  const [progress, setProgress] = useState(45);

  // Simulate order progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 8;
        if (next > 100) {
          setOrderStatus('delivered');
          return 100;
        }
        if (next > 75) setOrderStatus('out-for-delivery');
        else if (next > 35) setOrderStatus('preparing');
        return Math.min(next, 100);
      });
      
      if (estimatedTime > 5) {
        setEstimatedTime((prev) => prev - 1);
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [estimatedTime]);

  const statusSteps = [
    { key: 'confirmed', label: 'Order Confirmed', icon: CheckCircle, active: true },
    { key: 'preparing', label: 'Preparing Your Order', icon: Clock, active: orderStatus === 'preparing' || orderStatus === 'out-for-delivery' || orderStatus === 'delivered' },
    { key: 'out-for-delivery', label: 'Out for Delivery', icon: Truck, active: orderStatus === 'out-for-delivery' || orderStatus === 'delivered' },
    { key: 'delivered', label: 'Delivered', icon: CheckCircle, active: orderStatus === 'delivered' },
  ];

  const orderItems = [
    { name: "Butter Chicken", qty: 1, price: 22 },
    { name: "Garlic Naan", qty: 2, price: 4 },
    { name: "Mango Lassi", qty: 2, price: 6 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bg-[#F8F1E3]">
      <SEOHead 
        title="Track Your Order | Spice Garden"
        description="Real-time order tracking for your Spice Garden delivery or pickup."
      />
      <Navbar />
      
      <div className="pt-24 max-w-3xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-5 py-2 rounded-3xl text-sm mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            ORDER TRACKING
          </div>
          <h1 className="font-display text-6xl tracking-tighter text-[#2C1810]">Order #SG48291</h1>
          <p className="text-[#5C2A2A] mt-3">Placed 12 minutes ago • Expected delivery in <span className="font-semibold text-emerald-600">{estimatedTime} minutes</span></p>
        </div>

        {/* Progress Bar */}
        <div className="mb-16">
          <div className="h-2.5 bg-[#EDE4D4] rounded-3xl overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E67E22]"
              initial={{ width: '15%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.2 }}
            />
          </div>
          <div className="flex justify-between text-xs text-[#5C2A2A] mt-3">
            <div>Preparing</div>
            <div>Out for Delivery</div>
            <div>Delivered</div>
          </div>
        </div>

        {/* Status Steps */}
        <div className="space-y-8 mb-16">
          {statusSteps.map((step, index) => (
            <motion.div 
              key={step.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex gap-6 items-start ${step.active ? '' : 'opacity-40'}`}
            >
              <div className={`mt-1 w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 ${step.active ? 'bg-emerald-100 text-emerald-600' : 'bg-[#EDE4D4]'}`}>
                <step.icon size={22} />
              </div>
              <div>
                <div className={`font-medium ${step.active ? 'text-emerald-700' : ''}`}>{step.label}</div>
                <div className="text-sm text-[#5C2A2A]">
                  {step.key === 'confirmed' && 'Your order has been received and confirmed'}
                  {step.key === 'preparing' && 'Our chefs are preparing your delicious meal'}
                  {step.key === 'out-for-delivery' && 'Your driver is on the way with your order'}
                  {step.key === 'delivered' && 'Enjoy your meal! Thank you for ordering with us'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-[#EDE4D4] rounded-3xl p-8 mb-8">
          <div className="font-medium mb-6 flex items-center gap-2">
            <span>YOUR ORDER</span>
            <span className="text-xs px-3 py-1 bg-[#F8F1E3] text-[#5C2A2A] rounded-full">3 items</span>
          </div>
          
          {orderItems.map((item, index) => (
            <div key={index} className="flex justify-between py-4 border-t first:border-t-0 text-sm">
              <div>
                {item.qty}× {item.name}
              </div>
              <div className="font-light">₹{(item.price * item.qty * 83).toFixed(0)}</div>
            </div>
          ))}
          
          <div className="pt-6 mt-4 border-t flex justify-between font-medium">
            <div>Total</div>
            <div>₹{(subtotal * 83).toFixed(0)}</div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-white border border-[#EDE4D4] rounded-3xl p-8 text-sm">
          <div className="flex items-start gap-4">
            <MapPin className="text-[#D4AF37] mt-1" />
            <div>
              <div className="font-medium">Delivery to</div>
              <div className="text-[#5C2A2A]">42 Marine Drive, Colaba, Mumbai • Flat 1203</div>
              <div className="text-xs text-emerald-600 mt-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Your driver will call 5 minutes before arrival
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderTracking;
