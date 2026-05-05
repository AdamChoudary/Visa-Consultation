import Link from "next/link";

export const metadata = {
  title: "Student Visa | The Visa Consultancy",
};

export default function Studentvisa() {
  return (
    <div className="bg-[#0f1921] min-h-screen selection:bg-[#d0a850] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#d0a850] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10 animate-fade-in">
               <div className="inline-block px-4 py-1 bg-[#d0a850]/10 border border-[#d0a850]/20 rounded-full">
                  <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.3em]">Education First</span>
               </div>
               <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] heading-serif uppercase tracking-tighter">
                Student <br/>
                <span className="text-[#d0a850]">Visa</span>
               </h1>
               <p className="text-xl text-white/70 leading-relaxed font-medium max-w-xl">
                 Start your global education journey with our digitally market-embedded visa options and solutions. 
                 Your opportunity to reach your destination is our priority.
               </p>
               <div className="flex flex-wrap gap-6 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#b89445] transition-all no-underline shadow-[0_10px_30px_rgba(208,168,80,0.2)]">
                   Get Free Consultation
                 </Link>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-white/20"></div>
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Global Future</span>
                 </div>
               </div>
            </div>
            <div className="flex-1 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/StudntVisaHero.png" alt="Student Visa" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#d0a850]/10 rounded-full blur-[80px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-32 bg-white/[0.02] relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
             <span className="text-[#d0a850] text-xs font-black uppercase tracking-[0.4em]">Our Expertise</span>
             <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">Educational Consultancy</h2>
             <div className="w-24 h-[2px] bg-[#d0a850] mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { t: "Free Counselling", d: "Personalized guidance to help students choose the best country based on academic background and career goals.", i: "fa-comments" },
              { t: "University Selection", d: "Assistance in selecting accredited and internationally recognized universities worldwide.", i: "fa-university" },
              { t: "Exam Preparation", d: "Professional coaching for IELTS, TOEFL, and university screening tests.", i: "fa-book-open" },
              { t: "Digital Access", d: "Direct digital access to universities and sponsors offering fee waivers and scholarships.", i: "fa-laptop-code" },
              { t: "Clear Documentation", d: "Complete support in attestation, verification, and legalization of academic documents.", i: "fa-file-signature" },
              { t: "Settlement Support", d: "Assistance in securing university dormitories and private accommodations for a smooth transition.", i: "fa-home" }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#d0a850]/40 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-[#d0a850] flex items-center justify-center text-2xl text-[#0f1921] mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(208,168,80,0.2)]">
                  <i className={`fas ${item.i}`}></i>
                </div>
                <h3 className="text-white text-xl font-black mb-4 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{item.t}</h3>
                <p className="text-white/50 font-medium leading-relaxed text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED REGIONS */}
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-40">
          {/* UK */}
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 relative group">
              <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative z-10">
                <img src="/images/StudentVisaUK.jpeg" alt="UK" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-[#d0a850]/10 rounded-[40px] blur-2xl group-hover:bg-[#d0a850]/20 transition-all duration-500"></div>
            </div>
            <div className="flex-1 space-y-10">
               <span className="text-[#d0a850] text-sm font-black uppercase tracking-[0.4em]">United Kingdom</span>
               <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase leading-[1.1] tracking-tight">Experience British <br/> <span className="text-[#d0a850]">Excellence</span></h2>
               <p className="text-xl text-white/60 leading-relaxed font-light italic border-l-4 border-[#d0a850] pl-8">
                 "We assist with university selection, CAS processing, financial documentation, SOP preparation, and complete visa filing support."
               </p>
               <Link href="/contact" className="inline-block text-white font-black uppercase text-xs tracking-[0.3em] border-b-2 border-[#d0a850] pb-2 hover:text-[#d0a850] transition-all no-underline">
                 Explore UK Programs
               </Link>
            </div>
          </div>

          {/* Australia */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
            <div className="flex-1 relative group">
              <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative z-10">
                <img src="/images/StudentVisaAustralia.jpg" alt="Australia" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-[#d0a850]/10 rounded-[40px] blur-2xl group-hover:bg-[#d0a850]/20 transition-all duration-500"></div>
            </div>
            <div className="flex-1 space-y-10">
               <span className="text-[#d0a850] text-sm font-black uppercase tracking-[0.4em]">Australia</span>
               <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase leading-[1.1] tracking-tight lg:text-right">Study Under the <br/> <span className="text-[#d0a850]">Southern Cross</span></h2>
               <p className="text-xl text-white/60 leading-relaxed font-light italic border-r-4 border-[#d0a850] pr-8 lg:text-right">
                 "Complete assistance for university admissions, GTE/SOP preparation, and financial proof guidance for trusted academic journeys."
               </p>
               <div className="flex lg:justify-end pt-4">
                 <Link href="/contact" className="inline-block text-white font-black uppercase text-xs tracking-[0.3em] border-b-2 border-[#d0a850] pb-2 hover:text-[#d0a850] transition-all no-underline">
                   Apply for Australia
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-32 container mx-auto px-6 text-center">
         <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-16 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d0a850]/5 rounded-full blur-[80px]"></div>
            <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase mb-10 relative z-10">Ready to <span className="text-[#d0a850]">Begin?</span></h2>
            <p className="text-xl text-white/60 font-medium mb-12 max-w-2xl mx-auto relative z-10">
              Your future doesn't wait. Start your application today with the most trusted consultants in the industry.
            </p>
            <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-12 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:bg-[#b89445] transition-all no-underline inline-block relative z-10 shadow-xl shadow-[#d0a850]/10">
              Start Your Journey
            </Link>
         </div>
      </section>
    </div>
  );
}
