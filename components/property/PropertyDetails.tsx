import { Button } from "@/components/ui/Button";

type PropertyDetailsProps = {
  description: string;
  features: string[];
};

export function PropertyDetails({ description, features }: PropertyDetailsProps) {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {/* Description + features */}
      <div className="lg:col-span-2 flex flex-col gap-8">
        <div>
          <h2 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-4">
            Objektbeschreibung
          </h2>
          <p className="font-sans text-base leading-relaxed text-brand-muted">
            {description}
          </p>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-4">
            Ausstattungsmerkmale
          </h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 font-sans text-sm text-brand-dark"
              >
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-brand-teal" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact CTA */}
      <aside className="border border-brand-border bg-white p-8 flex flex-col gap-5 h-fit">
        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-2">
            Ihr Kontakt
          </p>
          <p className="font-display text-2xl font-light text-brand-dark leading-tight">
            Isabelle Maud Haesler
          </p>
          <p className="font-sans text-sm text-brand-muted mt-1">
            Immobilienmaklerin
          </p>
        </div>

        <div className="border-t border-brand-border pt-4 flex flex-col gap-2">
          <a
            href="tel:+41786180401"
            className="font-sans text-sm text-brand-dark hover:text-brand-blue transition-colors"
          >
            +41 78 618 04 01
          </a>
          <a
            href="mailto:isabelle.haesler@imh-vermarktung.ch"
            className="font-sans text-sm text-brand-dark hover:text-brand-blue transition-colors break-all"
          >
            isabelle.haesler@imh-vermarktung.ch
          </a>
        </div>

        <Button
          as="a"
          href="mailto:isabelle.haesler@imh-vermarktung.ch?subject=Besichtigungsanfrage"
          variant="primary"
          size="md"
          className="w-full"
        >
          Besichtigung anfragen
        </Button>
      </aside>
    </div>
  );
}
