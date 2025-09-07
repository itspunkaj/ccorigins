'use client';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type ProjectFilter = 'all' | 'advertising' | 'interior design' | 'architecture';

export default function PortfolioPage() {
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('all');
  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Apartment',
      category: 'interior design',
      type: 'Residential',
      image: '/images/portfolio/modern-apartment.avif',
      description: 'A sophisticated urban living space with clean lines and premium finishes.',
    },
    {
      id: 2,
      title: 'Tech Startup Rebrand',
      category: 'advertising',
      type: 'Brand Strategy',
      image: '/images/portfolio/tech-startup.jpg',
      description: 'Complete brand transformation for a growing technology company.',
    },
    {
      id: 3,
      title: 'Boutique Hotel Design',
      category: 'interior design',
      type: 'Commercial',
      image: '/images/portfolio/botique-hotel.jpg',
      description: 'Elegant hospitality design that creates memorable guest experiences.',
    },
    {
      id: 4,
      title: 'Fashion Campaign',
      category: 'advertising',
      type: 'Creative Campaign',
      image: '/images/portfolio/fashion.jpg',
      description: 'Bold visual campaign that increased brand awareness by 200%.',
    },
    {
      id: 5,
      title: 'Executive Office Suite',
      category: 'architecture',
      type: 'Commercial',
      image: '/images/portfolio/executive-office.jpg',
      description: 'Professional workspace design that inspires productivity and success.',
    },
    {
      id: 6,
      title: 'Restaurant Launch',
      category: 'advertising',
      type: 'Brand Activation',
      image: '/images/portfolio/restaurant.jpg',
      description: 'Multi-channel campaign that drove 500% increase in opening week traffic.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our
              <span className="text-primaryYellow"> Portfolio</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
              Explore our collection of award-winning interior designs and advertising campaigns
              that have transformed spaces and elevated brands.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant={projectFilter !== 'all' ? 'outline' : 'default'}
              onClick={() => setProjectFilter('all')}
            >
              All Projects
            </Button>
            <Button
              variant={projectFilter !== 'interior design' ? 'outline' : 'default'}
              onClick={() => setProjectFilter('interior design')}
            >
              Interior Design
            </Button>
            <Button
              variant={projectFilter !== 'advertising' ? 'outline' : 'default'}
              onClick={() => setProjectFilter('advertising')}
            >
              Advertising
            </Button>
            <Button
              variant={projectFilter !== 'architecture' ? 'outline' : 'default'}
              onClick={() => setProjectFilter('architecture')}
            >
              Architecture
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((el) => projectFilter === 'all' || el.category === projectFilter)
              .map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden border hover:shadow-[4px_4px_0px_0px_rgba(255,204,0)] border-black transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] bg-gray-200">
                      <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundImage: `url('${project.image}')` }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div> */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                          project.category === 'interior design'
                            ? 'bg-amber-100 text-amber-800'
                            : project.category === 'advertising'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-green-100 text-green-800'
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
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl opacity-90">
              Let&apos;s discuss how we can bring your vision to life with our expertise in design
              and advertising.
            </p>
            <Button size="lg" variant="outline">
              <Link href={'/contact'} className="">
                Start Your Project
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
