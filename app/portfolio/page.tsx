import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Modern Luxury Apartment",
      category: "Interior Design",
      type: "Residential",
      image: "/placeholder.svg?height=400&width=600",
      description: "A sophisticated urban living space with clean lines and premium finishes.",
    },
    {
      id: 2,
      title: "Tech Startup Rebrand",
      category: "Advertising",
      type: "Brand Strategy",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete brand transformation for a growing technology company.",
    },
    {
      id: 3,
      title: "Boutique Hotel Design",
      category: "Interior Design",
      type: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      description: "Elegant hospitality design that creates memorable guest experiences.",
    },
    {
      id: 4,
      title: "Fashion Campaign",
      category: "Advertising",
      type: "Creative Campaign",
      image: "/placeholder.svg?height=400&width=600",
      description: "Bold visual campaign that increased brand awareness by 200%.",
    },
    {
      id: 5,
      title: "Executive Office Suite",
      category: "Interior Design",
      type: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional workspace design that inspires productivity and success.",
    },
    {
      id: 6,
      title: "Restaurant Launch",
      category: "Advertising",
      type: "Brand Activation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Multi-channel campaign that drove 500% increase in opening week traffic.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our
              <span className="bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Portfolio
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
              Explore our collection of award-winning interior designs and advertising campaigns that have transformed
              spaces and elevated brands.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="bg-amber-600 text-white border-amber-600">
              All Projects
            </Button>
            <Button variant="outline" className="bg-white text-black border-gray-300">
              Interior Design
            </Button>
            <Button variant="outline" className="bg-white text-black border-gray-300">
              Advertising
            </Button>
            <Button variant="outline" className="bg-white text-black border-gray-300">
              Residential
            </Button>
            <Button variant="outline" className="bg-white text-black border-gray-300">
              Commercial
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-200">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/90 text-black">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.category === "Interior Design"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="text-sm text-gray-500">{project.type}</span>
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-purple-600 text-white">
        <div className="container px-4 text-center md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl opacity-90">
              Let's discuss how we can bring your vision to life with our expertise in design and advertising.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
