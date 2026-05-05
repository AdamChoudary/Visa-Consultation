"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <main className="bg-[#0f1921] min-h-screen selection:bg-[#d0a850] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] overflow-hidden ">
        <video 
          ref={videoRef}
          autoPlay 
          muted
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/VC video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
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
