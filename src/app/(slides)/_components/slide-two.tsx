import { ClipboardList } from 'lucide-react';

export default function SlideTwo() {
  return (
    <div className='embla__slide flex items-center justify-center text-white'>
      <div className='flex flex-col items-center gap-4'>
        <ClipboardList className='h-10 w-10 text-primary-foreground/70' />
        <h2 className='text-5xl font-bold'>Agenda</h2>

        <ul className='mt-7 space-y-3 text-2xl font-semibold text-white/90'>
          <li>Introduction to Supabase</li>
          <li>Key Features</li>
          <li>Architecture</li>
          <li>Getting started</li>
          <li>Demos</li>
          <li>Q&A</li>
        </ul>
      </div>
    </div>
  );
}
