"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Luxury Properties" },
  { value: "1,200+", label: "Happy Elite Clients" },
  { value: "15+", label: "Global Cities Covered" },
  { value: "2,500Cr+", label: "Value Sold" },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-luxury-glassBorder bg-luxury-darkGray/30 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="font-serif text-3xl md:text-5xl text-luxury-gold mb-2 font-bold">{stat.value}</h3>
            <p className="text-xs md:text-sm tracking-widest uppercase text-gray-400 font-light">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
