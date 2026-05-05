import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f1927] pt-24 pb-12 mt-0 border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 text-center md:text-left">
        
        {/* About Column */}
        <div className="flex flex-col text-center items-center md:items-center space-y-6">
          <h4 className="text-[#d0a860] text-3xl font-semibold tracking-[0.06em]">About</h4>
          <p className="text-gray-300 text-base leading-relaxed font-medium text-center">
            The Visa Consultancy is a professional immigration advisory firm providing expert solutions for study, work, business, and permanent residency visas. We focus on transparency, trust, and delivering successful visa outcomes for our clients worldwide.
            Partner with us to turn your international aspirations into reality with our dedicated support.
          </p>
        </div>

        {/* Services Column */}
        <div className="flex flex-col items-center md:items-center space-y-6">
          <h4 className="text-[#d0a860] text-3xl font-semibold tracking-[0.06em]">Our Services</h4>
          <ul className="text-white space-y-3 text-base flex flex-col justify-center items-center list-none p-0 font-medium ">
            <li className="flex items-center gap-3"><i className="fas fa-check text-xs text-[#d0a860]"></i> Study Visa Assistance</li>
            <li className="flex items-center gap-3"><i className="fas fa-check text-xs text-[#d0a860]"></i> Work Permit Processing</li>
            <li className="flex items-center gap-3"><i className="fas fa-check text-xs text-[#d0a860]"></i> Immigration & PR Programs</li>
            <li className="flex items-center gap-3"><i className="fas fa-check text-xs text-[#d0a860]"></i> Business & Investor Visas</li>
            <li className="flex items-center gap-3"><i className="fas fa-check text-xs text-[#d0a850]"></i> Complete Documentation Support</li>
          </ul>
        </div> 
          {/* Social Icons positioned here according to image layout */}
        

        {/* Contact Column */}
        <div className="flex flex-col items-center md:items-center text-center space-y-6">
          <h4 className="text-[#d0a860] text-3xl font-semibold tracking-[0.06em]">Contact Us</h4>
          <ul className="text-white space-y-3 text-sm md:text-base list-none p-0 flex-col justify-center items-center font-medium text-center md:text-center">
            <li className="flex-row items-center space-x-2">
              <i className="fas fa-map-marker-alt mb-5 text-[#d0a860] text-xl"></i>
              <span>Office# 104, Mezzanine Floor , Embassy Gardens, Sector C1, Bahria Enclave, Islamabad</span>
            </li>
            <li className=" flex-row items-center space-x-2">
              <i className="fas fa-phone-alt text-[#d0a860] text-xl"></i>
              <span className="text-lg md:text-lg">+92 333 5965199</span>
            </li>
            <li className=" flex-row items-center space-x-2">
              <i className="fas fa-envelope text-[#d0a860] text-xl"></i>
              <span>info@thevisaconsultancy.com</span>
            </li>

            <li className=" flex-row items-center space-x-2">
              <i className="fas fa-clock text-[#d0a860] text-xl"></i>
              <span>Mon – Sat | 11:00 AM – 7:00 PM</span>
            </li> 
             <li className=" space-x-6 ">
            <a href="https://www.facebook.com/share/1AVzHjEm71/" target="_blank" rel="noreferrer" className="text-white hover:text-[#d0a850] text-3xl transition-all">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.tiktok.com/@the.visa.consulta6" target="_blank" rel="noreferrer" className="text-white hover:text-[#d0a850] text-3xl transition-all">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.youtube.com/@TheVisaConsultancy1" target="_blank" rel="noreferrer" className="text-white hover:text-[#d0a850] text-3xl transition-all">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          </ul>  
        </div>
      </div>

      <div className="container mx-auto px-6 mt-32 pt-8 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-black italic">
          © 2026 The Visa Consultancy. Crafted for Excellence.
        </p>
      </div>

    </footer>
  );
}
