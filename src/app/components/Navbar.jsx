"use client";
import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMailOpen } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-inherit sticky left-0 top-0 z-[100] py-5 px-5 container mx-auto">
      <div className="flex flex-row justify-between items-center">
        <div>
          <a href="#" className="hover:cursor-pointer">
            <h2 className="text-2xl text-white font-semibold">@Tarun Singh</h2>
          </a>
        </div>
        <div className="hidden md:flex flex-row gap-5">
          {[
            "about",
            "experience",
            "skills",
            "projects",
            "research",
            "blog",
            "contact",
          ].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="after:transition-width relative cursor-pointer text-[18px] font-[500] after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        <div className="hidden md:flex gap-5">
          <a
            target="_blank"
            className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
            href="https://www.linkedin.com/in/tarunsingh24"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            target="_blank"
            className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
            href="https://github.com/tarunsinghofficial"
          >
            <FaGithub size={25} />
          </a>
          <a
            target="_blank"
            className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
            href="https://twitter.com/itsTarun24"
          >
            <FaXTwitter size={25} />
          </a>
          <a
            target="_blank"
            className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
            href="mailto:tarunsinghwap7@gmail.com"
          >
            <LuMailOpen size={25} />
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-inherit bg-opacity-75 w-full mt-4 space-y-4 py-5">
          {[
            "about",
            "experience",
            "skills",
            "projects",
            "research",
            "blog",
            "contact",
          ].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-white text-lg font-medium"
              onClick={toggleMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <hr className="text-white w-full h-[0.8px]" />
          <div className="flex gap-5">
            <a
              target="_blank"
              className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
              href="https://www.linkedin.com/in/tarunsingh24"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              target="_blank"
              className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
              href="https://github.com/tarunsinghofficial"
            >
              <FaGithub size={25} />
            </a>
            <a
              target="_blank"
              className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
              href="https://twitter.com/itsTarun24"
            >
              <FaXTwitter size={25} />
            </a>
            <a
              target="_blank"
              className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
              href="mailto:tarunsinghwap7@gmail.com"
            >
              <LuMailOpen size={25} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
