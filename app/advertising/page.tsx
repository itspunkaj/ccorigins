"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AdvertisingPage() {
  const [showCookies, setShowCookies] = useState(true)

  // Create a grid of creative elements for the collage background
  const collageItems = [
    { color: "bg-red-500", content: "CREATIVE" },
    { color: "bg-blue-600", content: "DESIGN" },
    { color: "bg-green-500", content: "BRAND" },
    { color: "bg-yellow-400", content: "STORY" },
    { color: "bg-purple-600", content: "VISION" },
    { color: "bg-pink-500", content: "IDEAS" },
    { color: "bg-orange-500", content: "IMPACT" },
    { color: "bg-teal-500", content: "CULTURE" },
    { color: "bg-indigo-600", content: "FUTURE" },
    { color: "bg-rose-500", content: "BOLD" },
    { color: "bg-cyan-500", content: "FRESH" },
    { color: "bg-lime-500", content: "SMART" },
    { color: "bg-amber-500", content: "BRIGHT" },
    { color: "bg-emerald-500", content: "SHARP" },
    { color: "bg-violet-600", content: "DEEP" },
    { color: "bg-fuchsia-500", content: "WILD" },
    { color: "bg-sky-500", content: "HIGH" },
    { color: "bg-red-600", content: "HOT" },
    { color: "bg-blue-500", content: "COOL" },
    { color: "bg-green-600", content: "FRESH" },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 gap-0">
        {/* {Array.from({ length: 200 }, (_, i) => {
          const item = collageItems[i % collageItems.length]
          const randomRotation = Math.random() * 20 - 10 // Random rotation between -10 and 10 degrees
          const randomScale = 0.8 + Math.random() * 0.4 // Random scale between 0.8 and 1.2

          return (
            <div
              key={i}
              className={`aspect-square ${item.color} flex items-center justify-center text-white text-xs font-bold p-1 relative overflow-hidden`}
              style={{
                transform: `rotate(${randomRotation}deg) scale(${randomScale})`,
              }}
            >
              {i % 7 === 0 && (
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-cover bg-center opacity-60" />
              )}
              {i % 5 === 0 && <div className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full opacity-80" />}
              {i % 3 === 0 && <div className="absolute bottom-0 left-0 w-full h-1 bg-black opacity-30" />}
              <span className="relative z-10 text-center leading-tight">{item.content}</span>
            </div>
          )
        })} */}
        <Image src="images/time-square.jpg" height={200} width={500} alt="billboard" className="h-full w-full"/>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
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
      {showCookies && (
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
      )}
    </div>
  )
}
