"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  const socialLinks = [
    { href: "https://wa.me/923335965199", icon: <FaWhatsapp />, color: "text-[#25D366]", label: "WhatsApp" },
    { href: "https://www.facebook.com/thevisaconsultancy1", icon: <FaFacebook />, color: "text-[#1877F2]", label: "Facebook" },
    { href: "https://www.tiktok.com/@the.visa.consulta6", icon: <FaTiktok />, color: "text-[#000000]", label: "TikTok" },
    { href: "https://www.instagram.com/the_visa_consultancy", icon: <FaInstagram />, color: "text-[#E4405F]", label: "Instagram" },
    { href: "https://www.linkedin.com/company/the-visa-consultancy", icon: <FaLinkedin />, color: "text-[#0077B5]", label: "LinkedIn" },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted && videoRef.current.volume === 0) {
        videoRef.current.volume = 0.5;
        setVolume(0.5);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val > 0) {
        videoRef.current.muted = false;
        setIsMuted(false);
      } else {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  const destinations = [
    { n: "UK", img: "/images/StudentVisaUK.jpeg" },
    { n: "USA", img: "/images/USAvisitVisa.jpeg" },
    { n: "CANADA", img: "/images/CanadaWorkVisa.jpg" },
    { n: "EUROPE", img: "/images/schengenVisitVisa.jpeg" },
    { n: "DUBAI", img: "/images/DubaiVisitVisa.jpeg" },
    { n: "AUSTRALIA", img: "/images/StudentVisaAustralia.jpg" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "fab fa-facebook-f", href: "https://www.facebook.com/thevisaconsultancy" },
    { name: "Instagram", icon: "fab fa-instagram", href: "https://www.instagram.com/thevisaconsultancy" },
    { name: "Twitter", icon: "fab fa-twitter", href: "https://twitter.com/thevisaconsult" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/company/the-visa-consultancy" }
  ];

  return (
    <main className="bg-[#0f1921] min-h-screen selection:bg-[#d0a850] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] overflow-hidden bg-[#0f1921]">
        <video 
          ref={videoRef}
          autoPlay 
          muted
          loop 
          playsInline 
          preload="metadata"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/VC video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0f1921]"></div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-8"
           >
             <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
               <div className="w-2 h-2 bg-[#d0a850] rounded-full animate-pulse shadow-[0_0_10px_#d0a850]"></div>
               <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Premium Global Mobility</span>
             </div>
             
             <h1 className="text-6xl md:text-9xl font-black text-white heading-serif leading-[0.8] tracking-tighter uppercase">
               Expert <br/> <span className="text-[#d0a850]">Consultancy</span>
             </h1>
             
             <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
               Crafting your journey to global success with precision and excellence. 
               The definitive name in high-end visa and immigration solutions.
             </p>

             <div className="flex flex-wrap items-center justify-center gap-8 pt-10">
               <Link href="/appointments" className="bg-[#d0a850] text-[#0f1921] px-14 py-6 rounded-full font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/20">
                 Book Appointment
               </Link>
               <button onClick={toggleMute} className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group">
                 <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'} text-lg`}></i>
               </button>
             </div>
           </motion.div>
        </div>

        {/* Floating Social Links */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-6">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: -10, color: '#d0a850' }}
              className="w-12 h-12 rounded-xl bg-[#0f1921]/80 border border-white/5 backdrop-blur-xl flex items-center justify-center text-white/40 text-lg transition-all"
            >
              <i className={link.icon}></i>
            </motion.a>
          ))}
        </div>

        {/* Volume Controller */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-2xl transition-all group/volume">
          <button 
            onClick={toggleMute}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#d0a860] hover:text-black transition-all"
          >
            <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'} text-sm`}></i>
          </button>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={isMuted ? 0 : volume} 
            onChange={handleVolumeChange}
            className="w-0 group-hover/volume:w-24 group-hover/volume:mr-2 transition-all duration-300 accent-[#d0a860] cursor-pointer opacity-0 group-hover/volume:opacity-100"
          />
        </div>
      </section>

      {/* 2. QUOTE / MISSION SECTION */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-7xl mx-auto border-2 border-[#d0a860] rounded-xl p-10 md:p-16 text-center bg-[#0f1921]/50 backdrop-blur-sm reveal">
          <h2 
            className="text-[#d0a860] text-2xl md:text-4xl font-medium mb-8 leading-tight reveal delay-100"
            style={{ fontFamily: "'Bauer Bodoni', serif" }}
          >
            Ever got stuck in choosing and planning for a country to <br className="hidden md:block" />
            visit, study and move in?
          </h2>
          <p 
            className="text-white text-lg md:text-xl leading-relaxed font-medium mx-10 reveal delay-300"
            style={{ fontFamily: "'Bauer Bodoni', serif" }}
          >
            The complicated part for applying abroad becomes arduous, exhausting the mind and motivation. 
            The paper work and process require solutions which our company handles for you to lead to exploring new horizons. 
            The free consultation provides an experience of a secure connection and a pleasant journey into the future with transparency and needed professionalism.
          </p>
        </div>
      </section>

      {/* 3. OUR VISA SERVICES SECTION */}
      <section className="pt-10 pb-36 container mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[1px] w-20 md:w-32 bg-[#d0a860]"></div>
            <h2 className="text-[#d0a860] text-3xl md:text-6xl font-bold heading-serif uppercase tracking-[0.1em]">Our Visa Services</h2>
            <div className="h-[1px] w-20 md:w-32 bg-[#d0a860]"></div>
          </div>
          <p className="text-white text-sm md:text-base uppercase tracking-widest font-medium opacity-80">We Provide Professional Visa Solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { t: "Study Visa", d: "Study in Top Universities", i: "fa-graduation-cap", l: "/studentvisa" },
            { t: "Work Visa", d: "Work Abroad Legally", i: "fa-briefcase", l: "/workvisas" },
            { t: "Visit Visa", d: "Travel the World", i: "fa-globe", l: "/visitvisas" },
            { t: "Immigration & PR", d: "Settle in a New Country", i: "fa-user-friends", l: "/immigration" }
          ].map((service, idx) => (
            <div 
              key={idx} 
              className={`reveal bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-2xl border-4 border-[#d0a850] hover:scale-105 transition-all delay-${(idx + 1) * 100}`}
            >
              <div className="text-6xl text-[#0f1921] mb-6">
                <i className={`fas ${service.i}`}></i>
              </div>
              <h3 className="text-2xl font-semibold uppercase tracking-widest mb-1 text-[#0f1921]">{service.t}</h3>
              <div className="h-[1px] w-12 bg-gray-300 my-4"></div>
              <p className="text-gray-600 font-bold text-xs uppercase mb-3 flex-grow">{service.d}</p>
              <Link href={service.l} className="bg-[#d0a860] hover:bg-[#b89445] text-black font-bold py-2 px-6 rounded-md uppercase text-sm tracking-wider transition-colors inline-block no-underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TOP DESTINATIONS SECTION */}
      <section className="">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-16 md:w-24 bg-[#d0a860]"></div>
              <h2 className="text-[#d0a860] text-2xl md:text-5xl font-bold heading-serif uppercase tracking-widest">Top Destinations We Serve</h2>
              <div className="h-[1px] w-16 md:w-24 bg-[#d0a860]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl items-center justify-items-center mx-auto">
            {[
              { n: "Canada", img: "https://flagcdn.com/w320/ca.png" },
              { n: "United Kingdom", img: "https://flagcdn.com/w320/gb.png" },
              { n: "Australia", img: "https://flagcdn.com/w320/au.png" },
              { n: "United States", img: "https://flagcdn.com/w320/us.png" },
              { n: "Europe", img: "https://flagcdn.com/w320/eu.png" },
              { n: "UAE", img: "https://flagcdn.com/w320/ae.png" }
            ].map((dest, idx) => (
              <div 
                key={idx} 
                className={`reveal-left bg-white border-4 border-[#d0a850] rounded-xl overflow-hidden shadow-xl hover:scale-105 w-50 h-40 transition-transform group delay-${(idx + 1) * 100}`}
              >
                <div className="h-24 md:h-28 overflow-hidden">
                  <img src={dest.img} alt={dest.n} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="bg-white py-2 text-center border-t border-gray-100">
                  <span className="text-[#0f1921] font-black text-[10px] uppercase tracking-wider">{dest.n}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="py-32 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-10 reveal">
          <div className="h-[1px] w-12 md:w-32 bg-[#d0a860]"></div>
          <h2 className="text-[#d0a860] text-2xl md:text-5xl font-bold heading-serif uppercase tracking-widest leading-none">
            Start Your Journey Abroad Today
          </h2>
          <div className="h-[1px] w-12 md:w-32 bg-[#d0a860]"></div>
        </div>
        <p className="text-white text-base md:text-xl font-medium uppercase tracking-[0.2em] mb-12 opacity-90 reveal delay-200">
          Get Expert Guidance For Your Visa & Immigration Needs
        </p>
        <div className="reveal delay-400">
          <Link href="/contact" className="bg-[#d0a860] text-black px-10 py-3 rounded-xl font-bold uppercase text-base shadow-xl hover:bg-[#b89445] transition-all no-underline inline-block">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
