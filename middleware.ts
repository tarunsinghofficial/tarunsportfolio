import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const host = request.headers.get("host") || "";
    const { pathname } = request.nextUrl;

    // If accessing from blog.devtarun.com (or blog.localhost for local dev)
    if (host.startsWith("blog.")) {
        // Redirect /blog* → strip /blog prefix for clean URLs
        // blog.devtarun.com/blog → redirects to blog.devtarun.com/
        // blog.devtarun.com/blog/ai-ml/post → redirects to blog.devtarun.com/ai-ml/post
        if (pathname.startsWith("/blog")) {
            const cleanPath = pathname.replace(/^\/blog/, "") || "/";
            return NextResponse.redirect(new URL(cleanPath, request.url), 308);
        }

        // Redirect non-blog portfolio routes back to main domain
        const mainDomain = host.replace(/^blog\./, "");
        const portfolioRoutes = ["/about"];
        if (portfolioRoutes.includes(pathname)) {
            return NextResponse.redirect(
                new URL(`https://${mainDomain}${pathname}`, request.url)
            );
        }

        // Rewrite everything else to /blog/* internally
        // blog.devtarun.com/ → internally serves /blog
        // blog.devtarun.com/ai-ml → internally serves /blog/ai-ml
        // blog.devtarun.com/ai-ml/some-post → internally serves /blog/ai-ml/some-post
        const internalPath = pathname === "/" ? "/blog" : `/blog${pathname}`;
        return NextResponse.rewrite(new URL(internalPath, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logo.png).*)"],
};
