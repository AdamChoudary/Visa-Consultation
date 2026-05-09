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
    <article className="bg-[#0f1921] min-h-screen text-white">
      {/* 1. Refined Minimalist Header */}
      <div className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8 text-center md:text-left">
            <Link href="/blogs" className="text-[#d0a850] hover:text-white transition-all inline-flex items-center gap-3 no-underline font-bold uppercase tracking-[0.3em] text-[10px]">
              &larr; Back to Archive
            </Link>
            
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-500 text-[10px] uppercase tracking-[0.4em] font-black">
                <span className="text-[#d0a850] border border-[#d0a850]/30 px-3 py-1 rounded-sm">{blog.category || "General Insights"}</span>
                <span>•</span>
                <time>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] heading-serif tracking-tight text-white">
                {blog.title}
              </h1>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <div className="w-10 h-10 rounded-full bg-[#16222c] border border-white/10 flex items-center justify-center text-[#d0a850] font-black text-sm">
                {blog.author?.name?.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-[11px] uppercase tracking-wider leading-none">{blog.author?.name}</p>
                <p className="text-gray-500 text-[9px] uppercase tracking-widest mt-1">Lead Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Featured Image - Clean Aspect Ratio */}
      <div className="container mx-auto px-6 max-w-5xl -mt-10 md:-mt-16">
        <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
          <img 
            src={blog.imageUrl || "/page images/language-test/ielts.jpg"} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. Article Content - Professionally Adjusted Typography */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-invert prose-lg max-w-none 
                       prose-headings:text-white prose-headings:heading-serif prose-headings:tracking-tight prose-headings:font-bold
                       prose-p:text-gray-400 prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-[17px]
                       prose-strong:text-[#d0a850] prose-a:text-[#d0a850] prose-a:no-underline hover:prose-a:underline
                       prose-blockquote:border-l-2 prose-blockquote:border-[#d0a850] prose-blockquote:bg-[#16222c]/30 prose-blockquote:py-2 prose-blockquote:px-8
                       prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Minimalist CTA */}
          <div className="mt-24 pt-16 border-t border-white/5">
            <div className="bg-[#16222c] rounded-[2.5rem] p-10 md:p-16 text-center border border-white/5 relative overflow-hidden group">
              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <span className="text-[#d0a850] text-[10px] font-black uppercase tracking-[0.5em]">Professional Advisory</span>
                  <h3 className="text-2xl md:text-4xl font-bold heading-serif text-white uppercase tracking-tight">Need expert case analysis?</h3>
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                  Our strategic team is ready to process your visa requirements with legal precision and care.
                </p>
                <Link href="/contact" className="inline-block bg-[#d0a850] text-black font-black py-4 px-12 rounded-full uppercase text-[11px] tracking-[0.3em] hover:bg-white transition-all shadow-xl">
                  Schedule Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
