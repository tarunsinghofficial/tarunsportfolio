"use client";

import { useState, useMemo } from "react";
import type { BlogPostMeta } from "@/app/lib/mdx";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogHeroSection from "./BlogHeroSection";
import BlogGridCard from "./BlogGridCard";
import BlogListItem from "./BlogListItem";
import ViewToggle from "./ViewToggle";
import SearchBar from "./SearchBar";

const POSTS_PER_PAGE = 6;

export default function BlogLanding({
    allPosts,
    categories,
    featuredPosts,
}: {
    allPosts: BlogPostMeta[];
    categories: string[];
    featuredPosts: BlogPostMeta[];
}) {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

    const isFiltering = selectedCategory !== "all" || searchQuery.trim().length > 0;

    // Featured post (first featured) and 2 recent posts for hero
    const heroFeatured = featuredPosts[0] || allPosts[0] || null;
    const heroRecent = allPosts.filter((p) => p.slug !== heroFeatured?.slug).slice(0, 2);

    // Filter posts
    const filteredPosts = useMemo(() => {
        let posts = allPosts;

        // Exclude hero posts from main listing only if NOT filtering
        // If filtering, we hide the hero section, so we should show all matching posts in the list
        if (!isFiltering) {
            const heroSlugs = new Set([heroFeatured?.slug, ...heroRecent.map((p) => p.slug)]);
            posts = posts.filter((p) => !heroSlugs.has(p.slug));
        }

        if (selectedCategory !== "all") {
            posts = posts.filter((p) => p.category === selectedCategory);
        }

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            posts = posts.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.tags.some((t) => t.toLowerCase().includes(q))
            );
        }

        return posts;
    }, [allPosts, selectedCategory, searchQuery, heroFeatured, heroRecent, isFiltering]);

    const visiblePosts = filteredPosts.slice(0, visibleCount);
    const hasMore = visibleCount < filteredPosts.length;

    return (
        <div className="space-y-10">
            {/* Hero Section */}
            {!isFiltering && <BlogHeroSection featured={heroFeatured} recent={heroRecent} />}

            {/* Search + View Toggle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <ViewToggle view={viewMode} onViewChange={setViewMode} />
            </div>

            {/* Category Tabs (shadcn) */}
            <Tabs
                value={selectedCategory}
                onValueChange={(val) => {
                    setSelectedCategory(val);
                    setVisibleCount(POSTS_PER_PAGE);
                }}
            >
                <TabsList variant="line" className="bg-transparent flex-wrap h-auto gap-0">
                    <TabsTrigger
                        value="all"
                        className="text-sm data-[state=active]:text-emerald-400 after:bg-emerald-400"
                    >
                        All
                    </TabsTrigger>
                    {categories.map((cat) => (
                        <TabsTrigger
                            key={cat}
                            value={cat}
                            className="text-sm capitalize data-[state=active]:text-emerald-400 after:bg-emerald-400"
                        >
                            {cat.replace("-", " ")}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            {/* List header for list view */}
            {viewMode === "list" && visiblePosts.length > 0 && (
                <div className="hidden md:flex items-center gap-6 px-4 text-xs uppercase tracking-wider text-zinc-500 border-b border-white/10 pb-2">
                    <div className="flex-1">Title</div>
                    <div className="w-36 shrink-0">Category</div>
                    <div className="hidden lg:block w-48 shrink-0">Tags</div>
                    <div className="hidden sm:block w-24 shrink-0 text-right">Date</div>
                </div>
            )}

            {/* Posts Grid / List */}
            {visiblePosts.length > 0 ? (
                viewMode === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {visiblePosts.map((post) => (
                            <BlogGridCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="divide-y divide-white/[0.06]">
                        {visiblePosts.map((post) => (
                            <BlogListItem key={post.slug} post={post} />
                        ))}
                    </div>
                )
            ) : (
                // Only show empty state if:
                // 1. We are filtering (so clearly nothing matched)
                // 2. OR we are not filtering, but there are NO posts at all (even in hero)
                (isFiltering || allPosts.length === 0) ? (
                    <div className="text-center py-16">
                        <p className="text-zinc-500 text-lg">No posts found.</p>
                        <p className="text-zinc-600 text-sm mt-1">Try a different search or category.</p>
                    </div>
                ) : null
            )}

            {/* Load More */}
            {hasMore && (
                <div className="flex justify-center pt-4">
                    <button
                        onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                        className="px-8 py-3 rounded-full border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 hover:border-white/30 active:scale-[0.98]"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
