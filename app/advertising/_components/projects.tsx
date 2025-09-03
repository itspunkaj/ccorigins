'use client';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';

export function ThreeDMarqueeDemo() {
  const images = [
    '/images/advertisements/ILS.png',
    '/images/advertisements/Himalaya-opticals.png',
    '/images/advertisements/Kinetic.png',
    '/images/advertisements/mercy.png',
    '/images/advertisements/saluja.png',
    '/images/advertisements/Travel.png',
    '/images/advertisements/Tufcon.png',
    '/images/advertisements/ILS.png',
    '/images/advertisements/Himalaya-opticals.png',
    '/images/advertisements/Kinetic.png',
    '/images/advertisements/mercy.png',
    '/images/advertisements/saluja.png',
    '/images/advertisements/Travel.png',
    '/images/advertisements/Tufcon.png',
    '/images/advertisements/ILS.png',
    '/images/advertisements/Himalaya-opticals.png',
    '/images/advertisements/Kinetic.png',
    '/images/advertisements/mercy.png',
    '/images/advertisements/saluja.png',
    '/images/advertisements/Travel.png',
    '/images/advertisements/Tufcon.png',
    '/images/advertisements/ILS.png',
    '/images/advertisements/Himalaya-opticals.png',
    '/images/advertisements/Kinetic.png',
    '/images/advertisements/mercy.png',
    '/images/advertisements/saluja.png',
    '/images/advertisements/Travel.png',
    '/images/advertisements/Tufcon.png',
    '/images/advertisements/ILS.png',
    '/images/advertisements/Himalaya-opticals.png',
    '/images/advertisements/Kinetic.png',
    '/images/advertisements/mercy.png',
    '/images/advertisements/saluja.png',
    '/images/advertisements/Travel.png',
    '/images/advertisements/Tufcon.png',
  ];
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
