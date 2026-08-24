"use client";

import { siteConfig } from "@/lib/site-config";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Section, SectionHeader } from "../ui/Section";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section variant="white">
      <AnimatedSection>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Common questions about treatments, appointments, and what to expect at Align Dental Clinic."
        />
      </AnimatedSection>

      <div className="mx-auto mt-14 max-w-3xl divide-y divide-navy/10 rounded-2xl border border-gold/20 bg-warm-white shadow-[var(--shadow-soft)]">
        {siteConfig.faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <AnimatedSection key={faq.question} delay={index * 0.05}>
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream/50"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg font-semibold text-navy">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold-dark transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="leading-relaxed text-navy-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
}
