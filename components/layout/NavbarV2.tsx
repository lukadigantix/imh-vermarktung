"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

const navLinks = [
  { href: "#objekte", label: "Objekte" },
  { href: "#dienstleistungen", label: "Dienstleistungen" },
  { href: "#ueber-mich", label: "Über uns" },
  { href: "#bewertung", label: "Bewertung" },
  { href: "#kontakt", label: "Kontakt" },
];

export function NavbarV2() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-4 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-brand-border bg-white px-4 py-2 shadow-sm">
        {/* Logo */}
        <Link href="/">
          <BrandLogo size="sm" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-sans text-sm text-brand-muted hover:text-brand-dark transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="#kontakt"
            className="font-sans text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors px-4 py-2"
          >
            Anmelden
          </Link>
          <Link
            href="#kontakt"
            className="rounded-full border border-brand-border px-5 py-2 font-sans text-sm font-medium text-brand-dark hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            Objekt anfragen
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Menü öffnen"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-px w-6 bg-brand-dark transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-brand-dark transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-brand-dark transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-brand-border bg-white px-6 pb-6 shadow-sm md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-sans text-sm font-medium text-brand-dark hover:text-brand-blue transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#kontakt"
            className="mt-4 block rounded-full border border-brand-border px-5 py-3 text-center font-sans text-sm font-medium text-brand-dark"
            onClick={() => setMenuOpen(false)}
          >
            Objekt anfragen
          </Link>
        </div>
      )}
    </header>
  );
}
