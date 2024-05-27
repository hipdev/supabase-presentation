import Image from 'next/image';
import { SliderWrapper } from './_components/slider-wrapper';

export default async function Landing() {
  // Fetch slides from the database will be here later

  return (
    <div className='text-xl font-semibold'>
      <SliderWrapper>
        <div className='embla__slide flex items-center justify-center text-white'>
          <div className='flex flex-col items-center gap-4'>
            <Image
              src='/logo.jpeg'
              alt='Supabase logo'
              width={100}
              height={100}
            />
            <h2 className='text-4xl font-bold'>
              What is Supabase? - AI Inference Demo
            </h2>
          </div>
        </div>
        <div className='embla__slide'>Slide 2</div>
        <div className='embla__slide'>Slide 3</div>
      </SliderWrapper>
    </div>
  );
}
