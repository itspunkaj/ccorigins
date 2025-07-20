'use client';


import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const stories = [
  {
    id: 1,
    title: 'We were nominated for a Drum Award!',
    desc: 'Not to bang our own drum but…our Manifest-o Method campaign with Adobe UK, Steven Bartlett and Flight Studio was nominated in the Partnership or Collaboration category at the Drum Awards!',
    image: '/images/advertisements/Kinetic.png',
  },
  {
    id: 2,
    title: '5 minutes with Sam Latham',
    desc: 'Our Senior After Effects Animator, Sam, sits down with us for 5 minutes to chat claymation, inspiration, and Nestlé photoshoots.',
    image: '/images/advertisements/ILS.png',
  },
  {
    id: 3,
    title: '5 minutes with Sam Latham',
    desc: 'Our Senior After Effects Animator, Sam, sits down with us for 5 minutes to chat claymation, inspiration, and Nestlé photoshoots.',
    image: '/images/advertisements/Himalaya-opticals.png',
  },
  {
    id: 4,
    title: '5 minutes with Sam Latham',
    desc: 'Our Senior After Effects Animator, Sam, sits down with us for 5 minutes to chat claymation, inspiration, and Nestlé photoshoots.',
    image: '/images/advertisements/Travel.png',
  },
  {
    id: 5,
    title: '5 minutes with Sam Latham',
    desc: 'Our Senior After Effects Animator, Sam, sits down with us for 5 minutes to chat claymation, inspiration, and Nestlé photoshoots.',
    image: '/images/advertisements/saluja.png',
  },
  {
    id: 6,
    title: '5 minutes with Sam Latham',
    desc: 'Our Senior After Effects Animator, Sam, sits down with us for 5 minutes to chat claymation, inspiration, and Nestlé photoshoots.',
    image: '/images/advertisements/mercy.png',
  },

];

export default function ProjectsSection() {
  return (
    <div className="w-full bg-black text-white px-4 md:px-12 py-16">
      <div className="max-w-[1600px] mx-auto">
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          pagination={false}
          navigation={false}
          className=""
        >
          {stories.map((story, index) => (
            <SwiperSlide key={story.id}>
              <div>
                <div className="rounded-xl overflow-hidden relative h-80">
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={800}
                    height={450}
                    className="h-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl md:text-2xl font-semibold">{story.title}</h3>
                <p className="mt-2 text-gray-300 text-sm md:text-base">{story.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
