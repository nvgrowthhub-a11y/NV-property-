"use client";
import { motion } from "framer-motion";
import { featuredProperties } from "@/data/properties";
import { Bed3, Bath, Square, MapPin } from "lucide-react";

export default function FeaturedProperties() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-luxury-gold tracking-[0.25em] text-xs font-semibold uppercase">Curated Portfolios</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-2">Featured Masterpieces</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProperties.map((prop, index) => (
          <motion.div
            key={prop.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-luxury-darkGray/60 rounded-3xl overflow-hidden border border-luxury-glassBorder group shadow-xl"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <img 
                src={prop.image} 
                alt={prop.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-luxury-gold text-[10px] tracking-widest uppercase font-semibold px-3 py-1.5 rounded-full border border-luxury-gold/30">
                {prop.badge}
              </span>
            </div>

            <div className="p-6">
              <span className="text-luxury-gold text-xs font-semibold uppercase tracking-wider">{prop.type}</span>
              <h3 className="font-serif text-2xl text-white mt-1 mb-2 group-hover:text-luxury-gold transition-colors">{prop.title}</h3>
              
              <div className="flex items-center gap-1 text-gray-400 text-xs mb-4">
                <MapPin size={14} className="text-luxury-gold" />
                <span>{prop.location}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 py-4 border-y border-luxury-glassBorder text-center text-xs text-gray-300 mb-6">
                <div className="flex flex-col items-center gap-1"><Bed3 size={16}/> {prop.beds} Beds</div>
                <div className="flex flex-col items-center gap-1"><Bath size={16}/> {prop.baths} Baths</div>
                <div className="flex flex-col items-center gap-1"><Square size={14}/> {prop.sqft} Sq.Ft</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xl font-serif font-bold text-white">{prop.price}</div>
                <button className="text-xs uppercase tracking-widest text-luxury-gold font-bold hover:text-white transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
