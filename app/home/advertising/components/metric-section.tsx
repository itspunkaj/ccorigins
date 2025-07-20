"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calendar, Home } from "lucide-react"
import Counter from "@/components/ui/counter"

export default function CounterSection() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primaryYellow dark:text-white mb-4">Our Track Record</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Numbers that speak to our experience and commitment to excellence in design and construction.
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <Card className="text-center p-8 bg-transparent border-0 shadow-none">
            <CardContent className="p-0">
              {/* <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div> */}
              <div className="mb-4">
                <Counter end={100} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Projects Completed</h3>
              {/* <p className="text-gray-600 dark:text-gray-300">
                Successfully delivered projects across residential and commercial sectors
              </p> */}
            </CardContent>
          </Card>
          <Card className="text-center p-8 bg-transparent border-0 shadow-none">
            <CardContent className="p-0">
              {/* <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div> */}
              <div className="mb-4">
                <Counter end={98} suffix="%" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Satisfaction Rate</h3>
              {/* <p className="text-gray-600 dark:text-gray-300">
                Successfully delivered projects across residential and commercial sectors
              </p> */}
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-transparent border-0 shadow-none">
            <CardContent className="p-0">
              {/* <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div> */}
              <div className="mb-4">
                <Counter end={20} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Years of Experience</h3>
              {/* <p className="text-gray-600 dark:text-gray-300">
                Over a decade of expertise in architecture and design excellence
              </p> */}
            </CardContent>
          </Card>

          {/* <Card className="text-center p-8 bg-transparent border-0 shadow-none">
            <CardContent className="p-0">
              <div className="mb-4">
                <Counter end={2500000} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Square Feet Designed</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Thoughtfully designed spaces that enhance lives and communities
              </p>
            </CardContent>
          </Card> */}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-gray-300">
              Currently working on 12 active projects
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
