'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useScrollAnimation(
  options: {
    trigger?: string
    start?: string
    y?: number
    x?: number
    scale?: number
    duration?: number
    stagger?: number
    delay?: number
  } = {}
) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const {
      start = 'top 85%',
      y = 40,
      x = 0,
      scale = 1,
      duration = 0.8,
      stagger = 0.15,
      delay = 0,
    } = options

    const children = ref.current.querySelectorAll('.gsap-item')
    const targets = children.length > 0 ? children : ref.current

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        x,
        opacity: 0,
        scale,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [options])

  return ref
}

export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [speed])

  return ref
}

export function useCountUp(end: number, duration = 2) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: end,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.round(obj.val).toLocaleString()
          }
        },
      })
    })

    return () => ctx.revert()
  }, [end, duration])

  return ref
}

export { gsap, ScrollTrigger }
