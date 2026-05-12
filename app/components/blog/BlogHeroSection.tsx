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
        month: "short",
        day: "numeric",
    });

    return (
        <section className="mb-10">
            {/* Featured Hero Card */}
            <Link
                href={`/${featured.category}/${featured.slug}`}
                className="group block rounded-2xl overflow-hidden border border-zinc-100 bg-white hover:shadow-xs transition-all duration-300 p-5"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left: Text Content */}
                    <div className="flex flex-col justify-center gap-5">
                        <span className="text-xs text-zinc-400 font-medium tracking-wide">
                            {featuredDate}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 leading-tight group-hover:text-zinc-700 transition-colors">
                            {featured.title}
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed line-clamp-3">
                            {featured.description}
                        </p>
                        {/* Author */}
                        <div className="flex items-center gap-2.5 mt-2">
                            <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden shrink-0 ring-1 ring-zinc-200">
                                <Image
                                    src="/images/author/tarun_avatar.png"
                                    alt="Tarun Singh"
                                    width={32}
                                    height={32}
                                    className="object-cover w-full h-full"
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).src = "/images/author/tarun_avatar.png";
                                    }}
                                />
                            </div>
                            <span className="text-sm font-medium text-zinc-600">Tarun Singh</span>
                        </div>
                    </div>

                    {/* Right: Cover Image */}
                    <div className="relative aspect-[4/3] lg:aspect-auto min-h-[220px] overflow-hidden rounded-2xl col-span-2">
                        {featured.imageURL ? (
                            <Image
                                src={featured.imageURL}
                                alt={featured.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600" />
                        )}
                        {/* Featured badge */}
                        <span className="absolute top-4 right-4 text-xs font-semibold bg-white text-zinc-800 px-3 py-1 rounded-full shadow-sm">
                            Featured
                        </span>
                    </div>
                </div>
            </Link>
        </section>
    );
}
