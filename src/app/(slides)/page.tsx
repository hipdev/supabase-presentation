import { SliderWrapper } from './_components/slider-wrapper';
import SlideOne from './_components/slide-one';
import SlideTwo from './_components/slide-two';

export default function Landing() {
  return (
    <div className='text-xl font-semibold'>
      <SliderWrapper>
        <SlideOne />
        <SlideTwo />
        <div className='embla__slide'>Slide 2</div>
        <div className='embla__slide'>Slide 3</div>
      </SliderWrapper>
    </div>
  );
}
