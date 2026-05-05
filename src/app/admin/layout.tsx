import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Admin Portal | The Visa Consultancy",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#0f1921] text-white antialiased selection:bg-[#d0a850] selection:text-black`}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-[#0b1218] border-r border-white/5 flex flex-col sticky top-0 h-screen">
            <div className="p-6 border-b border-white/5">
              <Link href="/admin" className="flex items-center gap-3 no-underline group">
                 <img src="/images/TheVisaConsultancy.png" alt="Logo" className="h-8 transition-transform group-hover:scale-105" />
                 <div className="flex flex-col">
                   <span className="font-bold text-[10px] uppercase tracking-widest text-[#d0a850]">Admin</span>
                   <span className="font-bold text-xs uppercase tracking-tight text-white">Portal</span>
                 </div>
              </Link>
            </div>
            
            <nav className="flex-1 p-6 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 px-3">Management</p>
              
              <Link href="/admin" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all no-underline text-gray-400 hover:text-white group">
                <i className="fas fa-chart-line text-sm group-hover:text-[#d0a850] transition-colors"></i>
                <span className="text-xs font-bold uppercase tracking-widest">Dashboard</span>
              </Link>

              <Link href="/admin/blogs" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all no-underline text-gray-400 hover:text-white group">
                <i className="fas fa-file-alt text-sm group-hover:text-[#d0a850] transition-colors"></i>
                <span className="text-xs font-bold uppercase tracking-widest">Articles</span>
              </Link>

              <Link href="/admin/users" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all no-underline text-gray-400 hover:text-white group">
                <i className="fas fa-shield-alt text-sm group-hover:text-[#d0a850] transition-colors"></i>
                <span className="text-xs font-bold uppercase tracking-widest">Team</span>
              </Link>
            </nav>

            <div className="p-6 border-t border-white/5">
              <Link href="/" className="flex items-center justify-center gap-3 p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all no-underline text-[10px] font-bold uppercase tracking-widest border border-white/5">
                <i className="fas fa-arrow-left"></i> Main Site
              </Link>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-[#0f1921]">
             <header className="h-16 border-b border-white/5 flex items-center justify-between px-10 bg-[#0f1921]/50 backdrop-blur-xl sticky top-0 z-50">
               <div className="flex items-center gap-3">
                 <div className="h-1.5 w-1.5 bg-[#d0a850] rounded-full animate-pulse shadow-[0_0_10px_#d0a850]"></div>
                 <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Admin Control Center</h2>
               </div>
               <div className="flex items-center gap-4">
                 <div className="text-right">
                   <p className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">Management</p>
                   <p className="text-[8px] font-medium text-[#d0a850] uppercase tracking-widest mt-1">Live Session</p>
                 </div>
                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d0a850] to-[#b89445] flex items-center justify-center text-black font-black text-[10px] shadow-lg shadow-[#d0a850]/10">
                   AD
                 </div>
               </div>
             </header>
             
             <div className="p-10 max-w-7xl mx-auto">
                {children}
             </div>
          </main>
        </div>
      </body>
    </html>
  );
}
