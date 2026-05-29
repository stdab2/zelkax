import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { Calendar } from "@/components/site/Calendar";
import { FinalCta, Footer } from "@/components/site/FinalCta";
import { useRevealOnScroll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zelkax — Automatisation & IA pour PME du Québec" },
      {
        name: "description",
        content:
          "Zelkax conçoit des systèmes d'automatisation et d'IA sur mesure pour les professionnels et PME du Québec. Moins de répétition. Plus de résultats.",
      },
      { property: "og:title", content: "Zelkax — Automatisation & IA" },
      {
        property: "og:description",
        content:
          "Agence québécoise d'automatisation et d'IA pour PME et professionnels indépendants.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useRevealOnScroll();
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Calendar />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
