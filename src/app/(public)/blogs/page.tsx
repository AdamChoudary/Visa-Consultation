import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blogs | The Visa Consultancy",
};

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    where: { status: "published" },
    orderBy: { createdAt: "desc" },
    include: { author: true },
  });

  return (
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="section-title uppercase tracking-[0.2em] font-black">Latest <span className="text-[#d0a850]">Insights</span></h1>
          <p className="text-gray-400 mt-6 leading-relaxed font-medium max-w-2xl mx-auto uppercase">
            Stay updated with the latest visa news, immigration policies, and travel tips from our expert consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {blogs.length === 0 ? (
            <div className="col-span-full text-center py-32 bg-white/5 rounded-[40px] border border-white/10">
              <h3 className="text-2xl font-bold text-[#d0a850] mb-4 uppercase tracking-widest">No Blogs Published Yet</h3>
              <p className="text-gray-400 font-medium">Check back soon for latest updates!</p>
            </div>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="visa-card !bg-white/5 !text-white border border-white/10 hover:border-[#d0a850]/50 transition-all duration-500 group !items-start text-left p-0 overflow-hidden">
                <div className="p-10 space-y-6">
                  <div className="flex items-center gap-4 text-xs font-bold text-[#d0a850] uppercase tracking-widest">
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    <span className="w-1 h-1 bg-[#d0a850] rounded-full"></span>
                    <span>{blog.author?.name}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-[#d0a850] transition-colors uppercase tracking-tight leading-tight">{blog.title}</h2>
                  <div 
                    className="text-gray-400 text-sm leading-relaxed line-clamp-3 overflow-hidden h-18 font-medium"
                    dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 150) + '...' }}
                  />
                  <div className="pt-6">
                    <Link 
                      href={`/blogs/${blog.slug}`} 
                      className="btn-gold !text-xs !px-8 !py-3 tracking-widest"
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
