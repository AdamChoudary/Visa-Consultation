"use client";

import { useState } from "react";
import Link from "next/link";
import { createUser } from "@/app/actions/user";

export default function CreateUserPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await createUser(formData);
    
    if (result?.error) {
      setError(result.error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-200">
      <header className="bg-slate-800 shadow-md p-4 flex justify-between items-center">
        <Link href="/admin/users">
          <h1 className="text-xl font-bold text-white tracking-wide hover:text-orange-400 transition-colors">
            &larr; Back to Users
          </h1>
        </Link>
      </header>

      <main className="flex-1 p-8 max-w-2xl mx-auto w-full">
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Add New User</h2>

          {error && (
            <div className="bg-red-500/20 text-red-400 p-4 rounded-lg mb-6 text-sm font-medium border border-red-500/50">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                placeholder="Enter full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                placeholder="user@thevisaconsultancy.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Password</label>
              <input 
                type="password" 
                name="password" 
                required 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                placeholder="Secure password"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Role</label>
              <select 
                name="role"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-green-500 transition-colors"
              >
                <option value="admin">Admin</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </div>

            <div className="pt-4 border-t border-slate-700 flex justify-end">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg shadow-green-500/20"
              >
                {isSubmitting ? "Saving..." : "Create User"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
