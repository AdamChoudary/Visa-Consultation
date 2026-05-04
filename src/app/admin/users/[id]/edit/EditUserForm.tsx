"use client";

import { useState } from "react";
import { updateUser } from "@/app/actions/user";

export default function EditUserForm({ user }: { user: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await updateUser(user.id, formData);
    
    if (result?.error) {
      setError(result.error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6">Edit User</h2>

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
            defaultValue={user.name}
            required 
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
          <input 
            type="email" 
            name="email" 
            defaultValue={user.email}
            required 
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            New Password <span className="text-slate-500 font-normal">(Leave blank to keep current)</span>
          </label>
          <input 
            type="password" 
            name="password" 
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Enter new password if changing..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Role</label>
          <select 
            name="role"
            defaultValue={user.role}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="admin">Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
        </div>

        <div className="pt-4 border-t border-slate-700 flex justify-end">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg shadow-blue-500/20"
          >
            {isSubmitting ? "Updating..." : "Update User"}
          </button>
        </div>
      </form>
    </div>
  );
}
