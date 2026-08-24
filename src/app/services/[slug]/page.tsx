import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceIcon } from "@/components/shared/ServiceIcon";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";
import { getAllServiceIds, getServiceById } from "@/lib/services";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceIds().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    return createMetadata({ title: "Service Not Found" });
  }

  return createMetadata({
    title: service.title,
    description: `${service.description} Available at ${siteConfig.name}, Ahilyanagar.`,
    path: `/services/${service.id}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.id}` },
  ]);
  const serviceSchema = getServiceSchema(service);
  const relatedServices = siteConfig.services
    .filter((item) => item.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Dental Service"
        title={service.title}
        description={service.description}
      />

      <Section variant="white">
        <AnimatedSection>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-2">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy/10 to-gold/15 text-navy">
                <ServiceIcon name={service.icon} className="h-8 w-8" />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-semibold text-navy">
                  About This Treatment
                </h2>
                <div className="gold-line-left mt-4" />
                <p className="mt-6 text-lg leading-relaxed text-navy-muted">
                  {service.longDescription}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-heading text-2xl font-semibold text-navy">Key Benefits</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                    <span className="text-navy-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card premium className="sticky top-28">
              <h3 className="font-heading text-xl font-semibold text-navy">Book a Consultation</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                Discuss {service.title.toLowerCase()} with {siteConfig.doctor.name}. We&apos;ll
                recommend the best plan for your needs.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={siteConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  WhatsApp Us
                </a>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3.5 font-semibold text-white transition-colors hover:bg-navy-light"
                >
                  Call Now
                </a>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        {relatedServices.length > 0 && (
          <AnimatedSection className="mt-16" delay={0.15}>
            <h3 className="font-heading text-2xl font-semibold text-navy">Related Services</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedServices.map((item) => (
                <Link
                  key={item.id}
                  href={`/services/${item.id}`}
                  className="rounded-xl border border-gold/20 bg-warm-white p-5 transition-all hover:border-gold/40 hover:shadow-[var(--shadow-soft)]"
                >
                  <p className="font-heading font-semibold text-navy">{item.title}</p>
                  <p className="mt-2 text-sm text-navy-muted line-clamp-2">{item.description}</p>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}
      </Section>
    </>
  );
}
