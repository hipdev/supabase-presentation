import { SliderWrapper } from '../(payload)/_components/slider-wrapper'

export default async function Landing() {
  // Fetch slides from the database will be here later

  return (
    <div className="text-xl font-semibold">
      <p className="font-bold">test</p>
      <SliderWrapper>
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </SliderWrapper>
    </div>
  )
}
