"use client";

export default function SearchBar({
    value,
    onChange,
}: {
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <div className="relative flex-1 max-w-md">
            <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search posts…"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-700 placeholder:text-zinc-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all shadow-sm"
            />
        </div>
    );
}
