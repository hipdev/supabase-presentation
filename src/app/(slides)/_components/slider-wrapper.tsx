'use client'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

type Props = {
  children: React.ReactNode
}

export function SliderWrapper({ children }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  useEffect(() => {
    const checkKey = (e: KeyboardEvent): void => {
      if (!emblaApi) return

      if (e.key === 'ArrowLeft') {
        emblaApi.scrollPrev()
      } else if (e.key === 'ArrowRight') {
        emblaApi.scrollNext()
      }
    }

    window.addEventListener('keydown', checkKey)

    return () => {
      window.removeEventListener('keydown', checkKey)
    }
  }, [emblaApi])

  return (
    <div className="embla w-full h-screen bg-neutral-950 relative">
      <div className="embla__viewport  h-full" ref={emblaRef}>
        <div className="embla__container h-full">{children}</div>
      </div>

      <div className="mt-3 flex justify-between absolute bottom-5 right-5">
        <button className="w-20 bg-white px-2 py-1 text-sm text-black" onClick={scrollPrev}>
          Prev
        </button>
        <button className="w-20 bg-white px-2 py-1 text-sm text-black" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  )
}
