"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
      image:"https://res.cloudinary.com/do43v07fz/image/upload/v1751737590/bathtub_phuap9.jpg",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url('${projects[currentSlide].image}')`,
            backgroundPosition: "center right",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-120px)] px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Project Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium tracking-wider border border-white/20">
              {projects[currentSlide].badge}
            </span>
          </div>

          {/* Project Title */}
          <div className="mb-4">
            <div className="text-white text-sm font-light tracking-[0.2em] mb-2 opacity-80">INTERIOR DESIGN</div>
            <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-wide">
              {projects[currentSlide].title}
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-white/90 text-lg lg:text-xl font-light mb-8 leading-relaxed">
            {projects[currentSlide].subtitle}
          </p>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="border-white text-black hover:bg-transparent hover:text-white  px-8 py-3 text-sm font-medium tracking-wider"
          >
            LEARN MORE
          </Button>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-32 left-6 lg:left-12 z-20 flex space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Side Project Navigation */}
      <div className="absolute right-6 lg:right-12 top-1/2 transform -translate-y-1/2 z-20 space-y-4">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`block w-1 h-16 transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
