"use client";

import { m } from "framer-motion";
import {
  Sparkles,
  Bell,
  ClipboardCheck,
  BarChart3,
  FlaskConical,
  Link,
} from "lucide-react";

const features = [
  {
    title: "Prédiction IA",
    desc: "Anticipez la demande 30 jours d'avance.",
    icon: Sparkles,
    color: "text-cyan-400",
  },
  {
    title: "Alertes Intelligentes",
    desc: "Soyez notifié avant la crise.",
    icon: Bell,
    color: "text-blue-400",
  },
  {
    title: "Recommandations Auto",
    desc: "Quantités à commander, calculées pour toi.",
    icon: ClipboardCheck,
    color: "text-green-400",
  },
  {
    title: "Dashboard Intuitif",
    desc: "Vue d'ensemble claire et agissable.",
    icon: BarChart3,
    color: "text-purple-400",
  },
  {
    title: "Simulation Scénarios",
    desc: "Testez vos décisions avant de les valider.",
    icon: FlaskConical,
    color: "text-pink-400",
  },
  {
    title: "Intégration Genuka",
    desc: "Compatible avec ton système actuel.",
    icon: Link,
    color: "text-orange-400",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-32 bg-black relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tout ce dont vous avez besoin.
          </h2>
          <p className="text-zinc-400 text-lg">
            Une suite d'outils puissants pour reprendre le contrôle.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>

              <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                {feature.desc}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
