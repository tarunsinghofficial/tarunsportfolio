"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Blog from "./components/Blog";
import avatarOne from "../app/assets/avatar-one.png";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  const createSectionRef = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });
    return [ref, inView];
  };

  const [aboutRef, aboutInView] = createSectionRef();
  const [experienceRef, experienceInView] = createSectionRef();
  const [skillsRef, skillsInView] = createSectionRef();
  const [projectsRef, projectsInView] = createSectionRef();
  const [researchRef, researchInView] = createSectionRef();
  const [blogRef, blogInView] = createSectionRef();
  const [contactRef, contactInView] = createSectionRef();

  return (
    <main className="min-h-screen p-5 md:p-24 lg:p-24">
      <section className="flex flex-col md:flex-row lg:flex-row items-center gap-10">
        <div className="flex flex-col gap-1">
          <div>
            <h1 className="mb-4 text-4xl font-[700] text-white md:text-5xl lg:leading-normal xl:text-6xl">
              Hi, I'm <span className="text-primary-blue">Tarun Singh</span> a
              Software Development Engineer Intern.
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
              <h2 className="text-gray-500 text-xl">Stick around to see my work!</h2>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row mt-5 gap-5">
              <a
                href="#contact"
                className="duration-400 w-full cursor-pointer rounded-full bg-white px-6 py-3 text-center text-xl font-bold text-black transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-gray-300 sm:w-fit md:mr-4"
              >
                Hire me
              </a>
              <a
                href="https://drive.google.com/file/d/1OnTqu-XjGQVWflvyhz-_ViE9JDRYH5KY/view?usp=sharing"
                target="_blank"
                className="duration-400 w-full rounded-full border-2 border-white bg-transparent px-6 py-3 text-center font-medium text-xl text-white transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-darkHover sm:w-fit md:mr-4"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="w-[18em] md:w-[60em] lg:w-[80em]">
          <Image
            src={avatarOne}
            width={1000}
            height={1000}
            alt="avatar"
            className="rounded-full hover:scale-105 duration-300 transition-all"
          />
        </div>
      </section>
      <motion.section
        ref={aboutRef}
        variants={sectionVariants}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        transition={sectionTransition}
        id="about"
      >
        <About />
      </motion.section>
      <motion.section
        ref={experienceRef}
        variants={sectionVariants}
        initial="hidden"
        animate={experienceInView ? "visible" : "hidden"}
        transition={sectionTransition}
        id="experience"
      >
        <Experience />
      </motion.section>
      <motion.section
        ref={skillsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        transition={sectionTransition}
        id="skills"
      >
        <Skills />
      </motion.section>
      <motion.section
        ref={projectsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        transition={sectionTransition}
        id="projects"
      >
        <Projects />
      </motion.section>
      <motion.section
        ref={researchRef}
        variants={sectionVariants}
        initial="hidden"
        animate={researchInView ? "visible" : "hidden"}
        transition={sectionTransition}
        id="research"
      >
        <Research />
      </motion.section>
      <motion.section
        ref={blogRef}
        variants={sectionVariants}
        initial="hidden"
        animate={blogInView ? "visible" : "hidden"}
        transition={sectionTransition}
        id="blog"
      >
        <Blog />
      </motion.section>
      <motion.section
        ref={contactRef}
        variants={sectionVariants}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        transition={sectionTransition}
        id="contact"
      >
        <Contact />
      </motion.section>
    </main>
  );
}
