import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const sessionCookie = request.cookies.get("session")?.value;
  
  if (path.startsWith("/admin") && path !== "/admin/login") {
    const session = await getSession(sessionCookie);
    
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (path === "/admin/login") {
    const session = await getSession(sessionCookie);
    if (session) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
