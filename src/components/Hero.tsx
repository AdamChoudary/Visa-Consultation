"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp, FaLinkedin, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

interface HeroProps {
  socialLinks: {
    href: string;
    icon: React.ReactNode;
    color: string;
    label: string;
  }[];
}

export default function Hero({ socialLinks }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <section className="relative w-full h-[calc(100vh-64px)] md:h-[calc(100vh-96px)] overflow-hidden bg-[#0f1921]">
      {/* Desktop Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-60 hidden md:block"
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
        className="absolute inset-0 w-full h-full object-cover object-top opacity-70 md:hidden"
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
          {/* This space was empty in original, but preserved for consistency */}
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-5 h-8 rounded-full border border-[#d0a860] flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-1.5 bg-[#d0a860] rounded-full"
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#d0a860] font-bold opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
}
