import { MetadataRoute } from "next";
import { getAllPosts, getCategories } from "@/app/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://devtarun.com";
    const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.devtarun.com";

    // Static routes
    const routes = [
        "",
        "/about",
        "/projects",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Blog main page
    const blogMain = {
        url: blogUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 0.9,
    };

    // Blog categories
    const categories = getCategories().map((cat) => ({
        url: `${blogUrl}/${cat}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    // Blog posts
    const posts = getAllPosts().map((post) => ({
        url: `${blogUrl}/${post.category}/${post.slug}`,
        lastModified: post.date,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...routes, blogMain, ...categories, ...posts];
}
