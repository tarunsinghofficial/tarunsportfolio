"use client";

export default function ViewToggle({
    view,
    onViewChange,
}: {
    view: "grid" | "list";
    onViewChange: (v: "grid" | "list") => void;
}) {
    return (
        <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
            <button
                onClick={() => onViewChange("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${view === "grid"
                        ? "bg-white/10 text-white border border-white/10"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                aria-label="Grid view"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
                <span className="hidden sm:inline">Grid</span>
            </button>
            <button
                onClick={() => onViewChange("list")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${view === "list"
                        ? "bg-white/10 text-white border border-white/10"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                aria-label="List view"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="hidden sm:inline">List</span>
            </button>
        </div>
    );
}
