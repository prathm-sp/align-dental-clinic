import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceIcon } from "@/components/shared/ServiceIcon";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Dental Services",
  description: `Comprehensive dental services at ${siteConfig.name} including braces, implants, root canal, teeth whitening, and more in Ahilyanagar.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Dental Care"
        description="From preventive care to advanced orthodontics — expert treatments for your entire family at one trusted clinic."
      />

      <Section variant="white">
        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.06}>
              <Link href={`/services/${service.id}`} className="block h-full">
                <Card id={service.id} hover premium className="group h-full scroll-mt-28">
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy/10 to-gold/15 text-navy transition-colors group-hover:from-gold/20 group-hover:to-gold/30 group-hover:text-gold-dark">
                      <ServiceIcon name={service.icon} className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-semibold text-navy">
                        {service.title}
                      </h2>
                      <p className="mt-2.5 leading-relaxed text-navy-muted">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">
                        View details <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <p className="text-lg text-navy-muted">Not sure which treatment is right for you?</p>
          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-navy-light"
          >
            Book a consultation &rarr;
          </a>
        </AnimatedSection>
      </Section>
    </>
  );
}
