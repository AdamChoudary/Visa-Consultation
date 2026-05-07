"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  const socialLinks = [
    { href: "https://wa.me/923335965199", icon: <FaWhatsapp />, color: "#25D366", label: "WhatsApp" },
    { href: "https://www.facebook.com/thevisaconsultancy1", icon: <FaFacebook />, color: "#1877F2", label: "Facebook" },
    { href: "https://www.tiktok.com/@the.visa.consulta6", icon: <FaTiktok />, color: "#FE2C55", label: "TikTok" },
    { href: "https://www.instagram.com/the_visa_consultancy", icon: <FaInstagram />, color: "#E4405F", label: "Instagram" },
    { href: "https://www.linkedin.com/company/the-visa-consultancy", icon: <FaLinkedin />, color: "#0077B5", label: "LinkedIn" },
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
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const videos = [videoRef.current, mobileVideoRef.current];
    videos.forEach(video => {
      if (video) {
        const nextMuted = !video.muted;
        video.muted = nextMuted;
        setIsMuted(nextMuted);
        if (!nextMuted && video.volume === 0) {
          video.volume = 0.5;
          setVolume(0.5);
        }
      }
    });
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    const videos = [videoRef.current, mobileVideoRef.current];
    videos.forEach(video => {
      if (video) {
        video.volume = val;
        if (val > 0) {
          video.muted = false;
          setIsMuted(false);
        } else {
          video.muted = true;
          setIsMuted(true);
        }
      }
    });
  };

  const destinations = [
    { n: "UK", img: "/images/StudentVisaUK.jpeg" },
    { n: "USA", img: "/images/USAvisitVisa.jpeg" },
    { n: "CANADA", img: "/images/CanadaWorkVisa.jpg" },
    { n: "EUROPE", img: "/images/schengenVisitVisa.jpeg" },
    { n: "DUBAI", img: "/images/DubaiVisitVisa.jpeg" },
    { n: "AUSTRALIA", img: "/images/StudentVisaAustralia.jpg" }
  ];


  return (
    <main className="bg-[#0f1921] min-h-screen selection:bg-[#d0a850] selection:text-black overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] md:h-[85vh] overflow-hidden bg-[#0f1921]">
        {/* Desktop Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-60 hidden md:block"
        >
          <source src="/VC video.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video (Portrait) */}
        <video
          ref={mobileVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-70 md:hidden"
        >
          <source src="/vcv portrait.mp4" type="video/mp4" />
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
              whileHover={{ x: -10, color: link.color }}
              className="w-12 h-12 rounded-xl bg-[#0f1921]/80 border border-white/5 backdrop-blur-xl flex items-center justify-center text-white/40 text-lg transition-all"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Volume Controller */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-2xl transition-all group/volume">
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 cursor-pointer group"
          onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#d0a860]/40 to-transparent relative overflow-hidden">
            <motion.div
              animate={{
                y: [0, 48],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#d0a860] to-transparent"
            />
          </div>
          <motion.span 
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[9px] uppercase tracking-[0.4em] text-[#d0a860] font-light group-hover:text-[#d0a860] transition-colors"
          >
            Explore
          </motion.span>
        </motion.div>
      </section>

      {/* 2. QUOTE / MISSION SECTION */}
      <section id="mission" className="py-12 md:py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto border-2 border-[#d0a860] rounded-xl p-6 md:p-16 text-center bg-[#0f1921]/50 backdrop-blur-sm reveal">
          <h2
            className="text-[#d0a860] text-lg md:text-4xl font-medium mb-6 md:mb-8 leading-tight reveal"
            style={{ fontFamily: "'Bauer Bodoni', serif" }}
          >
            Ever got stuck in choosing and planning for a country to <br className="hidden md:block" />
            visit, study and move in?
          </h2>
          <p
            className="text-white text-sm md:text-xl leading-relaxed font-medium mx-2 md:mx-10 reveal"
            style={{ fontFamily: "'Bauer Bodoni', serif" }}
          >
            The complicated part for applying abroad becomes arduous, exhausting the mind and motivation.
            The paper work and process require solutions which our company handles for you to lead to exploring new horizons.
            The free consultation provides an experience of a secure connection and a pleasant journey into the future with transparency and needed professionalism.
          </p>
        </div>
      </section>

      {/* 3. OUR VISA SERVICES SECTION */}
      <section className="pt-10 pb-20 md:pb-36 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20 reveal">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-2">
            <div className="h-[1px] w-8 md:w-32 bg-[#d0a860]"></div>
            <h2 className="text-[#d0a860] text-xl md:text-6xl font-bold heading-serif uppercase tracking-[0.1em]">Our Visa Services</h2>
            <div className="h-[1px] w-8 md:w-32 bg-[#d0a860]"></div>
          </div>
          <p className="text-white text-[10px] md:text-base uppercase tracking-widest font-medium opacity-80">We Provide Professional Visa Solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {[
            { t: "Study Visa", d: "Study in Top Universities", i: "fa-graduation-cap", l: "/studentvisa" },
            { t: "Work Visa", d: "Work Abroad Legally", i: "fa-briefcase", l: "/workvisas" },
            { t: "Visit Visa", d: "Travel the World", i: "fa-globe", l: "/visitvisas" },
            { t: "Immigration & PR", d: "Settle in a New Country", i: "fa-user-friends", l: "/immigration" }
          ].map((service, idx) => (
            <div
              key={idx}
              className="reveal bg-white rounded-xl p-6 md:p-8 flex flex-col items-center text-center shadow-2xl border-4 border-[#d0a850] hover:scale-105 transition-all"
            >
              <div className="text-4xl md:text-6xl text-[#0f1921] mb-4 md:mb-6">
                <i className={`fas ${service.i}`}></i>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-widest mb-1 text-[#0f1921]">{service.t}</h3>
              <div className="h-[1px] w-12 bg-gray-300 my-3 md:my-4"></div>
              <p className="text-gray-600 font-bold text-[10px] md:text-xs uppercase mb-3 flex-grow">{service.d}</p>
              <Link href={service.l} className="bg-[#d0a860] hover:bg-[#b89445] text-black font-bold py-2 px-6 rounded-md uppercase text-xs md:text-sm tracking-wider transition-colors inline-block no-underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TOP DESTINATIONS SECTION */}
      <section className="pb-20 md:pb-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20 reveal">
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <div className="h-[1px] w-8 md:w-24 bg-[#d0a860]"></div>
              <h2 className="text-[#d0a860] text-lg md:text-5xl font-bold heading-serif uppercase tracking-widest">Top Destinations</h2>
              <div className="h-[1px] w-8 md:w-24 bg-[#d0a860]"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-7xl items-center justify-items-center mx-auto">
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
                className="reveal-left bg-white border-2 md:border-4 border-[#d0a850] rounded-xl overflow-hidden shadow-xl hover:scale-105 w-full h-32 md:h-40 transition-transform group"
              >
                <div className="h-20 md:h-28 overflow-hidden">
                  <img src={dest.img} alt={dest.n} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 md:mb-10 reveal">
          <div className="h-[1px] w-6 md:w-32 bg-[#d0a860]"></div>
          <h2 className="text-[#d0a860] text-xl md:text-5xl font-bold heading-serif uppercase tracking-widest leading-tight">
            Start Your Journey Abroad Today
          </h2>
          <div className="h-[1px] w-6 md:w-32 bg-[#d0a860]"></div>
        </div>
        <p className="text-white text-xs md:text-xl font-medium uppercase tracking-[0.1em] md:tracking-[0.2em] mb-8 md:mb-12 opacity-90 reveal">
          Get Expert Guidance For Your Visa & Immigration Needs
        </p>
        <div className="reveal">
          <Link href="/contact" className="bg-[#d0a860] text-black px-6 md:px-10 py-3 rounded-xl font-bold uppercase text-xs md:text-base shadow-xl hover:bg-[#b89445] transition-all no-underline inline-block">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
