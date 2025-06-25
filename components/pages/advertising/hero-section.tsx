"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const [showCookies, setShowCookies] = useState(false)

  return (
    <div className="relative h-[500px] md:h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gap-0 ">
        <Image src="images/time-square.jpg" height={200} width={500} alt="billboard" className="h-full w-full object-cover"/>
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

      {/* Cookie Preferences Modal */}
      {/* {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white p-6 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4 text-center">COOKIE PREFERENCES</h2>
            <p className="text-gray-700 text-center mb-6 max-w-3xl mx-auto">
              We use necessary cookies and similar technologies ("Cookies") to operate this website. We and our partners
              also use optional Cookies to analyse website usage and to provide you with additional features (including
              social media features). Click 'Accept All' to consent to the use of these Cookies and related processing
              of your personal data, or 'Manage Preferences' to learn more and tailor your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => setShowCookies(false)}
                className="bg-black text-white hover:bg-gray-800 px-8 py-2 rounded-full"
              >
                Accept All
              </Button>
              <Button
                onClick={() => setShowCookies(false)}
                variant="outline"
                className="border-black text-black hover:bg-gray-100 px-8 py-2 rounded-full"
              >
                Reject Optional
              </Button>
              <Button
                onClick={() => setShowCookies(false)}
                variant="outline"
                className="border-black text-black hover:bg-gray-100 px-8 py-2 rounded-full"
              >
                Manage Preferences
              </Button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  )
}
