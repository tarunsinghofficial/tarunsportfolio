import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    tags: string[];
    imageURL: string;
    featured: boolean;
    readingTime: string;
    content: string;
}

export interface BlogPostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    tags: string[];
    imageURL: string;
    featured: boolean;
    readingTime: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function calculateReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

function parseMdxFile(filePath: string): BlogPost {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
        slug: data.slug || path.basename(filePath, ".mdx"),
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        category: (data.category || "").toLowerCase(),
        tags: data.tags || [],
        imageURL: data.imageURL || "",
        featured: data.featured || false,
        readingTime: data.readingTime || calculateReadingTime(content),
        content,
    };
}

export function getAllPosts(): BlogPostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
    const posts = files.map((f) => {
        const post = parseMdxFile(path.join(BLOG_DIR, f));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { content, ...meta } = post;
        return meta;
    });

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | null {
    if (!fs.existsSync(BLOG_DIR)) return null;

    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
        const post = parseMdxFile(path.join(BLOG_DIR, file));
        if (post.slug === slug) return post;
    }
    return null;
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
    return getAllPosts().filter((p) => p.category === category.toLowerCase());
}

export function getRelatedPosts(
    currentSlug: string,
    category: string,
    limit = 3
): BlogPostMeta[] {
    return getAllPosts()
        .filter((p) => p.category === category.toLowerCase() && p.slug !== currentSlug)
        .slice(0, limit);
}

export function getCategories(): string[] {
    const posts = getAllPosts();
    const cats = new Set(posts.map((p) => p.category));
    return Array.from(cats).sort();
}

export function getFeaturedPosts(): BlogPostMeta[] {
    return getAllPosts().filter((p) => p.featured);
}
