import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/app/lib/mdx";
import BlogContent from "@/app/components/blog/BlogContent";
import PostMetaSidebar from "@/app/components/blog/PostMetaSidebar";
import AuthorCard from "@/app/components/blog/AuthorCard";
import RelatedPosts from "@/app/components/blog/RelatedPosts";

interface PageProps {
    params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        category: post.category,
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Tarun Singh Blog`,
        description: post.description,
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Top nav */}
            <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/[0.06]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <Link
                        href="/blog"
                        className="text-white font-medium text-sm hover:text-emerald-400 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Link>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider capitalize">
                        {post.category.replace("-", " ")}
                    </span>
                    <div className="w-20" />
                </div>
            </nav>

            {/* Breadcrumb */}
            <div className="border-b border-white/[0.06]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm">
                    <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                        Blog
                    </Link>
                    <span className="text-zinc-600">/</span>
                    <Link href={`/blog/${post.category}`} className="text-emerald-400/80 hover:text-emerald-300 transition-colors capitalize">
                        {post.category.replace(/-/g, " ")}
                    </Link>
                    <span className="text-zinc-600">/</span>
                    <span className="text-zinc-400 truncate">{post.title}</span>
                </div>
            </div>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 overflow-x-hidden">
                {/* Hero section: Image centered, then title+desc with meta sidebar */}
                <div className="max-w-5xl mx-auto">
                    {/* Centered Image — respects natural size */}
                    {post.imageURL && (
                        <div className="mb-8">
                            <div className="relative w-fit max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-white/[0.06]">
                                <Image
                                    src={post.imageURL}
                                    alt={post.title}
                                    width={320}
                                    height={320}
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    )}

                    {/* Title + Description  |  Meta Sidebar */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 lg:gap-14 mb-16">
                        {/* Left: Title + Description */}
                        <header>
                            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] mb-5">
                                {post.title}
                            </h1>
                            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
                                {post.description}
                            </p>
                        </header>

                        {/* Right: Meta Sidebar (aligned to top of title) */}
                        <div className="lg:pt-1">
                            <PostMetaSidebar post={post} />
                        </div>
                    </div>
                </div>

                {/* Full-width Divider */}
                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white/[0.06] mb-14" />

                {/* Content — centered, readable width */}
                <div className="max-w-3xl mx-auto">
                    <BlogContent source={post.content} />
                </div>

                {/* Full-width Divider */}
                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white/[0.06] my-14" />

                {/* Author */}
                <div className="max-w-3xl mx-auto">
                    <AuthorCard />
                </div>

                {/* Related Posts */}
                <RelatedPosts posts={relatedPosts} />
            </main>
        </div>
    );
}
