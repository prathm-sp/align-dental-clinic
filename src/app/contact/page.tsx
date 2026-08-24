import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Contact & Appointments",
  description: `Book an appointment at ${siteConfig.name}. Call ${siteConfig.contact.phone} or WhatsApp us. Located in Ahilyanagar.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Book Your Appointment"
        description="Reach us instantly on WhatsApp or phone. We're here to help you achieve your best smile."
      />

      <Section variant="white">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
            Get in Touch
          </h2>
          <div className="gold-line mt-5" />
          <p className="mt-5 text-lg text-navy-muted">
            The fastest way to book is via WhatsApp or a quick phone call.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
              WhatsApp Us
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-3 rounded-full bg-navy px-10 py-5 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="h-6 w-6" aria-hidden="true" />
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto mt-16 max-w-2xl" delay={0.1}>
          <ContactInfo />
        </AnimatedSection>

        <AnimatedSection className="mt-16" delay={0.2}>
          <MapEmbed />
        </AnimatedSection>
      </Section>
    </>
  );
}
