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
    <div className="space-y-12 animate-fade-in">
      {/* Welcome & Pulse Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[1px] bg-[#d0a850]/40"></span>
            <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.4em]">Strategic Overview</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black heading-serif uppercase tracking-tight text-white leading-none">
            Intelligence <span className="text-[#d0a850]">Hub</span>
          </h1>
          <p className="text-gray-500 mt-4 text-xs font-bold uppercase tracking-widest">
            Logged in as: <span className="text-white">{session.user?.name}</span>
          </p>
        </div>
        
        <div className="bg-white/[0.03] border border-white/5 px-6 py-3 rounded-full flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d0a850] animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">System Live</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#d0a850]">Session Secured</span>
        </div>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#16222c] border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#d0a850]/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="relative z-10 space-y-2">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Global Insights</p>
            <h4 className="text-4xl font-black text-white">{blogsCount}</h4>
            <p className="text-[#d0a850] text-[9px] font-bold uppercase tracking-tighter">Published Reports</p>
          </div>
        </div>

        <div className="bg-[#16222c] border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="relative z-10 space-y-2">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Active Staff</p>
            <h4 className="text-4xl font-black text-white">{usersCount}</h4>
            <p className="text-blue-400 text-[9px] font-bold uppercase tracking-tighter">Authorized Admins</p>
          </div>
        </div>

        <div className="md:col-span-2 bg-gradient-to-br from-[#d0a850] to-[#b89445] p-8 rounded-[2rem] flex items-center justify-between group cursor-pointer hover:shadow-[0_20px_50px_rgba(208,168,80,0.2)] transition-all">
          <div className="space-y-2">
            <p className="text-black/60 text-[10px] font-black uppercase tracking-widest">New intelligence</p>
            <h4 className="text-2xl font-black text-black uppercase leading-tight">Draft New Article</h4>
            <Link href="/admin/blogs/create" className="text-black inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mt-4 no-underline border-b border-black/20 pb-1">
              Open Editor &rarr;
            </Link>
          </div>
          <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center text-black text-2xl group-hover:rotate-12 transition-transform">
            <i className="fas fa-feather-alt"></i>
          </div>
        </div>
      </div>

      {/* Strategic Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <Link href="/admin/blogs" className="group no-underline block">
          <div className="bg-white/[0.02] border border-white/10 p-10 rounded-[3rem] hover:bg-white/[0.04] hover:border-[#d0a850]/30 transition-all space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] border border-[#d0a850]/20 text-xl group-hover:scale-110 transition-transform">
              <i className="fas fa-folder-open"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-3">Archive Management</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">Manage, edit, and audit all strategic insights published on the Gazette platform.</p>
            </div>
            <div className="text-[#d0a850] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              View Database <i className="fas fa-chevron-right text-[8px]"></i>
            </div>
          </div>
        </Link>

        {session?.user?.role === 'superadmin' && (
          <Link href="/admin/users" className="group no-underline block">
            <div className="bg-white/[0.02] border border-white/10 p-10 rounded-[3rem] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 text-xl group-hover:scale-110 transition-transform">
                <i className="fas fa-user-shield"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-3">Security & Access</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">Control administrative identities and define organizational permissions for the portal.</p>
              </div>
              <div className="text-blue-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                Manage Access <i className="fas fa-chevron-right text-[8px]"></i>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
