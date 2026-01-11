import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role; // Ensure 'role' is added to the session in your auth.ts callbacks

  // Define Route Categories
  const isAdminRoute = nextUrl.pathname.startsWith("/admin");
  // Added /dashboard here to protect your current vendor product pages
  const isVendorRoute = nextUrl.pathname.startsWith("/vendor/dashboard") || nextUrl.pathname.startsWith("/dashboard");
  const isAuthRoute = nextUrl.pathname.startsWith("/login") || nextUrl.pathname.startsWith("/register");

  // 1. Redirect logged-in users away from Auth pages
  if (isAuthRoute && isLoggedIn) {
    const redirectUrl = userRole === "ADMIN" ? "/admin/dashboard" : "/dashboard/products";
    return NextResponse.redirect(new URL(redirectUrl, nextUrl));
  }

  // 2. Protect Admin Routes
  if (isAdminRoute) {
    if (!isLoggedIn) return NextResponse.redirect(new URL("/login", nextUrl));
    if (userRole !== "ADMIN") return NextResponse.redirect(new URL("/", nextUrl));
  }

  // 3. Protect Vendor Dashboard (and your current /dashboard/products path)
  if (isVendorRoute) {
    if (!isLoggedIn) return NextResponse.redirect(new URL("/login", nextUrl));
    
    // Allow both VENDORS and ADMINS to see these tools
    if (userRole !== "VENDOR" && userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/", nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  // Added /dashboard/:path* to ensure your product pages are guarded
  matcher: ["/admin/:path*", "/vendor/dashboard/:path*", "/dashboard/:path*", "/login", "/register"],
};
