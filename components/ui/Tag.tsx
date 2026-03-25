type TagVariant = "default" | "exclusive" | "sold" | "new";

type TagProps = {
  label: string;
  variant?: TagVariant;
};

const variantClasses: Record<TagVariant, string> = {
  default: "bg-brand-border text-brand-muted",
  exclusive: "bg-brand-blue text-white",
  new: "bg-brand-teal text-white",
  sold: "bg-brand-muted text-white",
};

export function Tag({ label, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-sans font-semibold uppercase tracking-wider ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
