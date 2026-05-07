import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Student Visa | The Visa Consultancy",
};

export default function StudentVisaPage() {
  const regions = [
    { 
      name: "United Kingdom", 
      title: "British Excellence", 
      desc: "Access world-class education at prestigious UK universities. We handle your CAS, financial evidence, and embassy submission with precision.", 
      img: "/images/StudentVisaUK.jpeg" 
    },
    { 
      name: "Australia", 
      title: "The Southern Cross", 
      desc: "Complete assistance for university admissions, GTE/SOP preparation, and financial proof guidance. Australia offers a vibrant lifestyle and world-class academic opportunities.", 
      img: "/images/StudentVisaAustralia.jpg" 
    }
  ];

  return (
    <div className="bg-[#0f1921] min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[50vh] md:min-h-[60vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-8 md:space-y-10 animate-fade-in text-center lg:text-left">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">Academic Excellence</span>
                 <h1 className="text-4xl md:text-8xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                   Student <br className="hidden md:block"/> <span className="text-[#d0a850]">Visas</span>
                 </h1>
               </div>
               
               <p className="text-base md:text-xl text-white/40 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                 Your gateway to international education. We simplify the complex visa process so you can focus on your academic future.
               </p>

               <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10">
                   Start Application
                 </Link>
               </div>
            </div>

            <div className="flex-1 w-full relative animate-fade-in flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 w-full max-w-md lg:max-w-xl">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl">
                  <Image 
                    src="/page images/study1.png" 
                    alt="Student Visa" 
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

        {/* 2. SERVICES GRID */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">What we do</span>
               <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase tracking-tight">Our Expert <br className="hidden md:block"/>Services</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Tailored solutions for every student's unique journey towards international education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden">
            {[
              { t: "University Selection", d: "Finding the right institution that fits your career goals." },
              { t: "CAS & I-20 Support", d: "Streamlined assistance for your enrollment documentation." },
              { t: "Financial Guidance", d: "Helping you prepare the necessary funds and proof." },
              { t: "Interview Prep", d: "Mock sessions to build your confidence for the embassy." }
            ].map((service, i) => (
              <div key={i} className="group p-8 md:p-12 bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] text-xl mb-6 md:mb-8 group-hover:bg-[#d0a850] group-hover:text-[#0f1921] transition-all">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="text-white text-base font-bold mb-4 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{service.t}</h3>
                <p className="text-white/30 font-medium leading-relaxed text-[13px] md:text-sm antialiased">{service.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. REGIONAL CONTENT */}
        {regions.map((region, i) => (
          <section key={i} className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
            <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-32`}>
              <div className="flex-1 space-y-8 md:space-y-12 text-center lg:text-left">
                 <div className="space-y-4">
                   <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">{region.name}</span>
                   <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase leading-[1.2] md:leading-[1.1] tracking-tight">{region.title}</h2>
                 </div>
                 <p className="text-base md:text-lg text-white/50 leading-relaxed font-medium">
                   {region.desc}
                 </p>
                 <div className="pt-4 md:pt-8">
                   <Link href="/contact" className="inline-flex items-center gap-6 group/link no-underline">
                     <span className="text-[#d0a850] font-bold uppercase text-[14px] md:text-sm tracking-[0.4em]">Explore Process</span>
                     <div className="w-12 h-[1px] bg-[#d0a850]/30 group-hover/link:w-20 group-hover:link:bg-[#d0a850] transition-all duration-500"></div>
                   </Link>
                 </div>
              </div>
              <div className="flex-1 w-full relative group">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative z-10 transition-all duration-1000">
                  <Image 
                    src={region.img} 
                    alt={region.name} 
                    width={800} 
                    height={500} 
                    className="w-full h-[250px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* 4. GLOBAL CTA */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[40px] p-8 md:p-24 text-center space-y-8 md:space-y-12">
             <div className="space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.3em] mb-4">Global Admissions</span>
               <h2 className="text-3xl md:text-7xl font-bold text-white heading-serif uppercase tracking-tight leading-tight">Ready to <span className="text-[#d0a850]">Fly?</span></h2>
             </div>
             <p className="text-base md:text-lg text-white/40 font-medium max-w-2xl mx-auto">
               Don't let paperwork stand between you and your dream university. Our team is ready to guide you.
             </p>
             <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.2em] hover:bg-white hover:text-black transition-all no-underline inline-block shadow-2xl shadow-[#d0a850]/5">
               Start Consultation
             </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
