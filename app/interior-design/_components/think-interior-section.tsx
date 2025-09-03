import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const thinkInteriorImages = [
  {
    id: '1',
    title: 'Full Home',
    url: '/images/interior-design/full-home.jpg',
  },
  {
    id: '2',
    title: 'Office & Showroom',
    url: '/images/interior-design/office-showroom.jpg',
  },
  {
    id: '3',
    title: 'Restraurant & Cafe',
    url: '/images/interior-design/restraurant-cafe.jpg',
  },
  {
    id: '4',
    title: 'Luxury Interior',
    url: '/images/interior-design/luxury-interior.jpg',
  },
];

export function ThinkInteriorSection() {
  return (
    <section className="w-full min-h-[70dvh] bg-primaryYellow">
      <div className="w-full max-w-8xl mx-auto flex flex-col items-center justify-center py-10 max-sm:px-4">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="uppercase text-4xl 4xl:text-6xl font-gotham">
            <span className="font-thin">Think</span>
            <span className="text-white font-extrabold">Interior</span>
          </h1>
          <p className="text-lg md:text-2xl 4xl:text-4xl text-center font-bahn font-light my-4">
            Complete interior design from renovations to modular solutions-for your home or office.
            <br />
            Explore our wide range of furniture and decor to bring your space to life.
          </p>
        </div>
        <div className="flex-1 grid md:grid-cols-4 gap-4 my-10 h-full md:px-10">
          {thinkInteriorImages.map((img) => {
            return (
              <div
                key={img.id}
                className="bg-white rounded-3xl shadow-md overflow-hidden h-[35dvh] flex flex-col items-center justify-between"
              >
                <Image
                  src={img.url}
                  className="object-cover h-[25dvh]"
                  height={1000}
                  width={1000}
                  alt={img.title}
                />
                <div className="flex-1 w-full flex flex-col items-center justify-center 4xl:text-3xl">
                  {img.title}
                  <ChevronRight className="4xl:w-10 4xl:h-10" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
