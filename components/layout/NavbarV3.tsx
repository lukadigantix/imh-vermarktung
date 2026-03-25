"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

const navLinks = [
  { href: "#kaufen", label: "Kaufen" },
  { href: "#mieten", label: "Mieten" },
  { href: "#verkaufen", label: "Verkaufen" },
  { href: "#ueber-uns", label: "Über uns" },
];

export function NavbarV3() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 pt-4 lg:px-10">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <BrandLogo size="sm" inverted />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-sans text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#kontakt"
            className="font-sans text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Login
          </Link>
          <Link
            href="#kontakt"
            className="rounded-full bg-white px-5 py-2 font-sans text-sm font-semibold text-brand-dark transition-colors hover:bg-white/90"
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="flex lg:hidden items-center justify-center rounded-full p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-[1500px] rounded-2xl border border-white/20 bg-brand-dark/95 px-6 py-5 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-sans text-sm font-medium text-white/80 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10">
              <Link href="#kontakt" className="block rounded-full bg-white px-5 py-2.5 text-center font-sans text-sm font-semibold text-brand-dark">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
