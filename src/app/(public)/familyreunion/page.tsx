import Link from "next/link";

export const metadata = {
  title: "Family Reunion | The Visa Consultancy",
};

export default function Familyreunion() {
  const regions = [
    { name: "United Kingdom", img: "/images/FamilyReunionUK.jpg", desc: "Join your spouse, fiancé, or children in the UK with expert sponsorship support." },
    { name: "Canada", img: "/images/ReunionCanada.jpg", desc: "Bring your loved ones to Canada through official family sponsorship programs." },
    { name: "United States", img: "/images/USAFamilyImmihgrationReunion.jpg", desc: "Reunite through immediate relative or family preference categories." },
    { name: "Australia", img: "/images/AustraliaReunionPartner.jpg", desc: "Join your partner or family members in Australia with confidence." }
  ];

  return (
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-8 animate-fade-in">
             <h1 className="text-4xl md:text-7xl font-black text-white leading-tight heading-serif uppercase">
              Family Reunion <br/>
              <span className="text-[#d0a850]">Reunite Loved Ones</span>
             </h1>
             <p className="text-xl text-gray-300 leading-relaxed font-medium">
               At The Visa Consultancy, we understand how important family is. 
               Our services are designed to help you bring your spouse, children, or parents together legally and smoothly.
             </p>
             <Link href="/contact" className="btn-gold">Free Consultation</Link>
          </div>
          <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d0a850]/20 blur-3xl group-hover:bg-[#d0a850]/30 transition-all duration-700"></div>
              <img src="/images/familyreunion.png" alt="Family Reunion" className="relative z-10 w-full rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Regions Grid */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="section-title uppercase tracking-[0.2em] font-black">Global Family Sponsorship</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, i) => (
              <div key={i} className="visa-card !bg-white/5 !text-white border border-white/10 hover:border-[#d0a850]/50 group overflow-hidden">
                <div className="h-48 overflow-hidden rounded-t-xl mb-6">
                  <img src={region.img} alt={region.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-widest px-6">{region.name}</h3>
                <p className="text-gray-400 font-medium leading-relaxed px-6 mb-8">{region.desc}</p>
                <div className="px-6 pb-8">
                  <Link href="/contact" className="text-[#d0a850] font-black uppercase text-xs tracking-widest border-b border-[#d0a850] pb-1 no-underline hover:text-white hover:border-white transition-all">Start Application</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Support */}
        <section className="py-32 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-[#d0a850] uppercase tracking-widest">Complete Guidance</h2>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                From relationship evidence preparation to financial requirement verification, we provide end-to-end support for your family's successful reunion.
              </p>
              <div className="space-y-4 font-bold text-white uppercase tracking-wider text-sm">
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-[#d0a850] transition-all">
                  <i className="fas fa-heart text-[#d0a850] text-xl"></i> Relationship Proof Guidance
                </div>
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-[#d0a850] transition-all">
                  <i className="fas fa-file-invoice-dollar text-[#d0a850] text-xl"></i> Financial Document Verification
                </div>
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-[#d0a850] transition-all">
                  <i className="fas fa-users text-[#d0a850] text-xl"></i> Sponsorship Assessment
                </div>
              </div>
            </div>
            <div className="rounded-[40px] overflow-hidden border-2 border-[#d0a850]/30 shadow-2xl">
              <img src="/images/FamilyReunionUK.jpg" alt="Family" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
