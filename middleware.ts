import { NextRequest, NextResponse } from "next/server";

const BLOG_DOMAIN = "blog.devtarun.com";

export function middleware(request: NextRequest) {
    const host = request.headers.get("host") || "";
    const { pathname } = request.nextUrl;

    // Main domain: redirect /blog* → blog.devtarun.com
    if (!host.startsWith("blog.") && pathname.startsWith("/blog")) {
        const cleanPath = pathname.replace(/^\/blog/, "") || "/";
        return NextResponse.redirect(
            new URL(`https://${BLOG_DOMAIN}${cleanPath}`),
            308
        );
    }

    // Blog subdomain
    if (host.startsWith("blog.")) {
        // Redirect /blog* → strip /blog prefix for clean URLs
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
        const internalPath = pathname === "/" ? "/blog" : `/blog${pathname}`;
        return NextResponse.rewrite(new URL(internalPath, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logo.png|images|opengraph-image|sitemap.xml|robots.txt|feed.xml|google.*\\.html).*)"],
};
