import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deleteBlog } from "@/app/actions/blog";

export const metadata = {
  title: "Manage Blogs | Admin",
};

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  imageUrl: string | null;
  category: string | null;
  status: string;
  createdAt: Date;
  authorId: number;
  author: {
    name: string;
  };
}

export default async function ManageBlogsPage() {
  const blogsData = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
    include: { author: true },
  });

  const blogs = blogsData as unknown as Blog[];

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[1px] bg-[#d0a850]/40"></span>
            <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.4em]">Inventory Control</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black heading-serif uppercase tracking-tight text-white leading-none">
            Gazette <span className="text-[#d0a850]">Archive</span>
          </h1>
          <p className="text-gray-500 mt-4 text-[10px] font-black uppercase tracking-[0.3em]">Auditing {blogs.length} active intelligence reports</p>
        </div>
        <Link href="/admin/blogs/create" className="bg-[#d0a850] hover:bg-white text-black font-black py-4 px-10 rounded-full uppercase text-[10px] tracking-[0.3em] transition-all shadow-[0_15px_40px_rgba(208,168,80,0.2)] no-underline">
          + Create New Report
        </Link>
      </div>

      <div className="bg-[#16222c] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.03] text-gray-500 border-b border-white/5 font-black uppercase tracking-[0.4em] text-[9px]">
                <th className="p-8">Article Identifier</th>
                <th className="p-8">Category</th>
                <th className="p-8">Strategist</th>
                <th className="p-8">Access Status</th>
                <th className="p-8 text-right">Audit Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-24 text-center">
                    <div className="flex flex-col items-center gap-4 opacity-20">
                      <i className="fas fa-folder-open text-4xl"></i>
                      <p className="uppercase tracking-[0.5em] text-[10px] font-black">Archive Empty</p>
                    </div>
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-white/[0.01] transition-all group">
                    <td className="p-8">
                      <div className="space-y-1">
                        <div className="font-bold text-white uppercase tracking-wider text-sm group-hover:text-[#d0a850] transition-colors">{blog.title}</div>
                        <div className="text-[9px] text-gray-600 uppercase font-black tracking-widest flex items-center gap-2 italic">
                          <i className="fas fa-link text-[8px] text-[#d0a850]/40"></i> {blog.slug}
                        </div>
                      </div>
                    </td>
                    <td className="p-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d0a850] bg-[#d0a850]/5 border border-[#d0a850]/10 px-4 py-2 rounded-lg">
                        {blog.category || "General"}
                      </span>
                    </td>
                    <td className="p-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 text-[10px] font-black border border-white/10 group-hover:border-[#d0a850]/30 transition-all">
                          {blog.author?.name?.charAt(0)}
                        </div>
                        <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest">{blog.author?.name}</span>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${blog.status === "published" ? "bg-green-500" : "bg-orange-400"} shadow-[0_0_10px_currentColor]`}></div>
                        <span className={`text-[9px] font-black uppercase tracking-widest ${blog.status === "published" ? "text-green-500" : "text-orange-400"}`}>
                          {blog.status}
                        </span>
                      </div>
                    </td>
                    <td className="p-8 text-right">
                      <div className="flex items-center justify-end gap-6">
                        <Link href={`/admin/blogs/${blog.id}/edit`} className="text-white/40 hover:text-[#d0a850] transition-colors text-[10px] font-black uppercase tracking-[0.2em] no-underline flex items-center gap-2">
                          <i className="fas fa-edit text-[9px]"></i> Edit
                        </Link>
                        <form action={deleteBlog.bind(null, blog.id)} className="inline-block">
                          <button type="submit" className="text-red-900/40 hover:text-red-500 transition-colors text-[10px] font-black uppercase tracking-[0.2em] bg-transparent border-none cursor-pointer flex items-center gap-2">
                            <i className="fas fa-trash-alt text-[9px]"></i> Delete
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
