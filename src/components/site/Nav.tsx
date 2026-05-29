import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#processus", label: "Comment ça marche" },
  { href: "#a-propos", label: "À propos" },
];

export function Nav() {
  const [overHero, setOverHero] = useState(false);
  const [open, setOpen] = useState(false);
  const heroRef = useRef<Element | null>(null);

  useEffect(() => {
    heroRef.current = document.getElementById("top");
    if (!heroRef.current) return;

    const io = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0.05 },
    );
    io.observe(heroRef.current);
    return () => io.disconnect();
  }, []);

  const transparent = overHero;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="container-zelkax flex h-20 items-center justify-between">
        <a
          href="#top"
          className={`font-display font-bold text-2xl tracking-tight transition-colors ${
            transparent ? "text-white" : "text-dark"
          }`}
        >
          Zelkax<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                transparent ? "text-white/80" : "text-text"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#calendrier"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110 hover:-translate-y-0.5"
          >
            Réserver un appel
          </a>
        </nav>

        <button
          className={`md:hidden p-2 ${transparent ? "text-white" : "text-dark"}`}
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-dark/60" onClick={() => setOpen(false)} />
        <aside
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white p-6 shadow-lg transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-display font-bold text-xl text-dark">
              Zelkax<span className="text-accent">.</span>
            </span>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="p-2">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg text-text hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#calendrier"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-white"
            >
              Réserver un appel
            </a>
          </nav>
        </aside>
      </div>
    </header>
  );
}
