import { prisma } from "@/lib/prisma";
import BlogGrid from "@/components/BlogGrid";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "Blogs",
  path: "/blogs",
  description:
    "Stay updated with the latest visa news, immigration policies, and travel tips from our expert consultants. Read our latest insights and articles.",
  keywords: ["visa news", "immigration blog", "visa policy updates", "travel tips"],
});

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    where: { status: "published" },
    orderBy: { createdAt: "desc" },
    include: { author: true },
  });

  return (
    <div className="bg-[#0f1921] pt-24 md:pt-40 pb-20 md:pb-32 min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
        ])}
      />
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section - Clean & Minimalist */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-bold text-white heading-serif uppercase tracking-wider mb-6">
            Latest <span className="text-[#d0a850]">Insights</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Stay informed with the latest updates on global visa policies and immigration news.
          </p>
        </div>

        {/* Blogs Grid Component */}
        <BlogGrid blogs={blogs} />
      </div>
    </div>
  );
}
