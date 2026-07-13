import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProperties from "@/components/FeaturedProperties";
import Amenities from "@/components/Amenities";
import EmiCalculator from "@/components/EmiCalculator";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-black selection:bg-luxury-gold selection:text-luxury-black">
      {/* Premium Header / Brand Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-luxury-black/40 border-b border-luxury-glassBorder py-6 px-8 flex justify-between items-center">
        <div className="font-serif text-xl tracking-[0.3em] font-bold text-white">
          LUXORA <span className="text-luxury-gold">ESTATES</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-gray-300">
          <a href="#" className="hover:text-luxury-gold transition-colors">Portfolios</a>
          <a href="#amenities" className="hover:text-luxury-gold transition-colors">Amenities</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">Brokerage</a>
          <a href="#contact" className="hover:text-luxury-gold transition-colors">Concierge</a>
        </div>
        <button className="border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300">
          Book Consultation
        </button>
      </nav>

      {/* Main Structural Layout Sections */}
      <Hero />
      
      <Stats />
      
      <FeaturedProperties />
      
      <div id="amenities">
        <Amenities />
      </div>
      
      <EmiCalculator />
      
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer Branding Note */}
      <footer className="py-12 border-t border-luxury-glassBorder text-center text-xs text-gray-500">
        © 2026 LUXORA ESTATES. Built for private presentation & portfolios. Showcase application.
      </footer>
    </main>
  );
}
