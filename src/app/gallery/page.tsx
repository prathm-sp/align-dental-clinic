import { PageHero } from "@/components/shared/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  description:
    "View photos of Align Dental Clinic in Ahilyanagar — modern treatment rooms, welcoming reception, and real patient smile transformations.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Clinic & Results"
        description="Explore our modern clinic and see real smile transformations from our orthodontic treatments."
      />
      <GalleryGrid />
    </>
  );
}
