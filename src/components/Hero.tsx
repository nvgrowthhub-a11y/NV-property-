"useChat";
"use client";
import { motion } from "framer-motion";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-luxury-black" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-medium block mb-4"
        >
          Introducing Luxora Estates
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
        >
          Find Your Dream <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-yellow-200 to-luxury-gold">Luxury Home</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          Exclusive Villas, Luxury Apartments & Premium Investments worldwide.
        </motion.p>

        {/* Floating Search Bar Hud */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-luxury-glass backdrop-blur-xl border border-luxury-glassBorder p-4 rounded-2xl max-w-4xl mx-auto shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-4 items-center"
        >
          <div className="flex items-center gap-3 px-3 border-r border-luxury-glassBorder last:border-0 text-left">
            <MapPin className="text-luxury-gold size-5 shrink-0" />
            <div className="w-full">
              <label className="text-[10px] uppercase tracking-wider text-gray-400 block">Location</label>
              <input type="text" placeholder="e.g., Mumbai, Goa" className="bg-transparent text-sm text-white focus:outline-none w-full placeholder-gray-500" />
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 border-r border-luxury-glassBorder last:border-0 text-left">
            <Home className="text-luxury-gold size-5 shrink-0" />
            <div className="w-full">
              <label className="text-[10px] uppercase tracking-wider text-gray-400 block">Property Type</label>
              <select className="bg-transparent text-sm text-white focus:outline-none w-full appearance-none cursor-pointer">
                <option className="bg-luxury-black text-white">Villa</option>
                <option className="bg-luxury-black text-white">Penthouse</option>
                <option className="bg-luxury-black text-white">Mansion</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 border-r border-luxury-glassBorder last:border-0 text-left">
            <DollarSign className="text-luxury-gold size-5 shrink-0" />
            <div className="w-full">
              <label className="text-[10px] uppercase tracking-wider text-gray-400 block">Budget Range</label>
              <select className="bg-transparent text-sm text-white focus:outline-none w-full appearance-none cursor-pointer">
                <option className="bg-luxury-black text-white">₹15Cr - ₹30Cr</option>
                <option className="bg-luxury-black text-white">₹30Cr - ₹60Cr</option>
                <option className="bg-luxury-black text-white">₹60Cr+</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-luxury-gold to-amber-600 hover:from-amber-600 hover:to-luxury-gold text-luxury-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 tracking-wide text-sm shadow-lg shadow-luxury-gold/10">
            <Search size={16} /> Search Selection
          </button>
        </motion.div>
      </div>
    </section>
  );
}
