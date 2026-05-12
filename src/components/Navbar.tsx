import { motion } from "motion/react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-beige/80 backdrop-blur-md border-b border-brand-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-tight"
        >
          Casa & Cor
        </motion.div>

        <div className="hidden md:flex items-center gap-12 font-medium text-sm uppercase tracking-widest text-brand-ink/60">
          <a href="#" className="hover:text-brand-ink transition-colors">Coleções</a>
          <a href="#" className="hover:text-brand-ink transition-colors">Sobre</a>
          <a href="#" className="hover:text-brand-ink transition-colors">Portfólio</a>
          <a href="#" className="hover:text-brand-ink transition-colors">Contato</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:text-brand-olive transition-colors cursor-pointer">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button className="hover:text-brand-olive transition-colors cursor-pointer relative">
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-brand-olive text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button 
            className="md:hidden hover:text-brand-olive transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-beige border-b border-brand-ink/5 px-6 py-8 flex flex-col gap-6"
        >
          <a href="#" className="text-xl font-serif">Coleções</a>
          <a href="#" className="text-xl font-serif">Sobre</a>
          <a href="#" className="text-xl font-serif">Portfólio</a>
          <a href="#" className="text-xl font-serif">Contato</a>
        </motion.div>
      )}
    </nav>
  );
}
