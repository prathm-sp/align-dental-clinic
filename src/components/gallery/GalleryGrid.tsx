"use client";

import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import { useState } from "react";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Section } from "../ui/Section";
import { GalleryLightbox } from "./GalleryLightbox";

type GalleryImage = (typeof siteConfig.gallery)[number];

const categories = [
  { id: "clinic", label: "Our Clinic", description: "A modern, welcoming space designed for your comfort." },
] as const;

export function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const allImages = siteConfig.gallery;

  const openLightbox = (image: GalleryImage) => {
    setSelectedIndex(allImages.findIndex((img) => img.src === image.src));
  };

  return (
    <>
      {categories.map((category, catIndex) => {
        const images = allImages.filter((img) => img.category === category.id);
        if (images.length === 0) return null;

        return (
          <Section key={category.id} variant={catIndex % 2 === 0 ? "white" : "pattern"}>

            <div
              className={'mt-12 grid gap-6 sm:grid-cols-2'}
            >
              {images.map((image, index) => (
                <AnimatedSection key={image.src} delay={index * 0.08}>
                  <button
                    type="button"
                    onClick={() => openLightbox(image)}
                    className="group w-full overflow-hidden rounded-2xl border border-gold/20 text-left shadow-[var(--shadow-soft)] transition-all hover:border-gold/40 hover:shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <div
                      className={`relative w-full overflow-hidden bg-cream ${
                        "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`transition-transform duration-500 group-hover:scale-105 ${
                          "object-cover object-center"
                        }`}
                      />
                    </div>
                    <p className="bg-warm-white px-5 py-4 font-heading text-lg font-semibold text-navy">
                      {image.caption}
                    </p>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </Section>
        );
      })}

      {selectedIndex !== null && (
        <GalleryLightbox
          images={allImages}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}
