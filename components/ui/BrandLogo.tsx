import Image from "next/image";

type BrandLogoProps = {
  /** "sm" for navbar, "lg" for footer */
  size?: "sm" | "lg";
  /** true when placed on a dark background — inverts logo to white */
  inverted?: boolean;
};

const config = {
  sm: {
    imgHeight: "h-16",
    imgWidth: 220,
    imgHeight_: 72,
    title: "text-[0.75rem] tracking-[0.1em]",
    subtitle: "text-[0.55rem] tracking-[0.06em]",
  },
  lg: {
    imgHeight: "h-28",
    imgWidth: 360,
    imgHeight_: 120,
    title: "text-[1.25rem] tracking-[0.12em]",
    subtitle: "text-[0.8rem] tracking-[0.06em]",
  },
};

export function BrandLogo({ size = "sm", inverted = false }: BrandLogoProps) {
  const c = config[size];
  const titleColor = inverted ? "text-white" : "text-brand-dark";
  const subtitleColor = inverted ? "text-white/50" : "text-brand-muted";

  return (
    <div className="flex items-center gap-3">
      <Image
        src={inverted ? "/logo_transparent.png" : "/logo.png"}
        alt="IMH Vermarktung"
        width={c.imgWidth}
        height={c.imgHeight_}
        className={`${c.imgHeight} w-auto object-contain`}
        style={inverted ? { filter: "brightness(0) invert(1)" } : undefined}
        priority
      />
      <div className="flex flex-col leading-tight">
        <span
          className={`font-[family-name:var(--font-montserrat)] font-light uppercase ${c.title} ${titleColor}`}
        >
          Vermarktung
        </span>
        <span
          className={`font-[family-name:var(--font-open-sans)] font-light ${c.subtitle} ${subtitleColor}`}
        >
          Isabelle Maud Haesler
        </span>
      </div>
    </div>
  );
}
