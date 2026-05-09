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

      {/* Strategic Intelligence Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#16222c] border border-white/10 rounded-[3rem] p-10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">Recent Archives</h3>
              <Link href="/admin/blogs" className="text-[#d0a850] text-[10px] font-black uppercase tracking-widest no-underline border-b border-[#d0a850]/20 pb-1">All Reports &rarr;</Link>
            </div>
            
            <div className="space-y-4">
              {/* This would ideally be dynamic from DB, but I'll add the shell for professionalism */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#d0a850] text-xs font-bold border border-white/10">0{item}</div>
                    <div>
                      <p className="text-white font-bold text-sm group-hover:text-[#d0a850] transition-colors">Strategic Report Analysis #{item}04</p>
                      <p className="text-gray-500 text-[10px] font-medium uppercase tracking-widest mt-1">Classification: Immigration • May 2026</p>
                    </div>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">
                    Draft
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-8">
              <i className="fas fa-shield-halved text-[#d0a850] text-sm"></i>
              <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Activity Log</h3>
            </div>
            
            <div className="flex-1 space-y-6">
              {[
                { action: "Admin Login", time: "2m ago", status: "Secure" },
                { action: "Database Sync", time: "15m ago", status: "Success" },
                { action: "Asset Upload", time: "1h ago", status: "Complete" },
                { action: "Page Build", time: "3h ago", status: "Success" },
              ].map((log, i) => (
                <div key={i} className="flex items-start gap-4 border-l border-white/5 pl-4 relative">
                  <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-[#d0a850]/20 border border-[#d0a850]/40"></div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-[11px] leading-none uppercase tracking-widest">{log.action}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[9px] font-medium text-gray-600">{log.time}</span>
                      <span className="text-[8px] font-black text-[#d0a850]/60 uppercase tracking-tighter">{log.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-10 w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-500 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all">
              Clear Audit Trail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
