"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Wie lange dauert der Verkaufsprozess einer Immobilie?",
    a: "Die Dauer hängt von Lage, Preis und Marktsituation ab. In der Zürichsee-Region rechnen wir bei korrekt positionierten Objekten mit 60 bis 120 Tagen vom Erstgespräch bis zur Beurkundung. Dank unseres vorselektierten Käuferregisters verkürzen wir diesen Zeitraum häufig erheblich.",
  },
  {
    q: "Was kostet mich die Zusammenarbeit mit IMH Vermarktung?",
    a: "Wir arbeiten auf Provisionsbasis – Sie zahlen ausschliesslich bei erfolgreichem Verkaufsabschluss. Die Höhe der Provision besprechen wir transparent im Erstgespräch und richten sie nach Objekttyp, Preissegment und gewünschtem Leistungsumfang aus.",
  },
  {
    q: "Wie wird der Marktwert meiner Immobilie ermittelt?",
    a: "Unsere Bewertung stützt sich auf eine Kombination aus hedonischen Verfahren, aktuellen Vergleichstransaktionen in der Region sowie unserer langjährigen Marktkenntnis am Zürichsee. Das Ergebnis ist eine realistische, marktgerechte Einschätzung – keine Gefälligkeitsbewertung.",
  },
  {
    q: "Wie diskret gehen Sie beim Verkauf vor?",
    a: "Diskretion ist ein Kernversprechen von IMH Vermarktung. Auf Wunsch vermarkten wir Ihr Objekt ausschliesslich off-market über unser Netzwerk qualifizierter Interessenten – ohne öffentliche Inserate, ohne Beschilderung und ohne Nennung Ihres Namens.",
  },
  {
    q: "Welche Regionen betreuen Sie?",
    a: "Unser Schwerpunkt liegt an der Zürichsee-Region sowie im Kanton Zürich. Für exklusive Objekte sind wir auch in angrenzenden Kantonen tätig. Sprechen Sie uns an – wir prüfen gerne, ob wir das richtige Netzwerk für Ihr Objekt mitbringen.",
  },
  {
    q: "Begleiten Sie auch den Kauf einer Immobilie?",
    a: "Ja. Wir unterstützen kaufsuchende Klienten bei der Suche, Bewertung und Verhandlung – diskret und mit klarem Fokus auf Ihre Interessen. Als registrierter Suchkunde erhalten Sie Zugang zu Objekten, die nie öffentlich inseriert werden.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue">
              Häufige Fragen
            </span>
            <h2 className="font-display text-4xl font-black leading-tight text-brand-dark lg:text-5xl">
              Was Sie wissen
              <br />
              <span className="text-brand-blue">möchten.</span>
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-brand-muted lg:text-right">
            Transparenz ist uns wichtig. Hier finden Sie Antworten auf die
            häufigsten Fragen rund um Immobilienverkauf, Bewertung und
            Zusammenarbeit.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-brand-border">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="group">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-8 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Number + Question */}
                  <div className="flex items-start gap-5">
                    <span className="mt-0.5 font-display text-xs font-black tracking-widest text-brand-blue/40 select-none">
                      0{i + 1}
                    </span>
                    <span
                      className={`font-display text-base font-bold leading-snug transition-colors duration-200 lg:text-lg ${
                        isOpen ? "text-brand-blue" : "text-brand-dark group-hover:text-brand-blue"
                      }`}
                    >
                      {item.q}
                    </span>
                  </div>

                  {/* Icon */}
                  <span
                    className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-brand-blue bg-brand-blue text-white rotate-45"
                        : "border-brand-border bg-transparent text-brand-dark group-hover:border-brand-blue group-hover:text-brand-blue"
                    }`}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-3.5 w-3.5"
                    >
                      <line x1="8" y1="2" x2="8" y2="14" />
                      <line x1="2" y1="8" x2="14" y2="8" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-8 pl-10 font-sans text-sm leading-relaxed text-brand-muted lg:text-base lg:max-w-3xl">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
