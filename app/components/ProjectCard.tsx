import Image from 'next/image'
import GlassMorphicCard from './GlassMorphicCard'
import React from 'react'

type Props = {
  title: string
  image?: string
  stack: string[]
  description: string
  href?: string
  github?: string
  live?: string
}

export default function ProjectCard({ title, image, stack, description, href, github, live }: Props) {
  const content = (
    <GlassMorphicCard className="h-full">
      <div className="p-4 sm:p-6 space-y-3">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 group">
          {image ? (
            <Image src={image} alt={title} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-emerald-400/20 via-teal-300/10 to-cyan-400/20" />
          )}

          {/* GitHub and Live Links */}
          {(github || live) && (
            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 hover:bg-black/80 hover:border-purple-400/50 transition-all duration-300 group/icon"
                  aria-label="View on GitHub"
                >
                  <svg className="w-5 h-5 text-white group-hover/icon:text-purple-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 hover:bg-black/80 hover:border-emerald-400/50 transition-all duration-300 group/icon"
                  aria-label="View Live Demo"
                >
                  <svg className="w-5 h-5 text-white group-hover/icon:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        <div className="flex flex-wrap gap-2 text-xs text-emerald-300/90">
          {stack.map((t, i) => (
            <span key={i} className="px-2 py-0.5 rounded-full border border-emerald-400/20 bg-emerald-400/10">{t}</span>
          ))}
        </div>
        <p className="text-sm text-zinc-200/90 line-clamp-3">{description}</p>
      </div>
    </GlassMorphicCard>
  )
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block hover:scale-[1.01] transition-transform">
        {content}
      </a>
    )
  }
  return content
}


