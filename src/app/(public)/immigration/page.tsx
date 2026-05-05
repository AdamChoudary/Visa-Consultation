import Link from "next/link";

export const metadata = {
  title: "Immigration | The Visa Consultancy",
};

export default function Immigration() {
  return (
    <div className="bg-[#0f1921] min-h-screen selection:bg-[#d0a850] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d0a850] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10 animate-fade-in">
               <div className="inline-block px-4 py-1 bg-[#d0a850]/10 border border-[#d0a850]/20 rounded-full">
                  <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.3em]">Permanent Residency</span>
               </div>
               <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] heading-serif uppercase tracking-tighter">
                Global <br/>
                <span className="text-[#d0a850]">Settlement</span>
               </h1>
               <p className="text-xl text-white/70 leading-relaxed font-medium max-w-xl">
                 Planning to settle abroad indefinitely? You need a trustworthy partner to make the path accessible and possible. 
                 Achieve your dream with our expert immigration solutions.
               </p>
               <div className="flex flex-wrap gap-6 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#b89445] transition-all no-underline shadow-[0_10px_30px_rgba(208,168,80,0.2)]">
                   Free Consultation
                 </Link>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-white/20"></div>
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Trust & Transparency</span>
                 </div>
               </div>
            </div>
            <div className="flex-1 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/immigration.png" alt="Immigration" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMS GRID */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
             <span className="text-[#d0a850] text-xs font-black uppercase tracking-[0.4em]">Programs</span>
             <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">Immigration Pathways</h2>
             <div className="w-24 h-[2px] bg-[#d0a850] mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { t: "Skilled Worker", d: "Professional guidance for skilled migration programs based on education and experience.", i: "fa-user-tie" },
              { t: "Permanent Residency", d: "Complete PR assistance including profile evaluation and points calculation.", i: "fa-id-card" },
              { t: "Business & Investor", d: "Pathways for entrepreneurs seeking overseas business expansion.", i: "fa-chart-line" },
              { t: "Family Sponsorship", d: "Spouse and family reunification programs with full documentation support.", i: "fa-users" }
            ].map((program, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#d0a850]/40 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-[#d0a850] flex items-center justify-center text-2xl text-[#0f1921] mb-8 group-hover:scale-110 transition-transform">
                  <i className={`fas ${program.i}`}></i>
                </div>
                <h3 className="text-white text-xl font-black mb-4 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{program.t}</h3>
                <p className="text-white/50 font-medium leading-relaxed text-sm">{program.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STEP BY STEP PROCESS */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
           <span className="text-[#d0a850] text-sm font-black uppercase tracking-[0.4em]">The Journey</span>
           <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">Our Process</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[
            { s: "01", t: "Assessment", d: "Analyzing your age, education, and skills for the best pathway." },
            { s: "02", t: "Profile Building", d: "Preparing embassy-ready documentation with accuracy." },
            { s: "03", t: "Submission", d: "Handling full submission, biometrics, and follow-ups." },
            { s: "04", t: "Visa Approval", d: "Pre-departure planning and settlement assistance." }
          ].map((step, i) => (
            <div key={i} className="relative p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-[#d0a850]/5 transition-colors group">
              <span className="text-5xl font-black text-[#d0a850]/20 absolute top-6 right-8 group-hover:text-[#d0a850]/40 transition-colors">{step.s}</span>
              <h3 className="text-white text-xl font-black mb-6 uppercase tracking-widest relative z-10">{step.t}</h3>
              <p className="text-white/50 text-sm font-medium leading-relaxed relative z-10">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
                <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase leading-tight">Your Choice, <br/> <span className="text-[#d0a850]">Our Goal.</span></h2>
                <p className="text-xl text-white/60 leading-relaxed font-medium">
                  From personalized case evaluation to language and culture assistance, our well-trained team handles everything with responsibility and ethics.
                </p>
                <div className="space-y-6">
                   {[
                     { t: "Transparent Process", d: "No hidden charges and complete clarity." },
                     { t: "High Success Rate", d: "Strong profile building for approval." }
                   ].map((reason, i) => (
                     <div key={i} className="flex gap-6">
                        <div className="w-12 h-12 rounded-xl bg-[#d0a850]/20 flex items-center justify-center shrink-0">
                           <i className="fas fa-shield-alt text-[#d0a850]"></i>
                        </div>
                        <div>
                           <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">{reason.t}</h4>
                           <p className="text-white/40 text-xs font-medium">{reason.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                   <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-center text-center">
                      <span className="text-[#d0a850] text-3xl font-black mb-2">98%</span>
                      <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Success Rate</span>
                   </div>
                   <div className="aspect-square rounded-3xl bg-[#d0a850] p-8 flex flex-col justify-center text-center">
                      <span className="text-[#0f1921] text-3xl font-black mb-2">10+</span>
                      <span className="text-[#0f1921]/60 text-[10px] font-black uppercase tracking-widest">Years Exp</span>
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="aspect-square rounded-3xl bg-[#d0a850] p-8 flex flex-col justify-center text-center">
                      <span className="text-[#0f1921] text-3xl font-black mb-2">500+</span>
                      <span className="text-[#0f1921]/60 text-[10px] font-black uppercase tracking-widest">Happy Clients</span>
                   </div>
                   <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-center text-center">
                      <span className="text-[#d0a850] text-3xl font-black mb-2">24/7</span>
                      <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Support</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
