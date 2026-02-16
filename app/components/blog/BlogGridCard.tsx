"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/app/lib/mdx";

export default function BlogGridCard({ post }: { post: BlogPostMeta }) {
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <Link
            href={`/${post.category}/${post.slug}`}
            className="group block rounded-2xl bg-white/5 backdrop-blur-md border border-white/[0.04] overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.08] hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.15)]"
        >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
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
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                {/* Category + Date */}
                <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="uppercase tracking-wider text-emerald-400/80 font-medium">
                        {post.category}
                    </span>
                    <span>{formattedDate}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white leading-snug line-clamp-2 group-hover:text-emerald-300 transition-colors">
                    {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                    {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] uppercase text-zinc-500 bg-white/5 border border-white/10 rounded-full px-2 py-0.5 tracking-wide"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
