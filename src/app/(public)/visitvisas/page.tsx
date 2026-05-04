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
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-8 animate-fade-in">
             <h1 className="text-4xl md:text-7xl font-black text-white leading-tight heading-serif uppercase">
              Visit Visa <br/>
              <span className="text-[#d0a850]">Explore The World</span>
             </h1>
             <p className="text-xl text-gray-300 leading-relaxed font-medium">
               Amid the busiest life, visiting a new destination with affordability becomes important for a good change. 
               Whether it's a solo trip, with friends or family, we ensure your journey is seamless and comfortable.
             </p>
             <Link href="/contact" className="btn-gold">Free Consultation</Link>
          </div>
          <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d0a850]/20 blur-3xl group-hover:bg-[#d0a850]/30 transition-all duration-700"></div>
              <img src="/images/HeroSectionVisitVisa.png" alt="Visit Visa" className="relative z-10 w-full rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Destination Grid */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="section-title uppercase tracking-[0.2em] font-black">Popular Destinations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, i) => (
              <div key={i} className="visa-card !bg-white/5 !text-white border border-white/10 hover:border-[#d0a850]/50 group overflow-hidden">
                <div className="h-48 overflow-hidden rounded-t-xl mb-6">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-widest px-6">{dest.name}</h3>
                <p className="text-gray-400 font-medium leading-relaxed px-6 mb-8">{dest.desc}</p>
                <div className="px-6 pb-8">
                  <Link href="/contact" className="text-[#d0a850] font-black uppercase text-xs tracking-widest border-b border-[#d0a850] pb-1 no-underline hover:text-white hover:border-white transition-all">Apply Now</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Support */}
        <section className="py-32 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-[#d0a850] uppercase tracking-widest">Complete Travel Support</h2>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                We provide full support for tourist and visit visas, including sponsor documents, hotel bookings, travel itineraries, invitation letters, and travel insurance guidance.
              </p>
              <ul className="text-white space-y-4 font-bold">
                <li className="flex items-center gap-3"><i className="fas fa-check text-[#d0a850]"></i> Personalized Itinerary Planning</li>
                <li className="flex items-center gap-3"><i className="fas fa-check text-[#d0a850]"></i> Interview Preparation (USA/UK)</li>
                <li className="flex items-center gap-3"><i className="fas fa-check text-[#d0a850]"></i> Financial Proof Documentation</li>
                <li className="flex items-center gap-3"><i className="fas fa-check text-[#d0a850]"></i> Hotel & Flight Reservations</li>
              </ul>
            </div>
            <div className="rounded-[40px] overflow-hidden border-2 border-[#d0a850]/30 shadow-2xl">
              <img src="/images/schengenVisitVisa.jpeg" alt="Travel" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
