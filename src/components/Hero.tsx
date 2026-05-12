import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-full overflow-hidden bg-brand-gray-medium rounded-[32px] border border-brand-ink/5 p-8 md:p-12 flex flex-col justify-end min-h-[500px]">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-brand-ink/10 text-brand-ink text-[10px] font-bold uppercase tracking-widest mb-6 bg-white/50 backdrop-blur-sm">
            Coleção Outono 2024
          </span>
          <h1 className="text-4xl md:text-6xl leading-tight text-balance mb-8 text-brand-ink font-semibold">
            Minimalismo <br/> redefinido para a <br/><span className="italic">casa moderna.</span>
          </h1>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-ink text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-brand-ink transition-all flex items-center gap-2 group cursor-pointer shadow-lg shadow-black/5">
              Explorar Coleção <ArrowRight size={14} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Image as background or secondary element in Bento */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop" 
          alt="Living room interior" 
          className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gray-medium via-transparent to-transparent" />
      </div>

      <div className="absolute top-10 right-10">
        <div className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center text-brand-ink text-lg hover:bg-brand-ink hover:text-white transition-all cursor-pointer">
          →
        </div>
      </div>
    </section>
  );
}
