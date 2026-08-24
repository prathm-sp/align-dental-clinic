import { AboutTeaser } from "@/components/home/AboutTeaser";
import { CTABanner } from "@/components/home/CTABanner";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { SmileTransformations } from "@/components/home/SmileTransformations";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <SmileTransformations />
      <Testimonials />
      <AboutTeaser />
      <WhyChooseUs />
      <FAQ />
      <CTABanner />
    </>
  );
}
