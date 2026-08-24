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
  { id: "results", label: "Patient Results", description: "Real smile transformations from our orthodontic treatments." },
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
            <AnimatedSection>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                  {category.label}
                </p>
                <h2 className="font-heading mt-3 text-3xl font-semibold text-navy sm:text-4xl">
                  {category.label}
                </h2>
                <div className="gold-line mt-5" />
                <p className="mx-auto mt-5 max-w-2xl text-lg text-navy-muted">
                  {category.description}
                </p>
              </div>
            </AnimatedSection>

            <div
              className={`mt-12 grid gap-6 ${
                category.id === "results"
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "sm:grid-cols-2"
              }`}
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
                        category.id === "results" ? "aspect-square" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`transition-transform duration-500 group-hover:scale-105 ${
                          category.id === "results" ? "object-contain p-4" : "object-cover object-center"
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
