import Link from "next/link";
import React from "react";
import Chip from "../components/Chip";

const colors = [
  { bgcolor: "#9353D3", textcolor: "#9353D3" },
  { bgcolor: "#17C964", textcolor: "#17C964" },
  { bgcolor: "#F5A524", textcolor: "#F5A524" },
  { bgcolor: "#006FEE", textcolor: "#006FEE" },
  { bgcolor: "#F31260", textcolor: "#F31260" },
];

function BlogPlatformItem({ platformTitle, totalArticles, categories, url }) {
  return (
    <div className="hover:cursor-pointer h-[15em] p-4 rounded-lg overflow-hidden bg-white/5 backdrop-blur-lg backdrop-saturate-[1.8] flex flex-col justify-between">
      <div className="flex flex-col">
        <h2 className="text-3xl font-semibold">{platformTitle}</h2>
        <p className="text-sm text-gray-300">
          Articles Published: <span className="font-bold">{totalArticles}</span>
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1">
          {categories.map((category, index) => {
            const color = colors[index % colors.length];

            return (
              <Chip
                key={index}
                category={category}
                bgcolor={color.bgcolor}
                textcolor={color.textcolor}
              />
            );
          })}
        </div>
        <div className="w-auto">
          <Link href={url} target="_blank" className="hover:cursor-pointer">
            <p className="text-blue-500 hover:underline">Visit Platform</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogPlatformItem;
