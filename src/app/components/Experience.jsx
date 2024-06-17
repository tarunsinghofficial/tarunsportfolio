import React from "react";
import VerticalTabs from "./verticalTab";

function Experience() {
  return (
    <section className="py-[0px] w-[100%] min-w-[100%]">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-[800] text-white sm:text-5xl">
          Experience
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </div>
      <div className="mt-[80px] w-[100%] flex items-center justify-center">
        <VerticalTabs />
      </div>
    </section>
  );
}

export default Experience;
