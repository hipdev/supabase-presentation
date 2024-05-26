'use client'

import React from 'react'
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

  return (
    <div className="embla mx-auto mt-12 max-w-lg">
      <div className="embla__viewport h-56 border" ref={emblaRef}>
        <div className="embla__container h-full">{children}</div>
      </div>

      <div className="mt-3 flex justify-between">
        <button className="w-20 bg-black px-2 py-1 text-sm text-white" onClick={scrollPrev}>
          Prev
        </button>
        <button className="w-20 bg-black px-2 py-1 text-sm text-white" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  )
}
