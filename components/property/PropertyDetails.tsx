import type { Property } from "@/lib/data/properties";

type PropertyDetailsProps = {
  property: Property;
};

const detailRows = (p: Property) => [
  { label: "Objekttyp", value: p.tags[0]?.label === "Exklusiv" ? "Exklusives Objekt" : "Wohnimmobilie" },
  { label: "Status", value: "Zum Verkauf" },
  { label: "Zimmer", value: `${p.rooms} Zi.` },
  { label: "Wohnfläche", value: `${p.sqm} m²` },
  { label: "Etage", value: p.floor },
  { label: "Baujahr", value: p.yearBuilt },
  { label: "Objekt-ID", value: p.id.slice(0, 10).toUpperCase() },
];

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      {/* Left: description */}
      <div className="flex flex-col gap-6">
        <p className="font-sans text-sm leading-relaxed text-brand-muted">
          {property.description}
        </p>

        {/* Features */}
        <div className="flex flex-col gap-3">
          <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue">
            Ausstattung
          </h3>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {property.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 font-sans text-sm text-brand-dark">
                <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-brand-teal" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: details table */}
      <div className="flex flex-col">
        <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-4">
          Objektdetails
        </h3>
        <div className="flex flex-col divide-y divide-brand-border border-t border-brand-border">
          {detailRows(property).map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between py-3.5">
              <span className="font-sans text-sm text-brand-muted">{label}</span>
              <span className="font-sans text-sm font-semibold text-brand-dark">{value}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-brand-border bg-[#F7F9FB] p-6">
          <p className="font-display text-base font-bold text-brand-dark">Interesse geweckt?</p>
          <p className="font-sans text-xs text-brand-muted leading-relaxed">
            Kontaktieren Sie Isabelle Maud Haesler für eine diskrete Besichtigung oder weitere Informationen.
          </p>
          <div className="flex flex-col gap-2 pt-1">
            <a
              href="tel:+41786180401"
              className="flex items-center gap-2 font-sans text-sm text-brand-dark hover:text-brand-blue transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-blue shrink-0">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.16 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6 7.09a16 16 0 006 6l.36-1.36a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" />
              </svg>
              +41 78 618 04 01
            </a>
            <a
              href="mailto:isabelle.haesler@imh-vermarktung.ch"
              className="flex items-center gap-2 font-sans text-sm text-brand-dark hover:text-brand-blue transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-blue shrink-0">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              isabelle.haesler@imh-vermarktung.ch
            </a>
          </div>
          <a
            href={`mailto:isabelle.haesler@imh-vermarktung.ch?subject=Besichtigungsanfrage`}
            className="mt-1 flex items-center justify-center gap-2 rounded-full bg-brand-dark px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
          >
            Besichtigung anfragen
          </a>
        </div>
      </div>
    </div>
  );
}
