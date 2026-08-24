import { siteConfig } from "@/lib/site-config";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden pt-28">
      <div className="grain-overlay bg-hero-gradient absolute inset-0" />
      <div className="pattern-dots absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-navy/8 blur-[80px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-warm-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-gold-dark" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-wide text-navy">
              Now Open in Ahilyanagar
            </span>
          </div>

          <h1 className="font-heading text-balance text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]">
            Modern Dental Care,
            <br />
            <span className="text-gradient-gold">Now in Ahilyanagar</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-muted sm:text-xl">
            Advanced technology, expert orthodontic care, and patient-centred service —
            comprehensive dental treatments for your entire family.
          </p>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-navy-muted/80">
            {siteConfig.marathi.heroSubtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
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
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-warm-white/80 px-8 py-4 text-base font-semibold text-navy backdrop-blur-sm transition-all hover:border-gold hover:bg-gold/10"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-navy/10 pt-8">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-gold/40 shadow-md ring-2 ring-gold/20">
              <Image
                src="/images/doctor-portrait.webp"
                alt={siteConfig.doctor.name}
                fill
                sizes="56px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="font-heading text-lg font-semibold text-navy">
                {siteConfig.doctor.name}
              </p>
              <p className="text-sm font-medium text-navy-muted">
                {siteConfig.doctor.credentials} · Orthodontics Specialist
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 overflow-hidden rounded-2xl border-2 border-gold/30 shadow-[var(--shadow-card)] sm:col-span-1 sm:row-span-2">
            <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
            <div className="relative aspect-[3/4] w-full sm:aspect-auto sm:h-full sm:min-h-[420px]">
              <Image
                src="/images/hero-treatment-room.webp"
                alt="Modern dental treatment room at Align Dental Clinic"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold/30 shadow-[var(--shadow-card)]">
            <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/hero-reception.webp"
                alt="Reception area at Align Dental Clinic"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold/30 shadow-[var(--shadow-card)]">
            <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/hero-exterior.webp"
                alt="Align Dental Clinic entrance in Ahilyanagar"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
