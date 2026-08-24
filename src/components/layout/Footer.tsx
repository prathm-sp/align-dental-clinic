import { siteConfig } from "@/lib/site-config";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const { contact, nav, social } = siteConfig;

  return (
    <footer className="relative bg-navy-dark text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
      <div className="pattern-dots absolute inset-0 opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/logo.webp"
              alt={siteConfig.name}
              width={180}
              height={54}
              className="mb-5 h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-white/65">{siteConfig.description}</p>
            <p className="mt-3 text-sm text-gold-light/80">{siteConfig.marathi.tagline}</p>
            <Link
              href={social.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-colors hover:text-white"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Review us on Google
            </Link>
          </div>

          <div>
            <h3 className="font-heading mb-5 text-lg font-semibold text-gold-light">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-5 text-lg font-semibold text-gold-light">Contact</h3>
            <ul className="space-y-4 text-sm text-white/65">
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-start gap-3 transition-colors hover:text-gold-light"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-gold-light"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {contact.hours.days}
                  <br />
                  {contact.hours.display}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-5 text-lg font-semibold text-gold-light">Location</h3>
            <address className="not-italic">
              <a
                href={contact.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-gold-light"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {contact.address.full}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-white/45">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
