import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f1921] pt-24 pb-12 mt-0 border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 text-center md:text-left">
        
        {/* About Column */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h4 className="text-[#d0a850] text-3xl font-black uppercase tracking-widest">About</h4>
          <p className="text-gray-300 text-base leading-relaxed font-medium">
            The Visa Consultancy is a professional immigration advisory firm providing expert solutions for study, work, business, and permanent residency visas. We focus on transparency, trust, and delivering successful visa outcomes for our clients worldwide.
          </p>
        </div>

        {/* Services Column */}
        <div className="flex flex-col items-center md:items-center space-y-6">
          <h4 className="text-[#d0a850] text-3xl font-black uppercase tracking-widest">Our Services</h4>
          <ul className="text-white space-y-3 text-base list-none p-0 font-bold">
            <li className="flex items-center gap-3"><i className="fas fa-check text-xs text-[#d0a850]"></i> Study Visa Assistance</li>
            <li className="flex items-center gap-3"><i className="fas fa-check text-xs text-[#d0a850]"></i> Work Permit Processing</li>
            <li className="flex items-center gap-3"><i className="fas fa-check text-xs text-[#d0a850]"></i> Immigration & PR Programs</li>
            <li className="flex items-center gap-3"><i className="fas fa-check text-xs text-[#d0a850]"></i> Business & Investor Visas</li>
            <li className="flex items-center gap-3"><i className="fas fa-check text-xs text-[#d0a850]"></i> Complete Documentation Support</li>
          </ul>
          
          {/* Social Icons positioned here according to image layout */}
          <div className="flex gap-6 pt-6">
            <a href="https://www.facebook.com/share/1AVzHjEm71/" target="_blank" rel="noreferrer" className="text-white hover:text-[#d0a850] text-3xl transition-all">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.tiktok.com/@the.visa.consulta6" target="_blank" rel="noreferrer" className="text-white hover:text-[#d0a850] text-3xl transition-all">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.youtube.com/@TheVisaConsultancy1" target="_blank" rel="noreferrer" className="text-white hover:text-[#d0a850] text-3xl transition-all">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          <h4 className="text-[#d0a850] text-3xl font-black uppercase tracking-widest">Contact Us</h4>
          <ul className="text-white space-y-6 text-sm md:text-base list-none p-0 font-bold text-center md:text-right">
            <li className="flex flex-col md:flex-row-reverse items-center gap-3">
              <i className="fas fa-map-marker-alt text-[#d0a850] text-xl"></i>
              <span>Office# 104, 1st Floor, Embassy Gardens, Sector C1, Bahria Enclave, Islamabad</span>
            </li>
            <li className="flex flex-col md:flex-row-reverse items-center gap-3">
              <i className="fas fa-phone-alt text-[#d0a850] text-xl"></i>
              <span className="text-lg md:text-xl">+92 333 5965199</span>
            </li>
            <li className="flex flex-col md:flex-row-reverse items-center gap-3">
              <i className="fas fa-envelope text-[#d0a850] text-xl"></i>
              <span>info@thevisaconsultancy.com</span>
            </li>
            <li className="flex flex-col md:flex-row-reverse items-center gap-3">
              <i className="fas fa-clock text-[#d0a850] text-xl"></i>
              <span>Mon – Sat | 11:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-gray-500 text-xs uppercase tracking-widest">© 2026 The Visa Consultancy. All Rights Reserved.</p>
      </div>

      {/* WhatsApp Floating */}
      <a href="https://wa.me/923335965199" target="_blank" rel="noreferrer" className="fixed left-6 bottom-6 w-16 h-16 bg-[#25D366] text-white flex items-center justify-center rounded-full text-3xl shadow-2xl hover:scale-110 transition-transform z-50">
        <i className="fab fa-whatsapp"></i>
      </a>
    </footer>
  );
}
