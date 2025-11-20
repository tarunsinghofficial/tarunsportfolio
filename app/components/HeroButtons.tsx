'use client'

import React from 'react'

export default function HeroButtons({ resumeUrl }: { resumeUrl?: string }) {
    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            const offset = 80 // Navbar height offset
            const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
            {resumeUrl && (
                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg border border-white/20 font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                    <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Resume
                </a>
            )}
            <a
                href="#contact"
                onClick={handleContactClick}
                className="group relative px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-zinc-900 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
                <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
            </a>
        </div>
    )
}
