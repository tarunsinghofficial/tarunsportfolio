import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProjectItem({ pTitle, pD1, pD2, pD3, pGithub, pLive, pImage, tech }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        filter: "blur(0px)",
        opacity: 1,
        transition: { duration: 0.8 },
      });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="w-full gap-10 grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 place-content-center place-items-center">
      <div className="flex w-full flex-col space-y-5 text-justify">
        <div className="space-y-3">
          <h3 className="text-2xl font-[700] text-primary-blue">{pTitle}</h3>
          <p className="text-sm md:text-md lg:text-lg text-gray-300">&#8227; {pD1}</p>
          <p className="text-sm md:text-md lg:text-lg text-gray-300">&#8227; {pD2}</p>
          {pD3 && <p className="text-sm md:text-md lg:text-lg text-gray-300">&#8227; {pD3}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-primary-blue italic">{tech}</p>
          <div className="flex gap-6">
            <a href={pGithub} className="text-gray-300">
              <FaGithub size={25} />
            </a>
            <a href={pLive} className="text-gray-300">
              <FaExternalLinkAlt size={25} />
            </a>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={controls}
        className="w-[90%] rounded-lg transition-all duration-700 ease-in-out"
      >
        <Image
          src={pImage}
          alt={pTitle}
          layout="responsive"
          width={1000}
          height={1000}
          className="object-contain rounded-lg"
        />
      </motion.div>
    </div>
  );
}

export default ProjectItem;
