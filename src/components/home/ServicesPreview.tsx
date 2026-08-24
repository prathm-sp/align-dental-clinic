import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { AnimatedSection } from "../shared/AnimatedSection";
import { ServiceIcon } from "../shared/ServiceIcon";
import { Card } from "../ui/Card";
import { Section, SectionHeader } from "../ui/Section";

export function ServicesPreview() {
  const previewServices = siteConfig.services.slice(0, 6);

  return (
    <Section variant="white">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Our Services"
          title="Complete Dental Care for Your Family"
          description="From preventive care to advanced orthodontics, we offer a full range of treatments under one roof."
        />
      </AnimatedSection>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {previewServices.map((service, index) => (
          <AnimatedSection key={service.id} delay={index * 0.08}>
            <Link href={`/services/${service.id}`} className="block h-full">
              <Card hover premium className="group h-full">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy/10 to-gold/15 text-navy transition-colors group-hover:from-gold/20 group-hover:to-gold/30 group-hover:text-gold-dark">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-muted">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </span>
              </Card>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 bg-warm-white px-6 py-3 font-semibold text-navy transition-all hover:border-gold hover:bg-gold/10 hover:text-gold-dark"
        >
          View all services
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </Section>
  );
}
