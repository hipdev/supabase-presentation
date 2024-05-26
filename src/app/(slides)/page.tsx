import { SliderWrapper } from './_components/slider-wrapper'

export default async function Landing() {
  // Fetch slides from the database will be here later

  return (
    <div className="text-xl font-semibold">
      <SliderWrapper>
        <div className="embla__slide text-white flex justify-center items-center">
          <h2 className="text-4xl font-bold">Supabase Presentation</h2>
        </div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </SliderWrapper>
    </div>
  )
}
