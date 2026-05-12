import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="col-span-1 md:col-span-2 row-span-1 bg-brand-accent rounded-[32px] p-8 flex items-center justify-between border border-brand-ink/5 overflow-hidden relative">
      <div className="max-w-[60%] relative z-10">
        <h3 className="text-2xl font-serif text-white">Junte-se ao Atelier</h3>
        <p className="text-xs text-white/80 mt-2 italic">Receba inspiração semanal e acesso antecipado às nossas coleções sazonais.</p>
      </div>
      <div className="flex items-center gap-2 relative z-10">
        <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="e-mail" 
            className="h-10 px-4 bg-white/20 rounded-full flex items-center text-white text-[10px] italic border border-white/30 w-32 md:w-40 outline-none placeholder:text-white/50"
          />
          <button className="w-10 h-10 bg-white rounded-full text-brand-ink font-bold flex items-center justify-center hover:bg-brand-beige transition-colors cursor-pointer">
            +
          </button>
        </form>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
