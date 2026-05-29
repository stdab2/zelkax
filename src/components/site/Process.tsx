const STEPS = [
  {
    num: "01",
    title: "Appel de découverte",
    body: "On cartographie vos processus, on repère les frictions, on définit ensemble les automatisations les plus utiles. Pas de présentation — juste une conversation.",
  },
  {
    num: "02",
    title: "Proposition précise",
    body: "Périmètre clair, prix fixe, délai réaliste. Vous savez exactement ce que vous obtenez avant de vous engager à quoi que ce soit.",
  },
  {
    num: "03",
    title: "Livraison & suivi",
    body: "Mise en place rapide, formation si nécessaire. Zelkax reste disponible si vos besoins évoluent — un système bien construit s'adapte.",
  },
];

export function Process() {
  return (
    <section id="processus" className="bg-bg-alt py-28 md:py-36">
      <div className="container-zelkax">

        <div className="reveal grid md:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl text-dark leading-[1.05]">
              Simple à démarrer.
              <br />
              Puissant à l'usage.
            </h2>
          </div>
        </div>

        <div className="relative grid md:grid-cols-3 gap-0">

          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="reveal group relative p-0 md:pr-12 pb-10 md:pb-0"
              data-delay={i * 100}
            >
              {/* Number circle */}
              <div className="relative z-10 w-[3.25rem] h-[3.25rem] rounded-full border-2 border-border bg-bg-alt group-hover:bg-accent group-hover:border-accent flex items-center justify-center transition-all duration-300 mb-7">
                <span className="font-mono text-sm text-accent group-hover:text-dark transition-colors duration-300">
                  {s.num}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl md:text-2xl text-dark group-hover:text-dark leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-base text-text-muted leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
