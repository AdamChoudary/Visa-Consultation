import Link from "next/link";

export const metadata = {
  title: "Duolingo Preparation | The Visa Consultancy",
};

export default function Duolingo() {
  const sections = [
    { title: "Prerequisites", icon: "fa-id-card", items: ["Valid Passport/ID", "Online Account", "Fast Activation"] },
    { title: "Test Format", icon: "fa-laptop-house", items: ["100% Online Test", "Adaptive Questions", "Results in 48 Hours"] },
    { title: "Target Score", icon: "fa-bullseye", items: ["Score Analysis", "Preparation Guidance", "Application Support"] }
  ];

  return (
    <div className="bg-[#0f1921] min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[50vh] md:min-h-[60vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-8 md:space-y-10 animate-fade-in text-center lg:text-left">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">Modern Proficiency</span>
                 <h1 className="text-4xl md:text-8xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                   Duolingo <br className="hidden md:block"/> <span className="text-[#d0a850]">English</span>
                 </h1>
               </div>
               
               <p className="text-base md:text-xl text-white/40 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                 The modern, convenient way to prove your English proficiency. Accepted by thousands of universities worldwide, taken from your home.
               </p>

               <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10">
                   Start Registration
                 </Link>
               </div>
            </div>

            <div className="flex-1 w-full relative animate-fade-in flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 w-full max-w-md lg:max-w-xl">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl bg-white/5 p-8 md:p-16 flex flex-col items-center justify-center space-y-8">
                  <i className="fas fa-laptop-code text-7xl md:text-9xl text-[#d0a850]"></i>
                  <div className="w-full space-y-3 md:space-y-4">
                    <div className="h-2 w-full bg-[#d0a850]/20 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-[#d0a850]/10 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. INFO GRID */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">The Essentials</span>
               <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase tracking-tight">Test <br className="hidden md:block"/>Structure</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Everything you need to know about the modern standard in English language evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden">
            {sections.map((section, i) => (
              <div key={i} className="group p-8 md:p-12 bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] text-xl mb-6 md:mb-8 group-hover:bg-[#d0a850] group-hover:text-[#0f1921] transition-all">
                  <i className={`fas ${section.icon}`}></i>
                </div>
                <h3 className="text-white text-base font-bold mb-6 md:mb-8 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{section.title}</h3>
                <ul className="space-y-3 md:space-y-4 text-white/30 font-medium list-none p-0">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[13px] md:text-sm">
                      <span className="w-1 h-1 bg-[#d0a850] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SUPPORT SECTION */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
            <div className="flex-1 space-y-8 md:space-y-12 text-center lg:text-left">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Fast-Track Future</span>
                 <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase leading-[1.2] md:leading-[1.1] tracking-tight">Complete <br className="hidden md:block"/> <span className="text-[#d0a850]">Support</span></h2>
               </div>
               <p className="text-base md:text-lg text-white/50 leading-relaxed font-medium">
                 We provide complete registration support and university score requirement analysis to ensure your Duolingo results open the right doors for you.
               </p>
               <div className="pt-4 md:pt-8">
                 <Link href="/contact" className="inline-flex items-center gap-6 group/link no-underline">
                   <span className="text-[#d0a850] font-bold uppercase text-[14px] md:text-sm tracking-[0.4em]">Register Now</span>
                   <div className="w-12 h-[1px] bg-[#d0a850]/30 group-hover/link:w-20 group-hover:link:bg-[#d0a850] transition-all duration-500"></div>
                 </Link>
               </div>
            </div>
            <div className="flex-1 w-full relative group">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative z-10 transition-all duration-1000 bg-white/5 p-12 md:p-24 flex items-center justify-center">
                <i className="fas fa-graduation-cap text-8xl md:text-[12rem] text-[#d0a850]/20 group-hover:text-[#d0a850]/40 transition-all duration-700"></i>
              </div>
            </div>
          </div>
        </section>

        {/* 4. GLOBAL CTA */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[40px] p-8 md:p-24 text-center space-y-8 md:space-y-12">
             <div className="space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.3em] mb-4">Start Today</span>
               <h2 className="text-3xl md:text-7xl font-bold text-white heading-serif uppercase tracking-tight leading-tight">Ready for <span className="text-[#d0a850]">Duolingo?</span></h2>
             </div>
             <p className="text-base md:text-lg text-white/40 font-medium max-w-2xl mx-auto">
               Don't wait for months. Take the test today and get your results in 48 hours. Our team is ready to help.
             </p>
             <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.2em] hover:bg-white hover:text-black transition-all no-underline inline-block shadow-2xl shadow-[#d0a850]/5">
               Book Free Session
             </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
