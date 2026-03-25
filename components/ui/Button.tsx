import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-light active:bg-brand-blue-dark transition-colors",
  secondary:
    "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white active:bg-brand-blue-dark transition-colors",
  ghost:
    "text-brand-muted hover:text-brand-dark underline-offset-4 hover:underline transition-colors",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm tracking-wider",
  md: "px-6 py-3 text-sm tracking-wider",
  lg: "px-8 py-4 text-base tracking-widest",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  as,
  ...rest
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center font-sans font-medium uppercase",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a") {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} />
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
