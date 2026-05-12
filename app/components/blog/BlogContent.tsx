import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="text-3xl font-bold text-zinc-900 mt-10 mb-4" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-3" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="text-xl font-semibold text-zinc-900 mt-6 mb-2" {...props} />
    ),
    h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4 className="text-lg font-semibold text-zinc-900 mt-5 mb-2" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="leading-relaxed mb-4" style={{ color: "#57534D" }} {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a
            className="text-emerald-600 underline underline-offset-2 hover:text-emerald-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="list-disc list-inside space-y-1.5 mb-4 ml-2" style={{ color: "#57534D" }} {...props} />
    ),
    ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
        <ol className="list-decimal list-inside space-y-1.5 mb-4 ml-2" style={{ color: "#57534D" }} {...props} />
    ),
    li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
        <li className="leading-relaxed" style={{ color: "#57534D" }} {...props} />
    ),
    blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className="border-l-2 border-emerald-500 pl-4 py-1 my-4 italic bg-emerald-50 rounded-r-lg"
            style={{ color: "#57534D" }}
            {...props}
        />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code
            className="bg-zinc-100 text-emerald-700 text-sm px-1.5 py-0.5 rounded font-mono border border-zinc-200"
            {...props}
        />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre
            className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 my-4 overflow-x-auto text-sm"
            {...props}
        />
    ),
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <strong className="text-zinc-900 font-semibold" {...props} />
    ),
    em: (props: React.HTMLAttributes<HTMLElement>) => (
        <em className="italic" style={{ color: "#57534D" }} {...props} />
    ),
    hr: () => <hr className="border-zinc-200 my-8" />,
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse text-sm" style={{ color: "#57534D" }} {...props} />
        </div>
    ),
    th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
        <th className="border border-zinc-200 bg-zinc-50 px-4 py-2 text-left font-semibold text-zinc-900" {...props} />
    ),
    td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
        <td className="border border-zinc-200 px-4 py-2" style={{ color: "#57534D" }} {...props} />
    ),
};

export default function BlogContent({ source }: { source: string }) {
    return (
        <article className="max-w-none">
            <MDXRemote source={source} components={components} />
        </article>
    );
}
