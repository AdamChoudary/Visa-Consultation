import { getSession } from "@/lib/auth";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const session = await getSession();
  
  if (!session) {
    redirect("/admin/login");
  }

  const blogsCount = await prisma.blog.count();
  const usersCount = await prisma.user.count();

  return (
    <div className="min-h-screen bg-[#0f1921] text-white pt-24 pb-12">
      <main className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black heading-serif uppercase tracking-widest text-[#d0a850]">Admin Dashboard</h1>
          <p className="text-gray-400 mt-2 uppercase tracking-widest text-sm font-bold">Welcome back, {session.user?.name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Create Blog Card */}
          <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:border-[#d0a850]/30 transition-all group">
            <div className="w-12 h-12 bg-[#d0a850]/10 text-[#d0a850] flex items-center justify-center rounded-xl mb-6 border border-[#d0a850]/20">
              <i className="fas fa-plus text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Create Blog</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">Publish a new article to share latest visa news and updates.</p>
            <Link href="/admin/blogs/create" className="inline-block bg-[#d0a850] text-black px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#b89445] transition-all no-underline">
              Write Post
            </Link>
          </div>

          {/* Manage Blogs Card */}
          <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 flex items-center justify-center rounded-xl mb-6 border border-blue-500/20">
              <i className="fas fa-list text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Manage Blogs</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">Currently: <span className="text-[#d0a850] font-bold">{blogsCount} Articles</span>. Edit or delete existing posts.</p>
            <Link href="/admin/blogs" className="inline-block border border-blue-500/50 text-blue-400 px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all no-underline">
              View All Blogs
            </Link>
          </div>

          {/* Manage Users Card (Superadmin only) */}
          {session?.user?.role === 'superadmin' && (
            <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:border-green-500/30 transition-all group">
              <div className="w-12 h-12 bg-green-500/10 text-green-400 flex items-center justify-center rounded-xl mb-6 border border-green-500/20">
                <i className="fas fa-users text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Manage Users</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Currently: <span className="text-[#d0a850] font-bold">{usersCount} Admins</span>. Control portal access.</p>
              <Link href="/admin/users" className="inline-block border border-green-500/50 text-green-400 px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all no-underline">
                User management
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
