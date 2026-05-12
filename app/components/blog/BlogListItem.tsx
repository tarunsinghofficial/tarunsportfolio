"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPostMeta } from "@/app/lib/mdx";

export default function BlogListItem({ post }: { post: BlogPostMeta }) {
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <Link
            href={`/${post.category}/${post.slug}`}
            className="group flex items-center gap-5 py-4 px-4 rounded-xl border border-transparent transition-all duration-200 hover:bg-zinc-50 hover:border-zinc-200"
        >
            {/* Title + Description */}
            <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors truncate">
                    {post.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-0.5 hidden sm:block truncate">
                    {post.description}
                </p>
            </div>

            {/* Category */}
            <div className="hidden md:block w-36 shrink-0">
                <span className="text-xs font-medium text-zinc-500 capitalize bg-zinc-100 px-2.5 py-1 rounded-full">
                    {post.category.replace("-", " ")}
                </span>
            </div>

            {/* Author */}
            <div className="hidden lg:flex items-center gap-1.5 w-36 shrink-0">
                <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden shrink-0">
                    <Image
                        src="/images/author/tarun_avatar.png"
                        alt="Tarun Singh"
                        width={24}
                        height={24}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "/images/author/tarun_avatar.png";
                        }}
                    />
                </div>
                <span className="text-xs text-zinc-500">Tarun Singh</span>
            </div>

            {/* Date */}
            <div className="hidden sm:block w-24 shrink-0 text-right">
                <span className="text-xs text-zinc-400">{formattedDate}</span>
            </div>
        </Link>
    );
}
