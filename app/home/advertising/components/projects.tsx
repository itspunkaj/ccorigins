'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stories = [
  {
    id: 1,
    title: 'We were nominated for a Drum Award!',
    desc: 'Not to bang our own drum but…our Manifest-o Method campaign with Adobe UK, Steven Bartlett and Flight Studio was nominated in the Partnership or Collaboration category at the Drum Awards!',
    image: '/images/advertisements/Kinetic.png',
  },
  {
    id: 2,
    title: '5 minutes with Sam Latham',
    desc: 'Our Senior After Effects Animator, Sam, sits down with us for 5 minutes to chat claymation, inspiration, and Nestlé photoshoots.',
    image: '/images/advertisements/ILS.png',
  },
  {
    id: 3,
    title: '5 minutes with Sam Latham',
    desc: 'Our Senior After Effects Animator, Sam, sits down with us for 5 minutes to chat claymation, inspiration, and Nestlé photoshoots.',
    image: '/images/advertisements/Himalaya-opticals.png',
  },
  {
    id: 4,
    title: '5 minutes with Sam Latham',
    desc: 'Our Senior After Effects Animator, Sam, sits down with us for 5 minutes to chat claymation, inspiration, and Nestlé photoshoots.',
    image: '/images/advertisements/Travel.png',
  },
  {
    id: 5,
    title: '5 minutes with Sam Latham',
    desc: 'Our Senior After Effects Animator, Sam, sits down with us for 5 minutes to chat claymation, inspiration, and Nestlé photoshoots.',
    image: '/images/advertisements/saluja.png',
  },
  {
    id: 6,
    title: '5 minutes with Sam Latham',
    desc: 'Our Senior After Effects Animator, Sam, sits down with us for 5 minutes to chat claymation, inspiration, and Nestlé photoshoots.',
    image: '/images/advertisements/mercy.png',
  },

];

export default function ProjectsSection() {
  return (
    <div className="w-full bg-black text-white px-4 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1600px] mx-auto">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden relative h-96">
              <Image
                src={story.image}
                alt={story.title}
                width={800}
                height={450}
                className="h-full object-cover"
              />
              
            </div>

            <h3 className="mt-6 text-xl md:text-2xl font-semibold">{story.title}</h3>
            <p className="mt-2 text-gray-300 text-sm md:text-base">{story.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
