import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMailOpen } from "react-icons/lu";

function Navbar() {
  return (
    <nav className="sticky left-0 top-0 z-[100] navbar navbar-expand-lg py-5 container mx-auto">
      <div className="flex flex-row justify-around gap-10 items-center">
        <div>
          <a href="#" className="hover:cursor-pointer"><h2 className="text-2xl text-white font-semibold">@Tarun Singh</h2></a>
        </div>
        <div className="flex flex-row gap-5">
          <a
            href="#"
            className="after:transition-width relative cursor-pointer text-[18px] font-[500] after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full"
          >
            About
          </a>
          <a
            href="#"
            className="after:transition-width relative cursor-pointer text-[18px] font-[500] after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full"
          >
            Experience
          </a>
          <a
            href="#"
            className="after:transition-width relative cursor-pointer text-[18px] font-[500] after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full"
          >
            Projects
          </a>
          <a
            href="#"
            className="after:transition-width relative cursor-pointer text-[18px] font-[500] after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full"
          >
            Research
          </a>
          <a
            href="#"
            className="after:transition-width relative cursor-pointer text-[18px] font-[500] after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full"
          >
            Blog
          </a>
          <a
            href="#"
            className="after:transition-width relative cursor-pointer text-[18px] font-[500] after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full"
          >
            Contact
          </a>
        </div>
        <div className="flex gap-5">
          <a
            className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
            href="https://www.linkedin.com/in/tarunsingh24"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
            href="https://github.com/tarunsinghofficial"
          >
            <FaGithub size={25} />
          </a>
          <a
            className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
            href="https://twitter.com/itsTarun24"
          >
            <FaXTwitter size={25} />
          </a>
          <a
            className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
            href="mailto:tarunsinghwap7@gmail.com"
          >
            <LuMailOpen size={25} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
