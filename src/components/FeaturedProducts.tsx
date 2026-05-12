import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vaso Cerâmico 'Areia'",
    price: "R$ 189,00",
    category: "Cerâmicas",
    image: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Luminária Nórdica Wood",
    price: "R$ 450,00",
    category: "Iluminação",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Almofada Linho Cru",
    price: "R$ 120,00",
    category: "Têxteis",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Poltrona Veludo Soft",
    price: "R$ 1.890,00",
    category: "Móveis",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function FeaturedProducts() {
  return (
    <>
      {/* Category Item (Portuguese Ceramics) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="col-span-1 row-span-1 bg-brand-gray-dark rounded-[32px] p-6 flex flex-col justify-between border border-brand-ink/5 group cursor-pointer overflow-hidden relative"
      >
        <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold relative z-10">Categoria 01</div>
        <div className="relative z-10">
          <h3 className="text-xl italic font-serif">Série Cerâmica</h3>
          <p className="text-xs mt-1 opacity-60">Moldadas à mão</p>
        </div>
        <img 
          src={products[0].image} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Feature Card: Textual */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="col-span-1 row-span-1 bg-brand-ink rounded-[32px] p-8 flex flex-col justify-center text-white border border-brand-ink/5"
      >
        <p className="text-sm font-light leading-relaxed italic opacity-90">
          "Acreditamos que os objetos que nos cercam contam a história de quem somos."
        </p>
        <div className="mt-4 h-[1px] w-8 bg-white/30"></div>
      </motion.div>

      {/* Featured Product: Portrait */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="col-span-1 row-span-2 bg-brand-gray-light rounded-[32px] p-6 flex flex-col border border-brand-ink/5 group cursor-pointer"
      >
        <div className="flex-grow flex items-center justify-center overflow-hidden rounded-t-[20px]">
          <img 
            src={products[1].image} 
            alt={products[1].name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="mt-4 flex justify-between items-end">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wider">{products[1].name}</h3>
            <p className="text-xs italic opacity-60">Design Autoral</p>
          </div>
          <span className="text-sm font-serif">{products[1].price}</span>
        </div>
      </motion.div>

      {/* Stat Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="col-span-1 row-span-1 bg-white rounded-[32px] p-6 border border-brand-ink/10 flex flex-col justify-between"
      >
        <div className="text-4xl font-serif">120+</div>
        <div className="text-[10px] uppercase font-bold tracking-tighter opacity-40">Artistas Parceiros</div>
      </motion.div>
    </>
  );
}
