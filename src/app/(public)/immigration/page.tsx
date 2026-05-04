import Link from "next/link";

export const metadata = {
  title: "Immigration | The Visa Consultancy",
};

export default function Immigration() {
  return (
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-8 animate-fade-in">
             <h1 className="text-4xl md:text-7xl font-black text-white leading-tight heading-serif uppercase">
              Immigration & <br/>
              <span className="text-[#d0a850]">Permanent Residency</span>
             </h1>
             <p className="text-xl text-gray-300 leading-relaxed font-medium">
               Planning to settle abroad indefinitely? You need a trustworthy partner to make the path accessible and possible. 
               Achieve your dream with our expert immigration solutions.
             </p>
             <Link href="/contact" className="btn-gold">Free Consultation</Link>
          </div>
          <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d0a850]/20 blur-3xl group-hover:bg-[#d0a850]/30 transition-all duration-700"></div>
              <img src="/images/immigration.png" alt="Immigration" className="relative z-10 w-full rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Intro Goal Section */}
        <div className="gold-border-box !max-w-4xl animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black text-[#d0a850] uppercase tracking-widest mb-6">Your choice, our goal.</h2>
          <p className="text-xl text-gray-300 leading-relaxed font-medium">
            From personalized case evaluation to language and culture assistance, our well-trained team handles everything with responsibility and ethics.
          </p>
        </div>

        {/* Services Grid */}
        <section className="py-24 border-t border-white/5">
          <h2 className="section-title uppercase tracking-[0.2em] font-black mb-20">Our Support Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Profile evaluation", "Points estimation", "Application review", "Documentation prep", "Submission"
            ].map((service, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:border-[#d0a850] transition-all">
                <p className="text-white font-bold uppercase tracking-wider text-xs">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Immigration Programs */}
        <section className="py-24 border-t border-white/5">
          <h2 className="section-title uppercase tracking-[0.2em] font-black mb-20">Immigration Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { t: "Skilled Worker", d: "Professional guidance for skilled migration programs based on education and experience." },
              { t: "Permanent Residency", d: "Complete PR assistance including profile evaluation and points calculation." },
              { t: "Business & Investor", d: "Pathways for entrepreneurs seeking overseas business expansion." },
              { t: "Family Sponsorship", d: "Spouse and family reunification programs with full documentation support." }
            ].map((program, i) => (
              <div key={i} className="visa-card !bg-white/5 !text-white border border-white/10">
                <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-widest">{program.t}</h3>
                <p className="text-gray-400 font-medium">{program.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 border-t border-white/5">
          <h2 className="section-title uppercase tracking-[0.2em] font-black mb-20">Our Immigration Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { s: "Step 1", t: "Eligibility Assessment", d: "Analyzing your age, education, and skills for the best pathway." },
              { s: "Step 2", t: "Profile Building", d: "Preparing embassy-ready documentation with accuracy." },
              { s: "Step 3", t: "Submission", d: "Handling full submission, biometrics, and follow-ups." },
              { s: "Step 4", t: "Visa Approval", d: "Pre-departure planning and settlement assistance." }
            ].map((step, i) => (
              <div key={i} className="relative p-10 rounded-2xl bg-[#d0a850]/5 border border-[#d0a850]/20">
                <span className="absolute -top-4 left-6 bg-[#d0a850] text-[#0f1921] px-4 py-1 rounded text-xs font-black uppercase">{step.s}</span>
                <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-widest mt-2">{step.t}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 border-t border-white/5">
          <h2 className="section-title uppercase tracking-[0.2em] font-black mb-20">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { t: "Transparent Process", d: "No hidden charges and complete clarity." },
              { t: "High Success Rate", d: "Strong profile building for approval." },
              { t: "Experienced Consultants", d: "Strong knowledge of immigration laws." },
              { t: "Client-Focused", d: "Personalized guidance tailored to you." }
            ].map((reason, i) => (
              <div key={i} className="text-center">
                <h3 className="text-[#d0a850] text-lg font-bold mb-4 uppercase tracking-widest">{reason.t}</h3>
                <p className="text-gray-400 text-sm font-medium">{reason.d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
