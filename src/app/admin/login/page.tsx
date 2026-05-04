"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";

const initialState = { error: "" };

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <div className="bg-[#0f1921] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-[440px] w-full bg-white/5 border border-[#d0a850]/20 p-12 md:p-16 rounded-[50px] backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
        
        <div className="text-center mb-10">
          <img src="/images/TheVisaConsultancy.png" alt="Logo" className="h-16 w-auto inline-block mb-8 drop-shadow-[0_0_20px_rgba(208,168,80,0.3)]" />
          <h2 className="text-3xl font-black heading-serif text-white uppercase tracking-[0.1em]">
            Admin <span className="text-[#d0a850]">Access</span>
          </h2>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Authorized Personnel Only</p>
        </div>

        {state?.error && (
          <div className="bg-red-500/10 text-red-400 p-5 rounded-2xl mb-8 text-xs font-black uppercase tracking-widest text-center border border-red-500/20 animate-shake">
            <i className="fas fa-exclamation-circle mr-2"></i> {state.error}
          </div>
        )}

        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-[#d0a850] uppercase tracking-widest ml-4">Credential Identity</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              required 
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-[#d0a850] transition-all font-bold placeholder:text-gray-600"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black text-[#d0a850] uppercase tracking-widest ml-4">Security Passcode</label>
            <input 
              type="password" 
              name="password" 
              placeholder="••••••••" 
              required 
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-[#d0a850] transition-all font-bold placeholder:text-gray-600"
            />
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={isPending}
              className="btn-gold !w-full !py-5 !text-base shadow-[0_15px_40px_rgba(208,168,80,0.2)]"
            >
              {isPending ? "Validating..." : "Sign In to Portal"}
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <a href="/" className="text-gray-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest no-underline">
            &larr; Back to Main Site
          </a>
        </div>
      </div>
    </div>
  );
}
