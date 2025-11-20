'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Videos', href: '#videos' },
    { name: 'Blog', href: '#blog' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            // Determine active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1))
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)

        // If this is a section link (e.g. "#projects")
        if (href.startsWith('#')) {
            // If we're not on the home page, navigate to the home page with hash
            if (window.location.pathname !== '/') {
                window.location.href = `/${href}`
                return
            }

            // Already on home page → smooth scroll to section
            const element = document.querySelector(href)
            if (element) {
                const offset = 80 // Navbar height offset
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                })
            }
            return
        }

        // For full routes like "/about"
        if (href.startsWith('/')) {
            window.location.href = href
            return
        }
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            onClick={(e) => {
                                e.preventDefault()
                                window.location.href = '/'
                            }}
                            className="text-xl md:text-2xl font-bold text-white hover:text-green-400 transition-colors"
                        >
                            <Image src="/logo.png" alt="Logo" width={1000} height={1000} className="inline-block mr-2 mb-1 w-32" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(link.href, e)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === link.href.substring(1)
                                        ? 'bg-white/20 text-white'
                                        : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="bg-white/10 backdrop-blur-lg border-t border-white/10">
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(link.href, e)}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === link.href.substring(1)
                                        ? 'bg-white/20 text-white'
                                        : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer to prevent content from going under fixed navbar */}
            <div className="h-16 md:h-20" />
        </>
    )
}
