"use client";

import React, { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';
import { siteConfig } from '@/config/site';

const visaServices = siteConfig.navigation;

const Header = memo(function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileVisaOpen, setMobileVisaOpen] = useState(false);
  const [mobileLangTestOpen, setMobileLangTestOpen] = useState(false);

  return (
    <header className="bg-[#0f1921] py-3 fixed top-0 left-0 w-full z-50 border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 no-underline group z-[60]">
          <div className="relative">
            <Image 
              src="/logo.webp" 
              alt="Logo" 
              width={80} 
              height={80} 
              className="h-10 w-auto md:h-18 drop-shadow-2xl transition-transform group-hover:scale-105" 
              priority
            />
          </div>
          <span className="text-white text-sm md:text-xl tracking-tight font-medium heading-serif">
            The Visa Consultancy
          </span>
        </Link>

        {/* Desktop Navigation in Golden Box */}
        <nav className="hidden lg:block border border-[#d0a850] rounded-lg px-8 py-2">
          <ul className="flex items-center gap-10 list-none m-0 p-0">
            <m.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/" className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest no-underline">Home</Link>
            </m.li>
            
            {/* Dropdown for Visa Services */}
            <m.li 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest bg-transparent border-none cursor-pointer flex items-center gap-2">
                Visa Services <FaChevronDown className={`text-[10px] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute left-0 mt-2 w-64 bg-[#0f1921] border border-[#d0a850]/30 rounded-xl shadow-2xl transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="py-2">
                  {visaServices.map((service, idx) => (
                    service.subItems ? (
                      <div key={idx} className="relative group/sub">
                        <div className="w-full text-left flex items-center justify-between px-6 py-3 text-white hover:bg-[#d0a850] hover:text-black transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">
                          {service.name}
                          <FaCaretDown className="-rotate-90 group-hover/sub:text-black" />
                        </div>
                        
                        {/* Sub-Dropdown Menu */}
                        <div className="absolute top-0 left-full w-56 bg-[#0f1921] border border-[#d0a850]/30 rounded-xl shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                          <div className="py-2">
                            {service.subItems.map((sub, subIdx) => (
                              <Link 
                                key={subIdx} 
                                href={sub.href}
                                className="block px-6 py-3 text-white hover:bg-[#d0a850] hover:text-black transition-colors text-xs font-bold uppercase tracking-widest no-underline"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link 
                        key={idx} 
                        href={service.href}
                        className="block px-6 py-3 text-white hover:bg-[#d0a850] hover:text-black transition-colors text-xs font-bold uppercase tracking-widest no-underline"
                      >
                        {service.name}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </m.li>

            <m.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/partners" className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest no-underline">Partners</Link>
            </m.li>
            <m.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/clients" className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest no-underline">Clients</Link>
            </m.li>
            <m.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/blogs" className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest no-underline">Blogs</Link>
            </m.li>
            <m.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/contact" className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest no-underline">Contact</Link>
            </m.li>
          </ul>
        </nav>

        {/* Mobile Toggle Button (Only visible when menu is closed) */}
        {!menuOpen && (
          <button 
            className="lg:hidden text-white text-2xl bg-transparent border-none focus:outline-none p-2 z-[60]" 
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-[70]"
            />

            {/* Side Drawer */}
            <m.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 h-screen w-[85%] sm:w-[400px] bg-[#0f1921] z-[80] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] border-l border-white/10 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="text-[#d0a850] text-xs font-bold uppercase tracking-[0.3em]">Menu</span>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto px-8 py-10">
                <nav className="flex flex-col gap-10">
                  <div className="flex flex-col gap-2">
                    {/* Home, Partners, Clients, Blogs - Clean Links */}
                    <Link href="/" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] py-4 text-xl font-bold no-underline transition-colors border-b border-white/5 flex justify-between items-center">
                      Home
                    </Link>
                    
                    {/* Visa Services Accordion */}
                    <div className="border-b border-white/5">
                      <button 
                        onClick={() => setMobileVisaOpen(!mobileVisaOpen)}
                        className="w-full flex items-center justify-start gap-3 py-5 text-white hover:text-[#d0a850] text-xl font-bold bg-transparent border-none cursor-pointer group"
                      >
                        <span className={mobileVisaOpen ? 'text-[#d0a850]' : ''}>Visa Services</span>
                        <m.div 
                          animate={{ rotate: mobileVisaOpen ? 180 : 0 }}
                        >
                          <FaChevronDown className={`text-sm ${mobileVisaOpen ? 'text-[#d0a850]' : 'text-white/20'}`} />
                        </m.div>
                      </button>
                      
                      <AnimatePresence>
                        {mobileVisaOpen && (
                          <m.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-white/[0.02] rounded-xl mb-4"
                          >
                            <div className="py-2 flex flex-col">
                              {visaServices.map((service, idx) => (
                                service.subItems ? (
                                  <div key={idx} className="px-4">
                                    <button 
                                      onClick={() => setMobileLangTestOpen(!mobileLangTestOpen)}
                                      className="w-full flex items-center justify-start gap-2 py-4 text-white/80 hover:text-[#d0a850] text-sm font-bold bg-transparent border-none cursor-pointer"
                                    >
                                      <span>{service.name}</span>
                                      <m.div 
                                        animate={{ rotate: mobileLangTestOpen ? 180 : 0 }}
                                      >
                                        <FaCaretDown className="text-xs opacity-40" />
                                      </m.div>
                                    </button>
                                    
                                    <AnimatePresence>
                                      {mobileLangTestOpen && (
                                        <m.div 
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="overflow-hidden border-l border-[#d0a850]/20 ml-2 mb-2"
                                        >
                                          {service.subItems.map((sub, subIdx) => (
                                            <Link 
                                              key={subIdx} 
                                              href={sub.href} 
                                              onClick={() => setMenuOpen(false)} 
                                              className="block px-6 py-3 text-white/60 hover:text-[#d0a850] text-xs font-medium no-underline"
                                            >
                                              {sub.name}
                                            </Link>
                                          ))}
                                        </m.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ) : (
                                  <Link 
                                    key={idx} 
                                    href={service.href} 
                                    onClick={() => setMenuOpen(false)} 
                                    className="px-8 py-4 text-white/70 hover:text-[#d0a850] hover:bg-white/5 text-sm font-medium no-underline transition-all"
                                  >
                                    {service.name}
                                  </Link>
                                )
                              ))}
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <Link href="/partners" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] py-5 text-xl font-bold no-underline transition-colors border-b border-white/5">Partners</Link>
                    <Link href="/clients" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] py-5 text-xl font-bold no-underline transition-colors border-b border-white/5">Clients</Link>
                    <Link href="/blogs" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] py-5 text-xl font-bold no-underline transition-colors border-b border-white/5">Blogs</Link> 
                  </div>
                </nav>
              </div>

              {/* Drawer Footer */}
              <div className="p-8 border-t border-white/5 mt-auto bg-black/20">
                <Link 
                  href="/contact" 
                  onClick={() => setMenuOpen(false)} 
                  className="block w-full bg-[#d0a850] text-black text-center py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#b89445] transition-all no-underline shadow-lg"
                >
                  Book Consultation
                </Link>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
});

export default Header;
