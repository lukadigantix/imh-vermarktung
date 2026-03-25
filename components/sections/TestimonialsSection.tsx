const testimonials = [
  {
    quote: "Isabelle hat unsere Villa in Küsnacht innerhalb von drei Wochen vermittelt – diskret, professionell und zum Wunschpreis. Absolut empfehlenswert.",
    name: "Thomas & Claudia R.",
    location: "Küsnacht, Kanton Zürich",
    rating: 5,
  },
  {
    quote: "Wir haben mit mehreren Maklern gesprochen, aber IMH Vermarktung war die einzige, die unsere Vorstellungen wirklich verstanden hat. Das Ergebnis übertraf unsere Erwartungen.",
    name: "Marc S.",
    location: "Zollikon, Kanton Zürich",
    rating: 5,
  },
  {
    quote: "Dank der Off-Market-Strategie war unser Penthouse nie öffentlich inseriert – und trotzdem innerhalb von 6 Wochen verkauft. Genau das wollten wir.",
    name: "Familie Brunner",
    location: "Meilen, Zürichsee",
    rating: 5,
  },
  {
    quote: "Transparente Kosten, schnelle Kommunikation und echte Marktkenntnis. Isabelle ist eine Ausnahmeerscheinung in der Branche.",
    name: "Sandra K.",
    location: "Zumikon, Kanton Zürich",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-amber-400">
          <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.5l-3.52 1.84.67-3.92L2.3 5.64l3.94-.57L8 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#F5F7FA] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue">
              Kundenstimmen
            </span>
            <h2 className="font-display text-4xl font-black leading-tight text-brand-dark lg:text-5xl">
              Was unsere Kunden
              <br />
              <span className="text-brand-blue">sagen.</span>
            </h2>
          </div>

          {/* Google rating badge */}
          <div className="flex items-center gap-3 rounded-2xl border border-brand-border bg-white px-5 py-4 lg:self-end">
            {/* Google G */}
            <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-black text-brand-dark">4.8</span>
                <StarRating count={5} />
              </div>
              <span className="font-sans text-xs text-brand-muted">Google Bewertungen</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 rounded-2xl border border-brand-border bg-white p-8"
            >
              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote mark */}
              <blockquote className="flex flex-col gap-4">
                <span className="font-display text-3xl font-black leading-none text-brand-blue/20 select-none">
                  &ldquo;
                </span>
                <p className="font-sans text-sm leading-relaxed text-brand-dark -mt-4">
                  {t.quote}
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="mt-auto flex items-center gap-3 border-t border-brand-border pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 font-display text-xs font-black text-brand-blue">
                  {t.name.charAt(0)}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-sans text-xs font-semibold text-brand-dark">
                    {t.name}
                  </span>
                  <span className="font-sans text-xs text-brand-muted">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
