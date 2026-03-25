const usps = [
  {
    kpi: "12K",
    kpiPrefix: "ab CHF",
    kpiSuffix: "",
    tag: "Honorar",
    title: "Fixhonorar – kein Prozentsatz",
    desc: "Transparente Vergütung ab CHF 12'000, unabhängig vom Verkaufspreis. Kein Risiko, keine versteckten Kosten.",
  },
  {
    kpi: "24/7",
    kpiPrefix: "",
    kpiSuffix: "",
    tag: "Marktdaten",
    title: "Live-Marktanalysen",
    desc: "Echtzeit-Einblicke in Preisbewegungen, Nachfrage und Vergleichsobjekte – jederzeit auf Ihrem Dashboard.",
  },
  {
    kpi: "360°",
    kpiPrefix: "",
    kpiSuffix: "",
    tag: "Technologie",
    title: "Virtuelle Rundgänge",
    desc: "Professionelle 3D-Touren sprechen internationale Käufer an – vollständig off-market, ohne öffentliche Sichtbarkeit.",
  },
  {
    kpi: "200+",
    kpiPrefix: "",
    kpiSuffix: "Objekte",
    tag: "Netzwerk",
    title: "Sotheby's & Engel&Völkers",
    desc: "Als akkreditierte Partnerin erreichen wir qualifizierte Käufer weit über die Grenzen der Schweiz hinaus.",
  },
];

export function CredibilitySection() {
  return (
    <section className="bg-brand-dark py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Split header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-teal">
              Warum IMH Vermarktung
            </span>
            <h2 className="font-display text-4xl font-black leading-tight text-white lg:text-5xl">
              Klar messbare{" "}
              <span className="text-brand-blue">Vorteile.</span>
            </h2>
          </div>
          <p className="font-sans text-sm leading-relaxed text-white/50 lg:text-right lg:max-w-sm lg:ml-auto">
            Wir verbinden Schweizer Präzision mit modernster Technologie
            und einem internationalen Netzwerk – für Ihr Objekt.
          </p>
        </div>

        {/* USP cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-blue/50 hover:bg-white/10"
            >
              {/* Top: tag pill */}
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-white/15 px-3 py-1 font-sans text-[0.6rem] font-semibold tracking-widest uppercase text-white/40">
                  {usp.tag}
                </span>
                <span className="font-sans text-xs font-medium text-white/20">
                  0{i + 1}
                </span>
              </div>

              {/* KPI */}
              <div className="mb-6 flex flex-col gap-0.5">
                {usp.kpiPrefix && (
                  <span className="font-sans text-xs font-medium tracking-widest uppercase text-brand-blue/70">
                    {usp.kpiPrefix}
                  </span>
                )}
                <span className="font-display text-5xl font-black leading-none text-white lg:text-6xl">
                  {usp.kpi}
                </span>
                {usp.kpiSuffix && (
                  <span className="font-sans text-xs font-medium tracking-widest uppercase text-white/40 mt-1">
                    {usp.kpiSuffix}
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className="mb-5 h-px w-8 bg-brand-blue transition-all duration-300 group-hover:w-full" />

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-sm font-bold leading-snug text-white">
                  {usp.title}
                </h3>
                <p className="font-sans text-xs leading-relaxed text-white/45">
                  {usp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
