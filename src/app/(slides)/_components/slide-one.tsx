import Image from 'next/image';

export default function SlideOne() {
  return (
    <div className='embla__slide flex items-center justify-center text-white'>
      <div className='flex flex-col items-center gap-4'>
        <Image src='/logo.jpeg' alt='Supabase logo' width={100} height={100} />
        <h2 className='text-4xl font-bold'>What is Supabase? - Plus demos</h2>

        <h4>By Julián David - Hip Dev</h4>
      </div>
    </div>
  );
}
