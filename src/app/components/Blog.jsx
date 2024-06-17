import React from "react";
import ResearchItem from "./ResearchItem";
import Link from "next/link";
import BlogItem from "./BlogItem";

const data = [
  {
    title: "10 Open-Source Tools for Optimizing Cloud Expenses",
    publisher: "Semaphore",
    link: "https://semaphoreci.com/blog/open-source-tools-cloud-costs",
  },
  {
    title:
      "Mastering Multilingual Websites: Internationalization In Next.Js 14",
    publisher: "OpenReplay",
    link: "https://blog.openreplay.com/i18n-in-next-14/",
  },
  {
    title: "Mastering Next.Js Authentication With Auth0: A Practical Guide",
    publisher: "OpenReplay",
    link: "https://blog.openreplay.com/nextjs-authentication-with-auth0/",
  },
  {
    title: "Next vs React",
    publisher: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/nextjs-vs-reactjs-which-one-to-choose/",
  },
  {
    title: "Web Scraping vs API",
    publisher: "Apify",
    link: "https://blog.apify.com/web-scraping-vs-api/",
  },
];

function Blog() {
  return (
    <section className="py-[80px] w-[100%] min-w-[100%]">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-[800] text-white sm:text-5xl">Blog</h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </div>
      <div className="mt-[80px] flex flex-col items-center justify-center space-y-5">
        <div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 w-[100%]">
            {data.map((blog, index) => (
              <BlogItem
                key={index}
                title={blog.title}
                publisher={blog.publisher}
                link={blog.link}
              />
            ))}
          </div>
        </div>
        <Link
          href="/blog"
          className="duration-400 w-full rounded-full border-2 border-white bg-transparent px-6 py-3 text-center font-medium text-xl text-white transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-darkHover sm:w-fit md:mr-4"
        >
          See all blogs
        </Link>
      </div>
    </section>
  );
}

export default Blog;
