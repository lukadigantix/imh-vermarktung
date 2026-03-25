"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { properties } from "@/lib/data/properties";
import type { Property } from "@/lib/data/properties";

const filters = [
  { id: "alle", label: "Alle", count: properties.length },
  { id: "haus", label: "Haus", count: 2 },
  { id: "wohnung", label: "Wohnung", count: 2 },
  { id: "villa", label: "Villa", count: 1 },
  { id: "grundstueck", label: "Grundstück", count: 1 },
];

export function FeaturedPropertiesSectionV2() {
  const [activeFilter, setActiveFilter] = useState("alle");

  return (
    <section id="objekte" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Split header */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <h2 className="font-sans text-4xl font-black leading-tight tracking-tight text-brand-dark">
            Ausgewählte<br />Liegenschaften
          </h2>
          <p className="font-sans text-sm leading-relaxed text-brand-muted md:text-right">
            Diskret vermittelte Objekte in der Schweiz —<br className="hidden md:block" />
            sorgfältig ausgewählt und exklusiv vermarktet.
          </p>
        </div>

        {/* Filters row */}
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* On mobile: bleed out of container with -mx-6, padding restored inside */}
          <div className="-mx-6 overflow-x-auto pb-1 scrollbar-none sm:mx-0">
            <div className="flex items-center gap-2 px-6 pr-6 sm:px-0 sm:pr-0">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`shrink-0 rounded-full px-5 py-2 font-sans text-sm font-medium transition-all border ${
                  activeFilter === f.id
                    ? "bg-brand-blue text-white border-brand-blue shadow-md"
                    : "bg-white text-brand-muted border-brand-border hover:border-brand-dark hover:text-brand-dark"
                }`}
              >
                {f.label}
                <span className={`ml-1.5 text-xs ${activeFilter === f.id ? "text-white/70" : "text-brand-muted/50"}`}>
                  ({f.count})
                </span>
              </button>
            ))}
            </div>
          </div>
          <Link
            href="#kontakt"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-brand-border bg-white px-5 py-2 font-sans text-sm font-medium text-brand-dark transition-colors hover:border-brand-blue hover:text-brand-blue sm:self-auto"
          >
            Alle anfragen
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </Link>
        </div>

        {/* Cards grid — 3 + 3 */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCardV2 key={property.id} property={property} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PropertyCardV2({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-lg"
    >
      {/* Image area */}
      <div className="relative h-52 overflow-hidden bg-stone-200">
        {property.image && (
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        {/* Tag — top left, minimal */}
        {property.tags[0] && (
          <span className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-widest ${
            property.tags[0].variant === "exclusive"
              ? "bg-brand-dark/80 text-white backdrop-blur-sm"
              : "bg-brand-teal/90 text-white backdrop-blur-sm"
          }`}>
            {property.tags[0].label}
          </span>
        )}
        {/* Arrow CTA — bottom right, appears on hover */}
        <div className="absolute bottom-3 right-3 z-10 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white text-brand-dark opacity-0 shadow-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        {/* Location — small caps */}
        <p className="font-sans text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-brand-muted">
          {property.city}
        </p>

        {/* Title */}
        <h3 className="font-sans text-base font-bold leading-snug text-brand-dark group-hover:text-brand-blue transition-colors">
          {property.title}
        </h3>

        {/* Price */}
        <p className="font-sans text-xl font-black text-brand-dark">
          {property.price}
        </p>

        {/* Divider + stats */}
        <div className="flex items-center gap-4 border-t border-brand-border pt-3 text-brand-muted">
          <span className="flex items-center gap-1.5 font-sans text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            {property.rooms} Zi.
          </span>
          <span className="flex items-center gap-1.5 font-sans text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
            </svg>
            {property.sqm} m²
          </span>
          <span className="ml-auto font-sans text-[0.65rem] font-medium text-brand-muted/60">
            Baujahr {property.yearBuilt}
          </span>
        </div>
      </div>
    </Link>
  );
}
