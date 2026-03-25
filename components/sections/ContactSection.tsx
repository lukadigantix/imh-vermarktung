import { SectionTitle } from "@/components/ui/SectionTitle";

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Text */}
          <div className="flex flex-col gap-8">
            <SectionTitle
              eyebrow="Kontakt"
              title="Sprechen wir über Ihre Liegenschaft"
              subtitle="Ob Kauf, Verkauf oder einfach eine erste Einschätzung – ich bin für Sie da. Diskret, persönlich und unverbindlich."
              align="left"
              inverted
            />

            <div className="flex flex-col gap-4">
              <ContactItem
                label="Telefon"
                value="+41 78 618 04 01"
                href="tel:+41786180401"
              />
              <ContactItem
                label="E-Mail"
                value="isabelle.haesler@imh-vermarktung.ch"
                href="mailto:isabelle.haesler@imh-vermarktung.ch"
              />
            </div>
          </div>

          {/* Decorative quote */}
          <div className="border-l-2 border-brand-teal pl-8">
            <blockquote className="font-display text-xl font-light italic leading-relaxed text-white/80 md:text-3xl">
              «Ich verkaufe nicht einfach Immobilien — ich schaffe
              Verbindungen, die zu Ihrer Geschichte passen.»
            </blockquote>
            <p className="font-sans text-xs tracking-widest uppercase text-brand-teal mt-6">
              — Isabelle Maud Haesler
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-brand-teal">
        {label}
      </span>
      <a
        href={href}
        className="font-sans text-base text-white/80 hover:text-brand-teal transition-colors"
      >
        {value}
      </a>
    </div>
  );
}
