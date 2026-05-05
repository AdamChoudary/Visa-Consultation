import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Immigration | The Visa Consultancy",
};

export default function ImmigrationPage() {
  return (
    <div className="bg-[#0f1921] min-h-screen pt-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[80vh] flex items-center py-20">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-10 animate-fade-in">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-xs font-black uppercase tracking-[0.6em] block mb-4">Permanent Residency</span>
                 <h1 className="text-5xl md:text-8xl font-black text-white heading-serif leading-[0.9] tracking-tighter uppercase">
                   Immigration <br/> <span className="text-[#d0a850]">& PR</span>
                 </h1>
               </div>
               
               <p className="text-xl text-white/40 leading-relaxed font-medium max-w-xl">
                 Your path to a new life starts here. We provide expert guidance for skilled migration, business visas, and permanent residency programs worldwide.
               </p>

               <div className="flex flex-wrap gap-6 pt-6">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10">
                   Evaluate Profile
                 </Link>
               </div>
            </div>

            <div className="flex-1 relative animate-fade-in flex justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl max-w-xl">
                  <Image 
                    src="/page images/immigration1.png" 
                    alt="Immigration" 
                    width={800} 
                    height={1000} 
                    className="w-full h-auto object-cover" 
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROGRAMS GRID */}
        <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl space-y-4">
                 <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Programs</span>
                 <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">Immigration <br/>Pathways</h2>
              </div>
              <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
                Tailored solutions for individuals and families seeking permanent residency and global settlement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
              {[
                { t: "Skilled Worker", d: "Professional guidance for skilled migration programs based on education and experience.", i: "fa-user-tie" },
                { t: "Permanent Residency", d: "Complete PR assistance including profile evaluation and points calculation.", i: "fa-id-card" },
                { t: "Business & Investor", d: "Pathways for entrepreneurs seeking overseas business expansion.", i: "fa-chart-line" },
                { t: "Family Sponsorship", d: "Spouse and family reunification programs with full documentation support.", i: "fa-users" }
              ].map((program, i) => (
                <div key={i} className="group p-12 bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500">
                  <div className="text-[#d0a850] text-xl mb-8 group-hover:scale-110 transition-transform inline-block">
                    <i className={`fas ${program.i}`}></i>
                  </div>
                  <h3 className="text-white text-lg font-black mb-4 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{program.t}</h3>
                  <p className="text-white/30 font-medium leading-relaxed text-xs antialiased">{program.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. STEP BY STEP PROCESS */}
        <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-32 space-y-4">
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">The Journey</span>
               <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">Our Process</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
              {[
                { s: "01", t: "Assessment", d: "Analyzing your age, education, and skills for the best pathway." },
                { s: "02", t: "Profile Building", d: "Preparing embassy-ready documentation with accuracy." },
                { s: "03", t: "Submission", d: "Handling full submission, biometrics, and follow-ups." },
                { s: "04", t: "Visa Approval", d: "Pre-departure planning and settlement assistance." }
              ].map((item, i) => (
                <div key={i} className="relative space-y-8 group">
                  <div className="flex items-center gap-6">
                    <span className="text-4xl font-black text-white/10 group-hover:text-[#d0a850] transition-colors duration-500">{item.s}</span>
                    <div className="flex-1 h-[1px] bg-white/5 group-hover:bg-[#d0a850]/20 transition-colors"></div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-white text-lg font-black uppercase tracking-widest">{item.t}</h3>
                    <p className="text-white/30 text-sm font-medium leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE US */}
        <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <div className="space-y-12">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase leading-tight tracking-tight">Your Choice, <br/> <span className="text-[#d0a850]">Our Goal.</span></h2>
                  </div>
                  <p className="text-lg text-white/50 leading-relaxed font-medium">
                    From personalized case evaluation to language and culture assistance, our well-trained team handles everything with responsibility and ethics.
                  </p>
                  <div className="space-y-8">
                     {[
                       { t: "Transparent Process", d: "No hidden charges and complete clarity." },
                       { t: "High Success Rate", d: "Strong profile building for approval." }
                     ].map((reason, i) => (
                       <div key={i} className="flex gap-8 group">
                          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#d0a850]/50 transition-all">
                             <i className="fas fa-shield-alt text-[#d0a850]"></i>
                          </div>
                          <div className="space-y-2">
                             <h4 className="text-white font-black uppercase tracking-widest text-sm">{reason.t}</h4>
                             <p className="text-white/30 text-xs font-medium leading-relaxed">{reason.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-1px bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
                  <div className="aspect-square bg-[#0f1921] p-12 flex flex-col justify-center text-center group hover:bg-white/[0.02] transition-all">
                     <span className="text-[#d0a850] text-4xl font-black mb-4">98%</span>
                     <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Success Rate</span>
                  </div>
                  <div className="aspect-square bg-[#0f1921] p-12 flex flex-col justify-center text-center group hover:bg-white/[0.02] transition-all">
                     <span className="text-[#d0a850] text-4xl font-black mb-4">10+</span>
                     <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Years Exp</span>
                  </div>
                  <div className="aspect-square bg-[#0f1921] p-12 flex flex-col justify-center text-center group hover:bg-white/[0.02] transition-all">
                     <span className="text-[#d0a850] text-4xl font-black mb-4">500+</span>
                     <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Happy Clients</span>
                  </div>
                  <div className="aspect-square bg-[#0f1921] p-12 flex flex-col justify-center text-center group hover:bg-white/[0.02] transition-all">
                     <span className="text-[#d0a850] text-4xl font-black mb-4">24/7</span>
                     <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Support</span>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
