import Image from "next/image";
import Link from "next/link";
import { StaggerItem, ScaleIn } from "@/components/MotionWrappers";

export const metadata = {
  title: "Work Visas | The Visa Consultancy",
  description: "Advance your career on a global stage. We provide end-to-end support for work permits, skilled migration, and relocation documentation.",
};

const jobs = [
  { 
    name: "Dubai Work Visa", 
    img: "/page images/workvisa/skilled.webp", 
    desc: "Secure employment in Dubai with full guidance. We assist with employer sponsorship, contract verification, and immigration documentation for a smooth process." 
  },
  { 
    name: "UK Work Visa", 
    img: "/page images/workvisa/domestic.webp", 
    desc: "Explore UK career opportunities. Our services include points-based eligibility assessment, document preparation, and sponsorship guidance." 
  },
  { 
    name: "USA Work Visa", 
    img: "/page images/workvisa/hospitality.webp", 
    desc: "Obtain US employment authorization. Full support for H-1B, L-1, and other work visas including DS-160 prep and interview guidance." 
  },
  { 
    name: "Canada Work Visa", 
    img: "/page images/workvisa/healthcare.webp", 
    desc: "Start your journey in Canada. We guide you through LMIA documentation, employer requirements, and successful embassy submission." 
  }
];

export default function WorkVisasPage() {

  return (
    <div className="bg-[#0f1921] min-h-screen pt-8 md:pt-16 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[40vh] md:min-h-[50vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 md:pt-32">
            <div className="flex-1 space-y-8 md:space-y-10 animate-fade-in text-center lg:text-left">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">Professional Growth</span>
                 <h1 className="text-4xl md:text-6xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                   Work Visa <br className="hidden md:block"/> <span className="text-[#d0a850]">Advance Your Career</span> Abroad
                 </h1>
               </div>
               
               <p className="text-base md:text-md text-white/40 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                 Whether it's a job or business visa, we provide the gateway to your professional and startup goals. Whether the process involves PR or TR permits, our expert team will guide you through every step.
               </p>

               <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10">
                   Free Consultation
                 </Link>
               </div>
            </div>

            <div className="flex-1 w-full relative animate-fade-in flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 w-full max-w-md lg:max-w-xl">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl">
                  <Image 
                    src="/page images/work1.webp" 
                    alt="Work Visa" 
                    width={800} 
                    height={1000} 
                    className="w-full h-auto object-cover" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
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
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Work & Business</span>
               <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase tracking-tight">Work Visa <br className="hidden md:block"/>Services</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Unlock international career growth with our specialized work permit and relocation support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden">
            {jobs.map((job, i) => (
              <StaggerItem 
                key={i} 
                index={i}
                className="group bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500 overflow-hidden"
              >
                <div className="h-48 md:h-64 overflow-hidden relative transition-all duration-700">
                  <Image 
                    src={job.img} 
                    alt={job.name} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1921] to-transparent opacity-40"></div>
                </div>
                <div className="p-8 md:p-10 space-y-6">
                  <h3 className="text-white text-base font-bold uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{job.name}</h3>
                  <p className="text-white/30 font-medium leading-relaxed text-sm antialiased">{job.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </section>

        {/* 3. CTA */}
        <ScaleIn className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
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
        </ScaleIn>
      </div>
    </div>
  );
}
