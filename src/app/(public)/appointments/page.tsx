import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Book Appointment | The Visa Consultancy",
};

export default function AppointmentPage() {
  const appointmentTypes = [
    { title: "Student Visa", desc: "Expert guidance for university admissions and study permit applications." },
    { title: "Visit Visa", desc: "Assistance for tourist and family visit visas for all major destinations." },
    { title: "Immigration & PR", desc: "Comprehensive support for permanent residency and skilled migration." },
    { title: "Work Permit", desc: "Dedicated solutions for employer-sponsored and independent work visas." }
  ];

  return (
    <div className="bg-[#0f1921] min-h-screen pt-8 md:pt-16 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[40vh] md:min-h-[50vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-8 md:space-y-10 animate-fade-in text-center lg:text-left">
               <div className="space-y-4">
                 <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">Consultation</span>
                 <h1 className="text-4xl md:text-8xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                   Book <br className="hidden md:block"/> <span className="text-[#d0a850]">Meeting</span>
                 </h1>
               </div>
               
               <p className="text-base md:text-xl text-white/40 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                 Secure your global future with a personalized consultation. Our experts are ready to guide you through every step of your visa journey.
               </p>

               <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                 <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10">
                   Schedule Now
                 </Link>
               </div>
            </div>

            <div className="flex-1 w-full relative animate-fade-in flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 w-full max-w-md lg:max-w-xl">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl">
                  <Image 
                    src="/page images/appointment1.png" 
                    alt="Appointments" 
                    width={800} 
                    height={1000} 
                    className="w-full h-auto object-cover" 
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CATEGORIES GRID */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Our Services</span>
               <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase tracking-tight">Consultation <br className="hidden md:block"/>Categories</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Tailored advisory sessions for every stage of your global journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden">
            {[
              { title: "Student Visa", desc: "Expert guidance for university admissions and study permit applications.", icon: "fa-graduation-cap" },
              { title: "Visit Visa", desc: "Assistance for tourist and family visit visas for all major destinations.", icon: "fa-passport" },
              { title: "Immigration & PR", desc: "Comprehensive support for permanent residency and skilled migration.", icon: "fa-id-card" },
              { title: "Work Permit", desc: "Dedicated solutions for employer-sponsored and independent work visas.", icon: "fa-briefcase" }
            ].map((type, i) => (
              <div key={i} className="group p-8 md:p-12 bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] text-xl mb-6 md:mb-8 group-hover:bg-[#d0a850] group-hover:text-[#0f1921] transition-all">
                  <i className={`fas ${type.icon}`}></i>
                </div>
                <h3 className="text-white text-base font-bold mb-4 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{type.title}</h3>
                <p className="text-white/30 font-medium leading-relaxed text-[13px] md:text-sm antialiased">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. PROCESS SECTION */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-32 space-y-4">
             <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">The Roadmap</span>
             <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase tracking-tight">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {[
              { step: "01", title: "Select Type", desc: "Choose your visa service." },
              { step: "02", title: "Date & Time", desc: "Pick a convenient slot." },
              { step: "03", title: "Details", desc: "Share your requirements." },
              { step: "04", title: "Confirm", desc: "Get your meeting link." }
            ].map((item, i) => (
              <div key={i} className="relative space-y-6 md:space-y-8 group">
                <div className="flex items-center gap-6">
                  <span className="text-3xl md:text-4xl font-bold text-white/10 group-hover:text-[#d0a850] transition-colors duration-500">{item.step}</span>
                  <div className="flex-1 h-[1px] bg-white/5 group-hover:bg-[#d0a850]/20 transition-colors"></div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-white text-base md:text-lg font-bold uppercase tracking-widest">{item.title}</h3>
                  <p className="text-white/30 text-[13px] md:text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CTA */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[40px] p-8 md:p-24 text-center space-y-8 md:space-y-12">
             <div className="space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Secure your slot</span>
               <h2 className="text-3xl md:text-7xl font-bold text-white heading-serif uppercase tracking-tight leading-tight">Ready to <span className="text-[#d0a850]">Consult?</span></h2>
             </div>
             <p className="text-base md:text-lg text-white/40 font-medium max-w-2xl mx-auto">
               Our expert advisors are ready to guide you. Book your preferred time today.
             </p>
             <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline inline-block shadow-2xl shadow-[#d0a850]/5">
               Book Appointment
             </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
