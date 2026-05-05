import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Family Reunion | The Visa Consultancy",
};

export default function FamilyReunionPage() {
  const regions = [
    { name: "Europe", img: "/images/FamilyEurope.jpg", desc: "Expert support for spouse and family reunion visas across the EU and UK. Navigating complex relationship requirements." },
    { name: "USA", img: "/images/FamilyUSA.jpg", desc: "Bringing families to America through IR-1, CR-1, and K-3 visa pathways with complete documentation support." },
    { name: "Canada", img: "/images/FamilyCanada.jpg", desc: "Dedicated assistance for Canadian family sponsorship programs, ensuring high success rates for reunite applications." },
    { name: "Australia", img: "/images/FamilyAustralia.jpg", desc: "Partner and parent visa solutions for Australia. We handle the complex evidence-gathering process for you." }
  ];

  return (
    <div className="bg-[#0f1921] min-h-screen pt-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[80vh] flex items-center py-20">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-10 animate-fade-in">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-xs font-black uppercase tracking-[0.6em] block mb-4">Together Again</span>
                 <h1 className="text-5xl md:text-8xl font-black text-white heading-serif leading-[0.9] tracking-tighter uppercase">
                   Family <br/> <span className="text-[#d0a850]">Reunion</span>
                 </h1>
               </div>
               
               <p className="text-xl text-white/40 leading-relaxed font-medium max-w-xl">
                 Your family's future starts here. We specialize in bringing loved ones together across borders with legal precision and care.
               </p>

               <div className="flex flex-wrap gap-6 pt-6">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10">
                   Start Rejoining
                 </Link>
               </div>
            </div>

            <div className="flex-1 relative animate-fade-in flex justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl max-w-xl">
                  <Image 
                    src="/page images/family reunion1.png" 
                    alt="Family Reunion" 
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

        {/* 2. REGIONS GRID */}
        <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl space-y-4">
                 <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Global Support</span>
                 <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">Reunion <br/>Pathways</h2>
              </div>
              <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
                Bringing families together with legal precision and compassionate support across the globe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
              {regions.map((region, i) => (
                <div key={i} className="group bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500 overflow-hidden">
                  <div className="h-64 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image 
                      src={region.img} 
                      alt={region.name} 
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1921] to-transparent opacity-40"></div>
                  </div>
                  <div className="p-10 space-y-6">
                    <h3 className="text-white text-lg font-black uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{region.name}</h3>
                    <p className="text-white/30 font-medium leading-relaxed text-xs antialiased line-clamp-3">{region.desc}</p>
                    <Link href="/contact" className="inline-flex items-center gap-4 text-white font-black uppercase text-[9px] tracking-[0.3em] group/link no-underline">
                      <span>Start Process</span>
                      <div className="w-8 h-[1px] bg-[#d0a850] group-hover/link:w-12 transition-all"></div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. DETAILED SUPPORT */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-32">
            <div className="flex-1 space-y-12">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Expert Assistance</span>
                 <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase leading-[1.1] tracking-tight">Complete <br/> <span className="text-[#d0a850]">Guidance</span></h2>
               </div>
               <p className="text-lg text-white/50 leading-relaxed font-medium">
                 From relationship evidence preparation to financial requirement verification, we provide end-to-end support for your family's successful reunion.
               </p>
               <div className="space-y-4 pt-4">
                  {[
                    { t: "Relationship Proof", i: "fa-heart" },
                    { t: "Financial Verification", i: "fa-file-invoice-dollar" },
                    { t: "Sponsorship Assessment", i: "fa-users" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#d0a850]/30 transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] group-hover:bg-[#d0a850] group-hover:text-[#0f1921] transition-all">
                        <i className={`fas ${item.i}`}></i>
                      </div>
                      <span className="text-white/60 font-black uppercase tracking-[0.2em] text-[10px]">{item.t}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="flex-1 relative group">
              <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000">
                <Image 
                  src="/images/FamilyReunionUK.jpg" 
                  alt="Family" 
                  width={800}
                  height={600}
                  className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
