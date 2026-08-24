import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean;
  variant?: "default" | "white" | "navy" | "pattern";
}

export function Section({
  className,
  container = true,
  variant = "default",
  children,
  ...props
}: SectionProps) {
  const bgVariants = {
    default: "bg-cream",
    white: "bg-section-gradient",
    navy: "bg-navy-gradient text-white",
    pattern: "bg-cream pattern-dots",
  };

  return (
    <section className={cn("relative py-20 md:py-28", bgVariants[variant], className)} {...props}>
      {container ? (
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  className,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.2em]",
            light ? "text-gold-light" : "text-gold-dark",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-tight",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      <div className={cn("gold-line mt-5", align === "left" && "gold-line-left mx-0")} />
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed sm:text-xl",
            light ? "text-white/80" : "text-navy-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
