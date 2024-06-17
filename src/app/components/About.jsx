import React from "react";
import Image from "next/image";
import avatar from "../assets/avatar-two.jpg";
import lc from "../assets/lc.png";
import cf from "../assets/cf.png";

function About() {
  return (
    <section className="py-[80px]">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-[800] text-white sm:text-5xl">About Me</h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-10 py-[80px]">
        <div>
          <Image src={avatar} width={1000} height={1000} alt="avatar" className="rounded-full hover:scale-105 duration-300 transition-all w-[100em]" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-white">
              I'm <span className="text-primary-blue">Tarun Singh</span>, an SDE
              Intern with Open Transit Software Foundation. I'm currently
              pursuing Masters in Computer Applications with the major in
              Software Engineering. Passionate about technology and its
              ever-evolving landscape, I aspire to be a proficient software
              developer while nurturing my love for writing. With over 3 years
              of experience in technical writing, I enjoy sharing my knowledge
              through technical blogs. Actively contributing to Open Source.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="mt-2">
              <span className="font-semibold">
                University School of Information, Communication, and Technology
                (GGSIP University), Delhi
              </span>
              <br />
              <div className="flex justify-between text-primary-blue">
                <span>
                  Masters in Computer Application (MCA) in Software Engineering
                </span>
                <span>GPA: 8.53/10</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Achievements</h2>
            <div className="flex flex-col justify-between text-gray-400 mt-2">
              <span>
                &#8227; Become a{" "}
                <a
                  href="https://codeforces.com/profile/codewithtarun"
                  className="text-primary-blue hover:underline"
                >
                  Pupil (max 1213 rating)
                </a>{" "}
                on Codeforces.
              </span>
              <span>
                &#8227; Solved{" "}
                <a
                  href="https://leetcode.com/tarunsinghofficial/"
                  className="text-primary-blue hover:underline hover:cursor-pointer"
                >
                  100+ problems
                </a>{" "}
                on LeetCode.
              </span>
              <span>
                &#8227; Successfully published more than{" "}
                <span className="text-primary-blue hover:underline hover:cursor-pointer">
                  400 technical articles{" "}
                </span>
                on GeeksforGeeks, Tutorialspoint, Semaphore, OpenReplay, etc.
              </span>
              <span>
                &#8227; Received{" "}
                <span className="text-primary-blue hover:underline hover:cursor-pointer">Best Technical Writer</span>{" "}
                Award from GeeksforGeeks
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Coding Profiles</h2>
            <div className="flex gap-5 mt-2">
              <a href="https://leetcode.com/tarunsinghofficial/">
                <Image
                  src={lc}
                  className="w-12 h-12 bg-slate-500 p-1 rounded-lg bg-opacity-20 hover:cursor-pointer"
                  width={100}
                  height={100}
                  alt="LeetCode"
                />{" "}
              </a>
              <a href="https://codeforces.com/profile/codewithtarun">
                <Image
                  src={cf}
                  className="w-12 h-12 bg-slate-500 p-1 rounded-lg bg-opacity-20 hover:cursor-pointer"
                  width={100}
                  height={100}
                  alt="LeetCode"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
