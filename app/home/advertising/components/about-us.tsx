// app/about/page.tsx or components/About.tsx
"use client"
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const skills = [
  { label: 'Digital Marketing', value: 85, color: 'bg-primaryYellow' },
  { label: 'SEO & Backlinks', value: 90, color: 'bg-primaryYellow' },
  { label: 'Design & Development', value: 95, color: 'bg-primaryYellow' },
];
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

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% visible
  });
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    if (inView) {
      // Animate bars when section is in view
      const timers = skills.map((skill, index) =>
        setTimeout(() => {
          setProgress((prev) =>
            prev.map((val, i) => (i === index ? skill.value : val))
          );
        }, index * 300) // stagger fill
      );

      return () => timers.forEach((t) => clearTimeout(t));
    }
  }, [inView]);
  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Text Content */}
          <div className='grid grid-cols-2 gap-10'>
            <div className="col-span-2 md:col-span-1">
              <p className="text-lg font-semibold text-gray-600 uppercase mb-2">About Us</p>
              <h1 className="text-3xl font-bold mb-6">
                Your <span className='text-primaryYellow font-semibold'>Brand</span>. Our <span className='text-primaryYellow font-semibold'>Spark</span>. Infinite <span className='text-primaryYellow font-semibold'>Impact</span>.
              </h1>
              <p className="text-gray-600 mb-8">
                For over 20 years, COO has been the Creative Catalyst behind standout advertising and unforgettable events. We fuse bold ideas with flawless execution to craft experiences that connect, engage, and inspire.
              </p>

              {/* Skills */}
              <div className='' ref={ref}>

                {skills.map(({ label, value, color }, index) => (
                  <div className="mb-6" key={label}>
                    <div className="flex justify-between mb-1">
                      <p className="text-gray-800">{label}</p>
                      <p className="text-gray-800">{value}%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`${color} h-2.5 rounded-full transition-all duration-1000 ease-in-out`}
                        style={{ width: `${progress[index]}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <Button>

                <Link
                  href="/about"
                // className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition"
                >
                  Read More
                </Link>
              </Button>
            </div>

            {/* Image Content */}

            <div className='col-span-2 md:col-span-1 p-4 m-5 relative'>
              <div className="absolute top-0 -left-5 w-6 h-1 bg-primaryYellow"></div>
              <div className="absolute top-0 -left-5 w-1 h-6 bg-primaryYellow"></div>

              <div className="absolute top-0 -right-5 w-6 h-1 bg-primaryYellow"></div>
              <div className="absolute top-0 -right-5 w-1 h-6 bg-primaryYellow"></div>

              <div className="absolute bottom-0 -left-5 w-6 h-1 bg-primaryYellow"></div>
              <div className="absolute bottom-0 -left-5 w-1 h-6 bg-primaryYellow"></div>

              <div className="absolute bottom-0 -right-5 w-6 h-1 bg-primaryYellow"></div>
              <div className="absolute bottom-0 -right-5 w-1 h-6 bg-primaryYellow"></div>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="architectSwiper"
              >
                {
                  catalogueData.map((item, index) => {
                    return (
                      <SwiperSlide className='!flex !items-center !justify-center '>
                        <Image src={item.image} height={1000} width={1000} alt='image' className='my-auto mx-auto h-96 object-cover' />
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
          </div>
        </div>
      </div>
    </div>
  );
}
