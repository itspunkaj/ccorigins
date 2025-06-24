"use client"

import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Split Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Interior Design Section */}
        <Link
          href="/interior-design"
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
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center transform transition-all duration-500 group-hover:scale-110">
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
          href="/advertising"
          className="relative flex-1 flex items-center justify-center group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredSection("advertising")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/images/ad.webp')`,
                backgroundPosition: "center",
              }}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center transform transition-all duration-500 group-hover:scale-110">
              <h2 className="text-4xl font-light text-white tracking-[0.2em] drop-shadow-lg">
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
