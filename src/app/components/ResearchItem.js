import React from "react";

function ResearchItem({ title, author, place, desc, link }) {
  return (
    <div className="flex h-full border-[0.8px] border-gray-800 w-[100%] flex-col gap-3 rounded-[5px] bg-[#18191E] p-[30px]">
      <a href={link} className="text-primary-blue text-xl hover:underline hover:cursor-pointer">{title}</a>
      <p className="text-white">{author}</p>
      <p className="text-white italic">{place}</p>
      <p className="text-gray-500 line-clamp-5">{desc}</p>
    </div>
  );
}

export default ResearchItem;
