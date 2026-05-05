import Link from "next/link";

export const metadata = {
  title: "Partners | The Visa Consultancy",
};

export default function Partners() {
  const partners = [
    {
      name: "Bin Araba Real Estates",
      image: "/images/binarab.jpg",
      desc: "A professional real estate company offering residential and commercial property solutions with transparent dealings and premium investment opportunities.",
      url: "https://www.binarabrealestates.com",
      socials: [
        { icon: "fa-facebook-f", link: "https://www.facebook.com/BINARABrealestate" },
        { icon: "fa-tiktok", link: "https://www.tiktok.com/@bin.arab90" },
        { icon: "fa-instagram", link: "https://www.instagram.com/bin.arab.real.estate" }
      ]
    },
    {
      name: "Remarks Studio",
      image: "/images/remarkstudio.jpg",
      desc: "A creative digital marketing agency specializing in branding, social media marketing, video editing, and digital growth strategies.",
      url: "#",
      socials: [
        { icon: "fa-facebook-f", link: "https://www.facebook.com/remarkstudio1" },
        { icon: "fa-tiktok", link: "https://www.tiktok.com/@remark.studio" },
        { icon: "fa-instagram", link: "https://www.instagram.com/remark_studios" }
      ]
    },
    {
      name: "The Printing Company",
      image: "/images/theprintingcompany.jpg",
      desc: "Providing professional printing services including brochures, business cards, banners, and complete branding materials.",
      url: "#",
      socials: [
        { icon: "fa-facebook-f", link: "https://www.facebook.com/theprintingcompany1" },
        { icon: "fa-tiktok", link: "https://www.tiktok.com/@theprintingcompany1" },
        { icon: "fa-instagram", link: "https://www.instagram.com/the_printing_company1" }
      ]
    }
  ];

  return (
    <div className="bg-[#0f1921] min-h-screen selection:bg-[#d0a850] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#d0a850] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
           <div className="inline-block px-4 py-1 bg-[#d0a850]/10 border border-[#d0a850]/20 rounded-full mb-10">
              <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.3em]">Network of Excellence</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] heading-serif uppercase tracking-tighter mb-10">
            Our Trusted <br/>
            <span className="text-[#d0a850]">Partners</span>
           </h1>
           <p className="text-xl text-white/70 leading-relaxed font-medium">
             We collaborate with industry leaders who share our commitment to excellence and innovation. 
             Our network ensures you get the best support in every aspect of your journey.
           </p>
        </div>
      </section>

      {/* 2. PARTNERS GRID */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {partners.map((partner, i) => (
              <div key={i} className="group p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-[#d0a850]/40 transition-all duration-500 hover:-translate-y-2">
                <div className="w-full h-56 rounded-3xl bg-white p-10 flex items-center justify-center mb-10 relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(208,168,80,0.1)] transition-all">
                  <img src={partner.image} alt={partner.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h3 className="text-white text-2xl font-black mb-6 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{partner.name}</h3>
                <p className="text-white/40 font-medium leading-relaxed text-sm mb-10">{partner.desc}</p>
                
                <div className="flex gap-6 mb-10">
                  {partner.socials.map((social, idx) => (
                    <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#d0a850] text-xl transition-all">
                      <i className={`fab ${social.icon}`}></i>
                    </a>
                  ))}
                </div>

                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#b89445] transition-all no-underline w-full text-center">
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-32 container mx-auto px-6 text-center">
         <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-16 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d0a850]/5 rounded-full blur-[80px]"></div>
            <h2 className="text-4xl md:text-7xl font-black text-white heading-serif uppercase mb-10 relative z-10">Become a <span className="text-[#d0a850]">Partner?</span></h2>
            <p className="text-xl text-white/60 font-medium mb-12 max-w-2xl mx-auto relative z-10">
              Join our network of elite service providers and help us deliver exceptional value to our clients worldwide.
            </p>
            <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-12 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:bg-[#b89445] transition-all no-underline inline-block relative z-10 shadow-xl shadow-[#d0a850]/10">
              Inquire Now
            </Link>
         </div>
      </section>
    </div>
  );
}
