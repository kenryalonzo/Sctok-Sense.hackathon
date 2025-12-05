"use client";

import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
// import NavBar from "@/components/NavBar";
// import Footer from "@/components/Footer";
import { LazyMotion, domAnimation } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted_grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <html lang="fr">
      <head>
        <title>StockSense - Intelligent Stock Management</title>
        <meta
          name="description"
          content="AI-powered stock prediction and management for SMEs. Optimize your inventory with StockSense."
        />
        <meta
          name="keywords"
          content="stock management, AI prediction, SME, inventory, Genuka, StockSense"
        />
      </head>
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <LazyMotion features={domAnimation} strict>
          {/* {!isAdminRoute && <NavBar />} */}
          {!isAdminRoute && (
            <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
              <LightRays
                raysOrigin="top-center-offset"
                raysColor="#3b82f6"
                raysSpeed={0.5}
                lightSpread={0.9}
                rayLength={1.4}
                followMouse={true}
                mouseInfluence={0.02}
                noiseAmount={0.0}
                distortion={0.01}
              />
            </div>
          )}
          <main>{children}</main>
          <Toaster />
          {/* {!isAdminRoute && <Footer />} */}
        </LazyMotion>
      </body>
    </html>
  );
}
