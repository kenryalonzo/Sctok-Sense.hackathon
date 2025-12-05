"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

const solutions = [
  {
    problem: {
      title: "Ruptures de Stock",
      desc: "Clients frustrés, ventes perdues, image de marque dégradée.",
    },
    solution: {
      title: "Stocks Optimisés",
      desc: "Disponibilité garantie, clients satisfaits, chiffre d'affaires maximisé.",
    },
  },
  {
    problem: {
      title: "Surstock & Gaspillage",
      desc: "Trésorerie immobilisée, espace saturé, produits obsolètes.",
    },
    solution: {
      title: "Trésorerie Libérée",
      desc: "Capital réinvesti, rotation rapide, rentabilité accrue.",
    },
  },
  {
    problem: {
      title: "Pilotage à l'Aveugle",
      desc: "Commandes basées sur l'intuition, erreurs fréquentes.",
    },
    solution: {
      title: "Intelligence Prédictive",
      desc: "Recommandations IA précises, décisions data-driven.",
    },
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            L'effet{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              StockSense
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Passez du chaos à la clarté. Voyez la différence concrète sur votre
            business.
          </p>
        </m.div>

        <div className="space-y-24">
          {solutions.map((item, index) => (
            <SolutionRow key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionRow({ item, index }: { item: any; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yRight = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
    >
      {/* Connector Line (Desktop) */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          <ArrowRight className="text-zinc-500 w-5 h-5" />
        </div>
      </div>

      {/* BEFORE Card */}
      <m.div style={{ y: yLeft, opacity }} className="relative group">
        <div className="absolute -inset-0.5 bg-linear-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
        <div className="relative p-8 rounded-2xl bg-zinc-900/80 border border-red-500/10 backdrop-blur-sm h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold tracking-widest text-red-400 uppercase bg-red-500/10 px-3 py-1 rounded-full">
              Avant
            </span>
            <XCircle className="w-6 h-6 text-red-500/50" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            {item.problem.title}
          </h3>
          <p className="text-zinc-400 leading-relaxed">{item.problem.desc}</p>
        </div>
      </m.div>

      {/* AFTER Card */}
      <m.div style={{ y: yRight, opacity }} className="relative group">
        <div className="absolute -inset-0.5 bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
        <div className="relative p-8 rounded-2xl bg-zinc-900/80 border border-green-500/10 backdrop-blur-sm h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold tracking-widest text-green-400 uppercase bg-green-500/10 px-3 py-1 rounded-full">
              Après
            </span>
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            {item.solution.title}
          </h3>
          <p className="text-zinc-300 leading-relaxed">{item.solution.desc}</p>
        </div>
      </m.div>
    </div>
  );
}
