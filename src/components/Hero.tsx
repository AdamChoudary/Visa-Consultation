"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { m } from "framer-motion";
import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp, FaLinkedin, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

interface HeroProps {
  socialLinks: {
    href: string;
    icon: React.ReactNode;
    color: string;
    label: string;
  }[];
}

const MOBILE_VIDEO = "/vcv-portrait.mp4";
const DESKTOP_VIDEO = "/vc-video.optimized.mp4";

function getVideoSrc() {
  if (typeof window === "undefined") return DESKTOP_VIDEO;
  return window.innerWidth < 768 ? MOBILE_VIDEO : DESKTOP_VIDEO;
}

const Hero = React.memo(function Hero({ socialLinks }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Dynamically pick the right video based on screen width.
  // The <source media> attribute is NOT supported inside <video> —
  // browsers ignore it and always pick the first source. We fix this
  // by setting the src directly on the video element via JS.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateSrc = () => {
      const src = getVideoSrc();
      if (video.getAttribute("src") !== src) {
        video.src = src;
        video.load();
        video.play().catch(() => {/* autoplay blocked, muted so should be fine */});
      }
    };

    updateSrc(); // set on mount

    const mq = window.matchMedia("(min-width: 768px)");
    mq.addEventListener("change", updateSrc);
    return () => mq.removeEventListener("change", updateSrc);
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted && videoRef.current.volume === 0) {
        videoRef.current.volume = 0.5;
        setVolume(0.5);
      }
    }
  }, []);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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
  }, []);

  const scrollToMission = useCallback(() => {
    document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-64px)] md:h-[calc(100vh-96px)] overflow-hidden bg-[#0f1921]">
      {/* src is set dynamically via useEffect based on screen width */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-60"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0f1921]"></div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl"
        >
          <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
            Expert Visa &amp; Immigration Consultancy
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-lg">
            Navigate international borders with confidence. Professional guidance
            for study, work, visit visas, and permanent immigration worldwide.
          </p>
        </m.div>
      </div>

      {/* Floating Social Links */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-6">
        {socialLinks.map((link, idx) => (
          <m.a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: -10, color: link.color }}
            className="w-12 h-12 rounded-xl bg-[#0f1921]/80 border border-white/5 backdrop-blur-xl flex items-center justify-center text-white/40 text-lg transition-all"
          >
            {link.icon}
          </m.a>
        ))}
      </div>

      {/* Volume Controller */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-2xl transition-all group/volume">
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#d0a860] hover:text-black transition-all"
        >
          {isMuted ? <FaVolumeMute className="text-sm" /> : <FaVolumeUp className="text-sm" />}
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
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={scrollToMission}
      >
        <div className="w-5 h-8 rounded-full border border-[#d0a860] flex justify-center pt-2">
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-1.5 bg-[#d0a860] rounded-full"
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#d0a860] font-bold opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </span>
      </m.div>
    </section>
  );
});

export default Hero;
