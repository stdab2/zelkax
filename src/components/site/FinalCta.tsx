export function FinalCta() {
  return (
    <section className="bg-dark py-[120px] text-center relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.05]" />
      <div className="container-zelkax relative">
        <h2
          className="reveal font-display font-extrabold text-white leading-[1.05]"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
        >
          Prêt à récupérer
          <br />
          du temps chaque semaine?
        </h2>
        <p className="reveal mt-7 text-lg text-white/60 max-w-[460px] mx-auto">
          L'appel est gratuit. Ce qu'on découvre ensemble, ça, ça vaut quelque
          chose.
        </p>
        <div className="reveal mt-10">
          <a
            href="#calendrier"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-9 py-4 font-display font-semibold text-dark transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            Réserver un appel gratuit
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#080F19" }} className="py-10">
      <div
        className="container-zelkax flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="font-mono text-sm text-white/35">
          Zelkax · Québec · © 2026
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/45">
          <a href="#services" className="hover:text-accent transition-colors">
            Services
          </a>
          <a href="#processus" className="hover:text-accent transition-colors">
            Comment ça marche
          </a>
          <a href="#a-propos" className="hover:text-accent transition-colors">
            À propos
          </a>
          <a
            href="https://www.linkedin.com/in/steeve-dabire-b25168280/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
        </nav>
      </div>
    </footer>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
