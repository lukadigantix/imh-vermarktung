"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "kaufen", label: "Kaufen" },
  { id: "verkaufen", label: "Verkaufen" },
  { id: "bewertung", label: "Bewertung" },
  { id: "kontakt", label: "Kontakt" },
];

export function HeroSectionV2() {
  const [activeTab, setActiveTab] = useState("kaufen");

  return (
    <section className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Headline */}
        <h1 className="mt-10 py-6 text-center font-sans text-4xl font-light leading-[1.05] tracking-tight text-brand-dark sm:text-6xl md:py-16 md:text-8xl lg:text-[7rem]">
          Finden Sie Ihr{" "}
          <br className="hidden sm:block" />
          Traumzuhause.
        </h1>

        {/* Tabs — outside image, centered */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-1 rounded-full bg-gray-100 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-3 py-1.5 font-sans text-sm font-medium transition-colors sm:px-5 sm:py-2 ${
                  activeTab === tab.id
                    ? "bg-brand-dark text-white shadow-sm"
                    : "text-brand-muted hover:text-brand-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search bar — outside image, centered, with negative margin so it overlaps the image top */}
        <div className="relative z-10 mx-auto mt-5 max-w-2xl">
          <div className="flex overflow-hidden rounded-full bg-white shadow-lg ring-1 ring-brand-border">
            <input
              type="text"
              placeholder="Adresse, Stadt, Postleitzahl, Agent"
              className="flex-1 bg-transparent px-6 py-4 font-sans text-sm text-brand-dark placeholder:text-brand-muted outline-none"
            />
            <button className="m-1.5 flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-brand-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Entdecken
            </button>
          </div>
        </div>
      </div>

      {/* Hero image — 90% wide, centered, pulled up behind search bar */}
      <div className="relative mx-auto -mt-6 w-[90%] overflow-hidden rounded-2xl">
        <div className="relative h-[420px] md:h-[540px] lg:h-[600px]">
          <Image
            src="/images/hero1.jpg"
            alt="Exklusive Immobilien in der Schweiz"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Trust strip */}
        <div className="flex items-center justify-between gap-4 border-t border-brand-border py-6 sm:grid sm:grid-cols-3 sm:gap-6 md:py-8">

          {/* Left — Google rating */}
          <div className="flex items-center gap-2.5">
            <svg width="28" height="28" viewBox="0 0 48 48" className="shrink-0 md:w-8 md:h-8">
              <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
              <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.7 7.4 6.3 14.7z"/>
              <path fill="#FBBC05" d="M24 46c5.9 0 10.9-2 14.5-5.4l-6.7-5.5C29.8 36.8 27.1 38 24 38c-6.1 0-10.7-3.9-12.3-9.3L4.6 34c3.5 7.4 10.5 12 19.4 12z"/>
              <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.7 2.8-2.4 5.1-4.7 6.6l6.7 5.5C41.8 37.4 45 31.2 45 24c0-1.3-.2-2.7-.5-4z"/>
            </svg>
            <div>
              <p className="font-sans text-xs font-bold text-brand-dark leading-tight md:text-sm">Google Bewertungen</p>
              <p className="font-sans text-[0.65rem] text-brand-muted mt-0.5">Exzellent, 50+</p>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#F5A623">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Center — Quote (hidden on mobile) */}
          <div className="hidden flex-col items-center text-center sm:flex">
            <blockquote className="font-sans text-sm font-medium leading-snug text-brand-dark md:text-base">
              «Isabelle Haesler findet für jede Liegenschaft den richtigen Käufer — verlässlich und diskret.»
            </blockquote>
            <p className="mt-2 font-sans text-xs text-brand-muted">Sandra K.</p>
          </div>

          {/* Right — Arrow + label */}
          <div className="flex flex-col items-end gap-1.5">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-brand-dark transition-colors hover:bg-brand-blue hover:text-white md:h-12 md:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <p className="font-sans text-[0.65rem] text-brand-muted md:text-xs">Alle Bewertungen</p>
          </div>

        </div>
      </div>
    </section>
  );
}
