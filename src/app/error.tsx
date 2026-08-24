"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 pt-28">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">Error</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold text-navy sm:text-5xl">
          Something Went Wrong
        </h1>
        <p className="mt-4 text-lg text-navy-muted">
          We hit an unexpected issue. Please try again or return to the homepage.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-navy-light"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-navy/15 px-8 py-4 font-semibold text-navy transition-all hover:border-gold hover:bg-gold/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
