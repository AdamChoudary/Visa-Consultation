import Link from "next/link";

export const metadata = {
  title: "Appointments | The Visa Consultancy",
};

export default function Appointments() {
  const appointmentTypes = [
    { title: "Student Visa", desc: "Discuss study options, university eligibility, and documentation." },
    { title: "Visit Visa", desc: "Consult on tourist destinations and submission procedures." },
    { title: "Immigration", desc: "Guidance for PR, skilled worker, and family sponsorship." },
    { title: "Business", desc: "Discuss pathways for overseas business expansion." }
  ];

  return (
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-8 animate-fade-in">
             <h1 className="text-4xl md:text-7xl font-black text-white leading-tight heading-serif uppercase">
              Expert <br/>
              <span className="text-[#d0a850]">Consultation</span>
             </h1>
             <p className="text-xl text-gray-300 leading-relaxed font-medium">
               Schedule a personalized session with our expert consultants. Choose your service type, and let us guide you through every step of your visa journey.
             </p>
             <Link href="/contact" className="btn-gold">Book Now</Link>
          </div>
          <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d0a850]/20 blur-3xl group-hover:bg-[#d0a850]/30 transition-all duration-700"></div>
              <img src="/images/appointment.png" alt="Appointments" className="relative z-10 w-full rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Types Grid */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="section-title uppercase tracking-[0.2em] font-black">Consultation Types</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appointmentTypes.map((type, i) => (
              <div key={i} className="visa-card !bg-white/5 !text-white border border-white/10 hover:border-[#d0a850]/50 p-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] text-2xl mb-6 border border-[#d0a850]/20">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-widest">{type.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 border-t border-white/5 bg-white/[0.02] -mx-6 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-4xl md:text-5xl font-black text-[#d0a850] uppercase tracking-widest mb-24">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { step: "01", title: "Select Type", desc: "Choose your visa service." },
                { step: "02", title: "Date & Time", desc: "Pick a convenient slot." },
                { step: "03", title: "Details", desc: "Share your requirements." },
                { step: "04", title: "Confirm", desc: "Get your meeting link." }
              ].map((item, i) => (
                <div key={i} className="relative text-center group">
                  <div className="text-6xl font-black text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-[#d0a850]/10 transition-colors">{item.step}</div>
                  <h3 className="text-[#d0a850] text-lg font-bold uppercase mb-4 tracking-widest relative z-10">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-medium relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-32 text-center p-16 bg-gradient-to-b from-[#d0a850]/10 to-transparent rounded-[50px] border border-[#d0a850]/20">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-8">Ready to Start?</h2>
          <Link href="/contact" className="btn-gold !px-16 !py-5">Get Free Consultation</Link>
        </div>
      </div>
    </div>
  );
}
