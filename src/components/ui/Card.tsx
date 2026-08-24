import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  premium?: boolean;
}

export function Card({
  className,
  hover = false,
  premium = false,
  children,
  ...props
}: CardProps) {
  if (premium) {
    return (
      <div
        className={cn(
          "card-premium",
          hover && "card-premium-hover",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-navy/8 bg-warm-white p-6 shadow-[var(--shadow-soft)]",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[var(--shadow-card)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
