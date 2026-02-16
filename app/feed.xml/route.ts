import { getAllPosts } from "@/app/lib/mdx";

const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.devtarun.com";
const MAIN_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://devtarun.com";

export async function GET() {
    const posts = getAllPosts();

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Tarun Singh's Blog</title>
  <link>${BLOG_URL}</link>
  <description>Thoughts on web development, cloud architecture, AI, and everything in between.</description>
  <language>en-us</language>
  <atom:link href="${MAIN_URL}/feed.xml" rel="self" type="application/rss+xml" />
  ${posts
            .map((post) => {
                const postUrl = `${BLOG_URL}/${post.category}/${post.slug}`;
                return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      <category>${post.category}</category>
      ${post.tags?.map(tag => `<category>${tag}</category>`).join('') || ''}
    </item>`;
            })
            .join("")}
</channel>
</rss>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
    });
}
