"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

export async function createUser(formData: FormData) {
  const session = await getSession();
  if (!session || session.user.role !== "superadmin") {
    throw new Error("Unauthorized");
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  if (!name || !email || !password) {
    return { error: "Name, email, and password are required." };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || "admin",
      },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return { error: "Email is already taken." };
    }
    return { error: "Failed to create user." };
  }

  revalidatePath("/admin/users");
  redirect("/admin/users");
}

export async function updateUser(id: number, formData: FormData) {
  const session = await getSession();
  if (!session || session.user.role !== "superadmin") {
    throw new Error("Unauthorized");
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  if (!name || !email) {
    return { error: "Name and email are required." };
  }

  try {
    const data: any = { name, email, role };
    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }

    await prisma.user.update({
      where: { id },
      data,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return { error: "Email is already taken." };
    }
    return { error: "Failed to update user." };
  }

  revalidatePath("/admin/users");
  redirect("/admin/users");
}

export async function deleteUser(id: number) {
  const session = await getSession();
  if (!session || session.user.role !== "superadmin") {
    throw new Error("Unauthorized");
  }

  // Prevent self-deletion
  if (session.user.id === id) {
    throw new Error("You cannot delete your own account.");
  }

  await prisma.user.delete({
    where: { id },
  });

  revalidatePath("/admin/users");
}
