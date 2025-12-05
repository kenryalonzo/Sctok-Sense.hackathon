import Link from "next/link";
import { Twitter, Linkedin, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00D9FF] to-[#0066FF] rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                StockSense
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm text-lg">
              StockSense optimise vos stocks intelligemment grâce à l'IA, pour
              que vous ne manquiez jamais une vente.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#00D9FF] hover:text-black transition-all duration-300"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#0066FF] hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold">Produit</h4>
              <Link
                href="#"
                className="text-zinc-400 hover:text-[#00D9FF] transition-colors"
              >
                Fonctionnalités
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-[#00D9FF] transition-colors"
              >
                Tarifs
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-[#00D9FF] transition-colors"
              >
                Intégrations
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold">Support</h4>
              <Link
                href="#"
                className="text-zinc-400 hover:text-[#00D9FF] transition-colors"
              >
                Aide
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-[#00D9FF] transition-colors"
              >
                Confidentialité
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-[#00D9FF] transition-colors"
              >
                Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© 2025 StockSense. Tous droits réservés.</p>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-medium text-zinc-300">Compatible Genuka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
