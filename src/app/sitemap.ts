import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-dynamic";

// Static public routes with their relative crawl priority.
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/studentvisa", priority: 0.9, changeFrequency: "monthly" },
  { path: "/visitvisas", priority: 0.9, changeFrequency: "monthly" },
  { path: "/immigration", priority: 0.9, changeFrequency: "monthly" },
  { path: "/workvisas", priority: 0.9, changeFrequency: "monthly" },
  { path: "/familyreunion", priority: 0.8, changeFrequency: "monthly" },
  { path: "/appointments", priority: 0.8, changeFrequency: "monthly" },
  { path: "/toefl-test", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pte-test", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ielts", priority: 0.7, changeFrequency: "monthly" },
  { path: "/duolingo", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blogs", priority: 0.8, changeFrequency: "daily" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/clients", priority: 0.6, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.6, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogs = await prisma.blog.findMany({
      where: { status: "published" },
      select: { slug: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });
    blogEntries = blogs.map((b) => ({
      url: `${SITE_URL}/blogs/${b.slug}`,
      lastModified: b.createdAt,
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch {
    // If the DB is unreachable at build time, still return static routes.
    blogEntries = [];
  }

  return [...staticEntries, ...blogEntries];
}
