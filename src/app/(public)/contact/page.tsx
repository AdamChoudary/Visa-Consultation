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
    <div className="bg-[#0f1921] pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white heading-serif uppercase tracking-[0.2em] mb-6">Application Form</h1>
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            Please complete the application form below with accurate details. Our expert consultants will review each case to provide professional guidance.
          </p>
        </div>

        {status?.success && (
          <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 md:p-6 rounded-2xl mb-8 md:mb-12 text-center font-bold animate-fade-in text-sm md:text-base">
            ✅ Your application has been submitted successfully! We will contact you shortly.
          </div>
        )}

        {status?.error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 md:p-6 rounded-2xl mb-8 md:mb-12 text-center font-bold animate-fade-in text-sm md:text-base">
            ❌ {status.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12 bg-white/5 p-6 md:p-12 rounded-3xl md:rounded-[40px] border border-white/10 shadow-2xl">
          {/* PERSONAL INFORMATION */}
          <div className="space-y-8">
            <div className="border-b border-[#d0a850]/20 pb-4">
              <h3 className="text-[#d0a850] text-xl md:text-2xl font-bold uppercase tracking-widest">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-widest ml-1">Full Name</label>
                <input type="text" name="full_name" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white focus:border-[#d0a850] outline-none transition-all text-sm" required />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-widest ml-1">Date of Birth</label>
                <input type="date" name="date_of_birth" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white focus:border-[#d0a850] outline-none transition-all text-sm" required />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-widest ml-1">Marital Status</label>
                <div className="relative">
                  <select name="marital_status" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white focus:border-[#d0a850] outline-none transition-all appearance-none text-sm" required defaultValue="">
                    <option value="" disabled>Select Status</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Widowed</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#d0a850]">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-widest ml-1">City</label>
                <input type="text" name="city" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white focus:border-[#d0a850] outline-none transition-all text-sm" required />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-widest ml-1">Phone Number</label>
                <input type="text" name="phone" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white focus:border-[#d0a850] outline-none transition-all text-sm" required />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-widest ml-1">Email Address</label>
                <input type="email" name="email" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white focus:border-[#d0a850] outline-none transition-all text-sm" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-widest ml-1">Current Profession / Job</label>
              <input type="text" name="profession" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white focus:border-[#d0a850] outline-none transition-all text-sm" required />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-widest ml-1">Additional Information</label>
              <textarea name="message" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white focus:border-[#d0a850] outline-none transition-all text-sm" rows={4} placeholder="Tell us more about your case..."></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-widest ml-1">Any Previous Visa Refusal?</label>
              <div className="relative">
                <select name="visa_refusal" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white focus:border-[#d0a850] outline-none transition-all appearance-none text-sm" required defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#d0a850]">
                  <i className="fas fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
          </div>

          {/* PURPOSE */}
          <div className="space-y-8 pt-4">
            <div className="border-b border-[#d0a850]/20 pb-4">
              <h3 className="text-[#d0a850] text-xl md:text-2xl font-bold uppercase tracking-widest">Purpose of Application</h3>
            </div>
            <div className="space-y-2">
              <label className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-widest ml-1">Application Type</label>
              <div className="relative">
                <select name="visa_type" id="visaType" className="w-full bg-[#0b1218] border-2 border-[#d0a850]/30 rounded-xl p-4 md:p-5 text-white font-bold focus:border-[#d0a850] outline-none transition-all text-base md:text-lg appearance-none" required value={visaType} onChange={handleVisaTypeChange}>
                  <option value="" disabled>Select Application Type</option>
                  <option value="visit">Visit Visa</option>
                  <option value="study">Study Visa</option>
                  <option value="work">Work Visa</option>
                  <option value="immigration">Immigration / PR</option>
                  <option value="family">Family Reunion</option>
                  <option value="appointment">Appointments</option>
                  <option value="other">Other Services</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#d0a850]">
                  <i className="fas fa-chevron-down text-lg"></i>
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC FIELDS */}
          <div className="space-y-8">
            {visaType === "visit" && (
              <div className="space-y-6 animate-fade-in bg-white/[0.02] p-5 md:p-8 rounded-2xl border border-white/5">
                <h3 className="text-white text-lg font-bold uppercase tracking-widest">Visit Visa Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <input type="text" name="visit_country" placeholder="Preferred Country" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                  <select name="travel_history" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" defaultValue="">
                    <option value="" disabled>Travel History?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <textarea name="visited_countries" placeholder="If Yes → Which Countries?" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm"></textarea>
              </div>
            )}

            {visaType === "study" && (
              <div className="space-y-6 animate-fade-in bg-white/[0.02] p-5 md:p-8 rounded-2xl border border-white/5">
                <h3 className="text-white text-lg font-bold uppercase tracking-widest">Study Visa Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <select name="highest_qualification" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" defaultValue="">
                    <option value="" disabled>Highest Qualification</option>
                    <option>Matric</option>
                    <option>Intermediate</option>
                    <option>Bachelor</option>
                    <option>Master</option>
                  </select>
                  <select name="apply_for" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" defaultValue="">
                    <option value="" disabled>Want to Apply For</option>
                    <option>Bachelor</option>
                    <option>Master</option>
                    <option>PhD</option>
                  </select>
                  <input type="text" name="last_degree_result" placeholder="Percentage / CGPA" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                  <input type="text" name="study_country" placeholder="Desired Study Country" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                </div>
              </div>
            )}

            {visaType === "work" && (
              <div className="space-y-6 animate-fade-in bg-white/[0.02] p-5 md:p-8 rounded-2xl border border-white/5">
                <h3 className="text-white text-lg font-bold uppercase tracking-widest">Work Visa Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <input type="text" name="work_country" placeholder="Preferred Country" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                  <input type="text" name="work_profession" placeholder="Current Occupation" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                  <input type="number" name="work_experience" placeholder="Years of Experience" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                  <input type="text" name="work_skills" placeholder="Key Skills / Trade" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                </div>
              </div>
            )}

            {visaType === "immigration" && (
              <div className="space-y-6 animate-fade-in bg-white/[0.02] p-5 md:p-8 rounded-2xl border border-white/5">
                <h3 className="text-white text-lg font-bold uppercase tracking-widest">Immigration / PR Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <input type="text" name="imm_country" placeholder="Preferred Country" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                  <input type="text" name="imm_qualification" placeholder="Highest Qualification" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                  <input type="text" name="imm_profession" placeholder="Occupation" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                  <input type="number" name="imm_experience" placeholder="Work Experience (Years)" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                </div>
              </div>
            )}

            {visaType === "family" && (
              <div className="space-y-6 animate-fade-in bg-white/[0.02] p-5 md:p-8 rounded-2xl border border-white/5">
                <h3 className="text-white text-lg font-bold uppercase tracking-widest">Family Reunion Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <input type="text" name="family_country" placeholder="Sponsoring Country" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                  <input type="text" name="family_relation" placeholder="Relationship with Sponsor" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" />
                  <select name="sponsor_status" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" defaultValue="">
                    <option value="" disabled>Sponsor's Status</option>
                    <option>Citizen</option>
                    <option>PR Holder</option>
                    <option>Work Permit</option>
                  </select>
                </div>
              </div>
            )}

            {visaType === "appointment" && (
              <div className="space-y-6 animate-fade-in bg-white/[0.02] p-5 md:p-8 rounded-2xl border border-white/5">
                <h3 className="text-white text-lg font-bold uppercase tracking-widest">Appointment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <select name="appointment_reason" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" defaultValue="">
                    <option value="" disabled>Reason for Appointment</option>
                    <option>Initial Consultation</option>
                    <option>Case Review</option>
                    <option>Document Verification</option>
                    <option>Embassy Interview Prep</option>
                  </select>
                  <select name="urgency" className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" defaultValue="">
                    <option value="" disabled>Urgency Level</option>
                    <option>Normal</option>
                    <option>Urgent</option>
                    <option>High Priority</option>
                  </select>
                </div>
              </div>
            )}

            {visaType === "other" && (
              <div className="space-y-6 animate-fade-in bg-white/[0.02] p-5 md:p-8 rounded-2xl border border-white/5">
                <h3 className="text-white text-lg font-bold uppercase tracking-widest">Other Service Details</h3>
                <textarea name="other_service_details" placeholder="Please specify the service you are looking for..." className="w-full bg-[#0b1218] border border-white/10 rounded-xl p-3 md:p-4 text-white outline-none text-sm" rows={3}></textarea>
              </div>
            )}
          </div>

          <button type="submit" disabled={isSubmitting} className="bg-[#d0a850] text-black w-full py-4 md:py-6 rounded-2xl font-bold text-base md:text-xl shadow-[0_10px_30px_rgba(208,168,80,0.3)] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-[0.2em] hover:bg-white transition-all">
            {isSubmitting ? "Processing..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}

