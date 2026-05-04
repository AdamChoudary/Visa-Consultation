import Link from "next/link";

export const metadata = {
  title: "Clients | The Visa Consultancy",
};

export default function Clients() {
  const successes = [
    {
      title: "Student Visa Success",
      desc: "Successfully assisted hundreds of students in securing admissions and visas for top-tier universities in the UK, Canada, Australia, and Europe.",
      icon: "fa-user-graduate"
    },
    {
      title: "Work Permit Approvals",
      desc: "Guided skilled professionals across engineering, healthcare, and IT sectors in obtaining overseas employment visas and employer-sponsored work permits.",
      icon: "fa-briefcase"
    },
    {
      title: "Immigration & PR",
      desc: "Helped families and individuals achieve permanent residency and settlement abroad with transparent documentation and points-based assessment support.",
      icon: "fa-passport"
    },
    {
      title: "Visit Visa Solutions",
      desc: "High success rate in securing visit visas for leisure, business, and family reunification in Schengen countries, USA, and UK.",
      icon: "fa-plane"
    }
  ];

  return (
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="section-title uppercase tracking-[0.2em] font-black">Our Successful Clients</h2>
          <p className="text-gray-400 mt-6 leading-relaxed font-medium max-w-3xl mx-auto uppercase">
            Transforming dreams into reality. We take pride in the success stories of our clients who are now thriving globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {successes.map((item, i) => (
            <div key={i} className="visa-card !bg-white/5 !text-white border border-white/10 p-12 text-left !items-start hover:border-[#d0a850]/50 transition-all duration-500">
              <div className="w-20 h-20 rounded-2xl bg-[#d0a850]/10 flex items-center justify-center text-4xl text-[#d0a850] mb-8 border border-[#d0a850]/20">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3 className="text-[#d0a850] text-2xl font-bold mb-6 uppercase tracking-widest">{item.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center bg-gradient-to-r from-transparent via-[#d0a850]/5 to-transparent p-20 rounded-[50px] border border-white/5">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-10">Be Our Next Success Story</h2>
          <Link href="/contact" className="btn-gold !px-16 !py-6 !text-xl shadow-[0_20px_50px_rgba(208,168,80,0.3)]">Apply Now</Link>
        </div>
      </div>
    </div>
  );
}
