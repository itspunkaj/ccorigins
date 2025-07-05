"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useRef } from 'react';

const catalogueData = [
  {
    id: 1,
    title: "Modern Bedroom Design",
    image: "/images/architecture/villa-1.jpg",
  },
  {
    id: 2,
    title: "Minimalist Bedroom",
    image: "/images/architecture/villa-2.jpg",
  },
  {
    id: 3,
    title: "Luxury Master Suite",
    image: "/images/architecture/villa-3.jpg",
  },
  {
    id: 4,
    title: "Cozy Bedroom Retreat",
    image: "/images/architecture/villa-4.jpg",
  },
  {
    id: 1,
    title: "Modern Bedroom Design",
    image: "/images/architecture/villa-5.jpg",
  },
  {
    id: 2,
    title: "Minimalist Bedroom",
    image: "/images/architecture/villa-6.jpg",
  },
]

export default function ArchitectureSection() {
  const progressCircle = useRef<SVGCircleElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    s: any, // or a specific type if you're using Swiper
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <section className="bg-black text-white min-h-[95vh] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light  mb-4">Architecture That Speaks Style</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Step into spaces that inspire. From cozy corners to bold open plans, our interiors are designed to make you feel something — every single day.
          </p>
        </div>
        <div className='grid grid-cols-2'>
          <div className='col-span-2 p-4 relative md:col-span-1'>
            <div className="absolute top-0 -left-10 w-6 h-1 bg-primaryYellow"></div>
            <div className="absolute top-0 -left-10 w-1 h-6 bg-primaryYellow"></div>

            <div className="absolute top-0 -right-10 w-6 h-1 bg-primaryYellow"></div>
            <div className="absolute top-0 -right-10 w-1 h-6 bg-primaryYellow"></div>

            <div className="absolute bottom-0 -left-10 w-6 h-1 bg-primaryYellow"></div>
            <div className="absolute bottom-0 -left-10 w-1 h-6 bg-primaryYellow"></div>

            <div className="absolute bottom-0 -right-10 w-6 h-1 bg-primaryYellow"></div>
            <div className="absolute bottom-0 -right-10 w-1 h-6 bg-primaryYellow"></div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="architectSwiper"
            >
              {
                catalogueData.map((item, index) => {
                  return (
                    <SwiperSlide className='!flex !items-center !justify-center '>
                      <Image src={item.image} height={1000} width={1000} alt='image' className='my-auto mx-auto h-full w-full object-cover' />
                    </SwiperSlide>
                  )
                })
              }
              {/* <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div> */}
            </Swiper>
          </div>
          <div className="col-span-2 md:col-span-1 space-y-4 mx-auto my-auto h-full w-full md:py-10 md:px-20 p-4">
            <h3 className="text-lg font-semibold text-gray-200">Modern Minimalist</h3>
            <p className="text-sm text-gray-300">
              Clean lines, open spaces, and a neutral palette define our minimalist designs. Each project is tailored to enhance natural light and functional elegance.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Open-concept layouts</li>
              <li>Natural material accents</li>
              <li>Smart storage integration</li>
            </ul>
            <a href="/projects/minimalist" className="inline-block text-primaryYellow hover:underline text-sm font-medium">
              View Project →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}