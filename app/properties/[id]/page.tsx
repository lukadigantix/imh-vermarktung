import { notFound } from "next/navigation";
import Link from "next/link";
import { NavbarV2 } from "@/components/layout/NavbarV2";
import { Footer } from "@/components/layout/Footer";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyDetails } from "@/components/property/PropertyDetails";
import { properties, getPropertyById } from "@/lib/data/properties";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) return {};
  return {
    title: `${property.title} – IMH Vermarktung`,
    description: property.description.slice(0, 160),
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) notFound();

  const galleryImages = [
    "/images/int1.jpg",
    "/images/int2.jpg",
    "/images/int3.jpg",
    "/images/int4.jpg",
  ];

  return (
    <>
      <NavbarV2 />
      <main className="bg-white pt-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 font-sans text-xs text-brand-muted">
            <Link href="/" className="hover:text-brand-dark transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#objekte" className="hover:text-brand-dark transition-colors">Objekte</Link>
            <span>/</span>
            <span className="text-brand-dark font-medium truncate max-w-50">{property.title}</span>
          </nav>

          {/* Title row: name left, price right */}
          <div className="flex flex-col gap-2 border-b border-brand-border pb-8 md:flex-row md:items-start md:justify-between md:gap-8">
            <div className="flex flex-col gap-1.5">
              <h1 className="font-display text-3xl font-black leading-tight text-brand-dark md:text-4xl">
                {property.title}
              </h1>
              <p className="font-sans text-sm text-brand-muted">
                {property.address}, {property.city}
              </p>
            </div>
            <p className="font-display text-3xl font-black text-brand-dark shrink-0 md:text-4xl">
              {property.price}
            </p>
          </div>

          {/* Stats row with icons */}
          <div className="flex flex-wrap items-center gap-6 border-b border-brand-border py-5">
            <span className="flex items-center gap-2 font-sans text-sm text-brand-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-muted">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              {property.rooms} Zimmer
            </span>
            <span className="flex items-center gap-2 font-sans text-sm text-brand-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-muted">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
              {property.sqm} m²
            </span>
            <span className="flex items-center gap-2 font-sans text-sm text-brand-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-muted">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18"/>
              </svg>
              Etage {property.floor}
            </span>
            <span className="flex items-center gap-2 font-sans text-sm text-brand-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-muted">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Baujahr {property.yearBuilt}
            </span>
            {/* Tags */}
            <div className="ml-auto flex gap-2">
              {property.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-full px-3 py-1 font-sans text-[0.65rem] font-semibold tracking-widest uppercase ${
                    tag.variant === "exclusive"
                      ? "bg-brand-dark text-white"
                      : "bg-brand-teal/15 text-brand-teal"
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Main content: description + details */}
          <div className="py-12">
            <PropertyDetails property={property} />
          </div>

        </div>

        {/* Gallery — full width, after info */}
        <PropertyGallery title={property.title} images={galleryImages} />

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          {/* Location & Highlights */}
          <div className="py-16 border-b border-brand-border">
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-8">
              Lage &amp; Standortvorteile
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-blue"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>), title: "Toplage", desc: property.city },
                { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-blue"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>), title: "Wohnfläche", desc: `${property.sqm} m² Nutzfläche` },
                { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-blue"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>), title: "Baujahr", desc: `Erbaut ${property.yearBuilt}` },
                { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-blue"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>), title: "Diskretion", desc: "Geprüfte Interessenten" },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 rounded-xl border border-brand-border p-5 hover:border-brand-blue/40 hover:shadow-sm transition-all">
                  <div className="mt-0.5 shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/8">
                    {icon}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-brand-dark">{title}</p>
                    <p className="font-sans text-xs text-brand-muted mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services strip */}
          <div className="py-16 border-b border-brand-border">
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-8">
              Unser Service für dieses Objekt
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { title: "Homestaging", desc: "Professionelle Einrichtung für optimale Präsentation Ihrer Immobilie." },
                { title: "360° Besichtigung", desc: "Virtuelle Rundgänge auf Anfrage — diskret und flexibel für qualifizierte Interessenten." },
                { title: "Notarservice", desc: "Vollumfängliche Begleitung bis zur Beurkundung — ohne Stress, mit Erfahrung." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex flex-col gap-2 p-6 rounded-xl bg-[#F7F9FB] border border-brand-border">
                  <div className="h-0.5 w-8 bg-brand-blue rounded-full mb-1" />
                  <p className="font-display text-base font-bold text-brand-dark">{title}</p>
                  <p className="font-sans text-xs text-brand-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="py-8">
            <Link
              href="/#objekte"
              className="flex items-center gap-2 font-sans text-sm text-brand-muted hover:text-brand-dark transition-colors w-fit"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Zurück zur Übersicht
            </Link>
          </div>

        </div>

        {/* Dark agent strip */}
        <div className="bg-brand-dark">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue">
                  Ihr persönlicher Kontakt
                </p>
                <h2 className="font-display text-2xl font-black text-white md:text-3xl">
                  Isabelle Maud Haesler
                </h2>
                <p className="font-sans text-sm text-white/60">
                  Immobilienmaklerin · IMH Vermarktung · Zürich, Schweiz
                </p>
                <div className="mt-2 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-6">
                  <a href="tel:+41786180401" className="flex items-center gap-2 font-sans text-sm text-white/80 hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-blue shrink-0">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.16 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6 7.09a16 16 0 006 6l.36-1.36a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/>
                    </svg>
                    +41 78 618 04 01
                  </a>
                  <a href="mailto:isabelle.haesler@imh-vermarktung.ch" className="flex items-center gap-2 font-sans text-sm text-white/80 hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-blue shrink-0">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    isabelle.haesler@imh-vermarktung.ch
                  </a>
                </div>
              </div>
              <a
                href={`mailto:isabelle.haesler@imh-vermarktung.ch?subject=Besichtigungsanfrage: ${property.title}`}
                className="shrink-0 rounded-full bg-brand-blue px-8 py-4 font-sans text-sm font-semibold text-white hover:bg-white hover:text-brand-dark transition-all shadow-lg"
              >
                Besichtigung anfragen
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
