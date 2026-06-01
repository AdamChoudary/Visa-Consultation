import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Absolute base URL used for canonical + OpenGraph URL resolution.
 * Override in production via NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — Expert Immigration & Visa Services`,
};

/** Build a full absolute URL from a path. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

interface BuildMetadataArgs {
  title?: string;
  description?: string;
  /** Route path beginning with "/", e.g. "/studentvisa". Used for canonical + OG url. */
  path?: string;
  keywords?: string[];
  image?: { url: string; width?: number; height?: number; alt?: string };
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

/**
 * Central metadata builder so every page ships consistent canonical,
 * OpenGraph and Twitter tags. Pass a unique `title`, `description` and `path`.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords,
  image,
  type = "website",
  noIndex = false,
  publishedTime,
  modifiedTime,
  authors,
}: BuildMetadataArgs = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Expert Immigration & Visa Services`;
  const canonical = absoluteUrl(path);
  const ogImage = image
    ? { ...DEFAULT_OG_IMAGE, ...image }
    : DEFAULT_OG_IMAGE;

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [ogImage],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
