"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";

const initialState = { error: "" };

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <div className="bg-[#0b1218] min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Micro-Diamond Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='none' stroke='%23d0a850' stroke-width='0.5'/%3E%3C/svg%3E")` }}
      ></div>

      <div className="max-w-[460px] w-full bg-[#0f1921]/80 border border-[#d0a850]/20 p-12 md:p-16 rounded-[4rem] backdrop-blur-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative group overflow-hidden">
        {/* Subtle Inner Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d0a850]/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>

        <div className="text-center mb-12 relative z-10">
          <img src="/images/TheVisaConsultancy.webp" alt="Logo" className="h-12 w-auto inline-block mb-10 drop-shadow-[0_0_15px_rgba(208,168,80,0.4)]" />
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold heading-serif text-white uppercase tracking-[0.2em]">
              Strategic <span className="text-[#d0a850]">Command</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-4 bg-[#d0a850]/30"></div>
              <p className="text-[#d0a850] text-[9px] font-black uppercase tracking-[0.5em]">Authorized Portal</p>
              <div className="h-[1px] w-4 bg-[#d0a850]/30"></div>
            </div>
          </div>
        </div>

        {state?.error && (
          <div className="bg-red-500/5 text-red-400 p-5 rounded-2xl mb-10 text-[10px] font-black uppercase tracking-[0.2em] text-center border border-red-500/20">
            <i className="fas fa-shield-alt mr-2"></i> Access Denied: {state.error}
          </div>
        )}

        <form action={formAction} className="space-y-8 relative z-10">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] ml-4">Credential Identity</label>
            <div className="relative">
              <i className="fas fa-user-shield absolute left-6 top-1/2 -translate-y-1/2 text-[#d0a850]/40 text-sm"></i>
              <input 
                type="email" 
                name="email" 
                placeholder="CONSULTANT IDENTITY" 
                required 
                className="w-full bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 pl-14 text-white focus:outline-none focus:border-[#d0a850]/50 focus:bg-white/[0.05] transition-all font-bold text-xs tracking-widest placeholder:text-gray-700 uppercase"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] ml-4">Security Passcode</label>
            <div className="relative">
              <i className="fas fa-lock absolute left-6 top-1/2 -translate-y-1/2 text-[#d0a850]/40 text-sm"></i>
              <input 
                type="password" 
                name="password" 
                placeholder="••••••••" 
                required 
                className="w-full bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 pl-14 text-white focus:outline-none focus:border-[#d0a850]/50 focus:bg-white/[0.05] transition-all font-bold text-xs tracking-widest placeholder:text-gray-700"
              />
            </div>
          </div>

          <div className="pt-6">
            <button 
              type="submit" 
              disabled={isPending}
              className="w-full bg-[#d0a850] hover:bg-white text-black font-black py-6 rounded-[2rem] uppercase text-xs tracking-[0.4em] transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[#d0a850]/20 disabled:opacity-50"
            >
              {isPending ? "Authenticating..." : "Initiate Session"}
            </button>
          </div>
        </form>

        <div className="mt-16 text-center border-t border-white/5 pt-8">
          <a href="/" className="text-gray-600 hover:text-[#d0a850] transition-colors text-[9px] font-black uppercase tracking-[0.3em] no-underline">
            Terminate & Back to Site
          </a>
        </div>
      </div>
    </div>
  );
}
