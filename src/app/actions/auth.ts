"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { setSession, destroySession } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(prevState: { error: string }, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return { error: "Invalid credentials." };
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return { error: "Invalid credentials." };
  }

  // Create session
  await setSession({
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
  });

  redirect("/admin");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}
