import React from 'react'

export type TimelineItem = {
    title: string
    company: string
    from: string
    to: string
    location: string
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <div className="relative space-y-8">
            {items.map((item, idx) => {
                const isLatest = idx === 0
                return (
                    <div key={idx} className="relative flex gap-6 group">
                        {/* Date/Year on Left */}
                        <div className="w-24 sm:w-32 shrink-0 text-right">
                            <div className="text-2xl sm:text-3xl font-semibold text-white">
                                {item.from}
                            </div>
                        </div>

                        {/* Timeline Line and Dot */}
                        <div className="relative flex flex-col items-center">
                            {/* Dot */}
                            <div className={`relative z-10 w-3 h-3 rounded-full ${isLatest
                                    ? 'bg-emerald-400 ring-4 ring-emerald-400/20'
                                    : 'bg-white/40 group-hover:bg-emerald-400 transition-colors duration-300'
                                }`}>
                                {isLatest && (
                                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                                )}
                            </div>

                            {/* Connecting Line */}
                            {idx < items.length - 1 && (
                                <div className="w-px flex-1 bg-white/10 group-hover:bg-white/20 transition-colors duration-300 min-h-[60px]" />
                            )}
                        </div>

                        {/* Content on Right */}
                        <div className="flex-1 pb-8">
                            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition-all duration-300 group-hover:border-emerald-400/30 group-hover:shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-emerald-300 mb-2">
                                    {item.company}
                                </p>
                                <p className="text-sm text-zinc-400">
                                    {item.from} – {item.to} • {item.location}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

