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
            className="group block rounded-2xl bg-white border border-zinc-100 overflow-hidden hover:shadow-xs transition-all duration-300 hover:-translate-y-0.5 p-5 space-y-3"
        >
            {/* Thumbnail */}
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 rounded-lg">
                {post.imageURL ? (
                    <Image
                        src={post.imageURL}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 flex items-center justify-center">
                        <svg className="w-10 h-10 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="space-y-3">
                {/* Date */}
                <span className="text-xs text-zinc-400 font-medium">
                    {formattedDate}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-zinc-900 leading-snug line-clamp-2 group-hover:text-emerald-700 transition-colors">
                    {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-500 line-clamp-1 leading-relaxed">
                    {post.description}
                </p>

                {/* Author */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden shrink-0 ring-1 ring-zinc-200">
                        <Image
                            src="/images/author/tarun_avatar.png"
                            alt="Tarun Singh"
                            width={28}
                            height={28}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = "/images/author/tarun_avatar.png";
                            }}
                        />
                    </div>
                    <span className="text-xs font-medium text-zinc-600">Tarun Singh</span>
                </div>
            </div>
        </Link>
    );
}
