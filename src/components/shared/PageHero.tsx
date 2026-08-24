import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-hero-gradient pt-32 pb-16 md:pb-20",
        className,
      )}
    >
      <div className="grain-overlay absolute inset-0" />
      <div className="pattern-dots absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-gold/15 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight text-navy sm:text-5xl md:text-[3.25rem]">
            {title}
          </h1>
          <div className="gold-line mt-6" />
          {description && (
            <p className="mt-6 text-lg leading-relaxed text-navy-muted sm:text-xl">
              {description}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
