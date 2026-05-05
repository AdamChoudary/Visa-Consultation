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
    <div className="bg-[#0f1921] min-h-screen pt-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[80vh] flex items-center py-20">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-10 animate-fade-in">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-xs font-black uppercase tracking-[0.6em] block mb-4">Academic Excellence</span>
                 <h1 className="text-5xl md:text-8xl font-black text-white heading-serif leading-[0.9] tracking-tighter uppercase">
                   Student <br/> <span className="text-[#d0a850]">Visas</span>
                 </h1>
               </div>
               
               <p className="text-xl text-white/40 leading-relaxed font-medium max-w-xl">
                 Your gateway to international education. We simplify the complex visa process so you can focus on your academic future.
               </p>

               <div className="flex flex-wrap gap-6 pt-6">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10">
                   Start Application
                 </Link>
               </div>
            </div>

            <div className="flex-1 relative animate-fade-in flex justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl max-w-xl">
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
        <section className="py-32 border-t border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">What we do</span>
               <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">Our Expert <br/>Services</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Tailored solutions for every student's unique journey towards international education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {[
              { t: "University Selection", d: "Finding the right institution that fits your career goals." },
              { t: "CAS & I-20 Support", d: "Streamlined assistance for your enrollment documentation." },
              { t: "Financial Guidance", d: "Helping you prepare the necessary funds and proof." },
              { t: "Interview Prep", d: "Mock sessions to build your confidence for the embassy." }
            ].map((service, i) => (
              <div key={i} className="group p-12 bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] text-xl mb-8 group-hover:bg-[#d0a850] group-hover:text-[#0f1921] transition-all">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="text-white text-base font-black mb-4 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{service.t}</h3>
                <p className="text-white/30 font-medium leading-relaxed text-xs antialiased">{service.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. REGIONAL CONTENT */}
        {regions.map((region, i) => (
          <section key={i} className="py-32 border-t border-white/5">
            <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-32 max-w-7xl mx-auto`}>
              <div className="flex-1 space-y-12">
                 <div className="space-y-4">
                   <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">{region.name}</span>
                   <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase leading-[1.1] tracking-tight">{region.title}</h2>
                 </div>
                 <p className="text-lg text-white/50 leading-relaxed font-medium">
                   {region.desc}
                 </p>
                 <div className="pt-8">
                   <Link href="/contact" className="inline-flex items-center gap-6 group/link no-underline">
                     <span className="text-[#d0a850] font-black uppercase text-[11px] tracking-[0.4em]">Explore Process</span>
                     <div className="w-12 h-[1px] bg-[#d0a850]/30 group-hover/link:w-20 group-hover/link:bg-[#d0a850] transition-all duration-500"></div>
                   </Link>
                 </div>
              </div>
              <div className="flex-1 relative group">
                <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000">
                  <Image 
                    src={region.img} 
                    alt={region.name} 
                    width={800} 
                    height={600} 
                    className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* 4. GLOBAL CTA */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto bg-white/[0.02] border border-white/5 rounded-[40px] p-24 text-center space-y-12">
             <div className="space-y-4">
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Global Admissions</span>
               <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase tracking-tight">Ready to <span className="text-[#d0a850]">Fly?</span></h2>
             </div>
             <p className="text-lg text-white/40 font-medium max-w-2xl mx-auto">
               Don't let paperwork stand between you and your dream university. Our team is ready to guide you.
             </p>
             <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-16 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline inline-block shadow-2xl shadow-[#d0a850]/5">
               Start Consultation
             </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
