"use client";

import { useState } from "react";
import Link from "next/link";
import { PropertyCard } from "@/components/property/PropertyCard";
import { properties } from "@/lib/data/properties";

const filters = [
  { id: "alle", label: "Alle" },
  { id: "haus", label: "Haus" },
  { id: "wohnung", label: "Wohnung" },
  { id: "villa", label: "Villa" },
];

export function FeaturedPropertiesSection() {
  const [activeFilter, setActiveFilter] = useState("alle");

  return (
    <section id="objekte" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header row */}
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-sans text-3xl font-bold text-brand-dark">
            Aktuelle Liegenschaften
          </h2>
          <Link
            href="#kontakt"
            className="hidden items-center gap-2 font-sans text-sm text-brand-muted hover:text-brand-dark transition-colors sm:flex"
          >
            Alle Objekte anfragen
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 hover:bg-brand-blue hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>
        </div>

        {/* Subtitle */}
        <p className="font-sans text-sm text-brand-muted mb-6">
          Diskret vermittelte Objekte in der Schweiz.{" "}
          <Link href="#kontakt" className="font-medium text-brand-dark hover:text-brand-blue underline underline-offset-2">
            Kontakt aufnehmen
          </Link>
        </p>

        {/* Filter pills */}
        <div className="mb-8 flex items-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition-colors border ${
                activeFilter === f.id
                  ? "bg-brand-dark text-white border-brand-dark"
                  : "bg-white text-brand-muted border-brand-border hover:border-brand-dark hover:text-brand-dark"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

      </div>
    </section>
  );
}
