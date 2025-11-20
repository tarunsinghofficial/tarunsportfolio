'use client'

import React, { useState, useRef, useEffect } from 'react'
import ProjectCard from './ProjectCard'

type Project = {
    title: string;
    image: string;
    tech: string[];
    description: string;
    live?: string;
    github?: string;
}

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [itemsToShow, setItemsToShow] = useState(1)
    const carouselRef = useRef<HTMLDivElement>(null)

    // Responsive items to show based on screen size
    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3) // lg screens: 3 items
            } else if (window.innerWidth >= 768) {
                setItemsToShow(2) // md screens: 2 items
            } else {
                setItemsToShow(1) // mobile: 1 item
            }
        }

        updateItemsToShow()
        window.addEventListener('resize', updateItemsToShow)
        return () => window.removeEventListener('resize', updateItemsToShow)
    }, [])

    // Update maxIndex when itemsToShow changes
    useEffect(() => {
        setCurrentIndex(0) // Reset to first slide when screen size changes
    }, [itemsToShow])

    const maxIndex = Math.max(0, projects.length - itemsToShow)

    const scrollToIndex = (index: number) => {
        if (isTransitioning) return

        const newIndex = Math.max(0, Math.min(index, maxIndex))
        setCurrentIndex(newIndex)
        setIsTransitioning(true)

        setTimeout(() => setIsTransitioning(false), 500)
    }

    const handlePrev = () => {
        scrollToIndex(currentIndex - 1)
    }

    const handleNext = () => {
        scrollToIndex(currentIndex + 1)
    }

    const canGoPrev = currentIndex > 0
    const canGoNext = currentIndex < maxIndex

    return (
        <div className="relative w-full">
            {/* Left Arrow */}
            {canGoPrev && (
                <button
                    onClick={handlePrev}
                    disabled={!canGoPrev || isTransitioning}
                    className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-2 md:p-3 border border-white/20 shadow-lg transition-all duration-300 group"
                    aria-label="Previous projects"
                >
                    <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            {/* Carousel Container */}
            <div className="overflow-hidden pr-10 py-2" ref={carouselRef}>
                <div
                    className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
                    }}
                >
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="shrink-0 w-full md:w-auto"
                            style={{
                                width: itemsToShow === 1
                                    ? '100%'
                                    : `calc((100% - ${(itemsToShow - 1) * (itemsToShow === 2 ? 16 : 24)}px) / ${itemsToShow})`
                            }}
                        >
                            <ProjectCard
                                title={p.title}
                                image={p.image}
                                stack={p.tech}
                                description={p.description}
                                href={p.live || p.github}
                                github={p.github}
                                live={p.live}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            {canGoNext && (
                <button
                    onClick={handleNext}
                    disabled={!canGoNext || isTransitioning}
                    className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-2 md:p-3 border border-white/20 shadow-lg transition-all duration-300 group"
                    aria-label="Next projects"
                >
                    <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}

            {/* Dots Indicator */}
            {projects.length > itemsToShow && (
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                ? 'w-8 bg-white'
                                : 'w-2 bg-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
