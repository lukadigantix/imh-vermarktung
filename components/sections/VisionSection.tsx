import Link from "next/link";

export function VisionSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">

        {/* Eyebrow */}
        <p className="mb-6 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue">
          IMH Vermarktung
        </p>

        {/* Headline */}
        <h2 className="font-sans text-4xl font-black leading-[1.1] tracking-tight text-brand-dark md:text-5xl">
          Ihre Liegenschaft. <br className="hidden sm:block" />
          Ihr optimales Ergebnis.
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-brand-muted">
          Ich begleite Sie durch jeden Schritt — von der Bewertung über die
          diskrete Vermarktung bis zum erfolgreichen Abschluss. Verlässlich,
          persönlich, mit Ergebnissen.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-3 rounded-full bg-brand-dark py-3 pl-6 pr-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
          >
            Kontakt aufnehmen
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </span>
          </Link>
          <Link
            href="#ueber-mich"
            className="inline-flex items-center rounded-full border border-brand-border px-7 py-3 font-sans text-sm font-medium text-brand-dark transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Mehr erfahren
          </Link>
        </div>

      </div>
    </section>
  );
}
