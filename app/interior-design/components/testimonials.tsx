"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";


import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';

const testimonials = [
  {
    text: "Working with this team was an absolute delight! They completely transformed our 2BHK into a modern yet cozy space. Every detail was taken care of, and the final result was beyond our expectations.",
    name: "Radhika Iyer",
    city: "Bengaluru",
    img: "/images/interior-testimonials/radhika.jpeg"
  },
  {
    text: "Being a heritage-loving family, we wanted our home to reflect classic Bengali aesthetics with a modern twist. The team beautifully merged tradition with contemporary design — we couldn’t have asked for more!",
    name: "Saurav Banerjee",
    city: "Kolkata",
    img: "/images/interior-testimonials/sourav.jpeg"
  },
  {
    text: "We hired them to renovate our old ancestral property, and the result was stunning. They preserved the soul of the home while upgrading it for modern living. Everyone in the family is thrilled.",
    name: "Rajat & Sneha Dutta",
    city: "Salt Lake, Kolkata",
    img: "/images/interior-testimonials/rajat.jpeg"
  },
  {
    text: "The architectural inputs they provided for our villa project were top-notch. Their sense of space planning, aesthetics, and practicality truly stood out. We’ll definitely work with them again!",
    name: "Sameer Reddy",
    city: "Hyderabad",
    img: "/images/interior-testimonials/sameer.jpeg"
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white">
      <Swiper
        spaceBetween={30}
        scrollbar={{
          hide: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Scrollbar]}
        className="mySwiper max-md:h-[500px]"
      >
        {
          testimonials.map((el) => {
            return (
              <SwiperSlide key={el.name}>
                <div className="h-fit px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <figure className="max-w-screen-md mx-auto">
                    <svg className="h-12 mx-auto mb-3 text-primaryYellow dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                    </svg>
                    <blockquote>
                      <p className="text-2xl font-medium text-gray-900 dark:text-white">"{el.text}"</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <Image className="!w-6 h-6 rounded-full" src={el.img} height={300} width={400} alt="profile picture" />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">{el.name}</div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{el.city}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>


  )
}