import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp, FaLinkedin, FaGraduationCap, FaBriefcase, FaGlobe, FaUserFriends } from "react-icons/fa";

export const metadata = {
  title: "The Visa Consultancy | Premium Immigration Services",
  description: "Your journey abroad starts here. Expert consultancy for study, work, and visit visas.",
};

const socialLinks = [
  { href: "https://wa.me/923335965199", icon: <FaWhatsapp />, color: "#25D366", label: "WhatsApp" },
  { href: "https://www.facebook.com/thevisaconsultancy1", icon: <FaFacebook />, color: "#1877F2", label: "Facebook" },
  { href: "https://www.tiktok.com/@the.visa.consulta6", icon: <FaTiktok />, color: "#FE2C55", label: "TikTok" },
  { href: "https://www.instagram.com/the_visa_consultancy", icon: <FaInstagram />, color: "#E4405F", label: "Instagram" },
  { href: "https://www.linkedin.com/company/the-visa-consultancy", icon: <FaLinkedin />, color: "#0077B5", label: "LinkedIn" },
];

const destinations = [
  { n: "Canada", img: "https://flagcdn.com/w320/ca.png" },
  { n: "United Kingdom", img: "https://flagcdn.com/w320/gb.png" },
  { n: "Australia", img: "https://flagcdn.com/w320/au.png" },
  { n: "United States", img: "https://flagcdn.com/w320/us.png" },
  { n: "Europe", img: "https://flagcdn.com/w320/eu.png" },
  { n: "UAE", img: "https://flagcdn.com/w320/ae.png" }
];

const visaServices = [
  { t: "Study Visa", d: "Study in Top Universities", i: <FaGraduationCap />, l: "/studentvisa" },
  { t: "Work Visa", d: "Work Abroad Legally", i: <FaBriefcase />, l: "/workvisas" },
  { t: "Visit Visa", d: "Travel the World", i: <FaGlobe />, l: "/visitvisas" },
  { t: "Immigration & PR", d: "Settle in a New Country", i: <FaUserFriends />, l: "/immigration" }
];

export default function Home() {

  return (
    <main className="bg-[#0f1921] min-h-screen selection:bg-[#d0a850] selection:text-black overflow-x-hidden">
      {/* 1. HERO SECTION (Client Component) */}
      <Hero socialLinks={socialLinks} />

      {/* 2. QUOTE / MISSION SECTION */}
      <section id="mission" className="py-12 md:py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto border-2 border-[#d0a860] rounded-xl p-6 md:p-16 text-center bg-[#0f1921]/50 backdrop-blur-sm">
          <h2
            className="text-[#d0a860] text-lg md:text-4xl font-medium mb-6 md:mb-8 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ever got stuck in choosing and planning for a country to <br className="hidden md:block" />
            visit, study and move in?
          </h2>
          <p
            className="text-white text-sm md:text-xl leading-relaxed font-medium mx-2 md:mx-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The complicated part for applying abroad becomes arduous, exhausting the mind and motivation.
            The paper work and process require solutions which our company handles for you to lead to exploring new horizons.
            The free consultation provides an experience of a secure connection and a pleasant journey into the future with transparency and needed professionalism.
          </p>
        </div>
      </section>

      {/* 3. OUR VISA SERVICES SECTION */}
      <section className="pt-10 pb-20 md:pb-36 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-2">
            <div className="h-[1px] w-8 md:w-32 bg-[#d0a860]"></div>
            <h2 className="text-[#d0a860] text-xl md:text-6xl font-bold heading-serif uppercase tracking-[0.1em]">Our Visa Services</h2>
            <div className="h-[1px] w-8 md:w-32 bg-[#d0a860]"></div>
          </div>
          <p className="text-white text-[10px] md:text-base uppercase tracking-widest font-medium opacity-80">We Provide Professional Visa Solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {visaServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#fdfcf0] relative overflow-hidden rounded-xl p-6 md:p-8 flex flex-col items-center text-center shadow-2xl border-4 border-[#d0a850] hover:scale-105 transition-all group"
            >
              {/* Professional Fine Micro-Diamond Watermark */}
              <div 
                className="absolute inset-0 opacity-[0.5] pointer-events-none" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M15 0l15 15-15 15L0 15z' stroke='%23d0a850' stroke-width='0.5' stroke-opacity='0.3'/%3E%3C/g%3E%3C/svg%3E")` }}
              ></div>

              <div className="text-4xl md:text-6xl text-[#0f1921] mb-4 md:mb-6 relative z-10">
                {service.i}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-widest mb-1 text-[#0f1921] relative z-10">{service.t}</h3>
              <div className="h-[1px] w-12 bg-gray-300 my-3 md:my-4 relative z-10"></div>
              <p className="text-gray-600 font-bold text-[10px] md:text-xs uppercase mb-3 flex-grow relative z-10">{service.d}</p>
              <Link href={service.l} className="bg-[#d0a860] hover:bg-[#b89445] text-black font-bold py-2 px-6 rounded-md uppercase text-xs md:text-sm tracking-wider transition-colors inline-block no-underline relative z-10">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TOP DESTINATIONS SECTION */}
      <section className="pb-20 md:pb-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <div className="h-[1px] w-8 md:w-24 bg-[#d0a860]"></div>
              <h2 className="text-[#d0a860] text-lg md:text-5xl font-bold heading-serif uppercase tracking-widest">Top Destinations</h2>
              <div className="h-[1px] w-8 md:w-24 bg-[#d0a860]"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-7xl items-center justify-items-center mx-auto">
            {destinations.map((dest, idx) => (
              <div
                key={idx}
                className="bg-white border-2 md:border-4 border-[#d0a850] rounded-xl overflow-hidden shadow-xl hover:scale-105 w-full h-32 md:h-40 transition-transform group"
              >
                <div className="h-20 md:h-28 overflow-hidden relative">
                  <Image 
                    src={dest.img} 
                    alt={dest.n} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 200px"
                  />
                </div>
                <div className="bg-white py-2 text-center border-t border-gray-100">
                  <span className="text-[#0f1921] font-black text-[8px] md:text-[10px] uppercase tracking-wider">{dest.n}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="py-20 md:py-32 container mx-auto px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 md:mb-10">
          <div className="h-[1px] w-6 md:w-32 bg-[#d0a860]"></div>
          <h2 className="text-[#d0a860] text-xl md:text-5xl font-bold heading-serif uppercase tracking-widest leading-tight">
            Start Your Journey Abroad Today
          </h2>
          <div className="h-[1px] w-6 md:w-32 bg-[#d0a860]"></div>
        </div>
        <p className="text-white text-xs md:text-xl font-medium uppercase tracking-[0.1em] md:tracking-[0.2em] mb-8 md:mb-12 opacity-90">
          Get Expert Guidance For Your Visa & Immigration Needs
        </p>
        <div>
          <Link href="/contact" className="bg-[#d0a860] text-black px-6 md:px-10 py-3 rounded-xl font-bold uppercase text-xs md:text-base shadow-xl hover:bg-[#b89445] transition-all no-underline inline-block">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
