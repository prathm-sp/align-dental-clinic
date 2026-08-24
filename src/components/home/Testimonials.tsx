import { siteConfig } from "@/lib/site-config";
import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Section, SectionHeader } from "../ui/Section";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "fill-gold text-gold" : "fill-navy/10 text-navy/10"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const { reviews } = siteConfig;
  const avgRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <Section variant="pattern">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Patient Reviews"
          title="Trusted by Our Patients"
          description="Real feedback from patients who chose Align Dental Clinic for their dental care in Ahilyanagar."
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <div className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-warm-white px-5 py-2.5 shadow-sm">
          <StarRating rating={Math.round(avgRating)} />
          <span className="font-heading text-lg font-semibold text-navy">
            {avgRating.toFixed(1)} / 5
          </span>
          <span className="text-sm text-navy-muted">({reviews.length} reviews)</span>
        </div>
        <Link
          href={siteConfig.social.googleReview}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-dark"
        >
          Leave a review on Google
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </Link>
      </AnimatedSection>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {reviews.map((review, index) => (
          <AnimatedSection key={review.id} delay={index * 0.08}>
            <blockquote className="flex h-full flex-col rounded-2xl border border-gold/20 bg-warm-white p-6 shadow-[var(--shadow-soft)]">
              <StarRating rating={review.rating} />
              <p className="mt-4 flex-1 leading-relaxed text-navy-muted">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-5 border-t border-navy/8 pt-4">
                <cite className="font-heading text-lg font-semibold not-italic text-navy">
                  {review.name}
                </cite>
              </footer>
            </blockquote>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
