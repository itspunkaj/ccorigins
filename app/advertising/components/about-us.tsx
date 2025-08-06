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
import Counter from '@/components/ui/counter';


const skills = [
  { label: 'Advertising', value: 98, color: 'bg-primaryYellow' },
  { label: 'Exhibits and Events', value: 96, color: 'bg-primaryYellow' },
  { label: 'Development and Marketing', value: 95, color: 'bg-primaryYellow' },
];
const catalogueData = [
  {
    id: 1,
    title: "Modern Bedroom Design",
    image: "/images/portfolio/fashion.jpg",
  },
  {
    id: 2,
    title: "Minimalist Bedroom",
    image: "/images/Kerala.jpg",
  },
  {
    id: 3,
    title: "Luxury Master Suite",
    image: "/images/advertisements/Tufcon.png",
  },
  {
    id: 4,
    title: "Luxury Master Suite",
    image: "/images/kkr.jpg",
  },
  {
    id: 5,
title: "Luxury Master Suite",
    image: "/images/advertisements/Travel.png",
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
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Text Content */}
          <div className='grid grid-cols-2 gap-10'>
            <div className="col-span-2 md:col-span-1">
              <p className="text-lg font-semibold text-gray-600 uppercase mb-2">About Us</p>
              <h1 className="text-3xl font-bold mb-6">
                Your <span className='text-primaryYellow font-semibold'>Brand</span>. Our <span className='text-primaryYellow font-semibold'>Spark</span>. Infinite <span className='text-primaryYellow font-semibold'>Impact</span>.
              </h1>
              {/* <div className='flex justify-between my-8'>
                <div className='text-center w-1/3'>
                  <Counter end={200} suffix='+'/>
                  <span className='text-lg font-semibold'>Projects</span>
                </div>
                <div className='text-center w-1/3'>
                  <Counter end={95} suffix='%'/>
                  <span className='text-lg font-semibold'>Satisfaction Rate</span>
                </div>
                <div className='text-center w-1/3'>
                  <Counter end={150} suffix='+'/>
                  <span className='text-lg font-semibold'>Clients</span>
                </div>
              </div> */}
              <p className="text-gray-600 mb-8">
                Digital we are the biggest digital agency,
                more than 200 internal. We are known for our
                company making digital PR even more
                sophisticated. Welcome to Borcelle, where we
                generate the Digital Business our clients
                deserve. We can help your digital PR, all your
                company&apos;s campaign needs in any field will
                be carried out properly.</p>

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
                  href="/contact"
                // className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition"
                >
                  Read More
                </Link>
              </Button>
            </div>

            {/* Image Content */}

            <div className='col-span-2 md:col-span-1 md:p-4 md:m-5 relative'>
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
                className="architectSwiper h-full flex items-center justify-center"
              >
                {
                  catalogueData.map((item, index) => {
                    return (
                      <SwiperSlide className='!flex !items-center !justify-center h-full '>
                        <Image src={item.image} height={1000} width={1000} alt='image' className='my-auto mx-auto w-full object-cover ' />
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
