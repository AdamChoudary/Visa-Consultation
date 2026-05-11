import Image from "next/image";
import Link from "next/link";
import { StaggerItem, FadeIn } from "@/components/MotionWrappers";
import { FaUniversity, FaFileInvoice, FaCoins, FaUserCheck } from "react-icons/fa";

export const metadata = {
  title: "Student Visa | The Visa Consultancy",
  description: "Your gateway to international education. Expert guidance for student visas in the UK, USA, Canada, Germany, Australia, and more.",
};

const regions = [
  { 
    name: "United Kingdom", 
    title: "British Excellence", 
    desc: "Access world-class education at prestigious UK universities. We handle your CAS, financial evidence, and embassy submission with precision.", 
    img: "/page images/studentvisa/uk.webp" 
  },
  { 
    name: "USA", 
    title: "American Dream", 
    desc: "Explore endless opportunities at top-tier American universities. Comprehensive support for I-20, SEVIS, and F-1 visa interviews.", 
    img: "/page images/studentvisa/usa.webp" 
  },
  { 
    name: "Canada", 
    title: "The Great North", 
    desc: "Benefit from a world-class education system and post-graduation work opportunities. Expert guidance for study permits and provincial certifications.", 
    img: "/page images/studentvisa/canada.webp" 
  },
  { 
    name: "Germany", 
    title: "Engineering Mastery", 
    desc: "Study at renowned technical universities with affordable tuition. We assist with APS certification, blocked accounts, and visa documentation.", 
    img: "/page images/studentvisa/germany.webp" 
  },
  { 
    name: "France", 
    title: "Cultural Hub", 
    desc: "Experience academic excellence in the heart of Europe. Support for Campus France procedures and long-stay student visa applications.", 
    img: "/page images/studentvisa/france.webp" 
  },
  { 
    name: "Italy", 
    title: "Art & Heritage", 
    desc: "Pursue degrees in art, fashion, and technology at historic institutions. Assistance with Universitaly registration and pre-enrollment.", 
    img: "/page images/studentvisa/italy.webp" 
  },
  { 
    name: "Spain", 
    title: "Mediterranean Spark", 
    desc: "Vibrant campus life and prestigious business schools. Complete guidance for NIE, financial proof, and health insurance requirements.", 
    img: "/page images/studentvisa/spain.webp" 
  },
  { 
    name: "Portugal", 
    title: "Atlantic Gateway", 
    desc: "High-quality education with a welcoming atmosphere. Support for university admissions and D4/D5 student visa processes.", 
    img: "/page images/studentvisa/portugal.webp" 
  },
  { 
    name: "Sweden", 
    title: "Innovation Leader", 
    desc: "Focus on sustainability and creative thinking at top Nordic universities. Guidance for residence permits and tuition fee structures.", 
    img: "/page images/studentvisa/sweden.webp" 
  },
  { 
    name: "Finland", 
    title: "Northern Lights", 
    desc: "Study in the world's happiest country with an innovative education system. Expert help for residence permits and scholarship applications.", 
    img: "/page images/studentvisa/finland.webp" 
  },
  { 
    name: "Lithuania", 
    title: "European Gem", 
    desc: "Modern education at an affordable cost in a safe, growing economy. Comprehensive support for TRP and university enrollment.", 
    img: "/page images/studentvisa/lithuania.webp" 
  },
  { 
    name: "Australia", 
    title: "The Southern Cross", 
    desc: "Experience a world-class lifestyle and academic excellence. Expert guidance for GTE, SOP preparation, and financial proof requirements.", 
    img: "/page images/studentvisa/australia.webp" 
  }
];

const consultancyServices = [
  { t: "Free Educational Counselling & Guidance", d: "Personalized counselling to help students choose the best country based on academic background, career goals, and future opportunities.", i: <FaUniversity /> },
  { t: "Selection of Universities & Courses", d: "Assistance in selecting accredited and internationally recognized universities. Authentication and verification through trusted platforms.", i: <FaUniversity /> },
  { t: "Exam & Interview Preparation", d: "Professional coaching for university entry tests, screening tests, and language exams (IELTS/TOEFL). Guidance on scholarships and fee discounts.", i: <FaUserCheck /> },
  { t: "Digital University Access & Fee Assistance", d: "Direct digital access to universities and sponsors offering fee waivers. Selection of affordable programs with high academic standards.", i: <FaCoins /> },
  { t: "Clear Documentation Services", d: "Complete support in documentation processing including attestation, verification, and legalization of academic and official documents.", i: <FaFileInvoice /> },
  { t: "Settlement & Accommodation Support", d: "Assistance in securing university dormitories and private accommodations to ensure a smooth and comfortable transition.", i: <FaUserCheck /> }
];

export default function StudentVisaPage() {

  return (
    <div className="bg-[#0f1921] min-h-screen pt-8 md:pt-16 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[50vh] md:min-h-[60vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-8 md:space-y-10 animate-fade-in text-center lg:text-left">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">Academic Excellence</span>
                 <h1 className="text-4xl md:text-8xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                   Student Visa <br className="hidden md:block"/> <span className="text-[#d0a850]">Global Future</span> <br className="hidden md:block"/> Starts Here
                 </h1>
               </div>
               
               <p className="text-base md:text-xl text-white/40 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                 Start your global education journey with our digitally market-embedded visa options and solutions. From the Arab world to Europe, United Kingdom, and Australia to America and Canada, the opportunity to reach your destination will be assisted by our company representatives with responsibility and trust. From documentation to final approval, we simplify the entire visa process and ensure you move forward with confidence.
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
                    src="/page images/study1.webp" 
                    alt="Student Visa" 
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

        {/* 2. SERVICES GRID */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Our Services</span>
               <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase tracking-tight">Our Educational <br className="hidden md:block"/>Consultancy Services</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Tailored solutions for every student's unique journey towards international education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden">
            {consultancyServices.map((service, i) => (
              <StaggerItem 
                key={i} 
                index={i}
                className="group p-8 md:p-12 bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] text-xl mb-6 md:mb-8 group-hover:bg-[#d0a850] group-hover:text-[#0f1921] transition-all">
                  {service.i}
                </div>
                <h3 className="text-white text-base font-bold mb-4 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{service.t}</h3>
                <p className="text-white/30 font-medium leading-relaxed text-[13px] md:text-sm antialiased">{service.d}</p>
              </StaggerItem>
            ))}
          </div>
        </section>

        {/* 3. REGIONAL CONTENT */}
        {regions.map((region, i) => (
          <FadeIn 
            key={i} 
            y={40}
            className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto"
          >
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
                    height={600} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
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
