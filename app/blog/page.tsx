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
                url: "https://devtarun.com/opengraph-image",
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
        <div className="min-h-screen bg-white">
            {/* Navigation bar */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-zinc-200 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
                    <Link
                        href="https://devtarun.com"
                        className="text-zinc-600 font-semibold text-sm hover:text-zinc-900 transition-colors flex items-center gap-1.5"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Portfolio
                    </Link>
                    <span className="text-zinc-800 font-bold text-sm sm:text-base tracking-tight">DevTarun Blog</span>
                    <div className="w-20" />
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 max-w-6xl">
                {/* Header */}
                <div className="mb-10 flex flex-col items-center text-center">
                    {/* Metric Badge */}
                    <Link
                        href="https://devtarun.com/#about"
                        target="_blank"
                        className="group flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 hover:border-emerald-400 transition-all duration-300 mb-5 cursor-pointer"
                    >
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] sm:text-xs font-bold">
                            2.5M+ Views
                        </span>
                        <span className="text-emerald-700 text-xs sm:text-sm flex items-center gap-1 group-hover:text-emerald-900 transition-colors">
                            Across all platforms
                            <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-3 tracking-tight">
                        DevTarun <span className="text-emerald-600">Blog</span>
                    </h1>
                    <p className="text-zinc-500 text-sm md:text-base max-w-xl leading-relaxed">
                        Thoughts on web development, cloud, AI, and everything in between.
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
