/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-brand-beige selection:bg-brand-ink selection:text-white pt-24 pb-12 px-4 md:px-8">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-ink origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto">
        {/* The Bento Grid starts here */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
          
          {/* Hero as a spanning item */}
          <div className="md:col-span-2 md:row-span-2">
            <Hero />
          </div>

          <FeaturedProducts />
          
          <About />

          <Newsletter />
        </div>
        
        {/* Quote Section remains distinct or could be integrated */}
        <section className="py-24 bg-white/10 backdrop-blur-md rounded-[32px] mt-4 flex items-center justify-center text-center px-6 border border-brand-ink/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-4xl md:text-6xl font-serif italic leading-tight mb-12 text-balance">
              "A boa decoração é a que nos acolhe, não a que nos intimida."
            </p>
            <div className="h-16 w-[1px] bg-brand-ink/20 mx-auto mb-6" />
            <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand-ink/30">Nate Berkus</p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Add infinite scroll animation to standard CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes infinite-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .animate-infinite-scroll {
    animation: infinite-scroll 40s linear infinite;
  }
`;
document.head.appendChild(style);

