import { Users, Award, Heart, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We're passionate about creating beautiful spaces and compelling brand stories that make a difference.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering results that exceed expectations.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with clients to achieve their vision.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace innovation and creativity to deliver cutting-edge solutions that stand out.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "15+ years in interior design with a passion for sustainable and innovative solutions.",
    },
    {
      name: "Michael Chen",
      role: "Brand Strategist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Award-winning strategist who has helped launch over 100 successful brand campaigns.",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specializes in luxury residential design with an eye for timeless elegance.",
    },
    {
      name: "David Kim",
      role: "Digital Marketing Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Digital marketing expert with a track record of driving exceptional ROI for clients.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About
              <span className="bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                CreativeSpaces
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
              We're a unique creative agency that bridges the gap between interior design and advertising. Our mission
              is to transform spaces and elevate brands through innovative design and strategic thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
              <p className="text-lg text-gray-600">
                Founded in 2018, CreativeSpaces was born from the vision of combining two powerful creative disciplines
                under one roof. We recognized that great design principles apply whether you're creating a beautiful
                living space or a compelling brand campaign.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve clients across the globe, helping them transform their physical and digital
                spaces with creativity, strategy, and uncompromising attention to detail.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-purple-100 p-8">
                <div className="h-full w-full rounded-xl bg-[url('/placeholder.svg?height=500&width=500')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The principles that guide everything we do and shape the way we work with our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-100 to-purple-100">
                    <value.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meet Our Team</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The creative minds behind our award-winning designs and campaigns.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Numbers that reflect our commitment to excellence and client success.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">700+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-lg opacity-90">Industry Awards</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">6</div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
