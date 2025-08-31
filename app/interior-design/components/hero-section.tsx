"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const projects = [
    {
      title: "LUXE RESIDENCES AT DOWNTOWN",
      subtitle: "Sophisticated Living, Elevated Design",
      badge: "NEWLY COMPLETED",
      image: "https://res.cloudinary.com/do43v07fz/image/upload/v1751737910/interior_yhar1m.jpg",
    },
    {
      title: "MARINA HEIGHTS COLLECTION",
      subtitle: "Waterfront Elegance, Timeless Style",
      badge: "FEATURED PROJECT",
      image: "https://res.cloudinary.com/do43v07fz/image/upload/v1751737911/kitchen_xygciu.jpg",
    },
    {
      title: "SKYLINE PENTHOUSES",
      subtitle: "Panoramic Views, Premium Interiors",
      badge: "EXCLUSIVE DESIGN",
      image: "https://res.cloudinary.com/do43v07fz/image/upload/v1751737590/bathtub_phuap9.jpg",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Rings on corners of the section */}
      <div className="z-10 absolute 2xl:right-[35rem] right-0 -translate-y-1/2 2xl:-translate-y-1/4 translate-x-1/2 h-96 w-96 border-8 2xl:h-[30rem] 2xl:w-[30rem] 2xl:border-[20px] border-primaryYellow rounded-full" />
      <div className="z-10 absolute bottom-1/4 left-0 translate-y-1/2 2xl:translate-y-1/4 -translate-x-full md:-translate-x-1/2 h-96 w-96 border-8 2xl:h-[50rem] 2xl:w-[50rem] 2xl:border-[16px] border-gray-400 rounded-full" />


      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url('${projects[currentSlide].image}')`,
            backgroundPosition: "center right",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>
      <div className="bg-gradient-to-b from-transparent to-black/40 absolute bottom-0 h-1/3 w-full">
      </div>
      <div className="absolute bottom-0 max-w-8xl right-1/2 translate-x-1/2 text-yellow-50 flex items-center justify-center w-full h-1/3">
        <h1 className="2xl:text-8xl xl:text-6xl text-5xl font-semibold z-20 text-center font-cinzel uppercase">
          World of beautiful interiors
        </h1>
        <p>
          
        </p>
      </div>

      <div
        className="z-20 absolute bg-white h-10 w-10 2xl:h-20 2xl:w-20 left-5 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => {
          setCurrentSlide((prev) => {
            if (prev == 0) return projects.length - 1;
            return prev - 1;
          })
        }}
      >
        <ChevronLeft className="h-4/5 w-4/5" />
      </div>
      <div
        className="z-20 absolute bg-white h-10 w-10 2xl:h-20 2xl:w-20 right-5 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => {
          setCurrentSlide((prev) => {
            if(prev == projects.length-1) return 0;
            return prev+1;
          })
        }}
      >
        <ChevronRight className="h-4/5 w-4/5" />
      </div>
    </div>
  )
}
