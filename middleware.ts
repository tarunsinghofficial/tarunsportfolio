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

        // Already has /blog prefix → let it through (internal rewrites)
        if (pathname.startsWith("/blog")) {
            return NextResponse.next();
        }

        // Redirect non-blog portfolio routes back to main domain
        // Hash fragments like /#about are handled client-side, but direct
        // path routes like /about should redirect to the main domain
        const mainDomain = host.replace(/^blog\./, "");
        const portfolioRoutes = ["/about"];
        if (portfolioRoutes.includes(pathname)) {
            return NextResponse.redirect(
                new URL(`https://${mainDomain}${pathname}`, request.url)
            );
        }

        // Everything else on blog subdomain → rewrite to /blog/*
        // blog.devtarun.com/ai-ml → /blog/ai-ml
        // blog.devtarun.com/ai-ml/some-post → /blog/ai-ml/some-post
        return NextResponse.rewrite(new URL(`/blog${pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logo.png).*)"],
};
