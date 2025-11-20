import React from 'react'

function GlassMorphicCard({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <section className={`container mx-auto bg-white/5 backdrop-blur-md rounded-3xl border border-white/4 shadow-lg relative z-10 w-full ${className ?? ''}`}>
            {children}
        </section>
    )
}

export default GlassMorphicCard