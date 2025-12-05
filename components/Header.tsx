"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Fonctionnalités", href: "#features" },
  { name: "Tarifs", href: "#pricing" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-sm border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8">
            <div className="relative w-8 h-8">
              <Image
                src="/logo-stockSense.png"
                alt="StockSense Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <span className="text-xl font-bold text-white tracking-tight group-hover:text-[#00D9FF] transition-colors">
            StockSense
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-[#00D9FF] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D9FF] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-white hover:text-[#00D9FF] transition-colors"
          >
            Se connecter
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-full bg-linear-to-r from-[#00D9FF] to-[#0066FF] text-white text-sm font-bold hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-shadow duration-300"
          >
            Démarrer gratuit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-zinc-300 hover:text-[#00D9FF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Link
              href="/login"
              className="text-lg font-medium text-white hover:text-[#00D9FF]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Se connecter
            </Link>
            <Link
              href="/signup"
              className="text-center px-4 py-3 rounded-lg bg-linear-to-r from-[#00D9FF] to-[#0066FF] text-white font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Démarrer gratuit
            </Link>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
