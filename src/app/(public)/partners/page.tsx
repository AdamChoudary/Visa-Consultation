import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Partners | The Visa Consultancy",
};

export default function Partners() {
  const partners = [
    {
      name: "Bin Araba Real Estates",
      image: "/page images/bin arab2.jpg",
      desc: "A professional real estate company offering residential and commercial property solutions with transparent dealings and premium investment opportunities.",
      socials: [
        { icon: "fa-facebook-f", link: "https://www.facebook.com/BINARABrealestate" },
        { icon: "fa-tiktok", link: "https://www.tiktok.com/@bin.arab90" },
        { icon: "fa-instagram", link: "https://www.instagram.com/bin.arab.real.estate" }
      ]
    },
    {
      name: "Remarks Studio",
      image: "/page images/remark studio2.jpg",
      desc: "A creative digital marketing agency specializing in branding, social media marketing, video editing, and digital growth strategies.",
      socials: [
        { icon: "fa-facebook-f", link: "https://www.facebook.com/remarkstudio1" },
        { icon: "fa-tiktok", link: "https://www.tiktok.com/@remark.studio" },
        { icon: "fa-instagram", link: "https://www.instagram.com/remark_studios" }
      ]
    },
    {
      name: "The Printing Company",
      image: "/page images/printing company.jpg",
      desc: "Providing professional printing services including brochures, business cards, banners, and complete branding materials.",
      socials: [
        { icon: "fa-facebook-f", link: "https://www.facebook.com/theprintingcompany1" },
        { icon: "fa-tiktok", link: "https://www.tiktok.com/@theprintingcompany1" },
        { icon: "fa-instagram", link: "https://www.instagram.com/the_printing_company1" }
      ]
    }
  ];

  return (
    <div className="bg-[#0f1921] min-h-screen pt-8 md:pt-16 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* 1. HERO SECTION */}
        <section className="min-h-[30vh] md:min-h-[40vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="w-full text-center space-y-8 md:space-y-10 animate-fade-in">
             <div className="space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">Global Network</span>
               <h1 className="text-4xl md:text-8xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                 Our <br className="hidden md:block"/> <span className="text-[#d0a850]">Partners</span>
               </h1>
             </div>
             <p className="text-base md:text-xl text-white/40 leading-relaxed font-medium max-w-3xl mx-auto">
               Collaborating with world-class institutions and organizations to provide you with the best international opportunities and support.
             </p>
          </div>
        </section>

        {/* 2. PARTNERS GRID */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-4">
               <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Trusted Alliance</span>
               <h2 className="text-3xl md:text-6xl font-bold text-white heading-serif uppercase tracking-tight">Institutional <br className="hidden md:block"/>Excellence</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              Our network spans across continents, bringing global standards to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden">
            {partners.map((partner, i) => (
              <div key={i} className="group p-8 md:p-12 bg-[#0f1921] hover:bg-white/[0.02] transition-all duration-500">
                <div className="relative w-full aspect-video rounded-xl bg-white/5 overflow-hidden mb-8 md:mb-10 group-hover:bg-[#d0a850]/10 transition-all border border-white/5 group-hover:border-[#d0a850]/30">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-white text-base md:text-lg font-bold mb-6 md:mb-8 uppercase tracking-widest group-hover:text-[#d0a850] transition-colors">{partner.name}</h3>
                <p className="text-white/30 font-medium leading-relaxed text-sm md:text-base antialiased mb-8">
                  {partner.desc}
                </p>
                <div className="flex gap-4">
                  {partner.socials.map((soc, idx) => (
                    <a key={idx} href={soc.link} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#d0a850] transition-colors">
                      <i className={`fab ${soc.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 3. CTA */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
           <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[40px] p-8 md:p-24 text-center space-y-8 md:space-y-12">
              <div className="space-y-4">
                <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.5em]">Join the Network</span>
                <h2 className="text-3xl md:text-7xl font-bold text-white heading-serif uppercase tracking-tight leading-tight">Become a <br className="hidden md:block"/> <span className="text-[#d0a850]">Global Partner</span></h2>
              </div>
              <p className="text-base md:text-xl text-white/40 font-medium max-w-2xl mx-auto">
                Expand your reach and collaborate with a leading visa consultancy. Let's create global success stories together.
              </p>
              <Link href="/contact" className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline inline-block shadow-2xl shadow-[#d0a850]/5">
                Contact Partnership
              </Link>
           </div>
        </section>
      </div>
    </div>
  );
}
