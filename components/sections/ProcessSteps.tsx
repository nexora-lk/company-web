'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface Step {
  number: string
  title: string
  description: string
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current!.querySelectorAll('.step-item'), {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <div key={i} className="step-item text-center group">
          <div className="relative flex items-center justify-center mb-6">
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-accent-bg border-2 border-accent text-xl font-bold text-accent z-10 group-hover:animate-pulse-glow transition-all">
              {step.number}
            </span>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-0.5 bg-gradient-to-r from-accent to-transparent opacity-30" />
            )}
          </div>
          <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
          <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
