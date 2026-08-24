"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category?: string;
};

export function GalleryLightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: readonly GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const image = images[index];
  const isResult = image.category === "results";

  const goPrev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/92 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-16"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div
        className="relative max-h-[90vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative w-full overflow-hidden rounded-xl bg-cream/10 ${
            isResult ? "aspect-square max-h-[80vh]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className={isResult ? "object-contain p-4" : "object-contain"}
          />
        </div>
        <p className="mt-4 text-center font-heading text-xl text-white">{image.caption}</p>
        {images.length > 1 && (
          <p className="mt-2 text-center text-sm text-white/50">
            {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}
