import Link from "next/link";

export const metadata = {
  title: "PTE Preparation | The Visa Consultancy",
};

export default function PteTest() {
  const sections = [
    { title: "Prerequisites", icon: "fa-check-double", items: ["Valid Identification", "Age Requirement (16+)", "Test Fee Payment"] },
    { title: "Test Formats", icon: "fa-desktop", items: ["PTE Academic", "PTE Core (Canada)", "PTE Academic Online"] },
    { title: "Target Score", icon: "fa-chart-line", items: ["Strategic Guidance", "Expert Connections", "Booking Assistance"] }
  ];

  return (
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight heading-serif uppercase mb-8">
            English Proficiency: <span className="text-[#d0a850]">PTE Test</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-medium mb-12">
            The PTE (Pearson Test of English) is a leading computer-based test trusted by universities and governments. 
            Renowned for its speed, it delivers results in as little as 48 hours.
          </p>
          <div className="inline-flex items-center gap-4 px-8 py-3 bg-[#d0a850]/10 border border-[#d0a850]/30 rounded-full text-[#d0a850] font-bold uppercase tracking-widest text-sm">
            <i className="fas fa-check-circle"></i> AI-Powered Scoring for Unbiased Results
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sections.map((section, i) => (
            <div key={i} className="visa-card !bg-white/5 !text-white border border-white/10 hover:border-[#d0a850]/50 p-12 flex flex-col items-start text-left group">
              <div className="w-16 h-16 rounded-2xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] text-3xl mb-8 border border-[#d0a850]/20 transition-transform group-hover:scale-110">
                <i className={`fas ${section.icon}`}></i>
              </div>
              <h3 className="text-[#d0a850] text-2xl font-bold mb-6 uppercase tracking-widest">{section.title}</h3>
              <ul className="space-y-4 text-gray-300 font-medium list-none p-0">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#d0a850] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-white/10 w-full">
                <Link href="/contact" className="text-white hover:text-[#d0a850] transition-colors font-black uppercase text-xs tracking-widest no-underline">Register &rarr;</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-32 p-16 rounded-[50px] border-2 border-[#d0a850]/20 bg-gradient-to-br from-white/5 to-transparent flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-widest leading-tight">Fast & <span className="text-[#d0a850]">Accurate</span></h2>
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              Achieve your target score with The Visa Consultancy's strategic guidance. We assist with Pearson VUE registration and provide expert scheduling support.
            </p>
            <Link href="/contact" className="btn-gold !px-12">Consult an Expert</Link>
          </div>
          <div className="flex-1">
             <img src="/images/pte.jpg" alt="PTE" className="w-full h-auto rounded-3xl shadow-2xl border border-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
