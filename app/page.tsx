import Image from "next/image";
import GlassMorphicCard from "./components/GlassMorphicCard";
import Timeline from "./components/Timeline";
import ProjectCard from "./components/ProjectCard";
import ProjectsCarousel from "./components/ProjectsCarousel";
import { BlogLatest, BlogMini } from "./components/BlogCards";
import TestimonialsMarquee from "./components/TestimonialsMarquee";
import Navbar from "./components/Navbar";
import HeroButtons from "./components/HeroButtons";
import experience from "./content/experience.json";
import projectsData from "./content/projects.json";
import videos from "./content/videos.json";
import blogs from "./content/blogs.json";
import testimonials from "./content/testimonials.json";
import avatar from "../public/avatar.webp";
import youtubeChannel from "../public/youtube.png"

import { getProjects, getTestimonials, getBlogs, getSocials } from "./lib/notion";
import { SparklesCore } from "./components/ui/sparkles";

import { Meteors } from "./components/ui/meteors";

export default async function Home() {

  const projects = await getProjects();
  const notionTestimonials = await getTestimonials();
  const notionBlogs = await getBlogs();
  const socials = await getSocials();

  // Combine Notion testimonials with local JSON testimonials (fallback)
  const allTestimonials = notionTestimonials.length > 0
    ? notionTestimonials
    : testimonials;

  // Use Notion blogs or fallback to local JSON
  const allBlogs = notionBlogs.length > 0 ? notionBlogs : [];

  // Ensure latest blog has correct structure
  const latestBlog = (allBlogs.length > 0 && allBlogs[0]?.title && allBlogs[0]?.url)
    ? {
      title: String(allBlogs[0].title || ''),
      description: String(allBlogs[0].description || ''),
      url: String(allBlogs[0].url || ''),
      image: allBlogs[0].image ? String(allBlogs[0].image) : undefined
    }
    : {
      title: String(blogs.latest?.title || ''),
      description: String(blogs.latest?.description || ''),
      url: String(blogs.latest?.url || ''),
      image: (blogs.latest as any)?.image ? String((blogs.latest as any).image) : undefined
    };

  // Ensure top blogs have correct structure - exclude the latest blog to avoid duplicates
  // If we have enough Notion blogs (excluding the main one), use them; otherwise use JSON fallback
  let topBlogs: any[] = [];

  if (allBlogs.length > 1) {
    // Filter out the main blog and any duplicates by URL
    const secondaryBlogs = allBlogs
      .filter((b: any) => b.url && b.url !== latestBlog.url)
      .slice(0, 2)
      .map((b: any) => ({
        title: String(b.title || ''),
        url: String(b.url || ''),
        image: b.image ? String(b.image) : undefined
      }));

    // If we don't have 2 blogs from Notion, fill with JSON fallback
    if (secondaryBlogs.length < 2 && Array.isArray(blogs.tops)) {
      const jsonBlogs = blogs.tops
        .filter((b: any) => b.url && b.url !== latestBlog.url)
        .slice(0, 2 - secondaryBlogs.length)
        .map((b: any) => ({
          title: String(b.title || ''),
          url: String(b.url || ''),
          image: b.image ? String(b.image) : undefined
        }));
      topBlogs = [...secondaryBlogs, ...jsonBlogs]
        .filter((blog, index, self) =>
          index === self.findIndex((b) => b.url === blog.url)
        )
        .slice(0, 2);
    } else {
      // Remove any duplicates by URL
      topBlogs = secondaryBlogs
        .filter((blog, index, self) =>
          index === self.findIndex((b) => b.url === blog.url)
        )
        .slice(0, 2);
    }
  } else {
    // Use JSON fallback - exclude the main blog and remove duplicates
    topBlogs = Array.isArray(blogs.tops)
      ? blogs.tops
        .filter((b: any) => b.url && b.url !== latestBlog.url)
        .map((b: any) => ({
          title: String(b.title || ''),
          url: String(b.url || ''),
          image: b.image ? String(b.image) : undefined
        }))
        .filter((blog, index, self) =>
          index === self.findIndex((b) => b.url === blog.url)
        )
        .slice(0, 2)
      : [];
  }


  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900/20 space-y-10">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div id="home" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20em] h-[10em] bg-green-400/60 rounded-full blur-[10em]"></div>
      <GlassMorphicCard className="overflow-hidden">

        <div className="p-6 sm:p-8 h-full relative">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full absolute"
            particleColor="#FFFFFF"
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-8 items-center">
            {/* Text */}
            <div className="md:col-span-3 text-center md:text-left space-y-4">
              <div className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-1.5 text-base sm:text-lg tracking-wide text-zinc-200">
                Hey 👋, I'm
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-white">
                Tarun <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400">Singh ✨</span>
              </h1>
              <p className="text-3xl sm:text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-linear-to-b from-white via-teal-300 to-emerald-300/70">
                Full-Stack Engineer • Technical Writer
              </p>
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start pt-2">
                <span className="text-sm uppercase tracking-wider text-zinc-300/70">
                  Currently exploring
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-sm bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                  Next.js 16
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-sm bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  Agentic AI
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-sm bg-yellow-400/10 text-yellow-300 border border-cyan-400/20">
                  LLMs/RAG
                </span>
              </div>

              {/* Action Buttons */}
              <HeroButtons resumeUrl={socials.resume} />
            </div>

            {/* Avatar */}
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <div className="relative">
                {/* glow */}
                {/* <div className="absolute -inset-2 rounded-2xl bg-linear-to-tr from-emerald-400/30 via-teal-300/20 to-cyan-400/30 blur-2xl" /> */}
                {/* Replace with your public avatar at /public/avatar.jpg if available */}
                {/* <div className="w-full h-full grid place-items-center bg-linear-to-br from-zinc-800 to-zinc-900 text-4xl sm:text-5xl font-semibold text-white">
                    TS
                  </div> */}
                <Image src={avatar} alt="Tarun Singh" width={1000} height={1000} />
              </div>
            </div>
          </div>
        </div>
      </GlassMorphicCard>

      {/* About Section */}
      <div id="about" className="flex gap-3 container mx-auto px-3 sm:px-6 items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">About</h2>
        <div className="w-full h-1 bg-white/10 my-8"></div>
      </div>
      <div className="container mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          <div className="md:col-span-2 md:row-span-2">
            <GlassMorphicCard >
              <div className="p-6 sm:p-8 h-full flex flex-col justify-start space-y-10">
                {/* Lead sentence with highlighted underline */}
                <div className="space-y-10">
                  <div className="space-y-2">
                    <h3 className="text-3xl sm:text-4xl font-semibold text-white">About Me</h3>
                    <p className="text-2xl text-zinc-200/90 leading-relaxed max-w-3xl">
                      I'm a <span className="font-semibold text-white">full‑stack developer</span>,{" "}
                      <span className="font-semibold text-white">open‑source contributor</span>, and{" "}
                      <span className="font-semibold text-white">technical writer</span> who loves
                      building developer‑first products.
                      <span className="relative inline-block ml-1">
                        <span className="relative z-10">
                          I help teams ship fast, reliable web experiences.
                        </span>
                        <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 opacity-80" />
                      </span>
                    </p>
                  </div>

                  {/* Role tiles using icon library classes instead of emojis */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col lg:flex-row gap-3 items-start">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                        <i className="devicon-react-original text-2xl text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="text-md font-semibold tracking-wide text-zinc-200 uppercase">Full Stack</h4>
                        <p className="text-md text-zinc-300/85">
                          Modern web apps with React, Next.js, Node, and cloud‑native tooling.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col lg:flex-row gap-3 items-start">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                        <i className="devicon-markdown-original text-2xl text-cyan-300" />
                      </div>
                      <div>
                        <h4 className="text-md font-semibold tracking-wide text-zinc-200 uppercase">Technical Writing</h4>
                        <p className="text-md text-zinc-300/85">
                          5+ years writing clear guides, tutorials, and developer‑focused content.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col lg:flex-row gap-3 items-start">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-purple-400/10 border border-purple-400/30 flex items-center justify-center">
                        <i className="devicon-github-original text-2xl text-purple-300" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold tracking-wide text-zinc-200 uppercase">Open Source</h4>
                        <p className="text-md text-zinc-300/85">
                          Active in OSS, shipping PRs, reviewing code, and mentoring contributors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Metrics row */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                      <div className="text-2xl sm:text-3xl font-semibold text-white">3+</div>
                      <div className="text-xs sm:text-sm text-zinc-400">Years of Development</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                      <div className="text-2xl sm:text-3xl font-semibold text-white">5+</div>
                      <div className="text-xs sm:text-sm text-zinc-400">Years Technical Writing</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                      <div className="text-2xl sm:text-3xl font-semibold text-white">50+</div>
                      <div className="text-xs sm:text-sm text-zinc-400">Open‑Source PRs</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                      <div className="text-2xl sm:text-3xl font-semibold text-white">20+</div>
                      <div className="text-xs sm:text-sm text-zinc-400">Projects Shipped</div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassMorphicCard>
          </div>
          <div className="md:col-span-1 md:row-span-1">
            <GlassMorphicCard>
              <div className="p-6 sm:p-8 h-full flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Skills</h3>
                <div className="group space-y-4">
                  {/* Row 1 - left to right */}
                  <div className="relative overflow-hidden">
                    <div className="flex gap-3 w-max pr-3 animate-[marquee-left_22s_linear_infinite] group-hover:[animation-play-state:paused]">
                      {[
                        'devicon-java-plain text-orange-300',
                        'devicon-python-plain text-yellow-300',
                        'devicon-javascript-plain text-yellow-300',
                        'devicon-typescript-plain text-sky-400',
                        'devicon-c-plain text-blue-400',
                        'devicon-cplusplus-plain text-blue-400',
                        'devicon-html5-plain text-orange-400',
                        'devicon-css3-plain text-blue-500',
                        'devicon-react-original text-cyan-300',
                        'devicon-nextjs-original-wordmark',
                        'devicon-tailwindcss-original text-emerald-300',
                        'devicon-svelte-plain text-orange-500',
                        'devicon-nodejs-plain text-green-400',
                        'devicon-express-original-wordmark text-white',
                        'devicon-fastapi-plain text-emerald-300',
                      ].concat([
                        'devicon-java-plain text-orange-300',
                        'devicon-python-plain text-yellow-300',
                        'devicon-javascript-plain text-yellow-300',
                        'devicon-typescript-plain text-sky-400',
                        'devicon-c-plain text-blue-400',
                      ]).map((cls, i) => (
                        <span key={`r1-${i}`} className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur px-4 py-3">
                          <i className={`${cls} text-4xl sm:text-5xl`}></i>
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Row 2 - right to left */}
                  <div className="relative overflow-hidden">
                    <div className="flex gap-3 w-max pr-3 animate-[marquee-right_24s_linear_infinite] group-hover:[animation-play-state:paused]">
                      {[
                        'devicon-postgresql-plain text-sky-400',
                        'devicon-mysql-plain text-sky-400',
                        'devicon-supabase-plain text-emerald-400',
                        'devicon-amazonwebservices-plain text-orange-400',
                        'devicon-googlecloud-plain text-sky-400',
                        'devicon-git-plain text-orange-400',
                        'devicon-github-original text-white',
                        'devicon-postman-plain text-orange-400',
                        'devicon-vscode-plain text-sky-400',
                        'devicon-linux-plain text-yellow-300',
                        'devicon-docker-plain text-sky-400',
                      ].concat([
                        'devicon-postgresql-plain text-sky-400',
                        'devicon-mysql-plain text-sky-400',
                        'devicon-supabase-plain text-emerald-400',
                        'devicon-amazonwebservices-plain text-orange-400',
                      ]).map((cls, i) => (
                        <span key={`r2-${i}`} className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur px-4 py-3">
                          <i className={`${cls} text-4xl sm:text-5xl`}></i>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassMorphicCard>
          </div>
          <div className="md:col-span-1 md:row-span-1">
            <GlassMorphicCard>
              <div className="p-6 sm:p-8 h-auto flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Connect</h3>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  {/* LinkedIn */}
                  {socials.linkedin && (
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-300"
                    >
                      <svg className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="text-sm font-medium text-zinc-200">LinkedIn</span>
                    </a>
                  )}

                  {/* GitHub */}
                  {socials.github && (
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 hover:border-purple-400/30 hover:bg-purple-400/5 transition-all duration-300"
                    >
                      <svg className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span className="text-sm font-medium text-zinc-200">GitHub</span>
                    </a>
                  )}

                  {/* Instagram */}
                  {socials.instagram && (
                    <a
                      href={socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 hover:border-pink-400/30 hover:bg-pink-400/5 transition-all duration-300"
                    >
                      <svg className="w-10 h-10 text-pink-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="text-sm font-medium text-zinc-200">Instagram</span>
                    </a>
                  )}

                  {/* Twitter/X */}
                  {socials.twitter && (
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
                    >
                      <svg className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span className="text-sm font-medium text-zinc-200">Twitter</span>
                    </a>
                  )}
                </div>
              </div>
            </GlassMorphicCard>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="flex gap-3 container mx-auto px-3 sm:px-6 items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">Experience</h2>
        <div className="w-full h-1 bg-white/10 my-8"></div>
      </div>
      <div className="container mx-auto px-3 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Internships</h3>
          <Timeline items={(experience as any).experiences} />
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Open Source</h3>
          <Timeline items={(experience as any).openSource} />
        </div>
      </div>

      {/* Proof of Work (Projects) */}
      <div id="projects" className="flex gap-3 container mx-auto px-3 sm:px-6 items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">Projects</h2>
        <div className="w-full h-1 bg-white/10 my-8"></div>
      </div>
      <div className="container mx-auto px-3 sm:px-6">
        <ProjectsCarousel projects={projects as any} />
      </div>

      {/* Videos / Sessions */}
      <div id="videos" className="flex gap-3 container mx-auto px-3 sm:px-6 items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">Videos</h2>
        <div className="w-full h-1 bg-white/10 my-8"></div>
      </div>
      <div className="container mx-auto px-3 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassMorphicCard className="lg:col-span-2 overflow-hidden">
          <div className="">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
              <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${(videos as any).mainVideoId}`} title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>
            <div className="overflow-hidden bg-linear-to-t from-black to-transparent w-full h-48 absolute bottom-0 "></div>
          </div>
        </GlassMorphicCard>
        <GlassMorphicCard>
          <div className="p-6 sm:p-8 h-full flex flex-col justify-between ">
            <div className="space-y-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">My YouTube Journey</h3>
                <p className="text-zinc-200/90 mt-2">
                  Helping computer science students and aspiring developers discover tech internships, global research programs, fellowships, hackathons, and open-source initiatives — along with a touch of productivity, AI tools, and laptop buying guides.
                </p>
              </div>
              <div className="rounded-2xl w-full h-full overflow-hidden">
                <Image src={youtubeChannel} alt="Tarun's youtube channel" width={1000} height={1000} className="overflow-hidden" />
              </div>
            </div>
            <a href={(videos as any).channelUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-cyan-300 hover:border-cyan-300/30 hover:bg-cyan-400/5 transition">
              Visit channel
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 fill-current"><path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3Z" /></svg>
            </a>
          </div>
        </GlassMorphicCard>
      </div>

      {/* Blog */}
      <div id="blog" className="flex gap-3 container mx-auto px-3 sm:px-6 items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">Blog</h2>
        <div className="w-full h-1 bg-white my-8"></div>
      </div>
      <div className="container mx-auto px-3 sm:px-6 space-y-6">
        {/* Main blog - first row */}
        <div>
          <BlogLatest post={latestBlog} />
        </div>
        {/* Secondary blogs - second row in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topBlogs.map((b: any, i: number) => (
            <BlogMini key={`blog-${i}`} post={b} />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex justify-end">
          <a href="https://www.notion.so/27fcb5f0cd428020a91fc79018bbfe6e?pvs=25" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-cyan-300 hover:border-cyan-300/30 hover:bg-cyan-400/5 transition">Visit full writing portfolio
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 fill-current"><path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3Z" /></svg>
          </a>
        </div>
      </div>

      {/* Social Proof */}
      <div id="testimonials" className="flex gap-3 container mx-auto px-3 sm:px-6 items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">Social Proof</h2>
        <div className="w-full h-1 bg-white/10 my-8"></div>
      </div>
      <div className="container mx-auto px-3 sm:px-6">
        <TestimonialsMarquee items={allTestimonials as any} />
      </div>

      {/* Contact */}
      {/* Contact */}
      <div id="contact" className="flex gap-3 container mx-auto px-3 sm:px-6 items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">Contact</h2>
        <div className="w-full h-1 bg-white/10 my-8"></div>
      </div>
      <div className="container mx-auto px-3 sm:px-6">
        <GlassMorphicCard>
          <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-zinc-200/90">Interested in collaborating or want to say hi?</p>
              <p className="text-emerald-300/90">I'm open to full-time jobs, internships, freelance, and OSS work.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socials.email && (
                <a href={`mailto:${socials.email}`} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:border-emerald-300/30 hover:bg-emerald-400/5">Email</a>
              )}
              {socials.github && (
                <a href={socials.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:border-cyan-300/30 hover:bg-cyan-400/5">GitHub</a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:border-cyan-300/30 hover:bg-cyan-400/5">LinkedIn</a>
              )}
            </div>
          </div>
        </GlassMorphicCard>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-3 sm:px-6 py-10 text-center text-sm text-zinc-400">
        <div>© {new Date().getFullYear()} Tarun Singh. All rights reserved.</div>
      </footer>
    </div>
  );
}
