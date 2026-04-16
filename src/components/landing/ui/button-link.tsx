import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-primary !text-white shadow-[0_18px_40px_rgba(29,78,216,0.28)] hover:bg-primary-strong hover:!text-white",
  secondary:
    "border border-line bg-white text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:text-primary",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
    >
      {children}
    </Link>
  );
}
