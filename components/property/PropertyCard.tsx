import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import type { Property } from "@/lib/data/properties";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-white hover:shadow-md transition-shadow"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden rounded-t-2xl bg-gradient-to-br from-brand-border to-brand-muted/30">
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          {property.tags.map((tag) => (
            <Tag key={tag.label} label={tag.label} variant={tag.variant} />
          ))}
        </div>
        {/* heart icon */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-brand-muted hover:text-brand-blue transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4">
        {/* Price */}
        <p className="font-sans text-xl font-bold text-brand-dark">
          {property.price}
        </p>

        {/* Type + address */}
        <div>
          <p className="font-sans text-sm font-medium text-brand-dark">
            {property.title}
          </p>
          <p className="font-sans text-xs text-brand-muted mt-0.5">
            {property.address}, {property.city}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-1 flex items-center gap-3 border-t border-brand-border pt-3">
          <StatIcon
            icon={<BedIcon />}
            value={`${property.rooms} Zi.`}
          />
          <StatIcon
            icon={<AreaIcon />}
            value={`${property.sqm} m²`}
          />
          <StatIcon
            icon={<FloorIcon />}
            value={`${property.floor}. OG`}
          />
        </div>
      </div>
    </Link>
  );
}

function StatIcon({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-1 text-brand-muted">
      {icon}
      <span className="font-sans text-xs">{value}</span>
    </div>
  );
}

function BedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"/>
      <path d="M2 11v8"/>
      <path d="M22 11v8"/>
      <path d="M2 19h20"/>
      <rect x="6" y="11" width="4" height="4" rx="1"/>
      <rect x="14" y="11" width="4" height="4" rx="1"/>
    </svg>
  );
}

function AreaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18"/>
      <path d="M9 21V9"/>
    </svg>
  );
}

function FloorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}
