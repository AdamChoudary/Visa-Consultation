import Link from "next/link";

export const metadata = {
  title: "Student Visa | The Visa Consultancy",
};

export default function Studentvisa() {
  return (
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-8 animate-fade-in">
             <h1 className="text-4xl md:text-7xl font-black text-white leading-tight heading-serif uppercase">
              Student Visa <br/>
              <span className="text-[#d0a850]">Global Future</span>
             </h1>
             <p className="text-xl text-gray-300 leading-relaxed font-medium">
               Start your global education journey with our digitally market-embedded visa options and solutions. 
               From the Arab world to Europe, UK, Australia, America, and Canada, your opportunity to reach your destination is our priority.
             </p>
             <Link href="/contact" className="btn-gold">Get Free Consultation</Link>
          </div>
          <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d0a850]/20 blur-3xl group-hover:bg-[#d0a850]/30 transition-all duration-700"></div>
              <img src="/images/StudntVisaHero.png" alt="Student Visa" className="relative z-10 w-full rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-24 border-t border-white/5">
          <h2 className="section-title uppercase tracking-[0.2em] font-black mb-20">Our Educational Consultancy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { t: "Free Counselling", d: "Personalized guidance to help students choose the best country based on academic background and career goals." },
              { t: "University Selection", d: "Assistance in selecting accredited and internationally recognized universities worldwide." },
              { t: "Exam Preparation", d: "Professional coaching for IELTS, TOEFL, and university screening tests." },
              { t: "Digital Access", d: "Direct digital access to universities and sponsors offering fee waivers and scholarships." },
              { t: "Clear Documentation", d: "Complete support in attestation, verification, and legalization of academic documents." },
              { t: "Settlement Support", d: "Assistance in securing university dormitories and private accommodations for a smooth transition." }
            ].map((item, i) => (
              <div key={i} className="visa-card !bg-white/5 !text-white border border-white/10 hover:border-[#d0a850]/50">
                <div className="w-16 h-16 rounded-xl bg-[#d0a850]/10 flex items-center justify-center text-3xl text-[#d0a850] mb-6">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-widest">{item.t}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Section */}
        <section className="py-32 border-t border-white/5">
          <div className="space-y-32">
            {/* UK */}
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1 rounded-3xl overflow-hidden border-2 border-[#d0a850]/30 shadow-2xl">
                <img src="/images/StudentVisaUK.jpeg" alt="UK Student Visa" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-[#d0a850] uppercase tracking-widest">UK Student Visa</h2>
                <p className="text-xl text-gray-300 leading-relaxed font-medium">
                  Expert guidance for studying in the United Kingdom. We assist with university selection, CAS processing, financial documentation, SOP preparation, and complete visa filing support.
                </p>
                <Link href="/contact" className="btn-gold">Apply Now</Link>
              </div>
            </div>

            {/* Australia */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <div className="flex-1 rounded-3xl overflow-hidden border-2 border-[#d0a850]/30 shadow-2xl">
                <img src="/images/StudentVisaAustralia.jpg" alt="Australia Student Visa" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-8 text-right lg:text-left">
                <h2 className="text-4xl md:text-5xl font-black text-[#d0a850] uppercase tracking-widest lg:text-right">Australia Student Visa</h2>
                <p className="text-xl text-gray-300 leading-relaxed font-medium lg:text-right">
                  Start your academic journey in Australia with trusted student visa experts. Complete assistance for university admissions, GTE/SOP preparation, and financial proof guidance.
                </p>
                <div className="flex lg:justify-end">
                  <Link href="/contact" className="btn-gold">Apply Now</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
