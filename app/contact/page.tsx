'use client';
import { Clock,Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [interestedService, setInterestedService] = useState<string>('');
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 93319 99111'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ccorigins.com'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['105/17/1 4th Floor Block B Unit-401', 'G.G.Road,Liluah Howrah-711204'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get In
              <span className=" text-primaryYellow"> Touch</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
              Ready to transform your space or elevate your brand? We&apos;d love to hear about your
              project and discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Start Your Project</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form
                className="space-y-6"
                action={'https://formsubmit.co/info@ccorigins.com'}
                method="POST"
              >
                <input type="hidden" name="Services Interested" value={interestedService} />
                <input type="hidden" name="_next" value={`https://ccorigins.com/thank-you`} />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select
                    value={interestedService}
                    onValueChange={(val) => setInterestedService(val)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="architectural-design">Architectural Design</SelectItem>
                      <SelectItem value="interior-design">Interior Design</SelectItem>
                      <SelectItem value="architecture-and-interior-design">
                        Architecture & Interior Design
                      </SelectItem>
                      <SelectItem value="advertising">Advertising</SelectItem>
                      <SelectItem value="event-management">Event Management</SelectItem>
                      <SelectItem value="exhibits">Exhibit</SelectItem>
                      <SelectItem value="marketing">Offline and Online Marketing</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="consultation">Consultation Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input id="budget" />
                </div>

                {/* <div className="space-y-2">
                  <Label htmlFor="budget">Project Budget</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="over-100k">Over $100,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Information</h2>
                <p className="text-lg text-gray-600">
                  Prefer to reach out directly? Here are all the ways to get in touch with us.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border ">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full">
                          <info.icon className="h-5 w-5 text-primaryYellow" />
                        </div>
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="border shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-purple-100/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1946.1987957183899!2d88.3526550421083!3d22.618262362393093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d7b6834bbdf%3A0xb259d59b0cf2f5be!2sGovernment%20Quarters%2C%20Vivekananda%20Colony%2C%20Belur%2C%20Howrah%2C%20West%20Bengal%20711202!5e0!3m2!1sen!2sin!4v1753624882852!5m2!1sen!2sin"
                        height="320"
                        width="600"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                question: 'How long does a typical project take?',
                answer:
                  'Project timelines vary depending on scope. Interior design projects typically take 6-12 weeks, while advertising campaigns can range from 2-8 weeks.',
              },
              {
                question: 'Do you work with clients remotely?',
                answer:
                  'Yes! We work with clients globally through virtual consultations, digital collaboration tools, and detailed project management systems.',
              },
              {
                question: "What's included in your consultation?",
                answer:
                  'Our initial consultation includes project assessment, budget discussion, timeline planning, and a preliminary creative brief tailored to your needs.',
              },
              {
                question: 'Can you handle both services for one client?',
                answer:
                  'Many of our clients benefit from our integrated approach, creating cohesive brand experiences across physical and digital spaces.',
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
