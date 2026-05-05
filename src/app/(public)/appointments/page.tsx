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
    <div className="bg-[#0f1921] min-h-screen">
      <section className="relative min-h-[80vh] flex items-center pt-10 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-24 pt-10">
            <div className="flex-1 space-y-10 animate-fade-in">
               <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[#d0a850] text-[9px] font-black uppercase tracking-[0.4em]">Personalized Support</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] heading-serif uppercase tracking-tighter">
                   Expert <br/>
                   <span className="text-[#d0a850]">Consultation</span>
                  </h1>
                  <div className="w-16 h-[2px] bg-[#d0a850]"></div>
               </div>

               <p className="text-lg text-white/50 leading-relaxed font-medium max-w-lg">
                 Schedule a personalized session with our expert consultants. Choose your service type, and let us guide you through every step of your visa journey.
               </p>

               <div className="flex flex-wrap items-center gap-10 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#b89445] transition-all no-underline shadow-lg hover:-translate-y-1">
                   Book Your Session
                 </Link>
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-[1px] bg-white/10"></div>
                    <span className="text-white/20 text-[8px] uppercase font-black tracking-[0.5em]">Start Today</span>
                 </div>
               </div>
            </div>

            <div className="flex-1 relative animate-fade-in flex justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl max-w-xl">
                  <img src="/page images/appointment1.png" alt="Appointments" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Types Grid */}
        <section className="py-32 border-t border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Our Services</span>
               <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">Consultation <br/>Categories</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Tailored advisory sessions for every stage of your global journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {appointmentTypes.map((type, i) => (
              <div key={i} className="group p-12 bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] text-xl mb-8 group-hover:bg-[#d0a850] group-hover:text-[#0f1921] transition-all">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <h3 className="text-white text-base font-black mb-4 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{type.title}</h3>
                <p className="text-white/30 font-medium leading-relaxed text-xs antialiased">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32 space-y-4">
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">The Roadmap</span>
               <h2 className="text-4xl md:text-6xl font-black text-white heading-serif uppercase tracking-tight">How It Works</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
              {[
                { step: "01", title: "Select Type", desc: "Choose your visa service." },
                { step: "02", title: "Date & Time", desc: "Pick a convenient slot." },
                { step: "03", title: "Details", desc: "Share your requirements." },
                { step: "04", title: "Confirm", desc: "Get your meeting link." }
              ].map((item, i) => (
                <div key={i} className="relative space-y-8 group">
                  <div className="flex items-center gap-6">
                    <span className="text-4xl font-black text-white/10 group-hover:text-[#d0a850] transition-colors duration-500">{item.step}</span>
                    <div className="flex-1 h-[1px] bg-white/5 group-hover:bg-[#d0a850]/20 transition-colors"></div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-white text-lg font-black uppercase tracking-widest">{item.title}</h3>
                    <p className="text-white/30 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto bg-white/[0.02] border border-white/5 rounded-[40px] p-24 text-center space-y-12">
             <div className="space-y-4">
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Secure your slot</span>
               <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase tracking-tight">Ready to <span className="text-[#d0a850]">Consult?</span></h2>
             </div>
             <p className="text-lg text-white/40 font-medium max-w-2xl mx-auto">
               Our expert advisors are ready to guide you. Book your preferred time today.
             </p>
             <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-16 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline inline-block shadow-2xl shadow-[#d0a850]/5">
               Book Appointment
             </Link>
          </div>
        </section>
      </div>
  );
}
