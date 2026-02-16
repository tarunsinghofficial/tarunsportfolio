"use client";

import Link from "next/link";
import type { BlogPostMeta } from "@/app/lib/mdx";

export default function BlogListItem({ post }: { post: BlogPostMeta }) {
    return (
        <Link
            href={`/blog/${post.category}/${post.slug}`}
            className="group flex items-center gap-6 py-5 px-4 rounded-xl border border-transparent transition-all duration-300 hover:bg-white/5 hover:border-white/[0.06]"
        >
            {/* Title */}
            <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium text-white group-hover:text-emerald-300 transition-colors truncate sm:text-lg">
                    {post.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-1 hidden sm:block truncate">
                    {post.description}
                </p>
            </div>

            {/* Category */}
            <div className="hidden md:block w-36 shrink-0">
                <span className="text-sm text-zinc-400 capitalize">{post.category.replace("-", " ")}</span>
            </div>

            {/* Tags */}
            <div className="hidden lg:flex w-48 shrink-0 gap-1.5 flex-wrap">
                {post.tags.slice(0, 2).map((tag) => (
                    <span
                        key={tag}
                        className="text-xs text-zinc-500 bg-white/5 border border-white/10 rounded-full px-2 py-0.5"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Date */}
            <div className="hidden sm:block w-24 shrink-0 text-right">
                <span className="text-sm text-zinc-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                    })}
                </span>
            </div>
        </Link>
    );
}
