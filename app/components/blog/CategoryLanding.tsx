"use client";

import { useState } from "react";
import type { BlogPostMeta } from "@/app/lib/mdx";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogGridCard from "./BlogGridCard";
import BlogListItem from "./BlogListItem";
import ViewToggle from "./ViewToggle";

export default function CategoryLanding({
    posts,
    categories,
    currentCategory,
}: {
    posts: BlogPostMeta[];
    categories: string[];
    currentCategory: string;
}) {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    return (
        <div className="space-y-8">
            {/* Category Tabs + View Toggle row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Tabs
                    value={currentCategory}
                    onValueChange={(val) => {
                        window.location.href = `/${val}`;
                    }}
                >
                    <TabsList variant="line" className="bg-transparent flex-wrap h-auto gap-0 border-b border-zinc-200">
                        {categories.map((cat) => (
                            <TabsTrigger
                                key={cat}
                                value={cat}
                                className="text-sm capitalize text-zinc-500 data-[state=active]:text-zinc-900 data-[state=active]:font-semibold after:bg-zinc-900"
                            >
                                {cat.replace(/-/g, " ")}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
                <ViewToggle view={viewMode} onViewChange={setViewMode} />
            </div>

            {/* List header for list view */}
            {viewMode === "list" && posts.length > 0 && (
                <div className="hidden md:flex items-center gap-6 px-4 text-xs uppercase tracking-wider text-zinc-400 border-b border-zinc-200 pb-2">
                    <div className="flex-1">Title</div>
                    <div className="w-36 shrink-0">Category</div>
                    <div className="hidden lg:block w-36 shrink-0">Author</div>
                    <div className="hidden sm:block w-24 shrink-0 text-right">Date</div>
                </div>
            )}

            {/* Posts */}
            {posts.length > 0 ? (
                viewMode === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {posts.map((post) => (
                            <BlogGridCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="divide-y divide-zinc-100 rounded-xl border border-zinc-200 bg-white overflow-hidden">
                        {posts.map((post) => (
                            <BlogListItem key={post.slug} post={post} />
                        ))}
                    </div>
                )
            ) : (
                <div className="text-center py-16">
                    <p className="text-zinc-400 text-lg">No posts in this category yet.</p>
                </div>
            )}
        </div>
    );
}
