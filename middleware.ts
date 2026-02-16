import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const host = request.headers.get("host") || "";
    const { pathname } = request.nextUrl;

    // If accessing from blog.devtarun.com (or blog.localhost for local dev)
    if (host.startsWith("blog.")) {
        // Root of blog subdomain → show /blog page
        if (pathname === "/") {
            return NextResponse.rewrite(new URL("/blog", request.url));
        }

        // Already has /blog prefix → let it through
        if (pathname.startsWith("/blog")) {
            return NextResponse.next();
        }

        // blog.devtarun.com/ai-ml/post → rewrite to /blog/ai-ml/post
        return NextResponse.rewrite(new URL(`/blog${pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logo.png).*)"],
};
