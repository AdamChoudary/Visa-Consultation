import { type Faq } from "@/components/FaqSection";

export interface Region {
  name: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
}

export const regions: Region[] = [
  { name: "United Kingdom", slug: "uk", title: "British Excellence", desc: "Access world-class education at prestigious UK universities. We handle your CAS, financial evidence, and embassy submission with precision.", img: "/page images/studentvisa/uk.webp" },
  { name: "USA", slug: "usa", title: "American Dream", desc: "Explore endless opportunities at top-tier American universities. Comprehensive support for I-20, SEVIS, and F-1 visa interviews.", img: "/page images/studentvisa/usa.webp" },
  { name: "Canada", slug: "canada", title: "The Great North", desc: "Benefit from a world-class education system and post-graduation work opportunities. Expert guidance for study permits and provincial certifications.", img: "/page images/studentvisa/canada.webp" },
  { name: "Germany", slug: "germany", title: "Engineering Mastery", desc: "Study at renowned technical universities with affordable tuition. We assist with APS certification, blocked accounts, and visa documentation.", img: "/page images/studentvisa/germany.webp" },
  { name: "France", slug: "france", title: "Cultural Hub", desc: "Experience academic excellence in the heart of Europe. Support for Campus France procedures and long-stay student visa applications.", img: "/page images/studentvisa/france.webp" },
  { name: "Italy", slug: "italy", title: "Art & Heritage", desc: "Pursue degrees in art, fashion, and technology at historic institutions. Assistance with Universitaly registration and pre-enrollment.", img: "/page images/studentvisa/italy.webp" },
  { name: "Spain", slug: "spain", title: "Mediterranean Spark", desc: "Vibrant campus life and prestigious business schools. Complete guidance for NIE, financial proof, and health insurance requirements.", img: "/page images/studentvisa/spain.webp" },
  { name: "Portugal", slug: "portugal", title: "Atlantic Gateway", desc: "High-quality education with a welcoming atmosphere. Support for university admissions and D4/D5 student visa processes.", img: "/page images/studentvisa/portugal.webp" },
  { name: "Sweden", slug: "sweden", title: "Innovation Leader", desc: "Focus on sustainability and creative thinking at top Nordic universities. Guidance for residence permits and tuition fee structures.", img: "/page images/studentvisa/sweden.webp" },
  { name: "Finland", slug: "finland", title: "Northern Lights", desc: "Study in the world's happiest country with an innovative education system. Expert help for residence permits and scholarship applications.", img: "/page images/studentvisa/finland.webp" },
  { name: "Lithuania", slug: "lithuania", title: "European Gem", desc: "Modern education at an affordable cost in a safe, growing economy. Comprehensive support for TRP and university enrollment.", img: "/page images/studentvisa/lithuania.webp" },
  { name: "Australia", slug: "australia", title: "The Southern Cross", desc: "Experience a world-class lifestyle and academic excellence. Expert guidance for GTE, SOP preparation, and financial proof requirements.", img: "/page images/studentvisa/australia.webp" },
  { name: "Ireland", slug: "ireland", title: "Emerald Gateway", desc: "Home to top-ranked universities and a thriving tech industry. Automatic 2-year post-study work visa for Master's graduates with fast-track PR options.", img: "/page images/studentvisa/ireland study.jpg" },
  { name: "Malta", slug: "malta", title: "Island Education", desc: "Study in a bilingual English-speaking nation with EU-recognized qualifications. Affordable tuition in tourism, business, IT, and game design.", img: "/page images/studentvisa/malta study.jpg" },
  { name: "Switzerland", slug: "switzerland", title: "Alpine Precision", desc: "World-class education renowned for academic rigor and hospitality management. Competitive admissions with exceptional quality of life and global career prospects.", img: "/page images/studentvisa/switzerland study.jpg" },
  { name: "Hungary", slug: "hungary", title: "Central Heart", desc: "A historic European center of learning with world-renowned medical programs. Affordable tuition in medicine, IT, and business with a 9-month job search permit.", img: "/page images/studentvisa/hungray study.jpg" },
  { name: "Croatia", slug: "croatia", title: "Adriatic Pearl", desc: "Experience quality European education on the stunning Adriatic coast. Specialized Bachelor's programs with clear pathways to permanent residency.", img: "/page images/studentvisa/croatia study.jpg" },
  { name: "Albania", slug: "albania", title: "Balkan Opportunity", desc: "Europe's most affordable study destination with English-taught programs in business, IT, medicine, and engineering. Streamlined visa process with minimal requirements.", img: "/page images/studentvisa/albania study.jpg" },
  { name: "Turkey", slug: "turkey", title: "Eurasian Crossroads", desc: "Study at the intersection of continents with highly flexible admissions. Many universities accept MOI letters and offer world-class programs at affordable rates.", img: "/page images/studentvisa/turkey study.jpg" },
  { name: "Malaysia", slug: "malaysia", title: "Asian Hub", desc: "Quality education at competitive costs with unique twinning programs. Start your degree in Malaysia and transfer to partner universities in the UK, Australia, or Europe.", img: "/page images/studentvisa/malaysia study.jpg" },
  { name: "Thailand", slug: "thailand", title: "Land of Smiles", desc: "Flexible admissions and welcoming culture make Thailand an accessible study destination. Affordable programs with globally recognized qualifications.", img: "/page images/studentvisa/thailand study.jpg" },
  { name: "New Zealand", slug: "new-zealand", title: "Pacific Paradise", desc: "World-class education in a pristine natural environment. Automatic 3-year post-study work visa for Master's and PhD graduates with clear PR pathways.", img: "/page images/studentvisa/new zealand study.jpg" },
];

export const countryFaqs: Record<string, Faq[]> = {
  "United Kingdom": [
    { question: "Eligibility: What are the English language requirements?", answer: "IELTS (6.0-6.5), PTE, MOI letters, or university-approved alternatives are accepted." },
    { question: "Admissions: Can I enter a Bachelor's directly after HSSC?", answer: "HSSC typically requires a Foundation Year. Direct entry is possible with A-Levels, IB, or equivalent qualifications." },
    { question: "Post-Study Work: What is the Graduate Route Visa?", answer: "It allows international graduates to stay and work in the UK at any skill level for 2 years (3 years for PhDs)." },
  ],
  Ireland: [
    { question: "What English proficiency tests are accepted?", answer: "IELTS, PTE, TOEFL iBT, and Duolingo are commonly accepted." },
    { question: "What is the Stamp 1G Visa?", answer: "It is an automatic 2-year Post-Study Work Visa granted to Master's (Level 9) graduates to find full-time, unrestricted employment." },
    { question: "How does the Critical Skills Employment Permit work?", answer: "Once a degree-related job meeting salary thresholds is secured, graduates switch to this permit, offering a fast track to PR in just 2 years." },
  ],
  Germany: [
    { question: "Eligibility: What are the core requirements for a Master's degree?", answer: "A relevant Bachelor's degree with 60%-70% marks. English proficiency (IELTS/TOEFL) is usually required, though some universities accept a Medium of Instruction (MOI) letter." },
    { question: "Admissions: Are academic gaps acceptable?", answer: "Yes, provided they are properly justified with relevant professional experience." },
    { question: "Post-Study Work: Can I stay after graduation to find a job?", answer: "Graduates can apply for an 18-month Job Search Visa. Finding degree-related work allows you to switch to an EU Blue Card or work permit." },
  ],
  France: [
    { question: "Eligibility: What are the entry requirements for degree programs?", answer: "Bachelor's programs require a passing HSSC. Master's programs prefer a recognized Bachelor's with 55%-60%+. MOI is widely accepted by private institutions." },
    { question: "Admissions: Is an embassy interview mandatory?", answer: "While the Campus France procedure is standard, many study routes do not require a direct embassy interview." },
    { question: "Post-Study Work: What are the post-graduation work options?", answer: "Master's graduates qualify for the APS Visa, a 12-month Job Search Visa allowing full-time work without hourly limits." },
  ],
  Malta: [
    { question: "Eligibility: What are the standard academic criteria?", answer: "Bachelor's need 50%-60% in HSSC; Master's require 50% in a Bachelor's degree. MOI is widely accepted in place of IELTS." },
    { question: "Academics: What are the most popular English-taught courses?", answer: "High-demand courses include Tourism & Hospitality, Business Administration (BBA/MBA), IT, and Game Design." },
    { question: "Post-Study Work: Is there a post-study work extension?", answer: "Yes, graduates can extend their stay for up to 9 months specifically to seek employment related to their studies." },
  ],
  Malaysia: [
    { question: "Eligibility: Can I apply right after Matric (SSC/O-Levels)?", answer: "Yes, applicants with 50%-60% aggregate can apply for 1-Year Foundation or 2 to 2.5-Year Diploma programs." },
    { question: "Academics: What are Twinning Programs?", answer: "These allow students to start their degree in Malaysia and transfer to partner universities in the UK, Australia, or Europe to graduate." },
    { question: "Work Rights: Can international students work part-time?", answer: "Students can work up to 20 hours per week, but strictly during semester breaks or holidays longer than 7 days (subject to approval)." },
  ],
  Thailand: [
    { question: "Admissions: Are academic gaps or age limits strict?", answer: "No, Thailand offers significant flexibility regarding both academic gaps and age limits compared to Western destinations." },
    { question: "Eligibility: What are the academic requirements?", answer: "Generally, 50%+ in HSSC for Bachelor's programs and a minimum 50% in a Bachelor's degree for Master's programs." },
    { question: "Work Rights: Are there visas for remote workers?", answer: "Yes, the Destination Thailand Visa (DTV) allows a 5-year stay for digital nomads and remote workers employed by international companies." },
  ],
  Albania: [
    { question: "Eligibility: What are the academic and language requirements?", answer: "50%+ in HSSC for Bachelor's and 50%+ in a Bachelor's degree for Master's. MOI is widely accepted instead of IELTS." },
    { question: "Academics: Which programs are primarily taught in English?", answer: "Business Administration, Computer Science, Software Engineering, Architecture, Medicine, and Dentistry." },
    { question: "Post-Study Work: How do I transition to a work permit?", answer: "Graduates who secure a full-time employment contract can convert their student residence permit into a standard work permit." },
  ],
  Turkey: [
    { question: "Eligibility: Is IELTS mandatory to study in Turkey?", answer: "No, many private universities accept MOI letters, often waiving the IELTS requirement." },
    { question: "Admissions: Are academic gaps acceptable?", answer: "Yes, academic gaps are highly flexible. Ideal age limits for optimal visa chances are under 30 for Undergraduates and under 35 for Postgraduates." },
    { question: "Post-Study Work: What are the options after graduation?", answer: "Graduates can apply for a short-term residence permit (usually up to 1 year) to look for employment or start a business." },
  ],
  Croatia: [
    { question: "Academics: Are Master's programs readily available?", answer: "Options are limited for international students; the primary focus is on 3-year Bachelor's programs." },
    { question: "Eligibility: How do I get Direct Entry into a Bachelor's?", answer: "You need 60% in HSSC plus 1 year of a Bachelor's, OR Level 4 & 5 Extended Diplomas. MOI is often accepted." },
    { question: "Post-Study Work: Is there a pathway to Permanent Residence (PR)?", answer: "Yes, after 5 years of continuous, legal residence on a work permit (while paying taxes), graduates can apply for PR." },
  ],
  Switzerland: [
    { question: "Eligibility: How competitive are the academic and English requirements?", answer: "Highly competitive. Master's programs require 65%-75% or a 3.0/4.0 CGPA. English-taught programs demand IELTS 6.5-7.0 or TOEFL iBT 90-100." },
    { question: "Admissions: How are academic gaps viewed?", answer: "They are strictly scrutinized and must be justified with strong professional experience. Traditional student profiles are heavily preferred." },
    { question: "Post-Study Work: Is there a visa for job searching?", answer: "Non-EU graduates can apply for a strict 6-month extension to search for full-time employment." },
  ],
  Hungary: [
    { question: "Eligibility: Can I apply without IELTS?", answer: "Yes, if you meet academic criteria (60% Bachelor's, 50% Master's) and your previous MOI was English. Otherwise, an IELTS 6.0 is mandatory." },
    { question: "Academics: What fields of study are in high demand?", answer: "Medicine & Surgery, Dentistry, Pharmacy, Computer Science/IT, and Business Administration." },
    { question: "Post-Study Work: What is the Study-to-Work permit?", answer: "A 9-month residence permit allowing graduates to stay in Hungary to seek employment or start a business." },
  ],
  "New Zealand": [
    { question: "Eligibility: Is an English language test required?", answer: "Yes, it is mandatory. IELTS, PTE, Cambridge (C1), and TOEFL iBT are accepted." },
    { question: "Admissions: Can I bring dependents?", answer: "Yes, dependent visas are permitted for eligible student categories (like Master's or PhD students)." },
    { question: "Post-Study Work: What are the post-graduation opportunities?", answer: "Master's and PhD graduates automatically qualify for a 3-year Post-Study Work Visa. Pathways to PR exist via a 6-Point System or 'Green List' roles." },
  ],
  Lithuania: [
    { question: "Admissions: What are the age limits for applicants?", answer: "Typically, up to 25 years old for Bachelor's and up to 35 years old for Master's programs." },
    { question: "Admissions: What is a TRP?", answer: "A Temporary Residence Permit (TRP), which is issued for the full duration of your study program." },
    { question: "Post-Study Work: Is there a Job Search Visa?", answer: "Graduates are eligible for a 15-month Job Search TRP to look for employment or establish a business." },
  ],
  Italy: [
    { question: "Eligibility: What ensures a strong admission and visa profile?", answer: "A minimum of 60% marks in intermediate alongside an IELTS 6.0 (B2 Level) significantly boosts success rates." },
    { question: "Academics: Are there scholarships available?", answer: "Yes, fully funded regional scholarships cover tuition, living expenses, and provide an annual stipend (e.g., €8,400) for daily costs." },
    { question: "Post-Study Work: Can I stay to find a job?", answer: "Graduates can apply for a 1-year Post-Study Work Visa to search for work." },
  ],
};
