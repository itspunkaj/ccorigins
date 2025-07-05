"use client"

import { Palette, Eye, Clock, Leaf, Users, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Custom Design Solutions",
    description: "Tailored interior designs that reflect your unique style and personality.",
  },
  {
    icon: Eye,
    title: "3D Visualization",
    description: "See your space come to life with realistic 3D renderings before work begins.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "All projects completed within the agreed timeline with precision.",
  },
  // {
  //   icon: Leaf,
  //   title: "Sustainable Materials",
  //   description: "Eco-friendly choices that are beautiful and environmentally conscious.",
  // },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Work directly with experienced designers who understand your vision.",
  },
  // {
  //   icon: CheckCircle,
  //   title: "End-to-End Service",
  //   description: "From concept to completion, we handle every aspect of your project.",
  // },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Why Choose Our Design Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine creativity, functionality, and attention to detail to transform your spaces.
          </p>
        </div>

        {/* Features Horizontal Layout */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center group cursor-pointer pt-6">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primaryYellow  flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-semibold text-primaryYellow mb-30 transition-colors duration-300 text-nowrap mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
