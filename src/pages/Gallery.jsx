import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: "https://picsum.photos/id/106/800/1000",
    category: "Food",
    title: "Butter Chicken",
    description: "Our signature velvety tomato gravy with tandoori chicken"
  },
  {
    id: 2,
    url: "https://picsum.photos/id/431/800/600",
    category: "Interior",
    title: "The Grand Dining Room",
    description: "Evening ambiance with handcrafted lighting"
  },
  {
    id: 3,
    url: "https://picsum.photos/id/870/800/1100",
    category: "Food",
    title: "Lamb Rogan Josh",
    description: "Tender Kashmiri lamb in fragrant yogurt sauce"
  },
  {
    id: 4,
    url: "https://picsum.photos/id/1015/800/600",
    category: "Events",
    title: "Private Celebration",
    description: "Intimate anniversary dinner in the Saffron Room"
  },
  {
    id: 5,
    url: "https://picsum.photos/id/201/800/900",
    category: "Behind the Scenes",
    title: "Plating the Tasting Menu",
    description: "Chef Vikram finishing a dish with saffron threads"
  },
  {
    id: 6,
    url: "https://picsum.photos/id/312/800/700",
    category: "Food",
    title: "Gulab Jamun",
    description: "Warm milk dumplings in rose-cardamom syrup"
  },
  {
    id: 7,
    url: "https://picsum.photos/id/1060/800/1100",
    category: "Interior",
    title: "The Spice Terrace",
    description: "Alfresco dining with Arabian Sea views"
  },
  {
    id: 8,
    url: "https://picsum.photos/id/292/800/600",
    category: "Events",
    title: "Corporate Dinner",
    description: "Private event for 30 guests in the Maharaja Suite"
  },
  {
    id: 9,
    url: "https://picsum.photos/id/64/800/900",
    category: "Behind the Scenes",
    title: "Morning Prep",
    description: "Fresh spices being ground in our kitchen"
  },
  {
    id: 10,
    url: "https://picsum.photos/id/1080/800/700",
    category: "Food",
    title: "Tandoori Platter",
    description: "Assortment of kebabs and tikkas from our clay oven"
  },
  {
    id: 11,
    url: "https://picsum.photos/id/133/800/1000",
    category: "Interior",
    title: "The Bar Lounge",
    description: "Signature cocktails and mocktails before dinner"
  },
  {
    id: 12,
    url: "https://picsum.photos/id/160/800/650",
    category: "Events",
    title: "Wedding Reception",
    description: "Elegant setup for a traditional Indian wedding"
  },
  {
    id: 13,
    url: "https://picsum.photos/id/201/800/800",
    category: "Behind the Scenes",
    title: "The Tandoor Oven",
    description: "Our master naan baker at work"
  },
  {
    id: 14,
    url: "https://picsum.photos/id/251/800/1100",
    category: "Food",
    title: "Saffron Rose Phirni",
    description: "Our signature dessert with Iranian saffron"
  },
  {
    id: 15,
    url: "https://picsum.photos/id/318/800/600",
    category: "Interior",
    title: "Private Dining Room",
    description: "Intimate space for special occasions"
  },
];

const instagramPosts = [
  "https://picsum.photos/id/106/600/600",
  "https://picsum.photos/id/431/600/600",
  "https://picsum.photos/id/870/600/600",
  "https://picsum.photos/id/1015/600/600",
  "https://picsum.photos/id/312/600/600",
  "https://picsum.photos/id/64/600/600",
  "https://picsum.photos/id/201/600/600",
  "https://picsum.photos/id/292/600/600",
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters = ['All', 'Food', 'Interior', 'Events', 'Behind the Scenes'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const filtered = activeFilter === 'All' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === activeFilter);
    
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) newIndex = filtered.length - 1;
    if (newIndex >= filtered.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filtered[newIndex]);
  };

  return (
    <div className="bg-[#F8F1E3]">
      <Navbar />
      
      {/* Header */}
      <div className="pt-24 bg-[#2C1810] pb-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-6 py-2 bg-[#D4AF37]/10 text-[#D4AF37] text-sm tracking-[4px] rounded-3xl mb-6">VISUAL JOURNAL</div>
          <h1 className="font-display text-white text-7xl md:text-8xl tracking-[-2.5px]">Gallery</h1>
          <p className="mt-6 text-[#D4AF37] max-w-md mx-auto text-lg">Moments of beauty, craft, and connection captured at Spice Garden</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 py-8 overflow-x-auto scrollbar-thin">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-10 py-4 text-sm font-medium whitespace-nowrap rounded-3xl transition-all ${
                  activeFilter === filter 
                    ? 'bg-[#2C1810] text-white shadow-lg' 
                    : 'bg-white border border-[#EDE4D4] hover:bg-[#F8F1E3] text-[#2C1810]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.025, 0.8) }}
              onClick={() => openLightbox(image, index)}
              className="group relative break-inside-avoid overflow-hidden rounded-3xl cursor-pointer shadow-xl"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full transition-all duration-700 group-hover:scale-110" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/75 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8">
                <div className="text-white">
                  <div className="uppercase text-[#D4AF37] text-xs tracking-widest mb-2">{image.category}</div>
                  <div className="text-2xl font-display tracking-tight leading-none">{image.title}</div>
                  <div className="text-white/70 text-sm mt-3 line-clamp-2">{image.description}</div>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-6 right-6 w-8 h-8 border border-white/40 rounded-full flex items-center justify-center opacity-30 group-hover:opacity-80 transition-all">
                <span className="text-white text-[10px] font-mono">+</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute -top-16 right-4 text-white flex items-center gap-3 hover:text-[#D4AF37] transition-colors text-sm tracking-widest"
              >
                CLOSE <X size={26} />
              </button>

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="max-h-[82vh] w-full object-contain" 
                />
              </div>

              {/* Caption */}
              <div className="mt-8 flex justify-between items-end text-white px-2">
                <div>
                  <div className="text-[#D4AF37] text-xs tracking-[2px]">{selectedImage.category.toUpperCase()}</div>
                  <div className="text-4xl font-display tracking-tight mt-1">{selectedImage.title}</div>
                  <div className="text-white/70 max-w-md mt-3">{selectedImage.description}</div>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => navigateImage(-1)}
                    className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all"
                  >
                    <ChevronLeft size={26} />
                  </button>
                  <button 
                    onClick={() => navigateImage(1)}
                    className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all"
                  >
                    <ChevronRight size={26} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* INSTAGRAM SECTION */}
      <div className="bg-[#2C1810] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#D4AF37]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
                <div>
                  <div className="text-4xl font-medium tracking-tight">@spicegardenrestaurant</div>
                  <div className="text-[#D4AF37] text-sm">14.8K followers • Mumbai, India</div>
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              target="_blank"
              className="mt-6 md:mt-0 inline-flex items-center gap-3 border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all px-8 py-4 rounded-3xl text-sm tracking-widest"
            >
              TAG US ON INSTAGRAM #SPICEGARDEN
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((url, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03 }}
                className="aspect-square overflow-hidden rounded-3xl relative group"
              >
                <img 
                  src={url} 
                  alt={`Instagram post ${index}`} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-end p-6">
                  <div className="text-xs text-white/80">@spicegardenrestaurant</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 text-xs tracking-[3px] text-[#D4AF37]">
              FOLLOW OUR JOURNEY ON INSTAGRAM
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
