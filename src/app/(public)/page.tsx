import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#0f1921] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <img 
          src="/images/hero_traveler.png" 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* 2. QUOTE / MISSION SECTION */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto border-2 border-[#d0a850] rounded-xl p-10 md:p-16 text-center bg-[#0f1921]/50 backdrop-blur-sm">
          <h2 className="text-[#d0a850] text-2xl md:text-4xl font-black heading-serif mb-8 leading-tight uppercase tracking-widest">
            Ever got stuck in choosing and planning for a country to <br className="hidden md:block" />
            visit, study and move in?
          </h2>
          <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
            The complicated part for applying abroad becomes arduous, exhausting the mind and motivation. 
            The paper work and process require solutions which our company handles for you to lead to exploring new horizons. 
            The free consultation provides an experience of a secure connection and a pleasant journey into the future with transparency and needed professionalism.
          </p>
        </div>
      </section>

      {/* 3. OUR VISA SERVICES SECTION */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[1px] w-20 md:w-32 bg-[#d0a850]"></div>
            <h2 className="text-[#d0a850] text-3xl md:text-6xl font-black heading-serif uppercase tracking-[0.1em]">Our Visa Services</h2>
            <div className="h-[1px] w-20 md:w-32 bg-[#d0a850]"></div>
          </div>
          <p className="text-white text-sm md:text-base uppercase tracking-widest font-medium opacity-80">We Provide Professional Visa Solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { t: "Study Visa", d: "Pursue Your Education Abroad", i: "fa-graduation-cap" },
            { t: "Visit Visa", d: "Travel to Your Dream Destinations", i: "fa-plane" },
            { t: "Work Visa", d: "Advance Your Career Overseas", i: "fa-briefcase" },
            { t: "Immigration & PR", d: "Settle in a New Country", i: "fa-home" }
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-2xl border-2 border-[#d0a850]/20 hover:border-[#d0a850] transition-all">
              <div className="text-5xl text-[#0f1921] mb-6">
                <i className={`fas ${service.i}`}></i>
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-1 text-[#0f1921]">{service.t}</h3>
              <p className="text-gray-500 font-bold text-[10px] uppercase mb-6">{service.d}</p>
              <Link href="/contact" className="bg-[#d0a850] text-black px-6 py-2 rounded text-[10px] font-black uppercase no-underline hover:bg-[#b89445] transition-colors">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TOP DESTINATIONS SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-16 md:w-24 bg-[#d0a850]"></div>
              <h2 className="text-[#d0a850] text-2xl md:text-5xl font-black heading-serif uppercase tracking-widest">Top Destinations We Serve</h2>
              <div className="h-[1px] w-16 md:w-24 bg-[#d0a850]"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {[
              { n: "Canada", img: "https://flagcdn.com/w320/ca.png" },
              { n: "United Kingdom", img: "https://flagcdn.com/w320/gb.png" },
              { n: "Australia", img: "https://flagcdn.com/w320/au.png" },
              { n: "United States", img: "https://flagcdn.com/w320/us.png" },
              { n: "Europe", img: "https://flagcdn.com/w320/eu.png" },
              { n: "UAE", img: "https://flagcdn.com/w320/ae.png" }
            ].map((dest, idx) => (
              <div key={idx} className="bg-white border-4 border-white rounded-lg overflow-hidden shadow-xl">
                <div className="h-24 md:h-28 overflow-hidden">
                  <img src={dest.img} alt={dest.n} className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-100 py-1 text-center">
                  <span className="text-[#0f1921] font-black text-[10px] uppercase">{dest.n}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="py-24 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 md:w-32 bg-[#d0a850]"></div>
          <h2 className="text-[#d0a850] text-3xl md:text-7xl font-black heading-serif uppercase tracking-widest leading-none">
            Start Your Journey <br /> Abroad Today
          </h2>
          <div className="h-[1px] w-12 md:w-32 bg-[#d0a850]"></div>
        </div>
        <p className="text-white text-base md:text-xl font-bold uppercase tracking-[0.2em] mb-12 opacity-90">Get Expert Guidance For Your Visa & Immigration Needs</p>
        <Link href="/contact" className="bg-[#d0a850] text-black px-10 py-3 rounded-lg font-black uppercase text-base shadow-xl hover:bg-[#b89445] transition-all no-underline inline-block">
          Book a Free Consultation
        </Link>
      </section>
    </main>
  );
}
