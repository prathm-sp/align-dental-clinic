import { siteConfig } from "@/lib/site-config";
import { Clock, MapPin, Phone } from "lucide-react";

export function TrustBar() {
  const { contact } = siteConfig;

  const items = [
    {
      icon: Clock,
      label: "Clinic Hours",
      value: `${contact.hours.days}: ${contact.hours.display}`,
      note: contact.hours.saturdayNote,
    },
    {
      icon: MapPin,
      label: "Location",
      value: `${contact.address.city}, ${contact.address.postalCode}`,
      href: contact.mapsLink,
    },
    {
      icon: Phone,
      label: "Call Us",
      value: contact.phone,
      href: contact.phoneHref,
    },
  ];

  return (
    <section className="relative border-y border-gold/20 bg-navy-gradient py-10">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/20 text-gold-light ring-1 ring-gold/30">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold-light/80">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-0.5 block font-semibold text-white transition-colors hover:text-gold-light"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-0.5 font-semibold text-white">{item.value}</p>
              )}
              {"note" in item && item.note ? (
                <p className="mt-1 text-xs font-medium text-gold-light/70">{item.note}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
