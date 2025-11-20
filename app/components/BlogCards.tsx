"use client"
import Image from 'next/image'
import GlassMorphicCard from './GlassMorphicCard'
import React, { useEffect, useMemo, useState } from 'react'

function AutoImage({ url, explicitImage, alt }: { url?: string; explicitImage?: string; alt: string }) {
  const [img, setImg] = useState<string | null>(explicitImage ?? null)
  const isDirectImage = useMemo(() => (url ? /\.(png|jpe?g|gif|webp|avif)$/i.test(url) : false), [url])

  useEffect(() => {
    if (explicitImage) return
    if (!url) return
    if (isDirectImage) {
      setImg(url)
      return
    }
    let mounted = true
      ; (async () => {
        try {
          const res = await fetch(`/api/og?url=${encodeURIComponent(url)}`, { cache: 'no-store' })
          const data = await res.json()
          if (mounted) setImg(data.image || null)
        } catch {
          if (mounted) setImg(null)
        }
      })()
    return () => {
      mounted = false
    }
  }, [url, explicitImage, isDirectImage])

  if (!img) {
    return <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-teal-300/10 to-cyan-400/20" />
  }
  return <Image src={img} alt={alt} fill className="object-cover" />
}

export function BlogLatest({ post }: { post: { title: string; description: string; image?: string; url: string } }) {
  if (!post || !post.title || !post.url) {
    return null
  }

  // Ensure URL is a valid string and not corrupted
  const url = typeof post.url === 'string' && post.url.startsWith('http') ? post.url : null
  const title = typeof post.title === 'string' ? post.title : ''
  const description = typeof post.description === 'string' ? post.description : ''

  if (!url) {
    console.warn('Invalid blog URL:', post)
    return null
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group block">
      <GlassMorphicCard>
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div className="relative md:col-span-2 aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <AutoImage url={url} explicitImage={post.image} alt={title} />
          </div>
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-2xl sm:text-4xl font-[10] text-white group-hover:text-emerald-300">{title}</h3>
            {description && <p className="text-lg text-zinc-200/90">{description}</p>}
          </div>
        </div>
      </GlassMorphicCard>
    </a>
  )
}

export function BlogMini({ post }: { post: { title: string; image?: string; url: string } }) {
  if (!post || !post.title || !post.url) {
    return null
  }

  // Ensure URL is a valid string and not corrupted
  const url = typeof post.url === 'string' && post.url.startsWith('http') ? post.url : null
  const title = typeof post.title === 'string' ? post.title : ''

  if (!url) {
    console.warn('Invalid blog URL:', post)
    return null
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group block">
      <GlassMorphicCard>
        <div className="p-4 sm:p-6 space-y-2">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <AutoImage url={url} explicitImage={post.image} alt={title} />
          </div>
          <h4 className="text-2xl text-white group-hover:text-emerald-300">{title}</h4>
        </div>
      </GlassMorphicCard>
    </a>
  )
}


