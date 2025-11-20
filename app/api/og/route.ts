import { NextResponse } from 'next/server'

function isImageUrl(url: string): boolean {
    return /\.(png|jpe?g|gif|webp|avif)$/i.test(url)
}

function resolveUrl(maybeRelative: string, base: string): string {
    try {
        return new URL(maybeRelative, base).toString()
    } catch {
        return maybeRelative
    }
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const target = searchParams.get('url')
    if (!target) return NextResponse.json({ error: 'url required' }, { status: 400 })

    try {
        if (isImageUrl(target)) {
            return NextResponse.json({ image: target })
        }

        const res = await fetch(target, {
            headers: {
                'user-agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36',
                accept: 'text/html,application/xhtml+xml',
            },
            // Prevent Next from caching unexpected content for too long
            cache: 'no-store',
        })
        const html = await res.text()

        // naive meta parsing
        const match = html.match(/<(meta|META)[^>]+(property|name)=["'](?:og:image|twitter:image)["'][^>]+content=["']([^"']+)["'][^>]*>/)
        const img = match?.[3]
        if (!img) return NextResponse.json({ image: null })
        return NextResponse.json({ image: resolveUrl(img, target) })
    } catch (e) {
        return NextResponse.json({ image: null })
    }
}


