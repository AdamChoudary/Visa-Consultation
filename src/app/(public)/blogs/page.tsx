import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blogs | The Visa Consultancy",
  description: "Stay updated with the latest visa news, immigration policies, and travel tips from our expert consultants. Read our latest insights and articles.",
};

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    where: { status: "published" },
    orderBy: { createdAt: "desc" },
    include: { author: true },
  });

  return (
    <div className="bg-[#0f1921] pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-3xl md:text-5xl font-bold text-white heading-serif uppercase tracking-[0.2em] mb-6">Latest <span className="text-[#d0a850]">Insights</span></h1>
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium max-w-2xl mx-auto uppercase tracking-wider">
            Stay updated with the latest visa news, immigration policies, and travel tips from our expert consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 max-w-7xl mx-auto">
          {blogs.length === 0 ? (
            <div className="col-span-full text-center py-20 md:py-32 bg-white/5 rounded-3xl md:rounded-[40px] border border-white/10 px-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#d0a850] mb-4 uppercase tracking-widest">No Blogs Published Yet</h3>
              <p className="text-gray-400 text-sm md:text-base font-medium">Check back soon for latest updates!</p>
            </div>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="bg-white/5 border border-white/10 hover:border-[#d0a850]/50 transition-all duration-500 group rounded-3xl overflow-hidden flex flex-col">
                <div className="p-6 md:p-10 flex flex-col flex-grow space-y-6">
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[14px] md:text-sm font-bold text-[#d0a850] uppercase tracking-widest">
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    <span className="w-1 h-1 bg-[#d0a850] rounded-full hidden md:block"></span>
                    <span>{blog.author?.name}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#d0a850] transition-colors uppercase tracking-tight leading-tight">{blog.title}</h2>
                  <div 
                    className="text-gray-400 text-[13px] md:text-sm leading-relaxed line-clamp-3 overflow-hidden h-18 font-medium"
                    dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 150) + '...' }}
                  />
                  <div className="pt-4 md:pt-6 mt-auto">
                    <Link 
                      href={`/blogs/${blog.slug}`} 
                      className="inline-block bg-[#d0a850]/10 text-[#d0a850] border border-[#d0a850]/30 hover:bg-[#d0a850] hover:text-black transition-all px-8 py-3 rounded-full font-bold uppercase text-[14px] md:text-sm tracking-widest no-underline"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
