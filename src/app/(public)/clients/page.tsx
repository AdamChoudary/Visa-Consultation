import Link from "next/link";

export const metadata = {
  title: "Clients | The Visa Consultancy",
};

export default function Clients() {
  const successes = [
    {
      title: "Student Visa Success",
      desc: "Successfully assisted hundreds of students in securing admissions and visas for top-tier universities in the UK, Canada, Australia, and Europe.",
      icon: "fa-user-graduate"
    },
    {
      title: "Work Permit Approvals",
      desc: "Guided skilled professionals across engineering, healthcare, and IT sectors in obtaining overseas employment visas and employer-sponsored work permits.",
      icon: "fa-briefcase"
    },
    {
      title: "Immigration & PR",
      desc: "Helped families and individuals achieve permanent residency and settlement abroad with transparent documentation and points-based assessment support.",
      icon: "fa-passport"
    },
    {
      title: "Visit Visa Solutions",
      desc: "High success rate in securing visit visas for leisure, business, and family reunification in Schengen countries, USA, and UK.",
      icon: "fa-plane"
    }
  ];

  return (
    <div className="bg-[#0f1921] min-h-screen selection:bg-[#d0a850] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d0a850] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
           <div className="inline-block px-4 py-1 bg-[#d0a850]/10 border border-[#d0a850]/20 rounded-full mb-10">
              <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.3em]">Proven Results</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] heading-serif uppercase tracking-tighter mb-10">
            Success <br/>
            <span className="text-[#d0a850]">Stories</span>
           </h1>
           <p className="text-xl text-white/70 leading-relaxed font-medium">
             Transforming dreams into reality. We take pride in the thousands of success stories of our clients who are now thriving globally. 
             Your journey to a better future starts here.
           </p>
        </div>
      </section>

      {/* 2. SUCCESS GRID */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {successes.map((item, i) => (
              <div key={i} className="group p-12 rounded-[40px] bg-white/5 border border-white/10 hover:border-[#d0a850]/40 transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 rounded-2xl bg-[#d0a850] flex items-center justify-center text-4xl text-[#0f1921] mb-10 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(208,168,80,0.2)]">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-white text-2xl font-black mb-6 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{item.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-32 container mx-auto px-6 text-center">
         <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-16 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#d0a850]/5 rounded-full blur-[80px]"></div>
            <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase mb-10 relative z-10">Be Our Next <span className="text-[#d0a850]">Success Story</span></h2>
            <p className="text-xl text-white/60 font-medium mb-12 max-w-2xl mx-auto relative z-10">
              Join the ranks of successful global citizens. Apply today and let us guide you every step of the way.
            </p>
            <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-12 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:bg-[#b89445] transition-all no-underline inline-block relative z-10 shadow-xl shadow-[#d0a850]/10">
              Start Your Application
            </Link>
         </div>
      </section>
    </div>
  );
}
