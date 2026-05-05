import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Visit Visas | The Visa Consultancy",
};

export default function VisitVisasPage() {
  const destinations = [
    { name: "Schengen", img: "/images/SchengenVisit.jpg", desc: "Explore 27 European countries with a single visa. We handle all documentation and embassy appointments." },
    { name: "USA", img: "/images/USVisit.jpg", desc: "B1/B2 visa support for tourism and business. Expert guidance for DS-160 and interview preparation." },
    { name: "UK", img: "/images/UKVisit.jpg", desc: "Visit the United Kingdom for tourism or family. Complete support for standard visitor visa applications." },
    { name: "Canada", img: "/images/CanadaVisit.jpg", desc: "Explore the beauty of Canada. Assistance with visitor visas and super visas for parents/grandparents." }
  ];

  return (
    <div className="bg-[#0f1921] min-h-screen pt-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[80vh] flex items-center py-20">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-10 animate-fade-in">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-xs font-black uppercase tracking-[0.6em] block mb-4">Travel & Leisure</span>
                 <h1 className="text-5xl md:text-8xl font-black text-white heading-serif leading-[0.9] tracking-tighter uppercase">
                   Visit <br/> <span className="text-[#d0a850]">Visas</span>
                 </h1>
               </div>
               
               <p className="text-xl text-white/40 leading-relaxed font-medium max-w-xl">
                 Discover the world without the stress of paperwork. Our experts handle your tourist and visit visa applications from start to finish.
               </p>

               <div className="flex flex-wrap gap-6 pt-6">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10">
                   Plan Your Trip
                 </Link>
               </div>
            </div>

            <div className="flex-1 relative animate-fade-in flex justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl max-w-xl">
                  <Image 
                    src="/page images/visit1.png" 
                    alt="Visit Visa" 
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

        {/* 2. DESTINATION GRID */}
        <section className="py-32 border-t border-white/5">
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
                  <Image 
                    src={dest.img} 
                    alt={dest.name} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
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
        </section>

        {/* 3. DETAILED SUPPORT */}
        <section className="py-32 border-t border-white/5">
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
                <Image 
                  src="/images/schengenVisitVisa.jpeg" 
                  alt="Schengen" 
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
