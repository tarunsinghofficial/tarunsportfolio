import Image from "next/image";
import Link from "next/link";
import React from "react";

function MainBlogItem({
  latestBlogUrl,
  latestBlogImg,
  latestBlogTitle,
  latestBlogContent,
  dateOfPublish,
}) {
  return (
    <Link
      href={latestBlogUrl}
      target="_blank"
      className="hover:cursor-pointer rounded-lg overflow-hidden bg-white/5 backdrop-blur-lg backdrop-saturate-[1.8] flex flex-col justify-between w-full h-auto"
    >
      <div>
        <div className="p-3">
          <Image
            src={latestBlogImg}
            className="rounded-lg w-full h-auto"
            alt="blog image"
            width={1000}
            height={1000}
            quality={100}
            priority={true}
            unoptimized
          />
          <p className="text-xl font-semibold mt-2">{latestBlogTitle}</p>
        </div>
        <div className="p-3">
          <p className="font-normal text-base text-default-500 line-clamp-3">
            {latestBlogContent}
          </p>
        </div>
      </div>
      <div>
        <p className="p-3 text-blue-500">{dateOfPublish}</p>
      </div>
    </Link>
  );
}

export default MainBlogItem;
