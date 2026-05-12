'use client'

import { useState, useEffect, useCallback } from 'react'

interface LightboxImage {
  src: string
  alt?: string
  caption?: string
}

interface LightboxProps {
  images: LightboxImage[]
  children: (open: (index: number) => void) => React.ReactNode
}

export default function Lightbox({ images, children }: LightboxProps) {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  )
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, close, next, prev])

  const current = index !== null ? images[index] : null

  return (
    <>
      {children(setIndex)}
      {current && (
        <div
          className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close() }}
            aria-label="Close"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-accent text-white hover:text-dark flex items-center justify-center transition-all text-2xl"
          >
            ×
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous"
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-accent text-white hover:text-dark flex items-center justify-center transition-all text-xl"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-accent text-white hover:text-dark flex items-center justify-center transition-all text-xl"
          >
            ›
          </button>
          <figure
            className="max-w-5xl max-h-[85vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt || ''}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            {current.caption && (
              <figcaption className="text-sm text-gray-300 text-center max-w-2xl">
                {current.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  )
}
