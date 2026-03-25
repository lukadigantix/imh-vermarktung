import Link from "next/link";

export function AboutSectionV2() {
  return (
    <section id="ueber-mich" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">

        {/* Eyebrow */}
        <p className="mb-6 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue">
          Über mich
        </p>

        {/* Headline */}
        <h2 className="font-sans text-4xl font-black leading-[1.1] tracking-tight text-brand-dark md:text-5xl">
          Ihre Maklerin mit <br className="hidden sm:block" />
          Leidenschaft und Diskretion.
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-brand-muted">
          Als erfahrene Immobilienmaklerin begleite ich meine Kunden durch jeden
          Schritt der Vermarktung — von der ersten Beratung bis zur
          Schlüsselübergabe. Dabei stehen Ihre Interessen stets an erster Stelle.
          Mit einem feinen Gespür für Menschen, Märkte und Liegenschaften schaffe
          ich nachhaltige Verbindungen zwischen aussergewöhnlichen Objekten und
          den richtigen Käufern.
        </p>

        {/* Credibility pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[
            "15+ Jahre Erfahrung",
            "200+ vermittelte Objekte",
            "Verlässlich & diskret",
            "Zürichsee Region",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full border border-brand-border px-4 py-1.5 font-sans text-xs font-medium text-brand-muted"
            >
              {label}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-3 rounded-full bg-brand-dark py-3 pl-6 pr-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
          >
            Persönliches Gespräch anfragen
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </span>
          </Link>
          <Link
            href="#dienstleistungen"
            className="inline-flex items-center rounded-full border border-brand-border px-7 py-3 font-sans text-sm font-medium text-brand-dark transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Dienstleistungen
          </Link>
        </div>

      </div>
    </section>
  );
}
