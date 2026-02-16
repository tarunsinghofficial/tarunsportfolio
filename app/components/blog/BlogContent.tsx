import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="text-3xl font-bold text-white mt-10 mb-4" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-2xl font-bold text-white mt-8 mb-3" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="text-xl font-semibold text-white mt-6 mb-2" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="text-zinc-300 leading-relaxed mb-4" {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a
            className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="list-disc list-inside space-y-1.5 text-zinc-300 mb-4 ml-2" {...props} />
    ),
    ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
        <ol className="list-decimal list-inside space-y-1.5 text-zinc-300 mb-4 ml-2" {...props} />
    ),
    li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
        <li className="text-zinc-300 leading-relaxed" {...props} />
    ),
    blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className="border-l-2 border-emerald-400/50 pl-4 py-1 my-4 text-zinc-400 italic"
            {...props}
        />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code
            className="bg-white/10 text-emerald-300 text-sm px-1.5 py-0.5 rounded font-mono"
            {...props}
        />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre
            className="bg-white/5 border border-white/10 rounded-xl p-4 my-4 overflow-x-auto text-sm"
            {...props}
        />
    ),
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <strong className="text-white font-semibold" {...props} />
    ),
    hr: () => <hr className="border-white/10 my-8" />,
};

export default function BlogContent({ source }: { source: string }) {
    return (
        <article className="max-w-none">
            <MDXRemote source={source} components={components} />
        </article>
    );
}
