import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getCategories, getFeaturedPosts } from "@/app/lib/mdx";
import BlogLanding from "@/app/components/blog/BlogLanding";

export const metadata: Metadata = {
    title: "DevTarun Blog | Technical Articles by Tarun Singh",
    description:
        "Explore articles on web development, cloud architecture, AI/ML, DevOps, and open source. Technical insights and tutorials by Tarun Singh.",
    openGraph: {
        title: "DevTarun Blog | Technical Articles by Tarun Singh",
        description:
            "Explore articles on web development, cloud architecture, AI/ML, DevOps, and open source. Technical insights and tutorials by Tarun Singh.",
        url: "https://devtarun.com/blog",
        siteName: "DevTarun Blog",
        type: "website",
        images: [
            {
                url: "https://devtarun.com/opengraph-image", // Fallback to main site image, or specific blog image if available
                width: 1200,
                height: 630,
                alt: "DevTarun Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "DevTarun Blog | Technical Articles by Tarun Singh",
        description:
            "Explore articles on web development, cloud architecture, AI/ML, DevOps, and open source. Technical insights and tutorials by Tarun Singh.",
        images: ["https://devtarun.com/opengraph-image"],
        creator: "@devtarun",
    },
};

export default function BlogPage() {
    const allPosts = getAllPosts();
    const categories = getCategories();
    const featuredPosts = getFeaturedPosts();

    return (
        <div className="min-h-screen bg-[#1f1f1e]">
            {/* Navigation bar */}
            <nav className="sticky top-0 z-50 bg-[#1f1f1e]/80 backdrop-blur-lg border-b border-white/[0.06]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <Link
                        href="https://devtarun.com"
                        className="text-white font-bold text-lg hover:text-emerald-400 transition-colors"
                    >
                        ← Portfolio
                    </Link>
                    <h1 className="text-white font-semibold text-sm sm:text-base">DevTarun Blog</h1>
                    <div className="w-20" />
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                {/* Header */}
                <div className="mb-12 sm:mb-20 flex flex-col items-center text-center">
                    {/* Metric Badge */}
                    <Link
                        href="https://devtarun.com/#about"
                        target="_blank"
                        className="group flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 mb-6 cursor-pointer hover:bg-white/10"
                    >
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] sm:text-xs font-bold border border-emerald-500/20">
                            2.5M+ Views
                        </span>
                        <span className="text-zinc-400 text-xs sm:text-sm flex items-center gap-1 group-hover:text-zinc-200 transition-colors">
                            Across all platforms
                            <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        DevTarun <span className="text-emerald-400">Blog</span>
                    </h1>
                    <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
                        Thoughts on web development, cloud architecture, AI, and everything in between.
                    </p>
                </div>

                <BlogLanding
                    allPosts={allPosts}
                    categories={categories}
                    featuredPosts={featuredPosts}
                />
            </main>
        </div>
    );
}
