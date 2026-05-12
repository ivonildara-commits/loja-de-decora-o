import { motion } from "motion/react";

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="col-span-1 md:col-span-1 row-span-1 bg-white rounded-[32px] p-8 border border-brand-ink/5 flex flex-col justify-center items-center text-center"
    >
      <h3 className="text-xl font-serif italic mb-4">Pureza e Forma</h3>
      <p className="text-xs text-brand-ink/50 leading-relaxed">
        Curamos o essencial. Design que respeita o tempo e a matéria.
      </p>
      <div className="mt-8 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-brand-ink/10" />
        <div className="w-2 h-2 rounded-full bg-brand-ink/20" />
        <div className="w-2 h-2 rounded-full bg-brand-accent/40" />
      </div>
    </motion.div>
  );
}
