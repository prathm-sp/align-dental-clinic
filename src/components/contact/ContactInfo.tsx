import { siteConfig } from "@/lib/site-config";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Card } from "../ui/Card";

export function ContactInfo() {
  const { contact } = siteConfig;

  const items = [
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: contact.phoneHref,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: contact.whatsappHref,
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Clock,
      label: "Hours",
      value: `${contact.hours.days}: ${contact.hours.display}`,
      note: contact.hours.saturdayNote,
    },
    {
      icon: MapPin,
      label: "Address",
      value: contact.address.full,
      href: contact.mapsLink,
    },
  ];

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.label} premium className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/25 to-gold/10 text-gold-dark">
            <item.icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-muted">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-0.5 block font-semibold text-navy transition-colors hover:text-gold-dark"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-0.5 font-semibold text-navy">{item.value}</p>
            )}
            {"note" in item && item.note ? (
              <p className="mt-1 text-sm text-navy-muted">{item.note}</p>
            ) : null}
          </div>
        </Card>
      ))}

      <div className="flex flex-wrap gap-3 pt-3">
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={contact.phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
      </div>
    </div>
  );
}
