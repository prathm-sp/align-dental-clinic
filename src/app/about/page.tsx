import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PageHero } from "@/components/shared/PageHero";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { Award, GraduationCap, Heart, ShieldCheck } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "About Dr. Aishwarya Mestry",
  description: `Learn about ${siteConfig.doctor.name}, BDS & MDS dentist providing comprehensive dental and orthodontic care at ${siteConfig.name}, Ahilyanagar.`,
  path: "/about",
});

export default function AboutPage() {
  const { doctor } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={doctor.name}
        description={`${doctor.credentials} · ${doctor.specialty}`}
      />

      <Section variant="white">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-gold/30 shadow-[var(--shadow-card)]">
              <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
              <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                <Image
                  src="/images/doctor-portrait.webp"
                  alt={`${doctor.name} at Align Dental Clinic`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 className="font-heading text-3xl font-semibold text-navy">Our Philosophy</h2>
            <div className="gold-line-left mt-4" />
            <p className="mt-6 text-lg leading-relaxed text-navy-muted">{doctor.bio}</p>
            <p className="mt-4 text-lg leading-relaxed text-navy-muted">{doctor.extendedBio}</p>
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="pattern">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Education & Registration"
            title="Qualifications You Can Trust"
            description="Dr. Mestry's training and professional credentials reflect a commitment to clinical excellence."
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {doctor.education.map((item, index) => (
            <AnimatedSection key={item.degree} delay={index * 0.1}>
              <Card premium hover className="h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy/10 to-gold/15 text-navy">
                  <GraduationCap className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-navy">{item.degree}</h3>
                <p className="mt-2 font-medium text-navy">{item.institution}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">{item.focus}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8" delay={0.2}>
          <Card premium className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy/10 to-gold/15 text-navy">
              <ShieldCheck className="h-7 w-7" aria-hidden="true" />
            </div>
            <p className="font-heading text-lg font-semibold text-navy">
              Maharashtra State Dental Council Registration
            </p>
            <p className="mt-2 text-navy-muted">Reg. No. {doctor.registrationNo}</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection className="mt-10" delay={0.25}>
          <div className="flex flex-wrap justify-center gap-3">
            {doctor.affiliations.map((affiliation) => (
              <span
                key={affiliation}
                className="rounded-full border border-gold/30 bg-warm-white px-4 py-2 text-sm font-medium text-navy"
              >
                {affiliation}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <Section variant="white">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Credentials & Values"
            title="Committed to Excellence"
            description="Dr. Mestry brings advanced training and a genuine passion for patient care to every appointment."
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Advanced Education",
              description: doctor.credentials,
            },
            {
              icon: Award,
              title: "Specialization",
              description: doctor.specialty,
            },
            {
              icon: Heart,
              title: "Patient-First",
              description:
                "Compassionate, personalized care for every patient, every visit.",
            },
          ].map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <Card premium hover className="h-full text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy/10 to-gold/15 text-navy">
                  <item.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">{item.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section variant="pattern">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Clinic"
            title="A Modern, Welcoming Space"
            description="Step into a thoughtfully designed clinic where advanced technology meets a warm, comfortable atmosphere."
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {siteConfig.gallery
            .filter((image) => image.category === "clinic")
            .map((image, index) => (
              <AnimatedSection key={image.src} delay={index * 0.08} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-warm-white shadow-[var(--shadow-soft)] transition-all hover:border-gold/40 hover:shadow-[var(--shadow-card)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="py-4 text-center font-medium text-navy-muted">{image.caption}</p>
                </div>
              </AnimatedSection>
            ))}
        </div>

        <AnimatedSection className="mt-16">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Patient Results
            </p>
            <h3 className="font-heading mt-3 text-2xl font-semibold text-navy sm:text-3xl">
              Smile Transformations
            </h3>
            <div className="gold-line mt-5" />
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.gallery
            .filter((image) => image.category === "results")
            .map((image, index) => (
              <AnimatedSection key={image.src} delay={index * 0.08} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-warm-white shadow-[var(--shadow-soft)] transition-all hover:border-gold/40 hover:shadow-[var(--shadow-card)]">
                  <div className="relative aspect-square w-full overflow-hidden bg-cream">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="py-4 text-center font-medium text-navy-muted">{image.caption}</p>
                </div>
              </AnimatedSection>
            ))}
        </div>
      </Section>
    </>
  );
}
