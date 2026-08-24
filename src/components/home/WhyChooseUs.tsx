import { siteConfig } from "@/lib/site-config";
import { AnimatedSection } from "../shared/AnimatedSection";
import { ServiceIcon } from "../shared/ServiceIcon";
import { Card } from "../ui/Card";
import { Section, SectionHeader } from "../ui/Section";

export function WhyChooseUs() {
  return (
    <Section variant="white">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Why Choose Us"
          title="A Different Kind of Dental Experience"
          description="We combine clinical excellence with a warm, welcoming environment where every patient feels valued."
        />
      </AnimatedSection>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.whyChooseUs.map((item, index) => (
          <AnimatedSection key={item.title} delay={index * 0.1}>
            <Card premium hover className="h-full text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold/10 text-gold-dark ring-1 ring-gold/30">
                <ServiceIcon name={item.icon} className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-muted">
                {item.description}
              </p>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
