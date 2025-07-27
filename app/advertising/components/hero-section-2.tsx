// components/HeroSection.jsx
import Image from 'next/image';
import '../styles.css'
import { Button } from '@/components/ui/button';
export default function HeroSection() {
  return (
    <section className="bg-white relative text-white h-[90vh] overflow-hidden">
        <div className='bg-primaryYellow absolute top-0 rotate-6 h-[1700px] w-[1700px] left-0 -translate-x-96 -translate-y-2/3  z-0 hexagon'>
        <div className='fixed top-0 left-0 w-full h-full bg-black opacity-10'>

        </div>
            <div className='fixed bottom-10 right-96 h-48 w-48 transparent rounded-full border-8 border-white border-opacity-20'>
            </div>
            <div className='fixed bottom-[350px] left-[350px] h-48 w-48 transparent rounded-full border-[24px] border-white border-opacity-30'>
            </div>
            <div className='fixed bottom-[200px] left-[400px] h-96 w-96 transparent rounded-full border-[48px] border-white border-opacity-10'>
            </div>
            <div className='fixed bottom-32 right-96 h-[300px] w-[300px] transparent rounded-full border-8 border-white border-dotted border-opacity-30'>
            </div>
        </div>
      <div className="z-10 h-full relative max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          {/* Logo and Navigation */}

          {/* Heading and Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Creative Digital Business Agency Company
          </h1>
          <p className="text-lg leading-relaxed">
            Learning is making things easy, modifying existing ones, creating new ones, developing,
            acquiring new skills and knowledge.
          </p>

          <Button>
            More About Us
          </Button>
        </div>

        {/* Right Images */}
        <div className=" relative w-full md:w-1/2 h-full flex flex-col items-center gap-4">
          <div className="absolute md:top-0 md:right-0 w-3/4 max-md:left-0 md:w-96 md:h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/ad.webp"
              alt="Cyclist"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-3/4 max-md:right-0 md:w-fit absolute bottom-0 md:left-0  md:h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/billboard.jpg"
              alt="City"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
