"use client";

import { useRef, useEffect, useState } from "react";
import { m, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth progress for the image sequence inside the Macbook
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Map scroll to frame index (0 to 191)
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, 191]);

  // Text Parallax: Move text up as we scroll
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between min-h-[150vh] relative">
        {/* LEFT COLUMN: Text Content (Sticky) */}
        <div className="w-full md:w-1/2 h-screen sticky top-0 flex flex-col justify-center px-6 md:px-12 z-20">
          <m.div
            style={{ y: textY, opacity: textOpacity }}
            className="max-w-xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">
                StockSense AI 2.0
              </span>
            </div>

            {/* Title - Clean & Minimalist */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              La gestion de stock, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                réinventée.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Ne laissez plus le hasard dicter votre trésorerie. Prédisez la
              demande et optimisez vos approvisionnements avec une précision
              chirurgicale.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="group px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2">
                Commencer maintenant
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">
                Voir la démo
              </button>
            </div>
          </m.div>
        </div>

        {/* RIGHT COLUMN: Macbook Scroll */}
        <div className="w-full md:w-1/2 relative z-10">
          <MacbookScroll
            title={
              <span className="text-2xl md:text-3xl font-bold text-white opacity-0">
                {/* Hidden title to maintain spacing if needed, or we can remove it */}
                StockSense Dashboard
              </span>
            }
            showGradient={true}
          >
            {/* Screen Content: Image Sequence */}
            <div className="relative w-full h-full bg-black">
              <ScrollImageSequence progress={frameIndex} />

              {/* Screen Overlay (Optional) */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </MacbookScroll>
        </div>
      </div>
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

  const getFramePath = (index: number) => {
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
        className="object-cover"
        priority={true}
        unoptimized
      />
    </div>
  );
}
