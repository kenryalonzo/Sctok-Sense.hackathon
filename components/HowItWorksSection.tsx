"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { Plug, BarChart3, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Connecter",
    desc: "Liez votre compte Genuka en 2 clics.",
    icon: Plug,
  },
  {
    id: "02",
    title: "Analyser",
    desc: "L'IA analyse vos données d'historique.",
    icon: BarChart3,
  },
  {
    id: "03",
    title: "Prédire",
    desc: "Nous anticipons vos besoins futurs.",
    icon: Sparkles,
  },
  {
    id: "04",
    title: "Agir",
    desc: "Recevez des recommandations actionnables.",
    icon: Rocket,
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={ref} className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple. Rapide. <span className="text-cyan-400">Efficace.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Commencez à optimiser votre stock en quelques minutes.
          </p>
        </m.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 rounded-full overflow-hidden">
            <m.div
              className="h-full bg-linear-to-r from-cyan-500 via-blue-500 to-green-500"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>

          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute left-8 top-0 h-full w-1 bg-zinc-800 rounded-full overflow-hidden">
            <m.div
              className="w-full bg-linear-to-b from-cyan-500 via-blue-500 to-green-500"
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex md:flex-col items-center md:justify-end ${
                  index % 2 === 0 ? "md:flex-col-reverse" : ""
                } gap-6 md:gap-0 h-full`}
              >
                {/* Content Block */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative z-10 md:text-center ${
                    index % 2 === 0 ? "md:mb-12" : "md:mt-12"
                  } flex-1`}
                >
                  <div className="relative inline-block">
                    <span className="absolute -top-6 -left-6 text-6xl font-black text-zinc-800/50 select-none -z-10 font-mono">
                      {step.id}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm md:text-base max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </m.div>

                {/* Icon Circle (Centered on Desktop Line) */}
                <m.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: index * 0.2,
                  }}
                  className="relative shrink-0 z-20"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-zinc-950 border-4 border-zinc-900 flex items-center justify-center group hover:border-cyan-500/50 transition-colors duration-300 shadow-xl">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </m.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
