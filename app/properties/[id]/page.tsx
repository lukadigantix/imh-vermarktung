import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyStats } from "@/components/property/PropertyStats";
import { PropertyDetails } from "@/components/property/PropertyDetails";
import { Tag } from "@/components/ui/Tag";
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

  const stats = [
    { label: "Zimmer", value: property.rooms },
    { label: "Wohnfläche", value: `${property.sqm} m²` },
    { label: "Etage", value: property.floor },
    { label: "Baujahr", value: property.yearBuilt },
    { label: "Preis", value: property.price },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Gallery */}
        <PropertyGallery title={property.title} />

        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="py-10 flex flex-col gap-4 border-b border-brand-border md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                {property.tags.map((tag) => (
                  <Tag key={tag.label} label={tag.label} variant={tag.variant} />
                ))}
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-brand-muted mb-1">
                  {property.address} · {property.city}
                </p>
                <h1 className="font-serif text-4xl font-light text-brand-dark md:text-5xl">
                  {property.title}
                </h1>
              </div>
            </div>
            <p className="font-serif text-3xl font-light text-brand-gold shrink-0">
              {property.price}
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-12">
          <PropertyStats stats={stats} />
        </div>

        {/* Details */}
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-12">
          <PropertyDetails
            description={property.description}
            features={property.features}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
