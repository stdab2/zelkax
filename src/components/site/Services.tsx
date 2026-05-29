const SERVICES = [
  {
    num: "01",
    title: "Automatisation de flux",
    body: "Ce qui se répète, tourne seul. On identifie vos tâches manuelles et on construit les déclencheurs qui les exécutent — sans toucher à ce qui fonctionne déjà.",
    tags: ["Relances", "Rapports", "Notifications", "Transferts"],
  },
  {
    num: "02",
    title: "Connexion entre vos systèmes",
    body: "Vos logiciels existent déjà — ils ne se parlent juste pas. On les connecte pour que l'information circule sans ressaisie, sans friction, sans perte.",
    tags: ["CRM", "Comptabilité", "Agenda", "Formulaires"],
  },
  {
    num: "03",
    title: "Outils IA opérationnels",
    body: "Pas de l'IA pour faire bien. De l'IA pour faire vite. Extraction de documents, assistants internes, triage automatique — calibrés sur votre contexte réel.",
    tags: ["Extraction", "Triage", "Rédaction", "Agents IA internes"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-bg py-28 md:py-36">
      <div className="container-zelkax">

        <div className="reveal grid md:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl text-dark leading-[1.05]">
              Des solutions concrètes,
              <br />
              pas des promesses.
            </h2>
          </div>
          <p className="text-lg text-text-muted leading-relaxed md:pb-1">
            Chaque système est construit selon votre contexte — vos outils,
            votre volume, vos contraintes réelles.
          </p>
        </div>

        <div>
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className="reveal group relative border-t border-border overflow-hidden"
              data-delay={i * 80}
            >
              {/* Background that slides in on hover */}
              <div className="absolute inset-0 bg-dark -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

              <div className="relative z-10 grid md:grid-cols-[72px_1fr_160px] gap-x-12 gap-y-4 py-10 md:py-14 items-start">

                <span className="font-mono text-sm text-accent pt-1 transition-colors duration-300 ml-2">
                  {s.num}
                </span>

                <div>
                  <h3 className="font-display font-bold text-2xl md:text-[1.9rem] text-dark group-hover:text-white leading-tight transition-colors duration-300 delay-75">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-base md:text-lg text-text-muted group-hover:text-white/55 leading-relaxed max-w-xl transition-colors duration-300 delay-100">
                    {s.body}
                  </p>
                </div>

                <div className="hidden md:flex flex-col gap-2 pt-1">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[14px] tracking-wide text-text-muted/40 group-hover:text-accent/60 transition-colors duration-300 delay-150"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>

      </div>
    </section>
  );
}
