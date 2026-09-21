import { siteConfig } from "./site-config";

export function getOrganizationSchema() {
  const { contact, doctor, geo, url, reviews, social } = siteConfig;
  const avgRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
        "@id": `${url}/#organization`,
        name: siteConfig.name,
        description: siteConfig.description,
        url,
        telephone: contact.phone,
        email: contact.email,
        image: `${url}/logo.webp`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.address.street,
          addressLocality: contact.address.city,
          addressRegion: contact.address.state,
          postalCode: contact.address.postalCode,
          addressCountry: contact.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: contact.hours.opens,
            closes: contact.hours.closes,
          },
        ],
        medicalSpecialty: ["Dentistry", "Orthodontics"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: avgRating.toFixed(1),
          reviewCount: reviews.length,
          bestRating: "5",
          worstRating: "1",
        },
        review: reviews.map((review) => ({
          "@type": "Review",
          author: { "@type": "Person", name: review.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: review.rating,
            bestRating: "5",
          },
          reviewBody: review.text,
        })),
        employee: {
          "@type": "Person",
          name: doctor.name,
          jobTitle: doctor.specialty,
          hasCredential: doctor.credentials,
        },
        sameAs: [social.googleMaps],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${url}/#organization` },
      },
    ],
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getServiceSchema(service: {
  id: string;
  title: string;
  description: string;
  longDescription: string;
}) {
  const { url } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.longDescription,
    url: `${url}/services/${service.id}`,
    provider: { "@id": `${url}/#organization` },
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  const { url } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${url}${item.path}`,
    })),
  };
}
