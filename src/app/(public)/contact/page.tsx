"use client";

import { useState } from "react";
import { sendEmailAction } from "@/app/actions/email";

export default function Contact() {
  const [visaType, setVisaType] = useState("");
  const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVisaTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVisaType(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmailAction(formData);
    
    setIsSubmitting(false);
    setStatus(result);
    
    if (result.success) {
      e.currentTarget.reset();
      setVisaType("");
    }
  };

  return (
    <div className="bg-[#0f1921] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title uppercase tracking-[0.2em] font-black">Application Form</h2>
          <p className="text-gray-400 mt-6 leading-relaxed font-medium max-w-2xl mx-auto">
            Please complete the application form below with accurate details. Our expert consultants will review each case to provide professional guidance.
          </p>
        </div>

        {status?.success && (
          <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-6 rounded-2xl mb-12 text-center font-bold animate-fade-in">
            ✅ Your application has been submitted successfully! We will contact you shortly.
          </div>
        )}

        {status?.error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-6 rounded-2xl mb-12 text-center font-bold animate-fade-in">
            ❌ {status.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-12 bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
          {/* PERSONAL INFORMATION */}
          <div>
            <h3 className="text-[#d0a850] text-2xl font-bold uppercase tracking-widest mb-8 border-b border-[#d0a850]/20 pb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-400 text-xs uppercase font-bold tracking-widest ml-1">Full Name</label>
                <input type="text" name="full_name" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white focus:border-[#d0a850] outline-none transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-xs uppercase font-bold tracking-widest ml-1">Date of Birth</label>
                <input type="date" name="date_of_birth" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white focus:border-[#d0a850] outline-none transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-xs uppercase font-bold tracking-widest ml-1">Marital Status</label>
                <select name="marital_status" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white focus:border-[#d0a850] outline-none transition-all appearance-none" required defaultValue="">
                  <option value="" disabled>Select Status</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Widowed</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-xs uppercase font-bold tracking-widest ml-1">City</label>
                <input type="text" name="city" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white focus:border-[#d0a850] outline-none transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-xs uppercase font-bold tracking-widest ml-1">Phone Number</label>
                <input type="text" name="phone" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white focus:border-[#d0a850] outline-none transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-xs uppercase font-bold tracking-widest ml-1">Email Address</label>
                <input type="email" name="email" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white focus:border-[#d0a850] outline-none transition-all" required />
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <label className="text-gray-400 text-xs uppercase font-bold tracking-widest ml-1">Current Profession / Job</label>
              <input type="text" name="profession" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white focus:border-[#d0a850] outline-none transition-all" required />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-xs uppercase font-bold tracking-widest ml-1">Additional Information</label>
            <textarea name="message" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white focus:border-[#d0a850] outline-none transition-all" rows={4}></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-xs uppercase font-bold tracking-widest ml-1">Any Previous Visa Refusal?</label>
            <select name="visa_refusal" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white focus:border-[#d0a850] outline-none transition-all" required defaultValue="">
              <option value="" disabled>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* PURPOSE */}
          <div className="pt-8">
            <h3 className="text-[#d0a850] text-2xl font-bold uppercase tracking-widest mb-8 border-b border-[#d0a850]/20 pb-4">Purpose of Application</h3>
            <div className="space-y-2">
              <label className="text-gray-400 text-xs uppercase font-bold tracking-widest ml-1">Application Type</label>
              <select name="visa_type" id="visaType" className="w-full bg-[#0b1218] border-2 border-[#d0a850]/30 rounded-xl p-5 text-white font-bold focus:border-[#d0a850] outline-none transition-all text-lg" required value={visaType} onChange={handleVisaTypeChange}>
                <option value="" disabled>Select Application Type</option>
                <option value="visit">Visit Visa</option>
                <option value="study">Study Visa</option>
                <option value="work">Work Visa</option>
                <option value="immigration">Immigration / PR</option>
                <option value="family">Family Reunion</option>
                <option value="appointment">Appointments</option>
              </select>
            </div>
          </div>

          {/* DYNAMIC FIELDS */}
          <div className="space-y-8">
            {visaType === "visit" && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-white text-xl font-bold uppercase tracking-widest">Visit Visa Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="visit_country" placeholder="Preferred Country" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white outline-none" />
                  <select name="travel_history" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white outline-none" defaultValue="">
                    <option value="" disabled>Travel History?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <textarea name="visited_countries" placeholder="If Yes → Which Countries?" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white outline-none"></textarea>
              </div>
            )}

            {visaType === "study" && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-white text-xl font-bold uppercase tracking-widest">Study Visa Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select name="highest_qualification" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white outline-none" defaultValue="">
                    <option value="" disabled>Highest Qualification</option>
                    <option>Matric</option>
                    <option>Intermediate</option>
                    <option>Bachelor</option>
                    <option>Master</option>
                  </select>
                  <select name="apply_for" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white outline-none" defaultValue="">
                    <option value="" disabled>Want to Apply For</option>
                    <option>Bachelor</option>
                    <option>Master</option>
                    <option>PhD</option>
                  </select>
                  <input type="text" name="last_degree_result" placeholder="Percentage / CGPA" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white outline-none" />
                  <input type="text" name="study_country" placeholder="Desired Study Country" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white outline-none" />
                </div>
              </div>
            )}

            {visaType === "immigration" && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-white text-xl font-bold uppercase tracking-widest">Immigration / PR Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="imm_country" placeholder="Preferred Country" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white outline-none" />
                  <input type="text" name="imm_qualification" placeholder="Highest Qualification" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white outline-none" />
                  <input type="text" name="imm_profession" placeholder="Occupation" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white outline-none" />
                  <input type="number" name="imm_experience" placeholder="Work Experience (Years)" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-4 text-white outline-none" />
                </div>
              </div>
            )}
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-gold !w-full !py-6 !text-xl !rounded-2xl shadow-[0_10px_30px_rgba(208,168,80,0.3)] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-[0.2em]">
            {isSubmitting ? "Processing..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}

