import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import EditBlogForm from "./EditBlogForm";

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const blogId = parseInt(id, 10);
  
  if (isNaN(blogId)) {
    notFound();
  }

  const blog = await prisma.blog.findUnique({
    where: { id: blogId },
  });

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-200">
      <header className="bg-slate-800 shadow-md p-4 flex justify-between items-center">
        <Link href="/admin/blogs">
          <h1 className="text-xl font-bold text-white tracking-wide hover:text-orange-400 transition-colors">
            &larr; Back to Blogs
          </h1>
        </Link>
      </header>

      <main className="flex-1 p-8 max-w-4xl mx-auto w-full">
        <EditBlogForm blog={blog} />
      </main>
    </div>
  );
}
