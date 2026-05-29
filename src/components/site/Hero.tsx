import { ChevronDown, Zap } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.07]" />
      {/* radial teal glow top right */}
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,201,167,0.18) 0%, rgba(0,201,167,0) 65%)",
        }}
      />

      <div className="container-zelkax relative z-10 py-32">
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/10 px-4 py-1.5 mb-8">
            <Zap size={14} className="text-accent" />
            <span className="font-mono text-sm text-accent">
              Automatisation & IA · Québec
            </span>
          </div>

          <h1
            className="font-display font-extrabold text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 3.75rem)", letterSpacing: "-0.03em" }}
          >
            Arrêtez de perdre votre semaine
            <br />
            <span className="text-accent">sur du travail qui se répète.</span>
          </h1>

          <p className="mt-8 text-xl text-white/65 max-w-[540px] leading-relaxed">
            Zelkax conçoit des systèmes d'automatisation sur mesure pour les
            professionnels qui veulent que leurs outils travaillent aussi fort
            qu'eux.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#calendrier"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-dark transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Réserver un appel gratuit
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-white/10"
            >
              Découvrir nos services
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
