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
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="section-title uppercase tracking-[0.2em] font-black">Our Trusted Partners</h2>
          <p className="text-gray-400 mt-6 leading-relaxed font-medium max-w-3xl mx-auto uppercase">
            We collaborate with industry leaders who share our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {partners.map((partner, i) => (
            <div key={i} className="visa-card !bg-white/5 !text-white border border-white/10 hover:border-[#d0a850]/50 group">
              <div className="w-full h-48 overflow-hidden rounded-xl mb-8 bg-white p-4 flex items-center justify-center">
                <img src={partner.image} alt={partner.name} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4 uppercase tracking-widest">{partner.name}</h3>
              <p className="text-gray-400 font-medium leading-relaxed mb-8">{partner.desc}</p>
              
              <div className="flex gap-6 mb-10">
                {partner.socials.map((social, idx) => (
                  <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#d0a850] text-xl transition-all">
                    <i className={`fab ${social.icon}`}></i>
                  </a>
                ))}
              </div>

              <a href={partner.url} target="_blank" rel="noopener noreferrer" className="btn-gold !w-full text-center">Visit Website</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
