"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createBlog(formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const status = formData.get("status") as string;
  
  if (!title || !content) {
    return { error: "Title and content are required." };
  }

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  try {
    await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        status: status || "draft",
        authorId: session.user.id,
      },
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { error: "A blog with this title/slug already exists." };
    }
    return { error: "Failed to create blog." };
  }

  revalidatePath("/admin/blogs");
  redirect("/admin/blogs");
}

export async function updateBlog(id: number, formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const status = formData.get("status") as string;

  if (!title || !content) {
    return { error: "Title and content are required." };
  }

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  try {
    await prisma.blog.update({
      where: { id },
      data: {
        title,
        slug,
        content,
        status,
      },
    });
  } catch (error) {
    return { error: "Failed to update blog." };
  }

  revalidatePath("/admin/blogs");
  redirect("/admin/blogs");
}

export async function deleteBlog(id: number) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  await prisma.blog.delete({
    where: { id },
  });

  revalidatePath("/admin/blogs");
}
