"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const visaServices = [
    { name: 'Student Visa', href: '/studentvisa' },
    { name: 'Visit Visas', href: '/visitvisas' },
    { name: 'Immigration', href: '/immigration' },
    { name: 'Appointments', href: '/appointments' },
    { name: 'Work Visas', href: '/workvisas' },
    { name: 'Family Reunion', href: '/familyreunion' },
    { 
      name: 'Language Test', 
      subItems: [
        { name: 'TOEFL Test', href: '/toefl-test' },
        { name: 'PTE Test', href: '/pte-test' },
        { name: 'IELTS Test', href: '/ielts' },
        { name: 'Duolingo Test', href: '/duolingo' }
      ]
    },
  ];

  return (
    <header className="bg-[#0f1921] py-3 sticky top-0 z-50 border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 no-underline group z-[60]">
          <div className="relative">
            <Image 
              src="/logo.png" 
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
            <li><Link href="/" className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest no-underline">Home</Link></li>
            
            {/* Dropdown for Visa Services */}
            <li 
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest bg-transparent border-none cursor-pointer flex items-center gap-2">
                Visa Services <i className={`fas fa-chevron-down text-[10px] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute left-0 mt-2 w-64 bg-[#0f1921] border border-[#d0a850]/30 rounded-xl shadow-2xl transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="py-2">
                  {visaServices.map((service, idx) => (
                    service.subItems ? (
                      <div key={idx} className="relative group/sub">
                        <div className="w-full text-left flex items-center justify-between px-6 py-3 text-white hover:bg-[#d0a850] hover:text-black transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">
                          {service.name}
                          <i className="fas fa-caret-down -rotate-90 group-hover/sub:text-black"></i>
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
            </li>

            <li><Link href="/partners" className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest no-underline">Partners</Link></li>
            <li><Link href="/clients" className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest no-underline">Clients</Link></li>
            <li><Link href="/blogs" className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest no-underline">Blogs</Link></li>
            <li><Link href="/contact" className="text-white hover:text-[#d0a850] transition-colors text-sm font-bold uppercase tracking-widest no-underline">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Toggle Button (Only visible when menu is closed) */}
        {!menuOpen && (
          <button 
            className="lg:hidden text-white text-2xl bg-transparent border-none focus:outline-none p-2 z-[60]" 
            onClick={() => setMenuOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-[70]"
            />

            {/* Side Drawer */}
            <motion.div 
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
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto px-8 py-10">
                <nav className="flex flex-col gap-10">
                  <div className="flex flex-col gap-6">
                    <Link href="/" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] text-2xl font-bold no-underline transition-colors">Home</Link>
                    <Link href="/partners" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] text-2xl font-bold no-underline transition-colors">Partners</Link>
                    <Link href="/clients" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] text-2xl font-bold no-underline transition-colors">Clients</Link>
                    <Link href="/blogs" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] text-2xl font-bold no-underline transition-colors">Blogs</Link>
                  </div>

                  <div className="h-[1px] w-12 bg-[#d0a850]/30"></div>

                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="h-[1px] flex-1 bg-white/5"></div>
                      <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Visa Services</span>
                      <div className="h-[1px] flex-1 bg-white/5"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {visaServices.map((service, idx) => (
                        <div key={idx} className="space-y-3">
                          {service.subItems ? (
                            <>
                              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block">{service.name}</span>
                              <div className="grid grid-cols-2 gap-2 ml-2">
                                {service.subItems.map((sub, subIdx) => (
                                  <Link 
                                    key={subIdx} 
                                    href={sub.href} 
                                    onClick={() => setMenuOpen(false)} 
                                    className="text-white hover:text-[#d0a850] text-xs font-medium no-underline py-1"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link 
                              href={service.href} 
                              onClick={() => setMenuOpen(false)} 
                              className="text-white hover:text-[#d0a850] text-base font-medium no-underline block"
                            >
                              {service.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
