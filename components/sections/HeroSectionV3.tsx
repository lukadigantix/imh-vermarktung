"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["Kaufen", "Verkaufen", "Mieten"];

const locationOptions = ["Zürich", "Küsnacht", "Meilen", "Zollikon", "Zumikon", "Hombrechtikon"];
const typeOptions = ["Alle Typen", "Wohnung", "Haus", "Villa", "Penthouse", "Attika"];
const priceOptions = ["Alle Preise", "bis CHF 1M", "CHF 1M – 3M", "CHF 3M – 5M", "CHF 5M+"];

export function HeroSectionV3() {
  const [activeTab, setActiveTab] = useState("Kaufen");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero1.jpg"
        alt="Luxusimmobilie Zürichsee"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-dark/70 via-brand-dark/40 to-brand-dark/80" />

      {/* Content */}
      <div className="relative flex min-h-screen flex-col">
        {/* Push content down past navbar */}
        <div className="flex flex-1 flex-col justify-between px-6 pb-0 pt-32 lg:px-12">

          {/* Top content area */}
          <div className="mx-auto w-full max-w-[1500px] flex flex-col gap-10">

            {/* Badge */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/40" />
              <span className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-amber-400">
                  <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.5l-3.52 1.84.67-3.92L2.3 5.64l3.94-.57L8 1.5z" />
                </svg>
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-white/90">
                  Nr. 1 Immobilienvermittlung Zürichsee
                </span>
              </span>
              <span className="h-px w-10 bg-white/40" />
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-5">
              <h1 className="font-display text-3xl font-black leading-[1.05] text-white lg:text-5xl lg:max-w-3xl">
                Finden Sie Ihre ideale Liegenschaft und starten Sie mit unserer{" "}
                <span className="text-brand-teal">Expertise.</span>
              </h1>
              <p className="font-sans text-base font-light leading-relaxed text-white/65 max-w-xl">
                Diskret, verlässlich und mit tiefer Marktkenntnis – IMH Vermarktung begleitet Sie beim Kauf, Verkauf und der Vermietung von Liegenschaften in der Zürichsee-Region.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-3xl font-black text-white lg:text-4xl">15+</span>
                <span className="font-sans text-xs text-white/50">Jahre Erfahrung</span>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-3xl font-black text-white lg:text-4xl">200+</span>
                <span className="font-sans text-xs text-white/50">Objekte vermittelt</span>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-3xl font-black text-white lg:text-4xl">4.8★</span>
                <span className="font-sans text-xs text-white/50">Google Bewertung</span>
              </div>
            </div>
          </div>

          {/* Search box — anchored to bottom */}
          <div className="mx-auto w-full max-w-[1500px] mt-16">
            {/* Tabs */}
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-7 py-3 font-sans text-sm font-semibold transition-colors rounded-t-xl ${
                    activeTab === tab
                      ? "bg-white text-brand-dark"
                      : "bg-white/15 text-white/70 hover:bg-white/25 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search bar */}
            <div className="flex flex-col gap-4 rounded-b-2xl rounded-tr-2xl bg-white p-6 shadow-2xl lg:flex-row lg:items-end lg:gap-4">

              {/* Location */}
              <div className="flex flex-1 flex-col gap-1.5">
                <label className="font-sans text-xs font-semibold text-brand-muted">Standort</label>
                <div className="relative">
                  <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-brand-border bg-brand-light py-3 pl-9 pr-8 font-sans text-sm text-brand-dark focus:border-brand-blue focus:outline-none"
                  >
                    <option value="">Zürich, Schweiz</option>
                    {locationOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block h-10 w-px bg-brand-border self-end mb-1" />

              {/* Type */}
              <div className="flex flex-1 flex-col gap-1.5">
                <label className="font-sans text-xs font-semibold text-brand-muted">Objekttyp</label>
                <div className="relative">
                  <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-brand-border bg-brand-light py-3 pl-9 pr-8 font-sans text-sm text-brand-dark focus:border-brand-blue focus:outline-none"
                  >
                    {typeOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block h-10 w-px bg-brand-border self-end mb-1" />

              {/* Price */}
              <div className="flex flex-1 flex-col gap-1.5">
                <label className="font-sans text-xs font-semibold text-brand-muted">Preis</label>
                <div className="relative">
                  <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                  </svg>
                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-brand-border bg-brand-light py-3 pl-9 pr-8 font-sans text-sm text-brand-dark focus:border-brand-blue focus:outline-none"
                  >
                    {priceOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>

              {/* Search button */}
              <button className="flex shrink-0 items-center gap-2 rounded-full bg-brand-dark px-7 py-3.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-brand-blue lg:self-end">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
                Suchen
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
