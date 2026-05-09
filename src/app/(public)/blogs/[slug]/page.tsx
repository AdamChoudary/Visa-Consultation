import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  imageUrl: string | null;
  category: string | null;
  status: string;
  createdAt: Date;
  authorId: number;
  author: {
    name: string;
  };
}


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const blogData = await prisma.blog.findUnique({
    where: { slug },
    include: { author: true },
  });

  if (!blogData || blogData.status !== "published") {
    notFound();
  }

  const blog = blogData as unknown as Blog;

  return (
    <article className="bg-[#0f1921] min-h-screen text-white pt-16 md:pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Editorial Content */}
          <div className="w-full lg:w-[65%] space-y-10">
            
            {/* Publisher & Heading Section */}
            <header className="space-y-6">
              <div className="flex flex-col gap-6">
                {/* 1. Publisher Info on Top */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#d0a850]/10 border border-[#d0a850]/20 flex items-center justify-center text-[#d0a850] font-bold text-xs">
                    {blog.author?.name?.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#d0a850] font-black text-[10px] uppercase tracking-[0.3em] leading-none">
                      {blog.author?.name}
                    </p>
                    <p className="text-gray-600 text-[8px] uppercase tracking-[0.2em] mt-1 font-bold">Official Publisher</p>
                  </div>
                </div>

                {/* 2. Metadata & Title */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-500 text-[9px] uppercase tracking-[0.4em] font-bold">
                    <span className="text-[#d0a850]/80">{blog.category || "Consultancy Report"}</span>
                    <span className="opacity-20">•</span>
                    <time>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold heading-serif tracking-tight text-white leading-tight">
                    {blog.title}
                  </h1>
                </div>
              </div>
            </header>

            {/* Narrative Content */}
            <div 
              className="prose prose-invert max-w-none break-words whitespace-normal
                         prose-p:text-gray-400 prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-[16px] prose-p:font-medium prose-p:text-left
                         prose-headings:text-white prose-headings:heading-serif prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6
                         prose-strong:text-[#d0a850] prose-a:text-[#d0a850] prose-a:no-underline hover:prose-a:underline
                         prose-blockquote:border-l-2 prose-blockquote:border-[#d0a850] prose-blockquote:bg-[#16222c]/40 prose-blockquote:py-5 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:italic
                         prose-img:rounded-xl prose-img:shadow-2xl border-white/5"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Right Column: 35% width for Featured Image */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-48">
            <div className="relative group">
              {/* Soft decorative frame */}
              <div className="absolute -inset-4 border border-[#d0a850]/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)] border border-white/10 bg-[#16222c] relative group">
                {/* Visual Placeholder for stability */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Consultancy Asset</span>
                </div>
                <img 
                  src={blog.imageUrl || "/page images/language-test/ielts.jpg"} 
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] relative z-10"
                />
              </div>
              <div className="mt-8 text-center lg:text-left space-y-4">
                <div className="h-[1px] w-12 bg-[#d0a850]/40 mx-auto lg:mx-0"></div>
                <p className="text-gray-600 text-[10px] uppercase tracking-[0.5em] font-black italic">
                  Documentary Asset • Ver: {blog.slug.substring(0, 8).toUpperCase()}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
