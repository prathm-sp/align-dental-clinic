"use client";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function NavLink({
  href,
  label,
  pathname,
  onNavigate,
  mobile = false,
}: {
  href: string;
  label: string;
  pathname: string;
  onNavigate?: () => void;
  mobile?: boolean;
}) {
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      prefetch={true}
      onClick={onNavigate}
      className={cn(
        "relative font-medium transition-colors duration-200",
        mobile
          ? "block rounded-xl px-4 py-3 text-lg"
          : "px-1 py-2 text-[0.9375rem] tracking-wide",
        isActive
          ? mobile
            ? "bg-gold/15 text-gold-dark"
            : "text-gold-dark"
          : mobile
            ? "text-navy hover:bg-navy/5"
            : "text-navy/75 hover:text-navy",
      )}
    >
      {label}
      {!mobile && isActive && (
        <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
      )}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] border-b transition-all duration-300",
          scrolled || mobileOpen
            ? "border-navy/8 bg-warm-white/95 shadow-[0_4px_24px_-4px_rgba(21,45,74,0.1)] backdrop-blur-xl"
            : "border-transparent bg-warm-white/80 backdrop-blur-md",
        )}
      >
        <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            prefetch={true}
            className="relative z-[101] flex shrink-0 items-center"
            onClick={closeMobile}
          >
            <Image
              src="/logo.webp"
              alt={siteConfig.name}
              width={180}
              height={54}
              className="h-11 w-auto sm:h-12"
              priority
            />
          </Link>

          <nav
            className="relative z-[101] hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                pathname={pathname}
              />
            ))}
          </nav>

          <div className="relative z-[101] hidden items-center gap-4 md:flex">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-navy/70 transition-colors hover:text-gold-dark"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              {siteConfig.contact.phone}
            </a>
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-navy/25 transition-all hover:bg-navy-light hover:shadow-xl"
            >
              Book Appointment
            </a>
          </div>

          <button
            type="button"
            className="relative z-[101] rounded-xl p-2.5 text-navy transition-colors hover:bg-navy/5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 top-[65px] z-[99] bg-navy/20 backdrop-blur-sm md:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />
            <div className="relative z-[101] border-t border-navy/8 bg-warm-white px-4 py-5 md:hidden">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {siteConfig.nav.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    pathname={pathname}
                    onNavigate={closeMobile}
                    mobile
                  />
                ))}
                <a
                  href={siteConfig.contact.phoneHref}
                  className="mt-2 flex items-center gap-3 rounded-xl px-4 py-3 text-navy/70"
                >
                  <Phone className="h-5 w-5 text-gold-dark" />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={siteConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex w-full items-center justify-center rounded-full bg-navy px-6 py-3.5 text-base font-semibold text-white"
                >
                  Book Appointment
                </a>
              </nav>
            </div>
          </>
        )}
      </header>

      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[90] rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light px-5 py-3.5 text-sm font-bold text-navy-dark shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
      >
        Book Now
      </a>
    </>
  );
}
