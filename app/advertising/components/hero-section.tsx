"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const [showCookies, setShowCookies] = useState(false)

  return (
    <div className="relative h-[500px] md:h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gap-0 ">
        <Image src="https://res.cloudinary.com/do43v07fz/image/upload/v1751741583/time-square_bvo7ao.jpg" height={200} width={500} alt="billboard" className="h-full w-full object-cover"/>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
            WHATEVER YOUR
            <br />
            INTERESTS, WE
            <br />
            HAVE SOMETHING FOR
            <br />
            YOU
          </h1>

          <Button
            variant="outline"
            className="bg-black/80 text-white border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg font-medium rounded-full"
          >
            See work
          </Button>
        </div>
      </div>
    </div>
  )
}
