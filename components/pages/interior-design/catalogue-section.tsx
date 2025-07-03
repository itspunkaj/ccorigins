"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
const catalogueData = {
  bedroom: [
    {
      id: 1,
      title: "Modern Bedroom Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Minimalist Bedroom",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Luxury Master Suite",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Cozy Bedroom Retreat",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 1,
      title: "Modern Bedroom Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Minimalist Bedroom",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Luxury Master Suite",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Cozy Bedroom Retreat",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
  "living-room": [
    {
      id: 5,
      title: "Contemporary Living Space",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Scandinavian Living Room",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Industrial Loft Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Family Living Area",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Contemporary Living Space",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Scandinavian Living Room",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Industrial Loft Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Family Living Area",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
  office: [
    {
      id: 9,
      title: "Executive Office Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 10,
      title: "Home Office Setup",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 11,
      title: "Creative Workspace",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 12,
      title: "Modern Co-working Space",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      title: "Executive Office Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 10,
      title: "Home Office Setup",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 11,
      title: "Creative Workspace",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 12,
      title: "Modern Co-working Space",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
  cafe: [
    {
      id: 13,
      title: "Cozy Coffee Shop",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 14,
      title: "Modern Cafe Interior",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 15,
      title: "Rustic Cafe Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 16,
      title: "Urban Bistro Style",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 13,
      title: "Cozy Coffee Shop",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 14,
      title: "Modern Cafe Interior",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 15,
      title: "Rustic Cafe Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 16,
      title: "Urban Bistro Style",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
}

export default function CatalogueSection() {
  const [activeTab, setActiveTab] = useState("living-room")
  const [carouselPosition, setCarouselPosition] = useState<Record<string, number>>({
    bedroom: 0,
    "living-room": 0,
    office: 0,
    cafe: 0,
  })

  const handlePrevious = (tabKey: string) => {
    setCarouselPosition((prev) => ({
      ...prev,
      [tabKey]: Math.max(0, prev[tabKey] - 1),
    }))
  }

  const handleNext = (tabKey: string, maxSlides: number) => {
    setCarouselPosition((prev) => ({
      ...prev,
      [tabKey]: Math.min(maxSlides - 1, prev[tabKey] + 1),
    }))
  }

  const getMaxSlides = (totalImages: number) => {
    // Mobile: 1 image per slide, Tablet: 2 images per slide
    return {
      mobile: totalImages,
      tablet: Math.ceil(totalImages / 2),
    }
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Explore Real Spaces We've Transformed</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of beautifully designed interiors across different spaces and styles
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-transparent border-none p-0 h-auto gap-8">
            <TabsTrigger
              value="bedroom"
              className="text-sm font-medium text-black data-[state=active]:text-yellow-500 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 bg-transparent border-b-2 border-transparent pb-2 rounded-none data-[state=active]:bg-transparent hover:text-yellow-400 transition-colors"
            >
              BEDROOM
            </TabsTrigger>
            <TabsTrigger
              value="living-room"
              className="text-sm font-medium text-black data-[state=active]:text-yellow-500 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 bg-transparent border-b-2 border-transparent pb-2 rounded-none data-[state=active]:bg-transparent hover:text-yellow-400 transition-colors"
            >
              LIVING ROOM
            </TabsTrigger>
            <TabsTrigger
              value="office"
              className="text-sm font-medium text-black data-[state=active]:text-yellow-500 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 bg-transparent border-b-2 border-transparent pb-2 rounded-none data-[state=active]:bg-transparent hover:text-yellow-400 transition-colors"
            >
              OFFICE
            </TabsTrigger>
            <TabsTrigger
              value="cafe"
              className="text-sm font-medium text-black data-[state=active]:text-yellow-500 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 bg-transparent border-b-2 border-transparent pb-2 rounded-none data-[state=active]:bg-transparent hover:text-yellow-400 transition-colors"
            >
              CAFE
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          {Object.entries(catalogueData).map(([key, images]) => {
            const maxSlides = getMaxSlides(images.length)
            const currentPosition = carouselPosition[key] || 0

            return (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="relative">
                  {/* Desktop View - Grid Layout
                  <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6 grid-flow-col w-max ">
                    {images.map((item) => (
                      <Card
                        key={item.id}
                        className="group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      >
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden rounded-lg">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={600}
                              height={400}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                              {item.title}
                            </h3>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div> */}
                  <Swiper
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                    }}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="catalogueSwiper"
                  >
                    {images.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="relative rounded-lg">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={600}
                              height={400}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                              {item.title}
                            </h3>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>

                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
