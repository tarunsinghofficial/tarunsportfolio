"use client";
import Image from "next/image";
import avatarOne from "../app/assets/avatar-one.png";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 container mx-auto">
      <section className="flex items-center">
        <div className="flex flex-col gap-1">
          <div>
            <h1 className="mb-4 text-4xl font-[700] text-white md:text-5xl lg:leading-normal xl:text-6xl">
              Hi, I'm <span className="text-primary-blue">Tarun Singh</span> a
              Software Developement Engineer Intern.
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <TypeAnimation
                sequence={[
                  500,
                  "I develop interactive UI using Next.js and React.js .",
                  1000,
                  "I write technical articles and blogs.",
                  1000,
                  "Transforming visions into seamless user experiences.",
                  1000,
                  "Bringing ideas to life with creativity and code.",
                  500,
                ]}
                speed={50}
                className="text-sm font-medium md:text-xl xl:text-2xl"
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </div>
            <div>
              <h2 className="text-gray-500 text-xl">
                Stick around to see my work!
              </h2>
            </div>
            <div className="mt-5">
              <Link
                href="/"
                className="duration-400 w-full cursor-pointer rounded-full bg-white px-6 py-3 text-center text-xl font-bold text-black transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-gray-300 sm:w-fit md:mr-4"
              >
                Hire me
              </Link>
              <Link
                href="/"
                className="duration-400 w-full rounded-full border-2 border-white bg-transparent px-6 py-3 text-center font-medium text-xl text-white transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-darkHover sm:w-fit md:mr-4"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image src={avatarOne} width={1000} height={1000} alt="avatar" />
        </div>
      </section>
    </main>
  );
}
