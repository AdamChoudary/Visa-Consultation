import Link from "next/link";

export const metadata = {
  title: "TOEFL Preparation | The Visa Consultancy",
};

export default function ToeflTest() {
  const sections = [
    { title: "Prerequisites", icon: "fa-clipboard-check", items: ["Valid Passport", "Official ETS Registration", "Exam Fee Payment"] },
    { title: "Test Formats", icon: "fa-globe-americas", items: ["TOEFL iBT®", "Home Edition", "Paper-Based (PBT)"] },
    { title: "Target Score", icon: "fa-trophy", items: ["University Analysis", "Tutor Referrals", "Registration Assistance"] }
  ];

  return (
    <div className="bg-[#0f1921] min-h-screen selection:bg-[#d0a850] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#d0a850] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-10 animate-fade-in">
             <div className="inline-block px-4 py-1 bg-[#d0a850]/10 border border-[#d0a850]/20 rounded-full">
                <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.3em]">Academic Gold Standard</span>
             </div>
             <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] heading-serif uppercase tracking-tighter">
              TOEFL <br/>
              <span className="text-[#d0a850]">Proficiency</span>
             </h1>
             <p className="text-xl text-white/70 leading-relaxed font-medium max-w-2xl mx-auto">
               The TOEFL® test is a key academic requirement for students aiming for higher education in North America. 
               Accepted by 11,000+ universities worldwide.
             </p>
             <div className="flex flex-wrap justify-center gap-6 pt-4">
               <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#b89445] transition-all no-underline shadow-[0_10px_30px_rgba(208,168,80,0.2)]">
                 Start Now
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* 2. INFO GRID */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sections.map((section, i) => (
              <div key={i} className="group p-12 rounded-[40px] bg-white/5 border border-white/10 hover:border-[#d0a850]/40 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[#d0a850] flex items-center justify-center text-2xl text-[#0f1921] mb-10 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(208,168,80,0.2)]">
                  <i className={`fas ${section.icon}`}></i>
                </div>
                <h3 className="text-white text-2xl font-black mb-8 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{section.title}</h3>
                <ul className="space-y-4 text-white/50 font-medium list-none p-0">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#d0a850] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SUPPORT SECTION */}
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d0a850]/5 rounded-full blur-[80px]"></div>
          <div className="flex-1 space-y-10 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase leading-[1.1] tracking-tight">Academic <br/> <span className="text-[#d0a850]">Excellence</span></h2>
            <p className="text-xl text-white/60 leading-relaxed font-medium">
              Maximize your chances for top universities in the US and Canada. We provide expert score analysis and full application guidance for TOEFL candidates.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#b89445] transition-all no-underline shadow-lg shadow-[#d0a850]/10">
                Register & Prepare
              </Link>
            </div>
          </div>
          <div className="flex-1 relative group z-10">
             <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
               <img src="/images/toeflBanner.jpg.jpeg" alt="TOEFL" className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
