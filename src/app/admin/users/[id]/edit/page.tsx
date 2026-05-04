import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import EditUserForm from "./EditUserForm";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function EditUserPage({ params }: { params: { id: string } }) {
  const session = await getSession();
  if (session?.user?.role !== "superadmin") {
    redirect("/admin");
  }

  const { id } = await params;
  const userId = parseInt(id, 10);
  
  if (isNaN(userId)) {
    notFound();
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-200">
      <header className="bg-slate-800 shadow-md p-4 flex justify-between items-center">
        <Link href="/admin/users">
          <h1 className="text-xl font-bold text-white tracking-wide hover:text-orange-400 transition-colors">
            &larr; Back to Users
          </h1>
        </Link>
      </header>

      <main className="flex-1 p-8 max-w-2xl mx-auto w-full">
        <EditUserForm user={user} />
      </main>
    </div>
  );
}
