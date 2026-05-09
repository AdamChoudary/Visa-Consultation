import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

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
    <article className="bg-[#0f1921] min-h-screen text-white pb-24">
      {/* Simple Header Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden mb-12 md:mb-20">
        <img 
          src={blog.imageUrl || "/page images/language-test/ielts.jpg"} 
          alt={blog.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1921] to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full pb-12 md:pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link href="/blogs" className="text-[#d0a850] hover:text-white transition-colors mb-6 inline-flex items-center gap-2 no-underline font-bold uppercase tracking-widest text-[10px]">
              &larr; Back to Insights
            </Link>
            <div className="flex items-center gap-4 text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-bold mb-6">
              <span className="text-[#d0a850]">{blog.category || "Visa Insights"}</span>
              <span>•</span>
              <time>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase heading-serif">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area - Centered & Simple */}
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-12 flex items-center gap-4 border-b border-white/5 pb-8">
          <div className="w-12 h-12 rounded-full bg-[#16222c] border border-white/10 flex items-center justify-center text-[#d0a850] font-bold text-xl">
            {blog.author?.name?.charAt(0)}
          </div>
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider">{blog.author?.name}</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">Expert Consultant</p>
          </div>
        </div>

        <div 
          className="prose prose-invert prose-lg md:prose-xl max-w-none 
                     prose-headings:text-white prose-headings:uppercase prose-headings:tracking-wider prose-headings:font-bold
                     prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8
                     prose-strong:text-[#d0a850] prose-a:text-[#d0a850] 
                     prose-img:rounded-2xl prose-img:shadow-xl prose-blockquote:border-[#d0a850]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Clean CTA Section */}
        <div className="mt-24 p-12 bg-[#16222c] rounded-[2rem] border border-white/5 text-center shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-bold mb-6 uppercase heading-serif text-white">Need Professional Guidance?</h3>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Our specialized team is here to help you navigate your visa application with ease and expertise.
          </p>
          <Link href="/contact" className="inline-block bg-[#d0a850] hover:bg-white text-black font-bold py-4 px-12 rounded-full uppercase text-sm tracking-widest transition-all">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}
