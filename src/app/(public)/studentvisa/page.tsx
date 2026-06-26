import Image from "next/image";
import Link from "next/link";
import { StaggerItem, FadeIn } from "@/components/MotionWrappers";
import { FaUniversity, FaFileInvoice, FaCoins, FaUserCheck } from "react-icons/fa";

import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import FaqSection, { type Faq } from "@/components/FaqSection";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { regions, countryFaqs } from "@/data/student-visa";

const PAGE_DESCRIPTION =
  "Your gateway to international education. Expert guidance for student visas in the UK, USA, Canada, Germany, Australia, and more.";

const FAQS: Faq[] = [
  {
    question: "Which countries do you offer student visa services for?",
    answer:
      "We assist with student visas for the United Kingdom, USA, Canada, Germany, France, Australia and other popular study destinations, guiding you through each country's specific requirements.",
  },
  {
    question: "What documents are required for a student visa?",
    answer:
      "Requirements vary by country but typically include a valid passport, your admission or offer letter (such as a CAS or I-20), proof of funds, academic transcripts, an English proficiency test result, and a statement of purpose. We review and prepare a complete, embassy-ready file for your destination.",
  },
  {
    question: "Do you help with university admission as well as the visa?",
    answer:
      "Yes. We support you from admission and offer-letter stages (CAS, I-20, study permit documentation) through financial evidence preparation and final embassy submission.",
  },
  {
    question: "Is an English language test required for a student visa?",
    answer:
      "Most universities and embassies require proof of English through IELTS, PTE, TOEFL or the Duolingo English Test. Some destinations, such as Germany, may also require additional certifications like APS. We advise you based on your chosen country.",
  },
  {
    question: "How long does the student visa process take?",
    answer:
      "Processing times vary by country, university intake and season. We help you start early and submit an accurate application so you can meet your intake deadlines comfortably.",
  },
];

export const metadata = buildMetadata({
  title: "Student Visa & Study Abroad Consultant",
  path: "/studentvisa",
  description: "Expert student visa consultancy from Islamabad, Pakistan. We handle UK student visas (CAS), USA F-1 visas, Canada study permits, and Australia student visas — with full admission support, document preparation, and embassy submission. Trusted visa consultancy with high success rates.",
  keywords: [
    "student visa",
    "student visa Pakistan",
    "student visa consultant Islamabad",
    "study abroad consultant Pakistan",
    "UK student visa consultant",
    "UK study visa Pakistan",
    "Canada study permit Pakistan",
    "USA student visa F-1",
    "Australia student visa consultant",
    "Germany student visa Pakistan",
    "France student visa Pakistan",
    "Italy student visa Pakistan",
    "Ireland student visa",
    "Switzerland student visa",
    "Hungary student visa",
    "New Zealand student visa",
    "Malta student visa",
    "Turkey student visa",
    "Malaysia student visa",
    "Thailand student visa",
    "Croatia student visa",
    "Albania student visa",
    "study visa consultant Islamabad",
    "international student visa",
    "student visa application Pakistan",
    "student visa consultancy",
  ],
});

const consultancyServices = [
  { t: "Free Educational Counselling & Guidance", d: "Personalized counselling to help students choose the best country based on academic background, career goals, and future opportunities.", i: <FaUniversity /> },
  { t: "Selection of Universities & Courses", d: "Assistance in selecting accredited and internationally recognized universities. Authentication and verification through trusted platforms.", i: <FaUniversity /> },
  { t: "Exam & Interview Preparation", d: "Professional coaching for university entry tests, screening tests, and language exams (IELTS/TOEFL). Guidance on scholarships and fee discounts.", i: <FaUserCheck /> },
  { t: "Digital University Access & Fee Assistance", d: "Direct digital access to universities and sponsors offering fee waivers. Selection of affordable programs with high academic standards.", i: <FaCoins /> },
  { t: "Clear Documentation Services", d: "Complete support in documentation processing including attestation, verification, and legalization of academic and official documents.", i: <FaFileInvoice /> },
  { t: "Settlement & Accommodation Support", d: "Assistance in securing university dormitories and private accommodations to ensure a smooth and comfortable transition.", i: <FaUserCheck /> }
];

const allCountryFaqs = Object.values(countryFaqs).flat();

export default function StudentVisaPage() {

  return (
    <div className="bg-[#0f1921] min-h-screen pt-8 md:pt-16 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <JsonLd
        data={[
          serviceSchema({
            name: "Student Visa Services",
            description: PAGE_DESCRIPTION,
            path: "/studentvisa",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Student Visa", path: "/studentvisa" },
          ]),
          faqSchema([...FAQS, ...allCountryFaqs]),
        ]}
      />
      <div className="container mx-auto px-4 md:px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[50vh] md:min-h-[60vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 pt-12 ">
            <div className="flex-1 space-y-8  animate-fade-in text-center lg:text-left">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">Academic Excellence</span>
                 <h1 className="text-4xl md:text-6xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                   Student Visa <br className="hidden md:block"/> <span className="text-[#d0a850]">Global Future</span> <br className="hidden md:block"/> Starts Here
                 </h1>
               </div>
               
               <p className="text-base md:text-md text-white/40 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                 Start your global education journey with our digitally market-embedded visa options and solutions. From the Arab world to Europe, United Kingdom, and Australia to America and Canada, the opportunity to reach your destination will be assisted by our company representatives with responsibility and trust. From documentation to final approval, we simplify the entire visa process and ensure you move forward with confidence.
               </p>

               <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10">
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
                  {countryFaqs[region.name] && (
                    <div className="space-y-3 pt-2">
                      <p className="text-[#d0a850] text-[11px] uppercase tracking-[0.4em] font-bold text-left">Country FAQ</p>
                      {countryFaqs[region.name].map((faq, idx) => (
                        <details
                          key={idx}
                          className="group rounded-xl border border-white/10 bg-[#16222c]/40 px-5 py-4 transition-colors hover:border-[#d0a850]/30 open:border-[#d0a850]/40"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm md:text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                            {faq.question}
                            <span className="shrink-0 text-[#d0a850] text-xl leading-none transition-transform duration-300 group-open:rotate-45">+</span>
                          </summary>
                          <p className="mt-3 text-gray-400 leading-[1.8] text-[14px] font-medium">{faq.answer}</p>
                        </details>
                      ))}
                    </div>
                  )}
                  <div className="pt-4 md:pt-8">
                    <Link href={`/studentvisa/${region.slug}`} className="inline-flex items-center gap-6 group/link no-underline">
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

        <FaqSection faqs={FAQS} />
      </div>
    </div>
  );
}
