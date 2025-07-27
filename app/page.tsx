"use client"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collisions"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than Beams?{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-primaryYellow via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-primaryYellow via-yellow-400 to-yellow-500 py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
      {/* Main Split Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Interior Design Section */}
        <Link
          href="/home/interior-design"
          className="relative flex-1 flex items-center justify-center group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredSection("interior")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/images/interior-design-homepage.jpg')`,
                backgroundPosition: "center",
              }}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center justify-center ">
            <div className="text-center transform transition-all duration-500 group-hover:scale-110 border-2 rounded-lg border-white p-4 bg-slate-900 bg-opacity-70">
              <h2 className="text-4xl font-light text-white tracking-[0.2em] drop-shadow-lg">
                Interior Design
              </h2>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-0.5 bg-white mx-auto" />
              </div>
            </div>
          </div>

          {/* Hover Effect Border */}
          <div
            className={`absolute inset-0 border-4 border-white/0 transition-all duration-500 ${
              hoveredSection === "interior" ? "border-white/30" : ""
            }`}
          />
        </Link>

        {/* Advertising Section */}
        <Link
          href="/home/advertising"
          className="relative flex-1 flex items-center justify-center group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredSection("advertising")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/images/billboard.jpg')`,
                backgroundPosition: "center",
              }}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center transform transition-all duration-500 group-hover:scale-110 border-2 rounded-lg border-white p-4 bg-slate-900 bg-opacity-70">
              <h2 className="text-4xl font-light text-white tracking-[0.2em] drop-shadow-lg ">
                Advertising
              </h2>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-0.5 bg-white mx-auto" />
              </div>
            </div>
          </div>

          {/* Hover Effect Border */}
          <div
            className={`absolute inset-0 border-4 border-white/0 transition-all duration-500 ${
              hoveredSection === "advertising" ? "border-white/30" : ""
            }`}
          />
        </Link>
      </div>

      {/* Mobile Stack Layout */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex-1 {
            min-height: 50vh;
          }
        }
        @media (min-width: 769px) {
          .flex-1 {
            min-height: calc(100vh - 120px);
          }
        }
      `}</style>
    </div>
  )
}