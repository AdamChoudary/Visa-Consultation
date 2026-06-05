import { siteConfig } from "@/config/site";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

/**
 * Schema.org structured data generators.
 *
 * These power rich results in Google and supply the explicit, machine-readable
 * facts that AI answer engines (AEO) rely on. Stable @id values let the graph
 * reference one Organization node across every page.
 */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** Core entity: the business itself. Reused via @id everywhere. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": ORG_ID,
    name: siteConfig.name,
    alternateName: ["Visa Consultancy Islamabad", "The Visa Consultancy Pakistan"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.webp"),
      width: 300,
      height: 300,
    },
    image: absoluteUrl("/logo.webp"),
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office# 104, Mezzanine Floor, Embassy Gardens, Sector C1, Bahria Enclave",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      postalCode: "44000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7215,
      longitude: 73.0433,
    },
    openingHours: "Mo-Sa 11:00-19:00",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "11:00",
      closes: "19:00",
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
    knowsAbout: [
      "visa consultancy",
      "visa application",
      "student visa",
      "work visa",
      "visit visa",
      "family reunion visa",
      "permanent residency",
      "immigration consultant",
      "Schengen visa",
      "UK visa",
      "USA visa",
      "Canada visa",
      "Australia visa",
    ],
    hasMap: "https://maps.google.com/?q=Embassy+Gardens+Bahria+Enclave+Islamabad",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: Object.values(siteConfig.socials),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
      availableLanguage: ["English", "Urdu"],
      areaServed: "PK",
    },
  };
}

/** The website node, enabling the sitelinks search box. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/** Breadcrumb trail. Pass ordered [{name, path}] items. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

interface ArticleArgs {
  title: string;
  description: string;
  slug: string;
  image?: string | null;
  authorName: string;
  publishedTime: string;
  modifiedTime?: string;
  section?: string | null;
}

/** BlogPosting schema for individual blog articles. */
export function articleSchema({
  title,
  description,
  slug,
  image,
  authorName,
  publishedTime,
  modifiedTime,
  section,
}: ArticleArgs) {
  const url = absoluteUrl(`/blogs/${slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: title.slice(0, 110),
    description,
    image: image ? absoluteUrl(image) : absoluteUrl("/logo.webp"),
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    ...(section ? { articleSection: section } : {}),
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/** Service schema for a visa/service offering page. */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["Service", "ProfessionalService"],
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      "Worldwide",
    ],
    serviceType: name,
    category: "Visa & Immigration Consultancy",
    availableLanguage: ["English", "Urdu"],
  };
}

/** FAQPage schema — high-impact for AEO and "People also ask" results. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
