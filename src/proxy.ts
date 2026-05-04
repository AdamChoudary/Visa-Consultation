import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  if (path.startsWith("/admin") && path !== "/admin/login") {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (path === "/admin/login") {
    const session = await getSession();
    if (session) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
