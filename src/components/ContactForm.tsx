"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, PhoneCall, Mail } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "Villa",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your private advisory request has been logged. Our luxury consultant will reach out within 2 hours.");
  };

  return (
    <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      
      {/* Left Column - Branding Context */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <span className="text-luxury-gold tracking-[0.25em] text-xs font-semibold uppercase">Besproke Brokerage</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2 text-white leading-tight">Schedule A Private Consultation</h2>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed font-light">
          Experience bespoke real estate. Experience VIP viewings via chartered trips, direct access to off-market properties, and dedicated real-estate legal desks.
        </p>

        <div className="space-y-4 pt-4 border-t border-luxury-glassBorder">
          <div className="flex items-center gap-4">
            <div className="size-10 bg-luxury-glass border border-luxury-glassBorder rounded-full flex items-center justify-center text-luxury-gold"><PhoneCall size={16}/></div>
            <div><p className="text-[10px] text-gray-500 uppercase tracking-widest">Inquire Directly</p><p className="text-sm text-gray-200">+91 22 8888 9999</p></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-10 bg-luxury-glass border border-luxury-glassBorder rounded-full flex items-center justify-center text-luxury-gold"><Mail size={16}/></div>
            <div><p className="text-[10px] text-gray-500 uppercase tracking-widest">Electronic Desk</p><p className="text-sm text-gray-200">concierge@luxoraestates.com</p></div>
          </div>
        </div>
      </div>

      {/* Right Column - Premium Form Box */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 bg-luxury-darkGray/40 border border-luxury-glassBorder p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400 block mb-2">Full Name</label>
              <input type="text" required value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} className="w-full bg-luxury-black/60 border border-luxury-glassBorder rounded-xl p-4 text-sm text-white focus:outline-none focus:border-luxury-gold transition-colors" placeholder="e.g., Vikram Malhotra" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400 block mb-2">Private Phone Line</label>
              <input type="tel" required value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} className="w-full bg-luxury-black/60 border border-luxury-glassBorder rounded-xl p-4 text-sm text-white focus:outline-none focus:border-luxury-gold transition-colors" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400 block mb-2">Email Address</label>
              <input type="email" required value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} className="w-full bg-luxury-black/60 border border-luxury-glassBorder rounded-xl p-4 text-sm text-white focus:outline-none focus:border-luxury-gold transition-colors" placeholder="v.malhotra@luxury.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400 block mb-2">Preferred Asset Class</label>
              <select value={formData.propertyType} onChange={(e)=>setFormData({...formData, propertyType: e.target.value})} className="w-full bg-luxury-black/60 border border-luxury-glassBorder rounded-xl p-4 text-sm text-white focus:outline-none focus:border-luxury-gold transition-colors appearance-none cursor-pointer">
                <option value="Villa">Exclusive Villa</option>
                <option value="Penthouse">Sky Penthouse</option>
                <option value="Beachfront">Beachfront Estate</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-gray-400 block mb-2">Bespoke Requirements / Message</label>
            <textarea rows={4} value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} className="w-full bg-luxury-black/60 border border-luxury-glassBorder rounded-xl p-4 text-sm text-white focus:outline-none focus:border-luxury-gold transition-colors resize-none" placeholder="Describe any specific layout requirements or timeline limits..." />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-luxury-gold to-amber-600 hover:from-amber-600 hover:to-luxury-gold text-luxury-black font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 tracking-widest text-xs uppercase shadow-lg shadow-luxury-gold/10">
            <Calendar size={14} /> Request Private Advisory
          </button>
        </form>
      </motion.div>
    </section>
  );
}
