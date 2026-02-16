import type { Metadata } from "next";
import Link from "next/link";
import { getCategories, getPostsByCategory } from "@/app/lib/mdx";
import CategoryLanding from "@/app/components/blog/CategoryLanding";

interface PageProps {
    params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
    const categories = getCategories();
    return categories.map((cat) => ({ category: cat }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category } = await params;
    const label = category.replace(/-/g, " ");
    return {
        title: `${label.charAt(0).toUpperCase() + label.slice(1)} | Blog | Tarun Singh`,
        description: `Articles about ${label} by Tarun Singh.`,
    };
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;
    const posts = getPostsByCategory(category);
    const allCategories = getCategories();
    const label = category.replace(/-/g, " ");

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Nav */}
            <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/[0.06]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <Link
                        href="/"
                        className="text-white font-medium text-sm hover:text-emerald-400 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Link>
                    <h1 className="text-white font-semibold text-sm sm:text-base capitalize">{label}</h1>
                    <div className="w-20" />
                </div>
            </nav>

            {/* Breadcrumb */}
            <div className="border-b border-white/[0.06]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm">
                    <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                        Blog
                    </Link>
                    <span className="text-zinc-600">/</span>
                    <span className="text-zinc-400 capitalize">{label}</span>
                </div>
            </div>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 capitalize">{label}</h1>
                    <p className="text-zinc-400 text-lg">
                        {posts.length} {posts.length === 1 ? "article" : "articles"}
                    </p>
                </div>

                <CategoryLanding
                    posts={posts}
                    categories={allCategories}
                    currentCategory={category}
                />
            </main>
        </div>
    );
}
