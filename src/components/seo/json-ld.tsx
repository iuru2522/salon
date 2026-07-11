import { studio } from "@/content/studio";
import { reviews } from "@/content/reviews";

export function JsonLd() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000";

  const data = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: studio.businessName,
    description: studio.subheadline,
    url: siteUrl,
    telephone: studio.phone,
    email: studio.email,
    image: `${siteUrl}${studio.heroImage.src}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: studio.streetAddress,
      addressLocality: studio.addressLocality,
      addressRegion: studio.addressRegion,
      postalCode: studio.postalCode,
      addressCountry: studio.addressCountry,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(studio.averageRating),
      bestRating: String(studio.ratingScale),
      reviewCount: String(reviews.length),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
