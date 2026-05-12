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
    const heroRecent = allPosts.filter((p) => p.slug !== heroFeatured?.slug).slice(0, 0);

    // Filter posts
    const filteredPosts = useMemo(() => {
        let posts = allPosts;

        // Exclude hero posts from main listing only if NOT filtering
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
        <div className="space-y-8">
            {/* Hero Section */}
            {!isFiltering && <BlogHeroSection featured={heroFeatured} recent={heroRecent} />}

            {/* Search + View Toggle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <ViewToggle view={viewMode} onViewChange={setViewMode} />
            </div>

            {/* Category Tabs */}
            <Tabs
                value={selectedCategory}
                onValueChange={(val) => {
                    setSelectedCategory(val);
                    setVisibleCount(POSTS_PER_PAGE);
                }}
            >
                <TabsList variant="line" className="bg-transparent flex-wrap h-auto gap-0 border-b border-zinc-200">
                    <TabsTrigger
                        value="all"
                        className="text-sm text-zinc-400 data-[state=active]:text-zinc-800 data-[state=active]:font-semibold after:bg-zinc-900"
                    >
                        All
                    </TabsTrigger>
                    {categories.map((cat) => (
                        <TabsTrigger
                            key={cat}
                            value={cat}
                            className="text-sm capitalize text-zinc-500 data-[state=active]:text-zinc-800 data-[state=active]:font-semibold after:bg-zinc-900"
                        >
                            {cat.replace("-", " ")}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            {/* List header for list view */}
            {viewMode === "list" && visiblePosts.length > 0 && (
                <div className="hidden md:flex items-center gap-6 px-4 text-xs uppercase tracking-wider text-zinc-400 border-b border-zinc-200 pb-2">
                    <div className="flex-1">Title</div>
                    <div className="w-36 shrink-0">Category</div>
                    <div className="hidden lg:block w-36 shrink-0">Author</div>
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
                    <div className="divide-y divide-zinc-100 rounded-xl border border-zinc-200 bg-white overflow-hidden">
                        {visiblePosts.map((post) => (
                            <BlogListItem key={post.slug} post={post} />
                        ))}
                    </div>
                )
            ) : (
                (isFiltering || allPosts.length === 0) ? (
                    <div className="text-center py-16">
                        <p className="text-zinc-400 text-lg">No posts found.</p>
                        <p className="text-zinc-300 text-sm mt-1">Try a different search or category.</p>
                    </div>
                ) : null
            )}

            {/* Load More */}
            {hasMore && (
                <div className="flex justify-center pt-4">
                    <button
                        onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                        className="px-8 py-2.5 rounded-full border border-zinc-200 bg-white text-zinc-700 text-sm font-medium shadow-sm transition-all duration-200 hover:bg-zinc-50 hover:border-zinc-300 active:scale-[0.98]"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
