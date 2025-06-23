"use client"

import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InteriorDesignPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      title: "LUXE RESIDENCES AT DOWNTOWN",
      subtitle: "Sophisticated Living, Elevated Design",
      badge: "NEWLY COMPLETED",
      image: "/images/interior.jpg",
    },
    {
      title: "MARINA HEIGHTS COLLECTION",
      subtitle: "Waterfront Elegance, Timeless Style",
      badge: "FEATURED PROJECT",
      image: "/images/kitchen.jpg",
    },
    {
      title: "SKYLINE PENTHOUSES",
      subtitle: "Panoramic Views, Premium Interiors",
      badge: "EXCLUSIVE DESIGN",
      image:"/images/bathtub.jpg",
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

      {/* Header Navigation */}
      {/* <header className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-12">
        <div className="text-white text-2xl font-light tracking-wider">CREATIVESPACES</div>

        <nav className="hidden lg:flex items-center space-x-8 text-white text-sm font-light tracking-wide">
          <a href="/about" className="hover:text-gray-300 transition-colors">
            ABOUT US
          </a>
          <a href="/portfolio" className="hover:text-gray-300 transition-colors">
            LATEST PROJECTS
          </a>
          <a href="/interior-design" className="hover:text-gray-300 transition-colors">
            INTERIOR DESIGN
          </a>
          <a href="/advertising" className="hover:text-gray-300 transition-colors">
            ADVERTISING
          </a>
        </nav>

        <div className="flex items-center space-x-4 text-white text-sm">
          <div className="hidden md:flex items-center space-x-4">
            <span className="flex items-center">
              ENG <ChevronDown className="ml-1 h-4 w-4" />
            </span>
            <span className="border-l border-white/30 pl-4">📞 INSTANT VIDEO CALL</span>
            <span>📱 WHATSAPP</span>
          </div>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            GET IN TOUCH
          </Button>
        </div>
      </header> */}

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

      {/* Search Interface */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-20 p-6 lg:p-12">
        <div className="bg-white/95 backdrop-blur-sm p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600 tracking-wider">PROJECT TYPE</label>
              <Select defaultValue="any">
                <SelectTrigger className="border-0 border-b border-gray-300 rounded-none bg-transparent">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600 tracking-wider">STYLE</label>
              <Select defaultValue="any">
                <SelectTrigger className="border-0 border-b border-gray-300 rounded-none bg-transparent">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="contemporary">Contemporary</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600 tracking-wider">BUDGET RANGE</label>
              <Select defaultValue="any">
                <SelectTrigger className="border-0 border-b border-gray-300 rounded-none bg-transparent">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                  <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                  <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                  <SelectItem value="500k+">$500K+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600 tracking-wider">LOCATION</label>
              <Select defaultValue="all">
                <SelectTrigger className="border-0 border-b border-gray-300 rounded-none bg-transparent">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="marina">Marina District</SelectItem>
                  <SelectItem value="suburbs">Suburbs</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 h-12 font-medium tracking-wider">
              <Search className="mr-2 h-4 w-4" />
              SEARCH PROJECTS
            </Button>
          </div>
        </div>
      </div> */}

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
