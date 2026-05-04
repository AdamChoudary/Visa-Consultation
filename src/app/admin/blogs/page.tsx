import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deleteBlog } from "@/app/actions/blog";

export const metadata = {
  title: "Manage Blogs | Admin",
};

export default async function ManageBlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
    include: { author: true },
  });

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black heading-serif uppercase tracking-widest text-[#d0a850]">Manage Blogs</h1>
          <p className="text-gray-400 mt-2 font-bold uppercase tracking-widest text-xs">Total Published: {blogs.length} articles</p>
        </div>
        <Link href="/admin/blogs/create" className="btn-gold !px-8 !py-4 shadow-[0_10px_30px_rgba(208,168,80,0.2)]">
          + Create New Post
        </Link>
      </div>

      <div className="bg-white/5 border border-[#d0a850]/10 rounded-[30px] overflow-hidden backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/[0.02] text-[#d0a850] border-b border-[#d0a850]/10 font-black uppercase tracking-[0.2em] text-[10px]">
              <th className="p-8">Article Details</th>
              <th className="p-8">Author</th>
              <th className="p-8">Status</th>
              <th className="p-8 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-medium">
            {blogs.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-20 text-center text-gray-500 uppercase tracking-widest font-black text-sm">
                  No articles found in the database.
                </td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-8">
                    <div className="font-bold text-white uppercase tracking-wider text-base">{blog.title}</div>
                    <div className="text-[10px] text-gray-500 mt-1 uppercase font-black tracking-widest">Slug: /{blog.slug}</div>
                  </td>
                  <td className="p-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#d0a850] text-[10px] font-black border border-[#d0a850]/20">
                        {blog.author?.name?.charAt(0) || "U"}
                      </div>
                      <span className="text-gray-300 text-sm uppercase font-bold tracking-widest">{blog.author?.name || "Unknown"}</span>
                    </div>
                  </td>
                  <td className="p-8">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                      blog.status === "published" 
                        ? "bg-green-500/10 text-green-400 border-green-500/20" 
                        : "bg-[#d0a850]/10 text-[#d0a850] border-[#d0a850]/20"
                    }`}>
                      {blog.status}
                    </span>
                  </td>
                  <td className="p-8 text-right space-x-4">
                    <Link href={`/admin/blogs/${blog.id}/edit`} className="text-[#d0a850] hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em] no-underline">
                      Edit
                    </Link>
                    <form action={deleteBlog.bind(null, blog.id)} className="inline-block">
                      <button type="submit" className="text-red-400 hover:text-red-300 transition-colors text-[10px] font-black uppercase tracking-[0.2em] bg-transparent border-none cursor-pointer">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
