"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainBlogItem from "../components/MainBlogItem";
import PortfolioItem from "../components/PortfolioItem";
import Image from "next/image";
import left from "../assets/docs-left.png";
import right from "../assets/docs-right.png";

function Page() {
  const [data, setData] = useState({ latestBlogs: [], blogPlatforms: [] });

  // Fetch the data from the API: https://tarunsinghofficial.github.io/tarun-blog-data/data.json
  const fetchData = async () => {
    const res = await fetch(
      "https://tarunsinghofficial.github.io/tarun-blog-data/data.json"
    );
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center relative z-10">
      {/* make sure the below background pngs are not coming over the blog content below  */}
      
      <h1 className="text-3xl font-bold text-gray-200 mt-5">Latest Blogs</h1>
      <div className="w-full max-w-7xl grid-container p-5">
        {data.latestBlogs.map((blog, index) => (
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
        <h1 className="text-center text-3xl font-bold text-gray-200 mt-5">Portfolio</h1>
        <div className="w-full max-w-7xl grid grid-rows-3 md:grid-cols-3 lg:grid-cols-3 gap-5 p-5">
          {data.blogPlatforms.map((platform, index) => (
            <PortfolioItem
              key={index}
              platformTitle={platform.platformTitle}
              totalArticles={platform.totalArticles}
              categories={platform.categories}
              url={platform.url}
            />
          ))}
        <Link href="/" className="text-gray-200 hover:underline mt-5 flex justify-center">
          Back to home
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
