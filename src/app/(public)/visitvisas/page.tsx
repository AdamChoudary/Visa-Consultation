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
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d0a850] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10 animate-fade-in">
               <div className="inline-block px-4 py-1 bg-[#d0a850]/10 border border-[#d0a850]/20 rounded-full">
                  <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.3em]">Global Tourism</span>
               </div>
               <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] heading-serif uppercase tracking-tighter">
                Visit <br/>
                <span className="text-[#d0a850]">Visa</span>
               </h1>
               <p className="text-xl text-white/70 leading-relaxed font-medium max-w-xl">
                 Amid the busiest life, visiting a new destination with affordability becomes important for a good change. 
                 We ensure your journey is seamless and comfortable.
               </p>
               <div className="flex flex-wrap gap-6 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#b89445] transition-all no-underline shadow-[0_10px_30px_rgba(208,168,80,0.2)]">
                   Plan Your Trip
                 </Link>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-white/20"></div>
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Explore The World</span>
                 </div>
               </div>
            </div>
            <div className="flex-1 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/HeroSectionVisitVisa.png" alt="Visit Visa" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DESTINATION GRID */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
             <span className="text-[#d0a850] text-xs font-black uppercase tracking-[0.4em]">Popular Choice</span>
             <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">Top Destinations</h2>
             <div className="w-24 h-[2px] bg-[#d0a850] mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {destinations.map((dest, i) => (
              <div key={i} className="group rounded-3xl bg-white/5 border border-white/10 hover:border-[#d0a850]/40 transition-all duration-500 overflow-hidden">
                <div className="h-56 overflow-hidden relative">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1921] to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-white text-2xl font-black uppercase tracking-widest">{dest.name}</h3>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <p className="text-white/50 font-medium leading-relaxed text-sm">{dest.desc}</p>
                  <Link href="/contact" className="inline-block text-[#d0a850] font-black uppercase text-[10px] tracking-widest border-b border-[#d0a850] pb-1 no-underline hover:text-white hover:border-white transition-all">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED SUPPORT */}
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 space-y-10">
             <span className="text-[#d0a850] text-sm font-black uppercase tracking-[0.4em]">Travel Support</span>
             <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase leading-[1.1] tracking-tight">Complete <br/> <span className="text-[#d0a850]">Guidance</span></h2>
             <p className="text-xl text-white/60 leading-relaxed font-medium">
               We provide full support for tourist and visit visas, including sponsor documents, hotel bookings, itineraries, and insurance guidance.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                {[
                  "Personalized Itinerary", "Interview Preparation", "Financial Documentation", "Hotel & Flight Bookings"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d0a850]/20 flex items-center justify-center">
                      <i className="fas fa-check text-[#d0a850] text-[10px]"></i>
                    </div>
                    <span className="text-white font-bold uppercase tracking-widest text-[11px]">{item}</span>
                  </div>
                ))}
             </div>
             <div className="pt-8">
               <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#b89445] transition-all no-underline shadow-lg shadow-[#d0a850]/10">
                 Start Consultation
               </Link>
             </div>
          </div>
          <div className="flex-1 relative group">
            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative z-10">
              <img src="/images/schengenVisitVisa.jpeg" alt="Schengen" className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-[#d0a850]/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
