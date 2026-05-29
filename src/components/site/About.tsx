export function About() {
  return (
    <section id="a-propos" className="bg-bg py-28 md:py-36">
      <div className="container-zelkax grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="reveal">
          <h2 className="mt-5 font-display font-bold text-4xl md:text-5xl text-dark leading-[1.1]">
            Une agence québécoise,
            <br />
            pas une boîte noire.
          </h2>
          <div className="mt-7 space-y-5 text-base md:text-lg text-text-muted leading-relaxed">
            <p>
              Zelkax est une agence d'automatisation et d'IA fondée à Québec par
              des développeurs qui comprennent la réalité des affaires.
            </p>
            <p>
              On ne vend pas de technologie pour la technologie. On s'intéresse
              à votre contexte opérationnel en premier — les solutions viennent
              après.
            </p>
            <p>
              Nos clients sont des professionnels indépendants et des PME qui
              veulent récupérer du temps et professionnaliser leurs opérations
              sans embaucher une équipe TI.
            </p>
          </div>
        </div>

        <div className="reveal" data-delay={150}>
          <div className="relative aspect-[4/3] rounded-xl bg-bg-alt border border-border overflow-hidden flex items-center justify-center">
            <CircuitArt />
          </div>
        </div>
      </div>
    </section>
  );
}

function CircuitArt() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-3/4 h-3/4 text-accent/60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <circle cx="200" cy="150" r="50" stroke="currentColor" />
      <circle cx="200" cy="150" r="8" fill="currentColor" />
      <path d="M200 100 V 40 H 60 V 80" />
      <path d="M200 200 V 260 H 340 V 220" />
      <path d="M150 150 H 40" />
      <path d="M250 150 H 360" />
      <circle cx="60" cy="80" r="4" fill="currentColor" />
      <circle cx="340" cy="220" r="4" fill="currentColor" />
      <circle cx="40" cy="150" r="4" fill="currentColor" />
      <circle cx="360" cy="150" r="4" fill="currentColor" />
      <path d="M170 130 L 230 170 M 230 130 L 170 170" opacity="0.4" />
    </svg>
  );
}
