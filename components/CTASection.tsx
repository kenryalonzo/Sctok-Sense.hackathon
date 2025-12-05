"use client";

import { m } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 to-zinc-900 z-0" />

      {/* Subtle Cyan Accent - Top Right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Blue Accent - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Prêt à transformer votre <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              gestion de stock ?
            </span>
          </h2>

          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Rejoignez 100+ PME qui optimisent déjà leur stock avec StockSense.
            Arrêtez de perdre de l'argent, commencez à prédire.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button className="group relative px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:scale-105 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Commencer Gratuitement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-md w-full sm:w-auto hover:scale-105">
              Voir une démo
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-zinc-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-500" />
              <span>Essai gratuit 14 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-500" />
              <span>Pas de carte bancaire</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-500" />
              <span>Intégration en 10 min</span>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
