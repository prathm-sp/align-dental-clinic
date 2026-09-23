import { siteConfig } from "@/lib/site-config";
import { Info, MessageCircle, Phone, Sparkles } from "lucide-react";
import Image from "next/image";

const heroImages = [
  {
    src: "/images/clinic-treatment-room-wide.webp",
    alt: "Modern dental treatment room at Align Dental Clinic",
    label: "Treatment Room",
  },
  {
    src: "/images/clinic-reception.webp",
    alt: "Reception area at Align Dental Clinic",
    label: "Reception",
  },
  {
    src: "/images/clinic-exterior.webp",
    alt: "Align Dental Clinic entrance in Ahilyanagar",
    label: "Clinic Entrance",
  },
] as const;

export function Hero() {
  return (
    <section className="hero-section relative isolate overflow-hidden bg-[#faf6ef] pt-28 pb-16 lg:pb-24">
      <div className="grain-overlay bg-hero-gradient absolute inset-0" />
      <div className="pattern-dots absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-navy/8 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="hero-content mx-auto max-w-3xl text-center lg:max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#a8883f]" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-wide text-[#152d4a]">
              Now Open in Ahilyanagar
            </span>
          </div>

          <h1 className="font-heading text-balance text-[2.75rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            <span className="hero-title-line block">Modern Dental Care,</span>
            <span className="hero-title-accent block">Now in Ahilyanagar</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed hyphens-none sm:text-xl">
            With advanced technology and patient-centred service, we provide expert
            dental and orthodontic care for your entire family.
          </p>
          <p
            lang="mr"
            className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed opacity-80 hyphens-none"
          >
            {siteConfig.marathi.heroSubtitle}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#152d4a]/15 bg-white px-8 py-4 text-base font-semibold text-[#152d4a] shadow-sm transition-all hover:border-gold hover:bg-gold/10"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now
            </a>
          </div>

          <p className="mx-auto mt-6 flex max-w-lg items-start gap-2 rounded-xl border border-gold/30 bg-white/80 px-4 py-3 text-left text-sm leading-relaxed text-[#3d5a78] shadow-sm backdrop-blur-sm">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
            <span>
              {siteConfig.contact.hours.saturdayNote}.{" "}
              <a
                href={siteConfig.contact.phoneHref}
                className="font-semibold text-[#152d4a] underline decoration-gold/50 underline-offset-2 transition-colors hover:text-gold-dark"
              >
                {siteConfig.contact.phone}
              </a>
            </span>
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 border-t border-[#152d4a]/10 pt-8">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-gold/40 shadow-md ring-2 ring-gold/20">
              <Image
                src="/images/doctor-portrait.webp"
                alt={siteConfig.doctor.name}
                fill
                sizes="56px"
                className="object-cover object-top"
              />
            </div>
            <div className="text-left">
              <p className="font-heading text-lg font-semibold text-[#152d4a]">
                {siteConfig.doctor.name}
              </p>
              <p className="text-sm font-medium leading-snug text-[#3d5a78] hyphens-none">
                {siteConfig.doctor.credentials}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:mt-16 lg:gap-6">
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className="group flex flex-col overflow-hidden rounded-2xl border-2 border-gold/30 bg-cream shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="relative aspect-[3/4] w-full bg-cream">
                <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-contain p-3"
                />
              </div>
              <p className="border-t border-gold/15 bg-warm-white px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-gold-dark">
                {image.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
