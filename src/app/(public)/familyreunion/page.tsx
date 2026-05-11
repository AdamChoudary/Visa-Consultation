import Image from "next/image";
import Link from "next/link";
import { StaggerItem, ScaleIn } from "@/components/MotionWrappers";

export const metadata = {
  title: "Family Reunion | The Visa Consultancy",
  description: "Bringing loved ones together across borders. We specialize in complex family reunion visas for Europe, USA, Canada, and Australia with legal precision and care.",
};

const regions = [
  { 
    name: "UK Family Reunion Visa", 
    img: "/page images/familyreunion/europe.webp", 
    desc: "Join your spouse, fiancé, children, or dependent family members in the United Kingdom. We assist with financial requirement preparation, relationship documentation, sponsorship support, and complete visa application processing to ensure a smooth reunion." 
  },
  { 
    name: "Canada Family Sponsorship", 
    img: "/page images/familyreunion/canada.webp", 
    desc: "Bring your loved ones to Canada through family sponsorship programs. Our experts guide you through eligibility assessment, sponsorship forms, financial proof requirements, and IRCC application submission for successful approval." 
  },
  { 
    name: "USA Family Immigration", 
    img: "/page images/familyreunion/usa.webp", 
    desc: "Reunite with your family members in the United States through immediate relative or family preference categories. We assist with petition filing, affidavit of support preparation, document verification, and embassy interview preparation." 
  },
  { 
    name: "Australia Partner & Family Visa", 
    img: "/page images/familyreunion/australia.webp", 
    desc: "Join your partner or family members in Australia with confidence. We provide full assistance with relationship evidence preparation, financial documentation, eligibility checks, and visa application processing for smooth approval." 
  }
];

export default function FamilyReunionPage() {

  return (
    <div className="bg-[#0f1921] min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[40vh] md:min-h-[50vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-4 md:space-y-6 animate-fade-in text-center lg:text-left">
               <div className="space-y-2">
                 <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">Together Again</span>
                 <h1 className="text-4xl md:text-6xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                   Family Reunion Visa <br className="hidden md:block"/> <span className="text-[#d0a850] text-xl">Reunite With Your Loved Ones</span>
                 </h1>
               </div>
               
               <p className="text-base md:text-sm text-white/40 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                 At The Visa Consultancy, we understand how important family is. Our Family Reunion Visa services are designed to help you bring your spouse, children, parents, or dependent family members together in one country legally and smoothly. From sponsorship documentation to embassy submissions, we provide complete guidance to ensure your family reunion visa application is accurate, strong, and professionally handled.
               </p>

               <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-10 py-4 md:py-4 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10">
                   Free Consultation
                 </Link>
               </div>
            </div>

            <div className="flex-1 w-full relative animate-fade-in flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 w-full max-w-md lg:max-w-xl">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl">
                  <Image 
                    src="/page images/family reunion1.webp" 
                    alt="Family Reunion" 
                    width={900} 
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

        {/* 2. REGIONS GRID */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Global Support</span>
               <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase tracking-tight">Explore Our <br className="hidden md:block"/>Reunion Pathways</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Bringing families together with legal precision and compassionate support across the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden">
            {regions.map((region, i) => (
              <StaggerItem 
                key={i} 
                index={i}
                className="group bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="h-48 md:h-64 overflow-hidden relative transition-all duration-700">
                  <Image 
                    src={region.img} 
                    alt={region.name} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1921] to-transparent opacity-40"></div>
                </div>
                <div className="p-8 md:p-10 space-y-4 flex-1">
                  <h3 className="text-white text-base font-bold uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{region.name}</h3>
                  <p className="text-white/30 font-medium leading-relaxed text-sm antialiased">{region.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </section>

        {/* 3. CTA */}
        <ScaleIn className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[40px] p-8 md:p-24 text-center space-y-8 md:space-y-12">
             <div className="space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.3em] mb-4">Start Your Journey</span>
               <h2 className="text-3xl md:text-7xl font-bold text-white heading-serif uppercase tracking-tight leading-tight">Ready to <span className="text-[#d0a850]">Reunite?</span></h2>
             </div>
             <p className="text-base md:text-lg text-white/40 font-medium max-w-2xl mx-auto">
               Your family belongs together. Our expert team is here to handle all the paperwork and legal complexities for you.
             </p>
             <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.2em] hover:bg-white hover:text-black transition-all no-underline inline-block shadow-2xl shadow-[#d0a850]/5">
               Consult An Expert
             </Link>
          </div>
        </ScaleIn>
      </div>
    </div>
  );
}
