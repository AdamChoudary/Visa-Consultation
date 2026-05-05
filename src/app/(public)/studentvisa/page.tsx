import Link from "next/link";

export const metadata = {
  title: "Student Visa | The Visa Consultancy",
};

export default function Studentvisa() {
  return (
    <div className="bg-[#0f1921] min-h-screen selection:bg-[#d0a850] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center pt-10 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
            <div className="flex-1 space-y-10 animate-fade-in">
               <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[#d0a850] text-[9px] font-black uppercase tracking-[0.4em]">Education First</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] heading-serif uppercase tracking-tighter">
                   Student <br/>
                   <span className="text-[#d0a850]">Visa</span>
                  </h1>
                  <div className="w-16 h-[2px] bg-[#d0a850]"></div>
               </div>

               <p className="text-lg text-white/50 leading-relaxed font-medium max-w-lg">
                 Start your global education journey with our digitally market-embedded visa options and solutions. 
                 Your opportunity to reach your destination is our priority.
               </p>

               <div className="flex flex-wrap items-center gap-10 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#b89445] transition-all no-underline shadow-lg hover:-translate-y-1">
                   Free Consultation
                 </Link>
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-[1px] bg-white/10"></div>
                    <span className="text-white/20 text-[8px] uppercase font-black tracking-[0.5em]">Global Future</span>
                 </div>
               </div>
            </div>

            <div className="flex-1 relative animate-fade-in flex justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl max-w-xl">
                  <img src="/page images/study1.png" alt="Student Visa" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Our Expertise</span>
               <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">Educational <br/>Consultancy</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              We provide a comprehensive suite of services to ensure your academic transition is seamless and successful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {[
              { t: "Free Counselling", d: "Personalized guidance to help students choose the best country based on academic background and career goals.", i: "fa-comments" },
              { t: "University Selection", d: "Assistance in selecting accredited and internationally recognized universities worldwide.", i: "fa-university" },
              { t: "Exam Preparation", d: "Professional coaching for IELTS, TOEFL, and university screening tests.", i: "fa-book-open" },
              { t: "Digital Access", d: "Direct digital access to universities and sponsors offering fee waivers and scholarships.", i: "fa-laptop-code" },
              { t: "Clear Documentation", d: "Complete support in attestation, verification, and legalization of academic documents.", i: "fa-file-signature" },
              { t: "Settlement Support", d: "Assistance in securing university dormitories and private accommodations for a smooth transition.", i: "fa-home" }
            ].map((item, i) => (
              <div key={i} className="group p-12 bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500">
                <div className="text-[#d0a850] text-xl mb-8 group-hover:scale-110 transition-transform inline-block">
                  <i className={`fas ${item.i}`}></i>
                </div>
                <h3 className="text-white text-lg font-black mb-4 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{item.t}</h3>
                <p className="text-white/40 font-medium leading-relaxed text-sm antialiased">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED REGIONS */}
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-64">
          {/* UK */}
          <div className="flex flex-col lg:flex-row items-center gap-32">
            <div className="flex-1 relative group">
              <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000">
                <img src="/images/StudentVisaUK.jpeg" alt="UK" className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </div>
            <div className="flex-1 space-y-10">
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">United Kingdom</span>
               <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase leading-[1.1] tracking-tight">British <br/> <span className="text-[#d0a850]">Excellence</span></h2>
               <p className="text-lg text-white/50 leading-relaxed font-medium">
                 We assist with university selection, CAS processing, financial documentation, SOP preparation, and complete visa filing support. Experience the heritage of global education.
               </p>
               <Link href="/contact" className="inline-flex items-center gap-4 text-white font-black uppercase text-[10px] tracking-[0.3em] group no-underline">
                 <span>Explore Programs</span>
                 <div className="w-12 h-[1px] bg-[#d0a850] group-hover:w-20 transition-all"></div>
               </Link>
            </div>
          </div>

          {/* Australia */}
          <div className="flex flex-col lg:flex-row items-center gap-32">
            <div className="flex-1 space-y-10 order-2 lg:order-1">
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Australia</span>
               <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase leading-[1.1] tracking-tight">The <br/> <span className="text-[#d0a850]">Southern Cross</span></h2>
               <p className="text-lg text-white/50 leading-relaxed font-medium">
                 Complete assistance for university admissions, GTE/SOP preparation, and financial proof guidance. Australia offers a vibrant lifestyle and world-class academic opportunities.
               </p>
               <Link href="/contact" className="inline-flex items-center gap-4 text-white font-black uppercase text-[10px] tracking-[0.3em] group no-underline">
                 <span>Apply Now</span>
                 <div className="w-12 h-[1px] bg-[#d0a850] group-hover:w-20 transition-all"></div>
               </Link>
            </div>
            <div className="flex-1 relative group order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000">
                <img src="/images/StudentVisaAustralia.jpg" alt="Australia" className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-32 container mx-auto px-6">
         <div className="max-w-7xl mx-auto bg-white/[0.02] border border-white/5 rounded-[40px] p-24 text-center space-y-12">
            <div className="space-y-4">
              <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Take the first step</span>
              <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase tracking-tight">Ready to <span className="text-[#d0a850]">Begin?</span></h2>
            </div>
            <p className="text-lg text-white/40 font-medium max-w-2xl mx-auto">
              Your future doesn't wait. Start your application today with the most trusted consultants in the industry.
            </p>
            <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-16 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline inline-block shadow-2xl shadow-[#d0a850]/5">
              Start Your Journey
            </Link>
         </div>
      </section>
    </div>
  );
}
