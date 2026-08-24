import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 pt-28">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">404</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold text-navy sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-navy-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-navy-light"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-navy/15 px-8 py-4 font-semibold text-navy transition-all hover:border-gold hover:bg-gold/10"
          >
            Contact Us
          </Link>
        </div>
        <p className="mt-8 text-sm text-navy-muted">
          Need help? Call{" "}
          <a href={siteConfig.contact.phoneHref} className="font-semibold text-navy hover:text-gold-dark">
            {siteConfig.contact.phone}
          </a>
        </p>
      </div>
    </div>
  );
}
