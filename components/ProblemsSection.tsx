"use client";

import { m } from "framer-motion";
import { TrendingDown, PackageX, Dices } from "lucide-react";

const problems = [
  {
    title: "Ruptures Imprévisibles",
    description: "Perdez 30-40% de ventes sans visibilité stock.",
    icon: TrendingDown,
    color: "from-orange-500 to-red-500",
    delay: 0,
    offset: "md:mt-0", // Aligned top
  },
  {
    title: "Surstock Coûteux",
    description: "Capital bloqué, argent qui dort en rayon.",
    icon: PackageX,
    color: "from-blue-500 to-cyan-500",
    delay: 0.2,
    offset: "md:mt-24", // Staggered down for "unbalanced" look
  },
  {
    title: "Décisions au Hasard",
    description: "Aucune donnée pour commander intelligemment.",
    icon: Dices,
    color: "from-purple-500 to-pink-500",
    delay: 0.4,
    offset: "md:mt-12", // Slightly staggered
  },
];

export default function ProblemsSection() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            La gestion de stock <br />
            <span className="text-zinc-500">ne devrait pas être un pari.</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Les PME africaines perdent des millions chaque année à cause d'une
            gestion inefficace.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {problems.map((problem, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: problem.delay }}
              className={`group relative p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-2 ${problem.offset}`}
            >
              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <problem.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                {problem.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {problem.description}
              </p>

              {/* Decorative Line */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${problem.color} w-0 group-hover:w-full transition-all duration-700 ease-out rounded-b-3xl`}
              />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
