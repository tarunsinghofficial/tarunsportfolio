import type { BlogPostMeta } from "@/app/lib/mdx";
import BlogGridCard from "./BlogGridCard";

export default function RelatedPosts({ posts }: { posts: BlogPostMeta[] }) {
    if (posts.length === 0) return null;

    return (
        <section className="mt-16">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {posts.map((post) => (
                    <BlogGridCard key={post.slug} post={post} />
                ))}
            </div>
        </section>
    );
}
