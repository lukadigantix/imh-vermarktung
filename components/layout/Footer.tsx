import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-dark text-brand-light">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand — far left */}
          <div className="flex flex-col gap-5">
            <Link href="/">
              <BrandLogo size="lg" inverted />
            </Link>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-brand-muted">
              Verlässlich – Diskret – Erfolgreich
            </p>
          </div>

          {/* Kontakt + Nav — far right, spread apart */}
          <div className="flex gap-16 md:gap-24">
            {/* Contact */}
            <div className="flex flex-col gap-3">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-teal">
                Kontakt
              </h3>
              <address className="not-italic flex flex-col gap-2 font-sans text-sm text-brand-border/80">
                <span>Isabelle Maud Haesler</span>
                <a
                  href="mailto:isabelle.haesler@imh-vermarktung.ch"
                  className="hover:text-brand-teal transition-colors"
                >
                  isabelle.haesler@imh-vermarktung.ch
                </a>
                <a
                  href="tel:+41786180401"
                  className="hover:text-brand-teal transition-colors"
                >
                  +41 78 618 04 01
                </a>
              </address>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-teal">
                Navigation
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  { href: "#ueber-mich", label: "Über mich" },
                  { href: "#dienstleistungen", label: "Dienstleistungen" },
                  { href: "#objekte", label: "Objekte" },
                  { href: "#kontakt", label: "Kontakt" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-sans text-sm text-brand-border/80 hover:text-brand-teal transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="font-sans text-xs text-brand-muted">
            © {new Date().getFullYear()} IMH Vermarktung – Isabelle Maud Haesler. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
