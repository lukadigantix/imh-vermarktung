type Align = "left" | "center";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: Align;
  as?: "h1" | "h2" | "h3";
  inverted?: boolean;
};

const alignClasses: Record<Align, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
  inverted = false,
}: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-3 ${alignClasses[align]}`}>
      {eyebrow && (
        <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue">
          {eyebrow}
        </span>
      )}
      <Heading
        className={`font-display text-4xl font-light leading-tight tracking-wide md:text-5xl ${
          inverted ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={`font-sans text-base leading-relaxed max-w-prose ${
            inverted ? "text-white/60" : "text-brand-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
