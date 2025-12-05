"use client";

import { useRef, useEffect, useState } from "react";
import {
  m,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll progress for animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Map scroll to frame index (0 to 191)
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, 191]);

  // Background parallax/scale
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const xMoveBackground = useTransform(mouseX, [-0.5, 0.5], ["-1%", "1%"]);
  const yMoveBackground = useTransform(mouseY, [-0.5, 0.5], ["-1%", "1%"]);

  return (
    <div className="relative bg-black" onMouseMove={handleMouseMove}>
      {/* 1. STICKY IMAGE SEQUENCE SECTION */}
      <div ref={containerRef} className="relative h-[250vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <m.div
            className="absolute inset-0 z-0"
            style={{ scale: bgScale, x: xMoveBackground, y: yMoveBackground }}
          >
            <div className="absolute inset-0 bg-black/20 z-10" />
            <ScrollImageSequence progress={frameIndex} />
            <Particles />
          </m.div>

          {/* Scroll Indicator (Only visible during the sequence) */}
          <m.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-20"
            style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [1, 0]) }}
          >
            <span className="text-xs uppercase tracking-widest">
              Scroll to explore
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </m.div>
        </div>
      </div>

      {/* 2. TEXT CONTENT SECTION (APPEARS BELOW) */}
      <div className="relative z-20 bg-black border-t border-white/10 overflow-hidden">
        {/* Animated Background Elements for Text Section */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] opacity-20" />
          <Particles />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 py-32 flex flex-col items-center text-center">
          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md mx-auto shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">
                IA Prédictive • Genuka Compatible
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
              Prédisez.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
                Optimisez.
              </span>{" "}
              Gagnez.
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Transformez vos données de stock en décisions intelligentes.
              Anticipez la demande et maximisez votre trésorerie.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:scale-105">
                <span className="relative z-10">Découvrir StockSense</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center gap-2 group hover:scale-105">
                <span>Voir la démo</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
}

// Sub-components

function Particles() {
  const [particles, setParticles] = useState<
    Array<{
      x: string;
      y: string;
      scale: number;
      width: string;
      height: string;
      duration: number;
      targetY: string;
    }>
  >([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      scale: Math.random() * 0.5 + 0.5,
      width: Math.random() * 300 + 50 + "px",
      height: Math.random() * 300 + 50 + "px",
      duration: Math.random() * 10 + 10,
      targetY: Math.random() * 100 + "%",
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p, i) => (
        <m.div
          key={i}
          className="absolute bg-blue-500/10 rounded-full blur-3xl"
          initial={{
            x: p.x,
            y: p.y,
            scale: p.scale,
          }}
          animate={{
            y: [null, p.targetY],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: p.width,
            height: p.height,
          }}
        />
      ))}
    </div>
  );
}

function ScrollImageSequence({ progress }: { progress: any }) {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const unsubscribe = progress.on("change", (latest: number) => {
      setCurrentFrame(Math.round(latest));
    });
    return () => unsubscribe();
  }, [progress]);

  // Format frame number: frame_000.webp
  const getFramePath = (index: number) => {
    // Clamp index between 0 and 191
    const clampedIndex = Math.max(0, Math.min(191, index));
    const paddedIndex = clampedIndex.toString().padStart(3, "0");
    return `/assets/hero-parallax/frame_${paddedIndex}.webp`;
  };

  return (
    <div className="relative w-full h-full">
      <Image
        src={getFramePath(currentFrame)}
        alt="StockSense Animation"
        fill
        className="object-cover opacity-90"
        priority={true}
        unoptimized
      />
    </div>
  );
}

function FloatingUI() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Floating Card 1 */}
      <m.div
        className="absolute top-[15%] right-[5%] w-48 h-16 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-3 flex items-center gap-3 shadow-2xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
        <div>
          <div className="text-xs text-zinc-400">Croissance</div>
          <div className="text-sm font-bold text-white">+24.5%</div>
        </div>
      </m.div>

      {/* Floating Card 2 */}
      <m.div
        className="absolute bottom-[15%] left-[5%] w-40 h-14 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-3 flex items-center gap-3 shadow-2xl"
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <div>
          <div className="text-xs text-zinc-400">Stock</div>
          <div className="text-sm font-bold text-white">Optimisé</div>
        </div>
      </m.div>
    </div>
  );
}
