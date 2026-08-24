"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export function BeforeAfterSlider({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(98, Math.max(2, next)));
  }, []);

  const onPointerDown = (event: React.PointerEvent) => {
    setIsDragging(true);
    containerRef.current?.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(event.clientX);
  };

  const onPointerUp = (event: React.PointerEvent) => {
    setIsDragging(false);
    containerRef.current?.releasePointerCapture(event.pointerId);
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-gold/20 bg-warm-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-card)]">
      <div
        ref={containerRef}
        className="relative aspect-square w-full cursor-ew-resize select-none overflow-hidden bg-cream touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="img"
        aria-label={`${alt}. Drag to compare before and after.`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-3"
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full" style={{ width: `${10000 / position}%` }}>
            <Image
              src={src}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain p-3"
            />
          </div>
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-gold shadow-[0_0_12px_rgba(201,169,98,0.6)]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-warm-white shadow-lg">
            <span className="text-xs font-bold text-navy" aria-hidden="true">
              ↔
            </span>
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-navy/75 px-2.5 py-1 text-xs font-semibold text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-gold/90 px-2.5 py-1 text-xs font-semibold text-navy-dark">
          After
        </span>
      </div>

      <div className="border-t border-gold/15 px-5 py-4 text-center">
        <p className="font-heading text-lg font-semibold text-navy">{label}</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gold-dark">
          Drag to compare
        </p>
      </div>
    </div>
  );
}
