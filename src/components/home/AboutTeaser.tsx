import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Section } from "../ui/Section";

export function AboutTeaser() {
  const { doctor } = siteConfig;

  return (
    <Section variant="pattern">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-gold/30 shadow-[var(--shadow-card)]">
            <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
            <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
              <Image
                src="/images/doctor-portrait.webp"
                alt={`${doctor.name} — dentist and orthodontist at Align Dental Clinic`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent p-6 pt-20">
              <p className="font-heading text-xl font-semibold text-white">{doctor.name}</p>
              <p className="mt-1 text-sm font-medium text-gold-light">{doctor.credentials}</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
            Meet Your Dentist
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Expert Care You Can Trust
          </h2>
          <div className="gold-line-left mt-5" />
          <p className="mt-5 text-lg font-semibold text-navy">{doctor.specialty}</p>
          <p className="mt-4 text-lg leading-relaxed text-navy-muted">{doctor.bio}</p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-navy/15 px-6 py-3 font-semibold text-navy transition-all hover:border-gold hover:bg-gold/10"
          >
            Learn More About Dr. Mestry &rarr;
          </Link>
        </AnimatedSection>
      </div>
    </Section>
  );
}
