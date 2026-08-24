import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { AnimatedSection } from "../shared/AnimatedSection";
import { BeforeAfterSlider } from "../shared/BeforeAfterSlider";
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
            <BeforeAfterSlider src={item.src} alt={item.alt} label={item.label} />
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
