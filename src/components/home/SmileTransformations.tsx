import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Section, SectionHeader } from "../ui/Section";

export function SmileTransformations() {
  return (
    <Section variant="white">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Real Results"
          title="Smile Transformations"
          description="See the difference expert orthodontic care makes — real patients, real results at Align Dental Clinic."
        />
      </AnimatedSection>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {siteConfig.transformations.map((item, index) => (
          <AnimatedSection key={item.src} delay={index * 0.1}>
            <div className="group overflow-hidden rounded-2xl border border-gold/20 bg-warm-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-card)]">
              <div className="relative aspect-square w-full overflow-hidden bg-cream">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="border-t border-gold/15 px-5 py-4 text-center">
                <p className="font-heading text-lg font-semibold text-navy">{item.label}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gold-dark">
                  Before & After
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.2} className="mt-12 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 px-6 py-3 font-semibold text-navy transition-all hover:border-gold hover:bg-gold/10"
        >
          View Full Gallery &rarr;
        </Link>
      </AnimatedSection>
    </Section>
  );
}
