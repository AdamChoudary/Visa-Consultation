import Link from "next/link";

export const metadata = {
  title: "Visit Visas | The Visa Consultancy",
};

export default function Visitvisas() {
  const destinations = [
    { name: "Dubai", img: "/images/DubaiVisitVisa.jpeg", desc: "Explore Dubai, Abu Dhabi, and beyond with our full UAE tourist visa support." },
    { name: "Schengen", img: "/images/schengenVisitVisa.jpeg", desc: "Travel across Europe with expert assistance for Schengen visit visas." },
    { name: "United Kingdom", img: "/images/UKVisitVisa.jpeg", desc: "Plan your travel to the UK with full guidance and embassy support." },
    { name: "USA", img: "/images/USAvisitVisa.jpeg", desc: "Visit the United States with confidence and expert interview prep." }
  ];

  return (
    <div className="bg-[#0f1921] min-h-screen selection:bg-[#d0a850] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center pt-10 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
            <div className="flex-1 space-y-10 animate-fade-in">
               <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[#d0a850] text-[9px] font-black uppercase tracking-[0.4em]">Global Tourism</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] heading-serif uppercase tracking-tighter">
                   Visit <br/>
                   <span className="text-[#d0a850]">Visa</span>
                  </h1>
                  <div className="w-16 h-[2px] bg-[#d0a850]"></div>
               </div>

               <p className="text-lg text-white/50 leading-relaxed font-medium max-w-lg">
                 Amid the busiest life, visiting a new destination with affordability becomes important for a good change. 
                 We ensure your journey is seamless and comfortable.
               </p>

               <div className="flex flex-wrap items-center gap-10 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#b89445] transition-all no-underline shadow-lg hover:-translate-y-1">
                   Plan Your Trip
                 </Link>
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-[1px] bg-white/10"></div>
                    <span className="text-white/20 text-[8px] uppercase font-black tracking-[0.5em]">Explore The World</span>
                 </div>
               </div>
            </div>

            <div className="flex-1 relative animate-fade-in flex justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl max-w-xl">
                  <img src="/page images/visit1.png" alt="Visit Visa" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DESTINATION GRID */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Popular Choice</span>
               <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">Top <br/>Destinations</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Explore the most sought-after travel destinations with our comprehensive visa support services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {destinations.map((dest, i) => (
              <div key={i} className="group bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500 overflow-hidden">
                <div className="h-64 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1921] to-transparent opacity-40"></div>
                </div>
                <div className="p-10 space-y-6">
                  <h3 className="text-white text-lg font-black uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{dest.name}</h3>
                  <p className="text-white/30 font-medium leading-relaxed text-xs antialiased line-clamp-3">{dest.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-4 text-white font-black uppercase text-[9px] tracking-[0.3em] group/link no-underline">
                    <span>Apply Now</span>
                    <div className="w-8 h-[1px] bg-[#d0a850] group-hover/link:w-12 transition-all"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED SUPPORT */}
      <section className="py-32 container mx-auto px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-32">
          <div className="flex-1 space-y-12">
             <div className="space-y-4">
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Travel Support</span>
               <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase leading-[1.1] tracking-tight">Complete <br/> <span className="text-[#d0a850]">Guidance</span></h2>
             </div>
             <p className="text-lg text-white/50 leading-relaxed font-medium">
               We provide full support for tourist and visit visas, including sponsor documents, hotel bookings, itineraries, and insurance guidance.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 pt-4">
                {[
                  "Personalized Itinerary", "Interview Preparation", "Financial Documentation", "Hotel & Flight Bookings"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#d0a850]/50 transition-all">
                      <i className="fas fa-check text-[#d0a850] text-[10px]"></i>
                    </div>
                    <span className="text-white/60 font-black uppercase tracking-widest text-[10px]">{item}</span>
                  </div>
                ))}
             </div>
             <div className="pt-8">
               <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/5">
                 Start Consultation
               </Link>
             </div>
          </div>
          <div className="flex-1 relative group">
            <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000">
              <img src="/images/schengenVisitVisa.jpeg" alt="Schengen" className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
