import { Poppins, Cinzel } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const poppins = Poppins({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const cinzel = Cinzel({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata = {
  title: "Admin Portal | The Visa Consultancy",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${poppins.variable} ${cinzel.variable} font-sans bg-[#0f1921] text-white antialiased`}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-72 bg-[#0b1218] border-r border-[#d0a850]/10 flex flex-col sticky top-0 h-screen">
            <div className="p-8 border-b border-[#d0a850]/10">
              <Link href="/admin" className="flex items-center gap-4 no-underline group">
                 <img src="/images/TheVisaConsultancy.png" alt="Logo" className="h-10 transition-transform group-hover:scale-110" />
                 <div className="flex flex-col">
                   <span className="font-black text-xs uppercase tracking-[0.2em] text-[#d0a850]">Admin</span>
                   <span className="font-black text-sm uppercase tracking-tighter text-white">Portal</span>
                 </div>
              </Link>
            </div>
            
            <nav className="flex-1 p-8 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6">Management</p>
              
              <Link href="/admin" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#d0a850]/5 transition-all no-underline text-gray-400 hover:text-[#d0a850] group">
                <i className="fas fa-th-large text-sm group-hover:scale-110 transition-transform"></i>
                <span className="text-xs font-black uppercase tracking-widest">Dashboard</span>
              </Link>

              <Link href="/admin/blogs" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#d0a850]/5 transition-all no-underline text-gray-400 hover:text-[#d0a850] group">
                <i className="fas fa-pen-nib text-sm group-hover:scale-110 transition-transform"></i>
                <span className="text-xs font-black uppercase tracking-widest">Manage Blogs</span>
              </Link>

              <Link href="/admin/users" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#d0a850]/5 transition-all no-underline text-gray-400 hover:text-[#d0a850] group">
                <i className="fas fa-user-shield text-sm group-hover:scale-110 transition-transform"></i>
                <span className="text-xs font-black uppercase tracking-widest">Admins</span>
              </Link>
            </nav>

            <div className="p-8 border-t border-[#d0a850]/10">
              <Link href="/" className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#d0a850] text-black hover:bg-[#b89445] transition-all no-underline text-[10px] font-black uppercase tracking-[0.2em]">
                <i className="fas fa-external-link-alt"></i> View Site
              </Link>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-gradient-to-br from-[#0f1921] to-[#0b1218]">
             <header className="h-20 border-b border-[#d0a850]/10 flex items-center justify-between px-12 bg-[#0f1921]/80 backdrop-blur-xl sticky top-0 z-50">
               <div className="flex items-center gap-4">
                 <div className="h-2 w-2 bg-[#d0a850] rounded-full animate-pulse"></div>
                 <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Administrative Overview</h2>
               </div>
               <div className="flex items-center gap-6">
                 <div className="text-right">
                   <p className="text-[10px] font-black text-white uppercase tracking-widest leading-none">System Admin</p>
                   <p className="text-[8px] font-bold text-[#d0a850] uppercase tracking-widest mt-1">Online</p>
                 </div>
                 <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#d0a850] to-[#b89445] flex items-center justify-center text-black font-black text-xs shadow-lg shadow-[#d0a850]/20">
                   AD
                 </div>
               </div>
             </header>
             
             <div className="p-12 animate-fade-in">
               {children}
             </div>
          </main>
        </div>
      </body>
    </html>
  );
}
