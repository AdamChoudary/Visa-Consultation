"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const visaServices = [
    { name: 'Student Visa', href: '/studentvisa' },
    { name: 'Immigration', href: '/immigration' },
    { name: 'Visit Visas', href: '/visitvisas' },
    { name: 'Work Visas', href: '/workvisas' },
    { name: 'Family Reunion', href: '/familyreunion' },
    { name: 'Appointments', href: '/appointments' },
  ];

  return (
    <header className="bg-[#0f1921] py-6 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 no-underline group">
          <div className="relative">
            <img src="/images/TheVisaConsultancy.png" alt="Logo" className="h-14 w-auto drop-shadow-2xl" />
          </div>
          <span className="text-white text-2xl md:text-3xl font-black tracking-tight heading-serif uppercase">
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
              <div className={`absolute left-0 mt-2 w-56 bg-[#0f1921] border border-[#d0a850]/30 rounded-xl shadow-2xl transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="py-2">
                  {visaServices.map((service, idx) => (
                    <Link 
                      key={idx} 
                      href={service.href}
                      className="block px-6 py-3 text-white hover:bg-[#d0a850] hover:text-black transition-colors text-xs font-bold uppercase tracking-widest no-underline"
                    >
                      {service.name}
                    </Link>
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

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white text-3xl bg-transparent border-none focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-[#0f1921] z-40 transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-black uppercase tracking-[0.2em] overflow-y-auto py-20">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] no-underline">Home</Link>
          
          <div className="flex flex-col items-center gap-4">
            <span className="text-[#d0a850] text-sm">Visa Services</span>
            {visaServices.map((service, idx) => (
              <Link key={idx} href={service.href} onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] no-underline text-base">
                {service.name}
              </Link>
            ))}
          </div>

          <Link href="/partners" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] no-underline">Partners</Link>
          <Link href="/clients" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] no-underline">Clients</Link>
          <Link href="/blogs" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#d0a850] no-underline">Blogs</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-[#d0a850] border-2 border-[#d0a850] px-8 py-3 rounded-full no-underline">Contact</Link>
        </div>
      </div>
    </header>
  );
}
