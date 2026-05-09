import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { menuItems, categories, featuredDish } from '../data/menu';
import { Flame, Leaf, Plus, X, ShoppingCart, Trash2 } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [vegFilter, setVegFilter] = useState('all'); // 'all', 'veg', 'nonveg'
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addedItem, setAddedItem] = useState(null);

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    let vegMatch = true;
    if (vegFilter === 'veg') vegMatch = item.isVegetarian;
    if (vegFilter === 'nonveg') vegMatch = !item.isVegetarian;
    return categoryMatch && vegMatch;
  });

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.findIndex(cartItem => cartItem.id === item.id);
      if (existing !== -1) {
        const updated = [...prev];
        updated[existing].quantity = (updated[existing].quantity || 1) + 1;
        return updated;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    
    setAddedItem(item.name);
    setTimeout(() => setAddedItem(null), 1800);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const getSpiceIcons = (level) => {
    return Array.from({ length: Math.min(level, 5) }).map((_, i) => (
      <Flame key={i} className="text-orange-500" size={15} />
    ));
  };

  const getDietaryTags = (item) => {
    const tags = [];
    if (item.isVegetarian) tags.push({ label: 'VEG', color: 'bg-emerald-100 text-emerald-700' });
    if (item.isGlutenFree) tags.push({ label: 'GF', color: 'bg-amber-100 text-amber-700' });
    if (item.isDairyFree) tags.push({ label: 'DF', color: 'bg-blue-100 text-blue-700' });
    return tags;
  };

  return (
    <div className="bg-[#F8F1E3] min-h-screen">
      <Navbar />
      
      {/* Header */}
      <div className="pt-20 bg-[#2C1810] pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-3xl text-sm tracking-widest mb-6">
              CURATED BY CHEF VIKRAM SINGH
            </div>
            <h1 className="font-display text-white text-7xl tracking-tighter">Our Menu</h1>
            <p className="mt-4 text-[#D4AF37] max-w-md mx-auto">A carefully crafted selection of authentic Indian dishes using the finest ingredients and traditional techniques</p>
          </div>
        </div>
      </div>

      {/* FEATURED DISH OF THE DAY */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-5/12 relative">
            <div className="absolute -top-4 -left-4 bg-[#D4AF37] text-[#2C1810] text-xs font-bold px-6 py-2 rounded-2xl tracking-widest shadow">CHEF'S SPECIAL</div>
            <img 
              src={featuredDish.image} 
              alt={featuredDish.name}
              className="w-full aspect-video object-cover rounded-2xl shadow-lg" 
            />
          </div>
          
          <div className="md:w-7/12">
            <div className="flex items-center gap-3 mb-3">
              <div className="px-4 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium flex items-center gap-1">
                <Flame size={14} /> FEATURED TODAY
              </div>
              <div className="flex">{getSpiceIcons(featuredDish.spiceLevel)}</div>
            </div>
            
            <h3 className="font-display text-5xl text-[#2C1810] tracking-tight">{featuredDish.name}</h3>
            <p className="text-[#5C2A2A] mt-4 leading-relaxed text-lg">{featuredDish.description}</p>
            
            <div className="flex items-center justify-between mt-8">
              <div className="text-4xl font-light text-[#D4AF37]">${featuredDish.price}</div>
              <button 
                onClick={() => addToCart(featuredDish)}
                className="flex items-center gap-3 bg-[#2C1810] text-white px-10 py-4 rounded-2xl hover:bg-black transition-all active:scale-95"
              >
                ADD TO ORDER <Plus size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 sticky top-4 z-30 bg-[#F8F1E3]/90 backdrop-blur-lg py-6 border-b">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-3.5 text-sm rounded-3xl font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
                  activeCategory === cat.id 
                    ? 'bg-[#2C1810] text-white shadow-md' 
                    : 'bg-white border border-[#EDE4D4] hover:border-[#D4AF37] text-[#2C1810]'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Veg / Non-Veg Toggle */}
          <div className="flex items-center gap-2 bg-white border border-[#EDE4D4] rounded-3xl p-1.5 self-start">
            <button
              onClick={() => setVegFilter('all')}
              className={`px-6 py-2 text-xs rounded-[14px] transition-all ${vegFilter === 'all' ? 'bg-[#2C1810] text-white' : 'hover:bg-[#F8F1E3]'}`}
            >
              ALL
            </button>
            <button
              onClick={() => setVegFilter('veg')}
              className={`px-6 py-2 text-xs rounded-[14px] flex items-center gap-1.5 transition-all ${vegFilter === 'veg' ? 'bg-emerald-700 text-white' : 'hover:bg-[#F8F1E3]'}`}
            >
              <Leaf size={14} /> VEGETARIAN
            </button>
            <button
              onClick={() => setVegFilter('nonveg')}
              className={`px-6 py-2 text-xs rounded-[14px] transition-all ${vegFilter === 'nonveg' ? 'bg-red-700 text-white' : 'hover:bg-[#F8F1E3]'}`}
            >
              NON-VEG
            </button>
          </div>

          {/* Cart Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="ml-auto flex items-center gap-3 bg-white border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all px-8 py-3 rounded-3xl text-sm font-medium self-start lg:self-center"
          >
            <ShoppingCart size={18} />
            <span>CART</span>
            {cartCount > 0 && (
              <div className="bg-[#D4AF37] text-[#2C1810] text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-mono">
                {cartCount}
              </div>
            )}
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition-all group"
              >
                <div className="relative h-56">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" 
                  />
                  
                  {item.isSpecial && (
                    <div className="absolute top-5 left-5 bg-gradient-to-r from-[#D4AF37] to-amber-400 text-[#2C1810] text-[10px] font-bold tracking-widest px-5 py-2 rounded-2xl shadow">
                      CHEF'S SPECIAL
                    </div>
                  )}
                  
                  <div className="absolute bottom-5 right-5 bg-white/95 text-[#2C1810] text-xs px-4 py-1 rounded-2xl font-mono shadow">
                    ${item.price}
                  </div>
                </div>
                
                <div className="p-7">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-2xl tracking-tight text-[#2C1810]">{item.name}</h3>
                    {item.isVegetarian && <Leaf className="text-emerald-600 mt-1.5" size={22} />}
                  </div>
                  
                  <p className="text-[#5C2A2A] text-sm leading-snug line-clamp-2 mb-6">{item.description}</p>
                  
                  {/* Dietary Tags */}
                  <div className="flex gap-2 mb-6">
                    {getDietaryTags(item).map((tag, index) => (
                      <span key={index} className={`text-[10px] px-3 py-1 rounded-xl font-medium ${tag.color}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  
                  {/* Spice Level */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest text-[#5C2A2A]">Spice</span>
                      <div className="flex">{getSpiceIcons(item.spiceLevel)}</div>
                    </div>
                    
                    <button 
                      onClick={() => addToCart(item)}
                      className="flex items-center gap-2 bg-[#2C1810] hover:bg-black text-white text-sm px-7 py-3 rounded-2xl transition-all active:scale-95"
                    >
                      ADD TO ORDER
                      <Plus size={17} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Add to Cart Toast */}
      <AnimatePresence>
        {addedItem && (
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#2C1810] text-white text-sm px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50"
          >
            <div>✓</div>
            <div>{addedItem} added to your order</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60]"
            />
            
            {/* Cart Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
            >
              <div className="p-8 border-b flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <ShoppingCart size={26} className="text-[#D4AF37]" />
                  <div>
                    <div className="font-display text-3xl tracking-tight">Your Order</div>
                    <div className="text-xs text-[#5C2A2A]">{cartCount} items</div>
                  </div>
                </div>
                <button onClick={() => setIsCartOpen(false)}>
                  <X size={26} />
                </button>
              </div>
              
              <div className="flex-1 p-8 overflow-auto">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-6 opacity-30">🪔</div>
                    <div className="font-medium text-xl text-[#5C2A2A]">Your cart is empty</div>
                    <p className="text-sm text-[#5C2A2A]/70 mt-3 max-w-[190px]">Add delicious dishes from our menu to get started</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-5 bg-[#F8F1E3] p-5 rounded-2xl">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <div className="font-medium leading-tight pr-2">{item.name}</div>
                            <div className="font-mono text-[#D4AF37]">${(item.price * (item.quantity || 1)).toFixed(2)}</div>
                          </div>
                          
                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex border border-[#EDE4D4] rounded-2xl">
                              <button onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)} className="w-8 h-8 flex items-center justify-center text-lg leading-none hover:bg-white rounded-l-2xl">-</button>
                              <div className="w-8 h-8 flex items-center justify-center font-mono text-sm">{item.quantity || 1}</div>
                              <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)} className="w-8 h-8 flex items-center justify-center text-lg leading-none hover:bg-white rounded-r-2xl">+</button>
                            </div>
                            
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {cart.length > 0 && (
                <div className="p-8 border-t mt-auto">
                  <div className="flex justify-between text-xl mb-8">
                    <div>Total</div>
                    <div className="font-medium font-mono">${cartTotal.toFixed(2)}</div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      alert("Thank you! This is a demo. Your order has been placed.");
                      setCart([]);
                      setIsCartOpen(false);
                    }}
                    className="w-full py-6 bg-[#2C1810] text-white rounded-3xl text-lg tracking-widest hover:bg-black transition-colors"
                  >
                    PLACE ORDER • ${cartTotal.toFixed(2)}
                  </button>
                  
                  <p className="text-center text-xs text-[#5C2A2A]/60 mt-6">Taxes and delivery calculated at checkout</p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Menu;
