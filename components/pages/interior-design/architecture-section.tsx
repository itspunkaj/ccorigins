"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

const catalogueData = [
  {
    id: 1,
    title: "Modern Bedroom Design",
    image: "/images/apartment.jpg",
  },
  {
    id: 2,
    title: "Minimalist Bedroom",
    image: "/images/bathtub.jpg",
  },
  {
    id: 3,
    title: "Luxury Master Suite",
    image: "/images/billboard.jpg",
  },
  {
    id: 4,
    title: "Cozy Bedroom Retreat",
    image: "/images/interior.jpg",
  },
  {
    id: 1,
    title: "Modern Bedroom Design",
    image: "/images/kitchen.jpg",
  },
  {
    id: 2,
    title: "Minimalist Bedroom",
    image: "/images/office.jpg",
  },
  {
    id: 3,
    title: "Luxury Master Suite",
    image: "/images/time-square.jpg",
  },
  {
    id: 4,
    title: "Cozy Bedroom Retreat",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function ArchitectureSection() {
  return (
    <section className="bg-gray-300 text-black min-h-[95vh] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light  mb-4">Architecture</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Discover our portfolio of beautifully designed interiors across different spaces and styles
          </p>
        </div>
        <div>
          {/* <Swiper
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper !flex !items-center !justify-center"
          >
            {
              catalogueData.map((item,index)=>{
                return (
                  <SwiperSlide className='!flex !items-center !justify-center'>
                    <Image src={item.image} height={1000} width={1000} alt='image' className='my-auto mx-auto'/>
                  </SwiperSlide>
                )
              })
            }
          </Swiper> */}
        </div>
      </div>
    </section>
  )
}