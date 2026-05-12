"use client";

import { useState } from "react";
import type { BlogPostMeta } from "@/app/lib/mdx";

export default function PostMetaSidebar({ post }: { post: BlogPostMeta }) {
    const [copied, setCopied] = useState(false);

    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <aside className="space-y-4 text-sm">
            {/* Category */}
            <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6h.008v.008H6V6z" />
                </svg>
                <div>
                    <p style={{ color: "#57534D" }} className="text-xs uppercase tracking-wider font-medium mb-0.5">Category</p>
                    <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5 capitalize">
                        {post.category.replace("-", " ")}
                    </span>
                </div>
            </div>

            {/* Tags */}
            <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                </svg>
                <div>
                    <p style={{ color: "#57534D" }} className="text-xs uppercase tracking-wider font-medium mb-1.5">Tags</p>
                    <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-zinc-100 text-zinc-600 border border-zinc-200 rounded-full px-2.5 py-0.5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Date */}
            <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <div>
                    <p style={{ color: "#57534D" }} className="text-xs uppercase tracking-wider font-medium mb-0.5">Date</p>
                    <p className="text-zinc-900 font-medium">{formattedDate}</p>
                </div>
            </div>

            {/* Reading Time */}
            <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                    <p style={{ color: "#57534D" }} className="text-xs uppercase tracking-wider font-medium mb-0.5">Reading time</p>
                    <p className="text-zinc-900 font-medium">{post.readingTime}</p>
                </div>
            </div>

            {/* Share */}
            <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
                <div>
                    <p style={{ color: "#57534D" }} className="text-xs uppercase tracking-wider font-medium mb-0.5">Share</p>
                    <button
                        onClick={copyLink}
                        className="text-emerald-600 font-medium underline underline-offset-2 hover:text-emerald-700 transition-colors text-sm"
                    >
                        {copied ? "✓ Copied!" : "Copy link"}
                    </button>
                </div>
            </div>
        </aside>
    );
}
