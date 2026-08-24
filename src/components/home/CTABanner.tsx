import { siteConfig } from "@/lib/site-config";
import { MessageCircle, Phone } from "lucide-react";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Section } from "../ui/Section";

export function CTABanner() {
  return (
    <Section variant="navy" className="relative overflow-hidden">
      <div className="pattern-dots absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold/15 blur-[80px]" />
      <AnimatedSection className="relative text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
          Start Your Journey
        </p>
        <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready for Your Best Smile?
        </h2>
        <div className="gold-line mt-6" />
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/75 sm:text-xl">
          WhatsApp or call us to schedule your visit at Align Dental Clinic.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp Us
          </a>
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light px-8 py-4 text-base font-bold text-navy-dark shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
        </div>
      </AnimatedSection>
    </Section>
  );
}
