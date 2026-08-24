import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Lightweight CSS animation — no client JS, keeps page navigation fast */
export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <div
      className={cn("animate-fade-in-up motion-reduce:animate-none", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
