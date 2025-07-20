

"use client";
import Testimony from "./testimony";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";


export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Unfiltered Feedbacks</h2>
        <Swiper
          spaceBetween={30}
          scrollbar={{ hide: true }}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Testimony />
          </SwiperSlide>
          <SwiperSlide>
            <Testimony />
          </SwiperSlide>
          <SwiperSlide>
            <Testimony />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
