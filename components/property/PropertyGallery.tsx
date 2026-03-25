"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type PropertyGalleryProps = {
  title: string;
  images: string[];
};

export function PropertyGallery({ title, images }: PropertyGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const lbPrev = useCallback(() => setLightbox((i) => ((i ?? 0) - 1 + images.length) % images.length), [images.length]);
  const lbNext = useCallback(() => setLightbox((i) => ((i ?? 0) + 1) % images.length), [images.length]);

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") lbNext();
      if (e.key === "ArrowLeft") lbPrev();
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, lbPrev, lbNext]);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  return (
    <>
      <div>
        {/* Main image — click to open lightbox */}
        <div
          className="relative h-135 w-full overflow-hidden bg-stone-100 cursor-zoom-in group"
          onClick={() => setLightbox(active)}
        >
          <Image
            key={active}
            src={images[active]}
            alt={`${title} – Bild ${active + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
            priority
            sizes="100vw"
          />

          {/* Expand hint */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 font-sans text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/>
            </svg>
            Vollbild
          </div>

          {/* Arrow controls */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Vorheriges Bild"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-dark">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Nächstes Bild"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-dark">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 font-sans text-xs text-white">
            {active + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex gap-2 overflow-x-auto py-3">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); setLightbox(i); }}
                aria-label={`Bild ${i + 1} anzeigen`}
                className={`relative h-20 w-32 shrink-0 overflow-hidden rounded transition-all duration-200 ${
                  i === active
                    ? "ring-2 ring-brand-blue ring-offset-2 opacity-100"
                    : "opacity-55 hover:opacity-90"
                }`}
              >
                <Image
                  src={src}
                  alt={`${title} – Vorschau ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            aria-label="Schließen"
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5 text-white">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs text-white">
            {lightbox + 1} / {images.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); lbPrev(); }}
            aria-label="Vorheriges Bild"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl mx-16 aspect-16/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightbox}
              src={images[lightbox]}
              alt={`${title} – Bild ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); lbNext(); }}
            aria-label="Nächstes Bild"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Thumbnail strip in lightbox */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-2 pb-1">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded transition-all duration-150 ${
                  i === lightbox ? "ring-2 ring-white opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <Image src={src} alt={`Vorschau ${i + 1}`} fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

