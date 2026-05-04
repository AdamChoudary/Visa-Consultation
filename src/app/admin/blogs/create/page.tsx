"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import Link from "next/link";
import { createBlog } from "@/app/actions/blog";
import { useRouter } from "next/navigation";

// React Quill SSR issues fix
// react-quill-new for React 19 compatibility
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

export default function CreateBlogPage() {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("content", content); // Add quill content manually
    
    try {
      const result = await createBlog(formData);
      if (result?.error) {
        setError(result.error);
        setIsSubmitting(false);
      } else {
        router.push("/admin/blogs");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-black heading-serif uppercase tracking-widest text-[#d0a850]">Create Article</h1>
          <p className="text-gray-400 mt-2 font-bold uppercase tracking-widest text-xs">Share news with your audience</p>
        </div>
        <Link href="/admin/blogs" className="text-gray-400 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em] no-underline">
          &larr; Cancel & Return
        </Link>
      </div>

      <div className="bg-white/5 border border-[#d0a850]/10 p-10 md:p-16 rounded-[40px] backdrop-blur-md">
        {error && (
          <div className="bg-red-500/10 text-red-400 p-6 rounded-2xl mb-10 text-xs font-black uppercase tracking-widest border border-red-500/20">
            <i className="fas fa-exclamation-triangle mr-2"></i> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          
          <div className="space-y-4">
            <label className="text-[10px] font-black text-[#d0a850] uppercase tracking-[0.3em]">Article Title</label>
            <input 
              type="text" 
              name="title" 
              required 
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-[#d0a850] transition-all font-bold text-lg placeholder:text-gray-600"
              placeholder="Enter a compelling headline..."
            />
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-black text-[#d0a850] uppercase tracking-[0.3em]">Content Editor</label>
            <div className="bg-white rounded-3xl overflow-hidden text-black min-h-[500px]">
              <ReactQuill 
                theme="snow" 
                value={content} 
                onChange={setContent} 
                modules={modules}
                className="h-full"
                placeholder="Start writing your story..."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-[#d0a850] uppercase tracking-[0.3em]">Publishing Status</label>
              <select 
                name="status"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-[#d0a850] transition-all font-bold text-sm uppercase tracking-widest appearance-none cursor-pointer"
              >
                <option value="draft" className="bg-[#0f1921]">Draft (Hidden)</option>
                <option value="published" className="bg-[#0f1921]">Published (Live)</option>
              </select>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex justify-end">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-gold !px-16 !py-5 shadow-[0_20px_50px_rgba(208,168,80,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : "Publish Article"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
