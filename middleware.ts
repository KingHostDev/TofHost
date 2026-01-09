import { auth } from "@/auth"; // Your NextAuth configuration
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role; // Ensure role is in your session

  const isAdminRoute = nextUrl.pathname.startsWith("/admin");
  const isVendorRoute = nextUrl.pathname.startsWith("/vendor/dashboard");
  const isAuthRoute = nextUrl.pathname.startsWith("/login") || nextUrl.pathname.startsWith("/register");

  // 1. If trying to access Auth pages while logged in, redirect to respective home
  if (isAuthRoute && isLoggedIn) {
    const redirectUrl = userRole === "ADMIN" ? "/admin/dashboard" : "/";
    return NextResponse.redirect(new URL(redirectUrl, nextUrl));
  }

  // 2. Protect Admin Routes
  if (isAdminRoute) {
    if (!isLoggedIn) return NextResponse.redirect(new URL("/login", nextUrl));
    if (userRole !== "ADMIN") return NextResponse.redirect(new URL("/", nextUrl));
  }

  // 3. Protect Vendor Dashboard
  if (isVendorRoute) {
    if (!isLoggedIn) return NextResponse.redirect(new URL("/login", nextUrl));
    if (userRole !== "VENDOR" && userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/", nextUrl));
    }
  }

  return NextResponse.next();
});

// Matcher determines which routes this middleware runs on
export const config = {
  matcher: ["/admin/:path*", "/vendor/dashboard/:path*", "/login", "/register"],
};