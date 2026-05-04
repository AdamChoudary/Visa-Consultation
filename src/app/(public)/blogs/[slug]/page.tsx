import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
    include: { author: true },
  });

  if (!blog || blog.status !== "published") {
    notFound();
  }

  return (
    <article className="bg-[#0f1921] pt-32 pb-24 min-h-screen text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/blogs" className="text-[#d0a850] hover:text-white transition-colors mb-12 inline-flex items-center gap-2 group no-underline font-bold uppercase tracking-widest text-xs">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to all articles
        </Link>
        
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center flex-wrap gap-4 text-gray-400 mb-8 text-xs uppercase tracking-widest font-bold">
            <span className="bg-[#d0a850]/10 text-[#d0a850] px-4 py-1 rounded-full border border-[#d0a850]/20">Visa Insights</span>
            <time>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>•</span>
            <span>By {blog.author?.name}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-8 uppercase heading-serif">{blog.title}</h1>
        </div>

        <div 
          className="prose prose-invert prose-xl max-w-none prose-headings:text-[#d0a850] prose-headings:uppercase prose-headings:tracking-widest prose-a:text-[#d0a850] prose-img:rounded-3xl prose-img:shadow-2xl prose-strong:text-white prose-p:leading-relaxed prose-p:text-gray-300 animate-fade-in font-medium"
          style={{ animationDelay: '0.2s' }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="mt-24 p-12 bg-white/5 rounded-[40px] border border-[#d0a850]/20 text-center relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-widest text-[#d0a850]">Planning your next move?</h3>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Our specialized team provides the expertise you need for a successful visa application. Secure your future with professional guidance today.
          </p>
          <Link href="/contact" className="btn-gold !px-16 !py-5 !text-xl">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}
