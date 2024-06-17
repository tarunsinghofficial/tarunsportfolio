'use client'
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectItem from "./ProjectItem";
import urlshort from "../assets/urlshort.png";
import apollo from "../assets/apollo.png";
import codeeditor from "../assets/codeeditor.png";
import odp from "../assets/odp.png";
import news from "../assets/news.png";
import netflix from "../assets/netflix.png";
import movieapp from "../assets/movieapp.png";
import qrcode from "../assets/qrcode.png";

const projects = [
  {
    pTitle: "URL Shortener",
    pD1: "Implemented features such as one-click URL shortening, detailed analytics for click tracking, clipboard copying, personalized dashboard, and a dark theme, enhancing user experience and functionality.",
    pD2: "Developed a RESTful API to handle URL shortening and redirection, user authentication, and analytics tracking, enabling users to shorten URLs and track click analytics.",
    pD3: "",
    tech: "Next.js, Express, MongoDB, Node.js, Tailwind CSS",
    pGithub: "https://github.com/tarunsinghofficial/url-client",    
    pLive: "https://shortenmy-url.vercel.app/",
    pImage: urlshort,
  },
  {
    pTitle: "QR Code Generator",
    pD1: "Developed a QR code generator web app to generate QR codes for URLs, text, and contact information, enhancing user experience and functionality.",
    pD2: "Implemented a feature to download, as an image for offline use.",
    pD3: "Implemented the feature to change color of the generated QR code",
    tech: "Next.js, Tailwind CSS",
    pGithub: "https://github.com/tarunsinghofficial/qrcodegenerator",    
    pLive: "https://qrcodegeneratoor.vercel.app/",
    pImage: qrcode,
  },
  {
    pTitle: "CodeXEditor",
    pD1: "Developed a real-time code editor with features like syntax highlighting, code formatting, and real-time collaboration, enabling users to code together in real-time.",
    pD2: "Implemented a code collaboration feature for users to do live coding, enhancing collaboration and productivity.",
    tech: "WebSockets, Socket.io, Next.js, Node.js, Express, Tailwind CSS",
    pGithub: "https://github.com/tarunsinghofficial/CodeXEditor",    
    pLive: "https://code-x-editor-seven.vercel.app/",
    pImage: codeeditor,
  },
  {
    pTitle: "Netflix UI Clone",
    pD1: "Developed a sleek Netflix UI clone frontend for a contemporary streaming interface.",
    pD2: "Integrated TMDb API to dynamically fetch and display real-time movie and TV show information, enhancing user engagement.",
    tech: "Next.js, Material UI, Tailwind CSS",
    pGithub: "https://github.com/tarunsinghofficial/Netflix-clone-nextjs",    
    pLive: "https://netflix-next-tailwind.vercel.app/",
    pImage: netflix,
  },
  {
    pTitle: "OneDevPlace",
    pD1: "Developed a community resource hub platform for students and developers to find latest tech opportunities.",
    pD2: "Created a Blog for community using WordPress CMS and with a user impressions of 25K over a year.",
    pD3: "Helped over 1000+ students in finding the latest opportunities like Hackathons, Coding Competitions, Scholarships, Internships, Women in Tech opportunities, etc.",
    tech: "Next.js, React, and Tailwind CSS",
    pGithub: "https://github.com/tarunsinghofficial/OneDevPlace",    
    pLive: "https://onedevplace.netlify.app/",
    pImage: odp,
  },
  {
    pTitle: "Movie App",
    pD1: "Developed a movie app to display popular movies and TV shows, enabling users to search and view movie details.",
    pD2: "Integrated TMDb API to fetch real-time movie data and display it on the app, enhancing user experience and engagement.",
    tech: "Next.js, Tailwind CSS, TMDb API, Material UI",
    pGithub: "https://github.com/tarunsinghofficial/NextJS-Movie",    
    pLive: "https://next-js-movie-plum.vercel.app/",
    pImage: movieapp,
  },
  {
    pTitle: "NewXTimes App",
    pD1: "Developed a news app to display the latest news articles from around the world, enabling users to read and share news of various categories like sports, tech, finance, etc.",
    pD2: "Integrated News API to fetch real-time news data and display it on the app, enhancing user experience and engagement.",
    pD3: "Implemented the dark mode feature for better user experience.",
    tech: "React Native, Expo, News API",
    pGithub: "https://github.com/tarunsinghofficial/News-App-React-Native",    
    pLive: "https://onedevplace.netlify.app/",
    pImage: news,
  },
  {
    pTitle: "Apollo Music Player (Spotify Clone)",
    pD1: "Developed a music streaming app to play music from the user's device, enabling users to play music in the background.",
    pD2: "Implemented features like play, pause, next, previous to enhance user experience and functionality. ",
    pD3: "Integrated AWS Amplify for backend services and Expo for building the app.",
    tech: "React Native, AWS Amplify, Expo",
    pGithub: "https://github.com/tarunsinghofficial/Apollo-Player-Music-Streaming-App",    
    pLive: "https://github.com/tarunsinghofficial/Apollo-Player-Music-Streaming-App",
    pImage: apollo,
  },
]

function Projects() {
  const [showMore, setShowMore] = useState(false);

  const displayedProjects = showMore ? projects : projects.slice(0, 3);

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

  const [projectsRef, projectsInView] = createSectionRef();

  return (
    <motion.section
      ref={projectsRef}
      variants={sectionVariants}
      initial="hidden"
      animate={projectsInView ? "visible" : "hidden"}
      transition={sectionTransition}
      className="py-[20px] w-[100%]"
    >
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-[800] text-white sm:text-5xl">Projects</h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </div>
      <div className="grid grid-cols-1 gap-10 py-[80px]">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...sectionTransition, delay: index * 0.1 }}
          >
            <ProjectItem
              pTitle={project.pTitle}
              pD1={project.pD1}
              pD2={project.pD2}
              pD3={project.pD3}
              pGithub={project.pGithub}
              pLive={project.pLive}
              pImage={project.pImage}
              tech={project.tech}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="duration-400 w-full rounded-full border-2 border-white bg-transparent px-6 py-3 text-center font-medium text-xl text-white transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-darkHover sm:w-fit md:mr-4"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </motion.section>
  );
}

export default Projects;
