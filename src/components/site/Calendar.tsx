export function Calendar() {
  return (
    <section id="calendrier" className="bg-bg-alt py-28 md:py-36">
      <div className="container-zelkax text-center">
        <h2 className="reveal mt-4 font-display font-bold text-4xl md:text-5xl text-dark leading-[1.1]">
          Réservons 30 minutes.
        </h2>
        <p className="reveal mt-6 text-lg text-text-muted max-w-[480px] mx-auto">
          Pas de pitch. On regarde ensemble si l'automatisation a du sens pour
          vous. Et si oui, par où commencer.
        </p>

        <div className="reveal mt-10 mx-auto max-w-[800px]">
          <div
            className="overflow-hidden rounded-xl border border-border bg-white"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <iframe
              src="https://cal.com/steeve-rkvfp2/30min?overlayCalendar=true"
              width="100%"
              height="620"
              className="w-full border-0"
              title="Réserver un appel avec Zelkax"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
