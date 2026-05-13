import Image from "next/image";
import Link from "next/link";
import { StaggerItem } from "@/components/MotionWrappers";
import { FaPassport, FaFileAlt, FaStar } from "react-icons/fa";

export const metadata = {
  title: "IELTS Preparation | The Visa Consultancy",
  description: "Prepare for the world's most popular English language proficiency test with expert guidance. Accepted by 11,000+ organizations worldwide.",
};

const sections = [
  { 
    title: "Prerequisites & Registration", 
    icon: <FaPassport />, 
    image: "/page images/language tests images/Ielts/Ielts-1.jpeg",
    items: [
      "Valid Passport (matching registration)", 
      "Official IELTS Portal Booking", 
      "Exam Fee Payment Confirmation"
    ] 
  },
  { 
    title: "Available Test Formats", 
    icon: <FaFileAlt />, 
    image: "/page images/language tests images/Ielts/Ielts-2.jpeg",
    items: [
      "IELTS Academic (for Students)", 
      "IELTS General (for Work/Migration)", 
      "Computer or Paper-Based options"
    ] 
  },
  { 
    title: "Achieve Your Target Band", 
    icon: <FaStar />, 
    image: "/page images/language tests images/Ielts/Ielts-3.jpeg",
    items: [
      "University Band Requirement Analysis", 
      "Professional Preparation Guidance", 
      "Test Booking & Visa Support"
    ] 
  }
];

export default function Ielts() {

  return (
    <div className="bg-[#0f1921] min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[50vh] md:min-h-[60vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto ">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-8 md:space-y-10 animate-fade-in text-center lg:text-left">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">Language Proficiency</span>
                 <h1 className="text-4xl md:text-6xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                   English <br className="hidden md:block"/> <span className="text-[#d0a850]">IELTS Test</span>
                 </h1>
               </div>
               
               <p className="text-base md:text-md text-white/40 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                 For students planning to study, work, or migrate to countries such as the UK, Canada, Australia, and New Zealand, the IELTS test is one of the most recognized English language proficiency exams worldwide.
               </p>

               <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10">
                   Start Preparation
                 </Link>
               </div>
            </div>

            <div className="flex-1 w-full relative animate-fade-in flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 w-full max-w-md lg:max-w-xl">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl">
                  <Image 
                    src="/page images/language-test/ielts.webp" 
                    alt="IELTS Preparation" 
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

        {/* 2. INFO GRID */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Our Services</span>
               <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase tracking-tight">IELTS <br className="hidden md:block"/>Services</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Unlock international opportunities with comprehensive IELTS guidance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden">
            {sections.map((section, i) => (
              <StaggerItem 
                key={i} 
                index={i}
                className="group bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500 overflow-hidden flex flex-col"
              >
                {section.image && (
                  <div className="relative h-auto w-full overflow-hidden border-b border-white/5">
                    <Image 
                      src={section.image}
                      alt={section.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1921]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] text-xl mb-6 md:mb-8 group-hover:bg-[#d0a850] group-hover:text-[#0f1921] transition-all">
                    {section.icon}
                  </div>
                  <h3 className="text-white text-base font-bold mb-6 md:mb-8 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{section.title}</h3>
                  <ul className="space-y-3 md:space-y-4 text-white/30 font-medium list-none p-0">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[13px] md:text-sm">
                        <span className="w-1 h-1 bg-[#d0a850] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </div>
        </section>

        {/* 3. SUPPORT SECTION */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
            <div className="flex-1 space-y-8 md:space-y-12 text-center lg:text-left">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Achieve Your Target Band</span>
                 <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase leading-[1.2] md:leading-[1.1] tracking-tight">Achieve <br className="hidden md:block"/> <span className="text-[#d0a850]">Target Bands</span></h2>
               </div>
               <p className="text-base md:text-md text-white/50 leading-relaxed font-medium">
                 Maximize your chances for top universities and migration goals. We provide expert band requirement analysis, professional preparation guidance, and complete study visa application support.
               </p>
               <div className="pt-4 md:pt-8">
                 <Link href="/contact" className="inline-flex items-center gap-6 group/link no-underline">
                   <span className="text-[#d0a850] font-bold uppercase text-[14px] md:text-sm tracking-[0.4em]">Inquire Free Session</span>
                   <div className="w-12 h-[1px] bg-[#d0a850]/30 group-hover/link:w-20 group-hover:link:bg-[#d0a850] transition-all duration-500"></div>
                 </Link>
               </div>
            </div>
            <div className="flex-1 w-full relative group">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative z-10 transition-all duration-1000">
                <Image 
                  src="/page images/language tests images/Ielts/Ielts-4.jpeg" 
                  alt="IELTS Proficiency" 
                  width={800} 
                  height={500} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. GLOBAL CTA */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[40px] p-8 md:p-24 text-center space-y-8 md:space-y-12">
             <div className="space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.3em] mb-4">Start Your Journey</span>
               <h2 className="text-3xl md:text-7xl font-bold text-white heading-serif uppercase tracking-tight leading-tight">Ready to <span className="text-[#d0a850]">Succeed?</span></h2>
             </div>
             <p className="text-base md:text-lg text-white/40 font-medium max-w-2xl mx-auto">
               Your target band is within reach. Join thousands of successful candidates who trusted us for their IELTS preparation.
             </p>
             <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.2em] hover:bg-white hover:text-black transition-all no-underline inline-block shadow-2xl shadow-[#d0a850]/5">
               Consult An Expert
             </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
