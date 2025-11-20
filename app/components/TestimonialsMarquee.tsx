import React from 'react'
import Image from 'next/image'

type Testimonial = {
  name?: string;
  designation?: string;
  testimonial?: string;
  profile?: string;
  text?: string;
  source?: string;
}

export default function TestimonialsMarquee({ items }: { items: Testimonial[] }) {
  // Split items into 2 columns for masonry layout
  const getColumnItems = (columnIndex: number) => {
    return items.filter((_, index) => index % 2 === columnIndex);
  }

  const column = (columnIndex: number, key: string) => {
    const columnItems = getColumnItems(columnIndex);

    return (
      <div className="flex-1 flex flex-col gap-4" key={key}>
        {columnItems.map((t, i) => (
          <div
            key={`${key}-${i}`}
            className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-lg hover:bg-white/15 transition-all duration-300 "
          >
            {/* Testimonial Text */}
            <p className="text-zinc-100 text-sm leading-relaxed mb-4">
              "{t.testimonial || t.text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              {/* Avatar */}
              {(t.profile || t.name) && (
                <div className="shrink-0">
                  {t.profile ? (
                    <Image
                      src={t.profile}
                      alt={t.name || 'Profile'}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                      {t.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
              )}

              {/* Name and Title */}
              <div className="flex-1 min-w-0">
                {t.name && (
                  <div className="text-sm font-medium text-white">
                    {t.name}
                  </div>
                )}
                {t.designation && (
                  <div className="text-xs text-zinc-400">
                    {t.designation}
                  </div>
                )}
                {!t.name && t.source && (
                  <div className="text-sm text-zinc-400">
                    {t.source}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-4 w-full items-start">
      {column(0, 't1')}
      {column(1, 't2')}
    </div>
  )
}
