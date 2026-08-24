import { siteConfig } from "@/lib/site-config";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/5 shadow-sm">
      <iframe
        title={`${siteConfig.name} location map`}
        src={siteConfig.contact.mapsEmbedUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
      <div className="bg-warm-white px-4 py-3 text-center">
        <a
          href={siteConfig.contact.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-navy transition-colors hover:text-gold-dark"
        >
          Open in Google Maps &rarr;
        </a>
      </div>
    </div>
  );
}
