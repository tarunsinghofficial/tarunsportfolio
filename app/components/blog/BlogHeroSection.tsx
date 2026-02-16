"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/app/lib/mdx";

export default function BlogHeroSection({
    featured,
    recent,
}: {
    featured: BlogPostMeta | null;
    recent: BlogPostMeta[];
}) {
    if (!featured) return null;

    const featuredDate = new Date(featured.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main featured post */}
            <Link
                href={`/${featured.category}/${featured.slug}`}
                className="group lg:col-span-2 relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/[0.04] transition-all duration-300 hover:border-emerald-400/30 hover:shadow-[0_0_40px_-5px_rgba(52,211,153,0.12)]"
            >
                <div className="relative aspect-[16/8] sm:aspect-[16/7] overflow-hidden">
                    {featured.imageURL ? (
                        <Image
                            src={featured.imageURL}
                            alt={featured.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-teal-300/10 to-cyan-400/20" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <span className="inline-block text-xs uppercase tracking-wider text-emerald-400 font-medium mb-2">
                        {featured.category.replace("-", " ")}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2 group-hover:text-emerald-300 transition-colors">
                        {featured.title}
                    </h2>
                    <p className="text-sm text-zinc-300 line-clamp-2 max-w-2xl mb-3">
                        {featured.description}
                    </p>
                    <span className="text-xs text-zinc-400">{featuredDate}</span>
                </div>
            </Link>

            {/* Side posts */}
            <div className="flex flex-col gap-4">
                {recent.slice(0, 2).map((post) => (
                    <Link
                        key={post.slug}
                        href={`/${post.category}/${post.slug}`}
                        className="group flex-1 relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/[0.04] transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.08]"
                    >
                        <div className="relative aspect-[16/9] overflow-hidden">
                            {post.imageURL ? (
                                <Image
                                    src={post.imageURL}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-teal-300/10 to-cyan-400/20" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <span className="text-[10px] uppercase tracking-wider text-emerald-400/80 font-medium">
                                {post.category.replace("-", " ")}
                            </span>
                            <h3 className="text-sm font-semibold text-white leading-snug mt-1 line-clamp-2 group-hover:text-emerald-300 transition-colors">
                                {post.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
