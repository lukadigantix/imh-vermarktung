import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-stone-800 to-stone-700" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-4xl">
        <p className="font-sans text-xs font-semibold tracking-[0.35em] uppercase text-brand-gold">
          IMH Vermarktung
        </p>

        <h1 className="font-display text-5xl font-light leading-[1.1] tracking-wide text-white md:text-7xl">
          Verlässlich.
          <br />
          Diskret.
          <br />
          <em className="not-italic text-brand-gold">Erfolgreich.</em>
        </h1>

        <p className="font-sans text-base leading-relaxed text-white/60 max-w-md">
          Exklusive Immobilienvermarktung in der Schweiz. Mit persönlichem Einsatz,
          höchster Diskretion und nachweisbarem Ergebnis.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button as="a" href="#objekte" variant="primary" size="lg">
            Objekte entdecken
          </Button>
          <Button as="a" href="#kontakt" variant="secondary" size="lg">
            Kontakt aufnehmen
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-white/30">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
