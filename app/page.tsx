import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00D9FF] selection:text-black">
      <Header />

      <main>
        <Hero />

        {/* Features Section Placeholder */}
        <section id="features" className="py-24 bg-zinc-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi StockSense ?
              </h2>
              <p className="text-zinc-400">
                Une solution complète pour maîtriser votre inventaire.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Prédiction IA",
                  desc: "Anticipez la demande avec précision.",
                },
                {
                  title: "Intégration Genuka",
                  desc: "Synchronisation temps réel.",
                },
                {
                  title: "Alertes Intelligentes",
                  desc: "Ne ratez plus aucune vente.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/50 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
