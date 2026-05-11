import Link from "next/link";
import { StaggerItem, ScaleIn } from "@/components/MotionWrappers";
import { FaUserGraduate, FaBriefcase, FaPassport, FaPlane } from "react-icons/fa";

export const metadata = {
  title: "Clients | The Visa Consultancy",
  description: "Read about our success stories and milestones in helping students, professionals, and families achieve their international goals.",
};

const successes = [
  {
    title: "Student Visa Success",
    desc: "Successfully assisted hundreds of students in securing admissions and visas for top-tier universities in the UK, Canada, Australia, and Europe.",
    icon: <FaUserGraduate />
  },
  {
    title: "Work Permit Approvals",
    desc: "Guided skilled professionals across engineering, healthcare, and IT sectors in obtaining overseas employment visas and employer-sponsored work permits.",
    icon: <FaBriefcase />
  },
  {
    title: "Immigration & PR",
    desc: "Helped families and individuals achieve permanent residency and settlement abroad with transparent documentation and points-based assessment support.",
    icon: <FaPassport />
  },
  {
    title: "Visit Visa Solutions",
    desc: "High success rate in securing visit visas for leisure, business, and family reunification in Schengen countries, USA, and UK.",
    icon: <FaPlane />
  }
];

export default function Clients() {

  return (
    <div className="bg-[#0f1921] min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[30vh] md:min-h-[40vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="w-full text-center space-y-8 md:space-y-10 animate-fade-in">
             <div className="space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">Proven Results</span>
               <h1 className="text-4xl md:text-8xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                 Success <br className="hidden md:block"/> <span className="text-[#d0a850]">Stories</span>
               </h1>
             </div>
             <p className="text-base md:text-xl text-white/40 leading-relaxed font-medium max-w-3xl mx-auto">
               Transforming dreams into reality. We take pride in the thousands of success stories of our clients who are now thriving globally.
             </p>
          </div>
        </section>

        {/* 2. SUCCESS GRID */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Our Impact</span>
               <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase tracking-tight">Milestones <br className="hidden md:block"/>of Success</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Our commitment to excellence reflected in every successful visa approval and international transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden">
            {successes.map((item, i) => (
              <StaggerItem 
                key={i} 
                index={i}
                className="group p-8 md:p-12 bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] text-3xl mb-8 md:mb-10 group-hover:bg-[#d0a850] group-hover:text-[#0f1921] transition-all">
                  {item.icon}
                </div>
                <h3 className="text-white text-base md:text-lg font-bold mb-6 md:mb-8 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{item.title}</h3>
                <p className="text-white/30 font-medium leading-relaxed text-sm md:text-base antialiased">
                  {item.desc}
                </p>
              </StaggerItem>
            ))}
          </div>
        </section>

        {/* 3. CTA */}
        <ScaleIn className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
           <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[40px] p-8 md:p-24 text-center space-y-8 md:space-y-12">
              <div className="space-y-4">
                <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">The Next Chapter</span>
                <h2 className="text-3xl md:text-7xl font-bold text-white heading-serif uppercase tracking-tight leading-tight">Be Our Next <br className="hidden md:block"/> <span className="text-[#d0a850]">Success Story</span></h2>
              </div>
              <p className="text-base md:text-xl text-white/40 font-medium max-w-2xl mx-auto">
                Join the ranks of successful global citizens. Apply today and let us guide you every step of the way towards your international future.
              </p>
              <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline inline-block shadow-2xl shadow-[#d0a850]/5">
                Start Your Application
              </Link>
           </div>
        </ScaleIn>
      </div>
    </div>
  );
}
