import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageMeta = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
}: PageMeta = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;
  const pageDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: "/images/og-image.webp",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/images/og-image.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "dentist Ahilyanagar",
      "dental clinic Ahilyanagar",
      "orthodontist Ahilyanagar",
      "Align Dental Clinic",
      "Dr Aishwarya Mestry",
      "braces Ahilyanagar",
      "dental implants Ahilyanagar",
      "Gulmohar Road dentist",
    ],
    ...(process.env.GOOGLE_SITE_VERIFICATION && {
      verification: {
        google: process.env.GOOGLE_SITE_VERIFICATION,
      },
    }),
  };
}
