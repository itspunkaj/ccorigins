"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  id: number
  beforeImage: string
  afterImage: string
  clientChallenge: string
  result: string
  clientName: string
  rating: number
}

export default function WorkShowcase() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeTab, setActiveTab] = useState<"before" | "after">("after")

  // Sample testimonials data - replace with your actual testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      beforeImage: "https://res.cloudinary.com/do43v07fz/image/upload/v1751742002/apartment-before_ujd2k6.jpg",
      afterImage: "https://res.cloudinary.com/do43v07fz/image/upload/v1751741902/apartment_y4cffi.jpg",
      clientChallenge:
        "I would love to design my new apartment so that it looks more unique and customized, and not so cookie-cutter.",
      result: "This apartment now captures my personality and style perfectly. Thank you, I love it!",
      clientName: "Liz",
      rating: 5,
    },
    {
      id: 2,
      beforeImage: "https://res.cloudinary.com/do43v07fz/image/upload/v1751742003/living-before_dqh5gm.jpg",
      afterImage: "https://res.cloudinary.com/do43v07fz/image/upload/v1751737910/interior_yhar1m.jpg",
      clientChallenge:
        "My living room felt cramped and outdated. I wanted a modern, open space that would be perfect for entertaining guests.",
      result:
        "The transformation is incredible! My friends can't believe it's the same room. The space feels so much larger and more inviting.",
      clientName: "Marcus",
      rating: 5,
    },
    {
      id: 3,
      beforeImage: "https://res.cloudinary.com/do43v07fz/image/upload/v1751742003/kitchen-before_zf6yaj.jpg",
      afterImage: "https://res.cloudinary.com/do43v07fz/image/upload/v1751737911/kitchen_xygciu.jpg",
      clientChallenge:
        "Our kitchen was functional but lacked personality. We wanted something that reflected our love for cooking and hosting dinner parties.",
      result:
        "Now our kitchen is the heart of our home! Every meal feels special, and our guests always gravitate toward this beautiful space.",
      clientName: "Sarah & Tom",
      rating: 4,
    },
  ]

  const totalTestimonials = testimonials.length
  const currentData = testimonials[currentTestimonial]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % totalTestimonials)
    setActiveTab("after") // Reset to after tab when changing testimonials
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + totalTestimonials) % totalTestimonials)
    setActiveTab("after") // Reset to after tab when changing testimonials
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
    setActiveTab("after") // Reset to after tab when changing testimonials
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">SLEEK & WARM APARTMENT DESIGN</h2>
        </div> */}

        <div className="relative">
          {/* Navigation Arrows - Outside the content */}
          <div
            className="bg-black rounded-full absolute left-0 md:-left-10 top-1/4 md:top-1/2 -translate-y-1/2 -translate-x-4 z-10 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            onClick={prevTestimonial}
          >
            <div className="p-1">
              <ChevronLeft className="h-8 w-8 text-primaryYellow" />
            </div>
          </div>
          <div
            className="bg-black rounded-full absolute right-0 md:-right-10 top-1/4 md:top-1/2 -translate-y-1/2 translate-x-4 z-10 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            onClick={nextTestimonial}
          >
            <div className="p-1">
              <ChevronRight className="h-8 w-8 text-primaryYellow" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image Section */}
            <div className="order-1 lg:order-1">
              {/* Before/After Tabs */}
              <div className="flex gap-1 mb-6">
                <button
                  onClick={() => setActiveTab("before")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === "before"
                    ? "text-primaryYellow border-b-2 border-primaryYellow"
                    : "text-gray-600 hover:text-gray-800"
                    }`}
                >
                  BEFORE
                </button>
                <button
                  onClick={() => setActiveTab("after")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === "after"
                    ? "text-primaryYellow border-b-2 border-primaryYellow"
                    : "text-gray-600 hover:text-gray-800"
                    }`}
                >
                  AFTER
                </button>
              </div>

              {/* Image Display */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <Image
                    src={activeTab === "before" ? currentData.beforeImage : currentData.afterImage}
                    alt={`${activeTab} image for ${currentData.clientName}'s project`}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>


            </div>


            {/* Content Section */}
            <div className="order-2 lg:order-2 space-y-8 flex flex-col justify-center h-full">
              {/* Client's Challenge */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Client's Challenge</h3>
                <p className="text-gray-600 leading-relaxed transition-all duration-300">
                  {currentData.clientChallenge}
                </p>
              </div>

              {/* Result */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Result</h3>
                <blockquote className="text-gray-600 leading-relaxed mb-4 transition-all duration-300">
                  "{currentData.result}"
                </blockquote>
                <p className="text-gray-500 text-sm mb-4">- {currentData.clientName}</p>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primaryYellow text-primaryYellow" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${currentTestimonial === index ? "bg-primaryYellow" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
