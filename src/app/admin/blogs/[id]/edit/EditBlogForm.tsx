"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { updateBlog } from "@/app/actions/blog";
import { useRouter } from "next/navigation";

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

export default function EditBlogForm({ blog }: { blog: any }) {
  const [content, setContent] = useState(blog.content);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(blog.imageUrl || "");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setImageUrl(data.url);
      } else {
        setError(data.error || "Upload failed");
      }
    } catch (err) {
      setError("Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("content", content);
    formData.append("imageUrl", imageUrl);
    
    try {
      const result = await updateBlog(blog.id, formData);
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
    <div className="bg-white/5 border border-[#d0a850]/10 p-10 md:p-16 rounded-[40px] backdrop-blur-md pb-20">
      {error && (
        <div className="bg-red-500/10 text-red-400 p-6 rounded-2xl mb-10 text-xs font-black uppercase tracking-widest border border-red-500/20">
          <i className="fas fa-exclamation-triangle mr-2"></i> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <label className="text-[10px] font-black text-[#d0a850] uppercase tracking-[0.3em]">Article Title</label>
            <input 
              type="text" 
              name="title" 
              defaultValue={blog.title}
              required 
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-[#d0a850] transition-all font-bold text-lg placeholder:text-gray-600"
            />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black text-[#d0a850] uppercase tracking-[0.3em]">Category</label>
            <select 
              name="category"
              defaultValue={blog.category || "News"}
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-[#d0a850] transition-all font-bold text-sm uppercase tracking-widest appearance-none cursor-pointer"
            >
              <option value="News" className="bg-[#0f1921]">General News</option>
              <option value="Visa Updates" className="bg-[#0f1921]">Visa Updates</option>
              <option value="Immigration" className="bg-[#0f1921]">Immigration</option>
              <option value="Travel Tips" className="bg-[#0f1921]">Travel Tips</option>
            </select>
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="space-y-4">
          <label className="text-[10px] font-black text-[#d0a850] uppercase tracking-[0.3em]">Featured Image</label>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-64 h-40 bg-white/5 border border-dashed border-white/20 rounded-2xl overflow-hidden relative group">
              {imageUrl ? (
                <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <i className="fas fa-image text-3xl mb-2"></i>
                  <span className="text-[9px] uppercase tracking-widest">No Image</span>
                </div>
              )}
              {isUploading && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-[#d0a850] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <div className="flex-1 space-y-4">
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden" 
                id="image-edit-upload"
              />
              <label 
                htmlFor="image-edit-upload"
                className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full cursor-pointer transition-all uppercase text-[10px] tracking-widest border border-white/5"
              >
                {isUploading ? "Uploading..." : "Change Image"}
              </label>
              <p className="text-gray-500 text-[9px] uppercase tracking-widest">Recommended size: 1200x800px (Max 5MB)</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-black text-[#d0a850] uppercase tracking-[0.3em]">Article Content</label>
            <span className="text-[9px] font-medium text-gray-500 uppercase tracking-widest italic">Rich text editor enabled</span>
          </div>
          <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
            <ReactQuill 
              theme="snow" 
              value={content} 
              onChange={setContent} 
              modules={modules}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <label className="text-[10px] font-black text-[#d0a850] uppercase tracking-[0.3em]">Publishing Status</label>
            <select 
              name="status"
              defaultValue={blog.status}
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
            disabled={isSubmitting || isUploading}
            className="btn-gold !px-16 !py-5 shadow-[0_20px_50px_rgba(208,168,80,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Updating..." : "Update Article"}
          </button>
        </div>
      </form>
    </div>
  );
}
