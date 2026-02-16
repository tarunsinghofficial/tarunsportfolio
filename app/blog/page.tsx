import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getCategories, getFeaturedPosts } from "@/app/lib/mdx";
import BlogLanding from "@/app/components/blog/BlogLanding";

export const metadata: Metadata = {
    title: "Blog | Tarun Singh",
    description:
        "Articles on web development, cloud, AI/ML, DevOps, and open source by Tarun Singh.",
};

export default function BlogPage() {
    const allPosts = getAllPosts();
    const categories = getCategories();
    const featuredPosts = getFeaturedPosts();

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Navigation bar */}
            <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/[0.06]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <Link
                        href="https://devtarun.com"
                        className="text-white font-bold text-lg hover:text-emerald-400 transition-colors"
                    >
                        ← Portfolio
                    </Link>
                    <h1 className="text-white font-semibold text-sm sm:text-base">Blog</h1>
                    <div className="w-20" />
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                {/* Header */}
                <div className="mb-10 sm:mb-14">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Blog</h1>
                    <p className="text-zinc-400 text-lg max-w-xl">
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
