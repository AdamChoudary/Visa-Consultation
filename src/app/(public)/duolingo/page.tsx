import Link from "next/link";

export const metadata = {
  title: "Duolingo Preparation | The Visa Consultancy",
};

export default function Duolingo() {
  const sections = [
    { title: "Prerequisites", icon: "fa-id-card", items: ["Valid Passport/ID", "Online Account", "Fast Activation"] },
    { title: "Test Format", icon: "fa-laptop-house", items: ["100% Online Test", "Adaptive Questions", "Results in 48 Hours"] },
    { title: "Target Score", icon: "fa-bullseye", items: ["Score Analysis", "Preparation Guidance", "Application Support"] }
  ];

  return (
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight heading-serif uppercase mb-8">
            English Proficiency: <span className="text-[#d0a850]">Duolingo Test</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-medium mb-12">
            The Duolingo English Test (DET) is a modern and convenient way to prove your English proficiency. 
            Accepted by thousands of universities worldwide, it can be taken from the comfort of your home.
          </p>
          <div className="inline-flex items-center gap-4 px-8 py-3 bg-[#d0a850]/10 border border-[#d0a850]/30 rounded-full text-[#d0a850] font-bold uppercase tracking-widest text-sm">
            <i className="fas fa-check-circle"></i> Accepted by 4,000+ Universities Worldwide
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
                <Link href="/contact" className="text-white hover:text-[#d0a850] transition-colors font-black uppercase text-xs tracking-widest no-underline">Start Test &rarr;</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-32 p-16 rounded-[50px] border-2 border-[#d0a850]/20 bg-gradient-to-br from-white/5 to-transparent flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-widest leading-tight">Fast-Track Your <span className="text-[#d0a850]">Future</span></h2>
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              We provide complete registration support and university score requirement analysis to ensure your Duolingo results open the right doors for you.
            </p>
            <Link href="/contact" className="btn-gold !px-12">Register Now</Link>
          </div>
          <div className="flex-1">
             <div className="bg-white/5 p-8 rounded-[40px] border border-white/10">
                <i className="fas fa-laptop-code text-9xl text-[#d0a850]/20"></i>
                <div className="mt-8 space-y-4">
                  <div className="h-2 w-full bg-[#d0a850]/20 rounded"></div>
                  <div className="h-2 w-3/4 bg-[#d0a850]/10 rounded"></div>
                  <div className="h-2 w-1/2 bg-[#d0a850]/5 rounded"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
