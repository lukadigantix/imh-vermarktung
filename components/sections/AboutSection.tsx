import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "200+", label: "Vermittelte Objekte" },
  { value: "CHF 500M+", label: "Transaktionsvolumen" },
];

export function AboutSection() {
  return (
    <section id="ueber-mich" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">

          {/* ── Left: image column ── */}
          <div className="relative order-last lg:order-first">
            {/* Main image */}
            <div className="relative h-[560px] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-border to-stone-300 lg:h-full lg:min-h-[580px]">
              <Image
                src="/images/about.jpg"
                alt="Isabelle Maud Haesler"
                fill
                className="object-cover object-center"
              />
              {/* subtle bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl" />

              {/* Name card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block rounded-xl bg-brand-dark/90 px-5 py-3 backdrop-blur-sm">
                  <p className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-brand-teal">
                    Isabelle Maud Haesler
                  </p>
                  <p className="font-sans text-xs text-white/70 mt-0.5">
                    Inhaberin &amp; Immobilienmaklerin, IMH Vermarktung
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat badge */}
            <div className="absolute -right-4 top-10 hidden rounded-2xl border border-brand-border bg-white px-5 py-4 shadow-lg lg:block">
              <p className="font-sans text-2xl font-bold text-brand-dark leading-none">15+</p>
              <p className="font-sans text-xs text-brand-muted mt-1">Jahre Erfahrung<br/>am Schweizer Markt</p>
            </div>
          </div>

          {/* ── Right: text column ── */}
          <div className="flex flex-col justify-center gap-8">
            {/* Eyebrow */}
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue">
              Über mich
            </p>

            {/* Headline */}
            <h2 className="font-sans text-4xl font-bold leading-tight text-brand-dark lg:text-5xl">
              Ihre Maklerin <br className="hidden sm:block" />
              mit Leidenschaft <br className="hidden sm:block" />
              und Diskretion.
            </h2>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-brand-blue pl-5">
              <p className="font-sans text-base font-medium leading-relaxed text-brand-dark">
                «Jede Liegenschaft hat ihre eigene Geschichte. Meine Aufgabe ist es, die richtigen Menschen zusammenzubringen — verlässlich, diskret und mit dem Blick fürs Wesentliche.»
              </p>
            </blockquote>

            {/* Body */}
            <div className="flex flex-col gap-4 font-sans text-sm leading-relaxed text-brand-muted">
              <p>
                Als erfahrene Immobilienmaklerin begleite ich meine Kunden durch jeden Schritt der Vermarktung – von der ersten Beratung bis zur Schlüsselübergabe. Dabei stehen Ihre Interessen immer an erster Stelle.
              </p>
              <p>
                Mit einem feinen Gespür für Menschen, Märkte und Liegenschaften schaffe ich nachhaltige Verbindungen zwischen aussergewöhnlichen Objekten und den richtigen Käufern. Meine Arbeit ist geprägt von Integrität und dem Anspruch, für jede Liegenschaft das optimale Ergebnis zu erzielen.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 border-t border-brand-border pt-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-sans text-2xl font-bold text-brand-dark leading-none">
                    {value}
                  </span>
                  <span className="font-sans text-xs text-brand-muted leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
              >
                Persönliches Gespräch anfragen
              </Link>
              <Link
                href="#dienstleistungen"
                className="font-sans text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors"
              >
                Dienstleistungen →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
