import { SectionTitle } from "@/components/ui/SectionTitle";

type Service = {
  number: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Verkauf & Vermarktung",
    description:
      "Professionelle Aufbereitung, gezielte Vermarktung und diskrete Nähe zum Markt — für den bestmöglichen Verkaufspreis Ihrer Liegenschaft.",
  },
  {
    number: "02",
    title: "Immobilienbewertung",
    description:
      "Fundierte Marktwertanalyse auf Basis aktueller Marktdaten und jahrelanger Erfahrung. Ehrlich, realistisch und verlässlich.",
  },
  {
    number: "03",
    title: "Beratung & Begleitung",
    description:
      "Von der ersten Idee bis zur Vertragsunterzeichnung: persönliche, fachkundige Beratung, die Sie durch jede Phase sicher führt.",
  },
];

export function ServicesSection() {
  return (
    <section id="dienstleistungen" className="py-24 bg-brand-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-14">
          <SectionTitle
            eyebrow="Dienstleistungen"
            title="Was ich für Sie tue"
            subtitle="Immobilien sind mehr als vier Wände — es sind Lebensabschnitte. Ich begleite Sie mit Kompetenz und Einfühlungsvermögen."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 gap-px bg-brand-border md:grid-cols-3">
          {services.map(({ number, title, description }) => (
            <div
              key={number}
              className="flex flex-col gap-6 bg-white px-8 py-10 hover:bg-brand-blue group transition-colors"
            >
              <span className="font-display text-5xl font-light text-brand-border group-hover:text-white/10 transition-colors select-none">
                {number}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-2xl font-light text-brand-dark group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-brand-muted group-hover:text-white/60 transition-colors">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
