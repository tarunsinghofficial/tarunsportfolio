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
        <div className="min-h-screen bg-white">
            {/* Nav */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-zinc-200 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
                    <Link
                        href="/"
                        className="font-semibold text-sm transition-colors flex items-center gap-1.5 hover:text-zinc-900"
                        style={{ color: "#57534D" }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Link>
                    <h1 className="text-zinc-900 font-semibold text-sm sm:text-base capitalize">{label}</h1>
                    <div className="w-20" />
                </div>
            </nav>

            {/* Breadcrumb */}
            <div className="border-b border-zinc-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm">
                    <Link href="/" className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                        Blog
                    </Link>
                    <span style={{ color: "#57534D" }}>/</span>
                    <span className="text-zinc-900 capitalize font-medium">{label}</span>
                </div>
            </div>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 max-w-6xl">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-2 capitalize">{label}</h1>
                    <p className="text-base" style={{ color: "#57534D" }}>
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
