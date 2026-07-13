"use client";
import { motion } from "framer-motion";
import { 
  Waves, 
  Cpu, 
  Dumbbell, 
  Wine, 
  ShieldCheck, 
  Car, 
  Trees, 
  Gamepad2 
} from "lucide-react";

const amenities = [
  { icon: Waves, title: "Infinity Pool", desc: "Temperature-controlled Olympic size pool" },
  { icon: Cpu, title: "Smart Home", desc: "Fully automated AI-integrated living" },
  { icon: Dumbbell, title: "Elite Gym", desc: "State-of-the-art wellness & fitness center" },
  { icon: Wine, title: "Private Club House", desc: "Exclusive lounge for high-net-worth networking" },
  { icon: ShieldCheck, title: "5-Tier Security", desc: "24/7 military-grade surveillance & biometric access" },
  { icon: Car, title: "Reserved Parking", desc: "Multi-level secure parking with EV charging docks" },
  { icon: Trees, title: "Zen Garden", desc: "Beautifully landscaped private green spaces" },
  { icon: Gamepad2, title: "Kids Play Arcade", desc: "Safe, monitored premium recreational zones" },
];

export default function Amenities() {
  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden">
      {/* Background Subtle Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-luxury-gold tracking-[0.25em] text-xs font-semibold uppercase">World-Class Standards</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2 text-white">Curated Luxury Amenities</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "#D4AF37" 
              }}
              className="bg-luxury-glass border border-luxury-glassBorder p-8 rounded-2xl transition-colors duration-300 group text-center md:text-left"
            >
              <div className="w-12 h-12 bg-luxury-darkGray border border-luxury-glassBorder rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:border-luxury-gold transition-colors duration-300">
                <item.icon className="text-luxury-gold size-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 tracking-wide font-serif">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
