"use client";

import Link from "next/link";
import { m } from "framer-motion";

interface Blog {
  id: string | number;
  slug: string;
  title: string;
  content: string;
  imageUrl: string | null;
  category: string | null;
  createdAt: Date | string;
  author: {
    name: string | null;
  } | null;
}

export default function BlogGrid({ blogs }: { blogs: Blog[] }) {
  if (blogs.length === 0) {
    return (
      <div className="col-span-full text-center py-20 bg-white/5 rounded-3xl border border-white/10 px-6">
        <h3 className="text-xl font-bold text-[#d0a850] mb-2">No Articles Yet</h3>
        <p className="text-gray-400 text-sm">Our experts are currently drafting new insights.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
      {blogs.map((blog, idx) => (
        <m.div
          key={blog.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <Link 
            href={`/blogs/${blog.slug}`}
            className="group flex flex-col no-underline h-full"
          >
            <div className="relative bg-[#16222c] rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:translate-y-[-5px] flex flex-col h-full border border-white/5 hover:border-[#d0a850]/30">
              <div className="relative h-56 md:h-60 overflow-hidden">
                <img 
                  src={blog.imageUrl || "/page images/language-test/ielts.webp"} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#d0a850] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {blog.category || "Updates"}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-[11px] font-medium text-gray-500 uppercase tracking-widest">
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                  <span>By {blog.author?.name}</span>
                </div>

                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-[#d0a850] transition-colors line-clamp-2">
                  {blog.title}
                </h2>

                <div 
                  className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6"
                  dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + '...' }}
                />

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center text-[#d0a850] font-bold text-sm tracking-wide">
                  Read Full Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        </m.div>
      ))}
    </div>
  );
}
