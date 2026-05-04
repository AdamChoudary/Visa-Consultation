import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deleteUser } from "@/app/actions/user";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Manage Users | Admin",
};

export default async function ManageUsersPage() {
  const session = await getSession();
  if (session?.user?.role !== "superadmin") {
    redirect("/admin");
  }

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black heading-serif uppercase tracking-widest text-[#d0a850]">Manage Users</h1>
          <p className="text-gray-400 mt-2 font-bold uppercase tracking-widest text-xs">Access Control: {users.length} Admins</p>
        </div>
        <Link href="/admin/users/create" className="btn-gold !bg-green-600 !border-green-500 !px-8 !py-4 shadow-[0_10px_30px_rgba(22,163,74,0.2)]">
          + Add New User
        </Link>
      </div>

      <div className="bg-white/5 border border-[#d0a850]/10 rounded-[30px] overflow-hidden backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/[0.02] text-[#d0a850] border-b border-[#d0a850]/10 font-black uppercase tracking-[0.2em] text-[10px]">
              <th className="p-8">Admin Profile</th>
              <th className="p-8">Access Level</th>
              <th className="p-8">Date Joined</th>
              <th className="p-8 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-medium">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-8">
                  <div className="font-bold text-white uppercase tracking-wider text-base">{user.name}</div>
                  <div className="text-[10px] text-gray-500 mt-1 uppercase font-black tracking-widest">{user.email}</div>
                </td>
                <td className="p-8">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                    user.role === "superadmin" 
                      ? "bg-purple-500/10 text-purple-400 border-purple-500/20" 
                      : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-8 text-sm text-gray-400 uppercase font-bold tracking-widest">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="p-8 text-right space-x-4">
                  <Link href={`/admin/users/${user.id}/edit`} className="text-[#d0a850] hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em] no-underline">
                    Edit
                  </Link>
                  {user.id !== session.user.id && (
                    <form action={deleteUser.bind(null, user.id)} className="inline-block">
                      <button type="submit" className="text-red-400 hover:text-red-300 transition-colors text-[10px] font-black uppercase tracking-[0.2em] bg-transparent border-none cursor-pointer">
                        Revoke Access
                      </button>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
