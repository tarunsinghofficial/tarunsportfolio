"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainBlogItem from "../components/MainBlogItem";
import PortfolioItem from "../components/PortfolioItem";

function SkeletonLoader({ type }) {
  return (
    <div className={`animate-pulse bg-gray-600 rounded w-full h-48 mb-4`} />
  );
}

function Page() {
  const [data, setData] = useState({ latestBlogs: [], blogPlatforms: [] });
  const [loading, setLoading] = useState(true);

  // Fetch the data from the API: https://tarunsinghofficial.github.io/tarun-blog-data/data.json
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://tarunsinghofficial.github.io/tarun-blog-data/data.json?cache=${Date.now()}`
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center w-full min-h-screen">
      <h1 className="mt-5 text-3xl font-bold text-gray-200">Latest Blogs</h1>
      <div className="max-w-7xl grid-container w-full p-5">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonLoader key={index} type="blog" />
            ))
          : data.latestBlogs.map((blog, index) => (
              <MainBlogItem
                key={index}
                latestBlogImg={blog.imageURL}
                latestBlogTitle={blog.title}
                latestBlogContent={blog.description}
                latestBlogUrl={blog.url}
                dateOfPublish={blog.dateOfPublish}
              />
            ))}
      </div>
      <div className="relative z-50">
        <h1 className="mt-5 text-3xl font-bold text-center text-gray-200">
          Portfolio
        </h1>
        <div className="max-w-7xl md:grid-cols-3 lg:grid-cols-3 grid w-full grid-rows-3 gap-5 p-5">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonLoader key={index} type="portfolio" />
              ))
            : data.blogPlatforms.map((platform, index) => (
                <PortfolioItem
                  key={index}
                  platformTitle={platform.platformTitle}
                  totalArticles={platform.totalArticles}
                  categories={platform.categories}
                  url={platform.url}
                />
              ))}
        </div>
      </div>
      <div>
      <Link
            href="/"
            className="hover:underline flex justify-center mt-5 text-gray-200"
          >
            Back to home
          </Link>
      </div>
    </div>
  );
}

export default Page;
