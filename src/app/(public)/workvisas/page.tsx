import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Work Visas | The Visa Consultancy",
  description: "Advance your career on a global stage. We provide end-to-end support for work permits, skilled migration, and relocation documentation.",
};

export default function WorkVisasPage() {
  const jobs = [
    { name: "Skilled Worker", img: "/page images/workvisa/skilled.jpg", desc: "Expert guidance for Tier 2 and other skilled migration pathways for professionals." },
    { name: "Domestic Workers", img: "/page images/workvisa/domestic.jpg", desc: "Specialized support for domestic worker visas with full legal compliance." },
    { name: "Hospitality", img: "/page images/workvisa/hospitality.jpg", desc: "Unlock opportunities in the global hospitality sector with our placement support." },
    { name: "Healthcare", img: "/page images/workvisa/healthcare.jpg", desc: "Dedicated pathways for doctors, nurses, and allied healthcare professionals." }
  ];

  return (
    <div className="bg-[#0f1921] min-h-screen pt-8 md:pt-16 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[40vh] md:min-h-[50vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-8 md:space-y-10 animate-fade-in text-center lg:text-left">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">Professional Growth</span>
                 <h1 className="text-4xl md:text-8xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                   Work <br className="hidden md:block"/> <span className="text-[#d0a850]">Visas</span>
                 </h1>
               </div>
               
               <p className="text-base md:text-xl text-white/40 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                 Advance your career on a global stage. We provide end-to-end support for work permits, sponsorship, and relocation documentation.
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
                    src="/page images/work1.jpg" 
                    alt="Work Visa" 
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

        {/* 2. CAREER GRID */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Career Paths</span>
               <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase tracking-tight">Global <br className="hidden md:block"/>Opportunities</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Unlock international career growth with our specialized work permit and relocation support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden">
            {jobs.map((job, i) => (
              <div key={i} className="group bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500 overflow-hidden">
                <div className="h-48 md:h-64 overflow-hidden relative transition-all duration-700">
                  <Image 
                    src={job.img} 
                    alt={job.name} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1921] to-transparent opacity-40"></div>
                </div>
                <div className="p-8 md:p-10 space-y-6">
                  <h3 className="text-white text-base font-bold uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{job.name}</h3>
                  <p className="text-white/30 font-medium leading-relaxed text-sm antialiased">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. CTA */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[40px] p-8 md:p-24 text-center space-y-8 md:space-y-12">
             <div className="space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.3em] mb-4">Professional Growth</span>
               <h2 className="text-3xl md:text-7xl font-bold text-white heading-serif uppercase tracking-tight leading-tight">Ready for <span className="text-[#d0a850]">Success?</span></h2>
             </div>
             <p className="text-base md:text-lg text-white/40 font-medium max-w-2xl mx-auto">
               Don't let paperwork stand between you and your global career. Our team is ready to guide you.
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
