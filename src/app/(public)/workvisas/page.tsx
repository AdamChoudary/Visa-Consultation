import Link from "next/link";

export const metadata = {
  title: "Work Visas | The Visa Consultancy",
};

export default function Workvisas() {
  const jobs = [
    { name: "Dubai", img: "/images/DubaiWorkVisa.jpg", desc: "Secure employment in Dubai with employer sponsorship and labor contract verification." },
    { name: "United Kingdom", img: "/images/UKWorkVisa.jpg", desc: "Explore career opportunities in the UK with points-based eligibility assessment." },
    { name: "USA", img: "/images/USAWorkVisa.jpg", desc: "Obtain employment authorization for H-1B, L-1, and other US work visas." },
    { name: "Canada", img: "/images/CanadaWorkVisa.jpg", desc: "Start your journey in Canada with expert LMIA and visa application support." }
  ];

  return (
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-8 animate-fade-in">
             <h1 className="text-4xl md:text-7xl font-black text-white leading-tight heading-serif uppercase">
              Work Visa <br/>
              <span className="text-[#d0a850]">Advance Your Career</span>
             </h1>
             <p className="text-xl text-gray-300 leading-relaxed font-medium">
               Whether it's a corporate job or a business startup, we provide the gateway to your professional goals. 
               Our team handles PR and TR permits with expert care.
             </p>
             <Link href="/contact" className="btn-gold">Free Consultation</Link>
          </div>
          <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d0a850]/20 blur-3xl group-hover:bg-[#d0a850]/30 transition-all duration-700"></div>
              <img src="/images/workvisa.png" alt="Work Visa" className="relative z-10 w-full rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Work Grid */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="section-title uppercase tracking-[0.2em] font-black">Global Career Paths</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobs.map((job, i) => (
              <div key={i} className="visa-card !bg-white/5 !text-white border border-white/10 hover:border-[#d0a850]/50 group overflow-hidden">
                <div className="h-48 overflow-hidden rounded-t-xl mb-6">
                  <img src={job.img} alt={job.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-widest px-6">{job.name}</h3>
                <p className="text-gray-400 font-medium leading-relaxed px-6 mb-8">{job.desc}</p>
                <div className="px-6 pb-8">
                  <Link href="/contact" className="text-[#d0a850] font-black uppercase text-xs tracking-widest border-b border-[#d0a850] pb-1 no-underline hover:text-white hover:border-white transition-all">Apply Now</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Support */}
        <section className="py-32 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-black text-[#d0a850] uppercase tracking-widest">Professional Pathways</h2>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                We guide you through employer requirements, medical assessments, and embassy submissions to ensure a successful work permit process.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Employer Sponsorship", "LMIA Documentation", "Contract Verification", "Points-Based Assessment"
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-sm uppercase tracking-widest">
                    <i className="fas fa-check-circle text-[#d0a850] mr-2"></i> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[40px] overflow-hidden border-2 border-[#d0a850]/30 shadow-2xl order-1 lg:order-2">
              <img src="/images/CanadaWorkVisa.jpg" alt="Professional" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
