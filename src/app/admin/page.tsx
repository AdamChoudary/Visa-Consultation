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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Create Blog Card */}
          <div className="bg-white/5 border border-[#d0a850]/20 p-8 rounded-3xl hover:border-[#d0a850] transition-all group">
            <div className="w-14 h-14 bg-[#d0a850]/10 text-[#d0a850] flex items-center justify-center rounded-2xl mb-6 border border-[#d0a850]/20">
              <i className="fas fa-plus text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">Create Blog</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">Publish a new article to share latest visa news and updates.</p>
            <Link href="/admin/blogs/new" className="btn-gold !w-full text-center py-3">
              Write Post
            </Link>
          </div>

          {/* Manage Blogs Card */}
          <div className="bg-white/5 border border-[#d0a850]/20 p-8 rounded-3xl hover:border-[#d0a850] transition-all group">
            <div className="w-14 h-14 bg-blue-500/10 text-blue-400 flex items-center justify-center rounded-2xl mb-6 border border-blue-500/20">
              <i className="fas fa-list text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">Manage Blogs</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">Currently: <span className="text-white font-bold">{blogsCount} Articles</span>. Edit or delete existing posts.</p>
            <Link href="/admin/blogs" className="btn-gold !bg-transparent !border-blue-500 !text-blue-400 hover:!bg-blue-500 hover:!text-white !w-full text-center py-3">
              View All Blogs
            </Link>
          </div>

          {/* Manage Users Card (Superadmin only) */}
          {session?.user?.role === 'superadmin' && (
            <div className="bg-white/5 border border-[#d0a850]/20 p-8 rounded-3xl hover:border-[#d0a850] transition-all group">
              <div className="w-14 h-14 bg-green-500/10 text-green-400 flex items-center justify-center rounded-2xl mb-6 border border-green-500/20">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">Manage Users</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">Currently: <span className="text-white font-bold">{usersCount} Admins</span>. Control portal access.</p>
              <Link href="/admin/users" className="btn-gold !bg-transparent !border-green-500 !text-green-400 hover:!bg-green-500 hover:!text-white !w-full text-center py-3">
                User management
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
