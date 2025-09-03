import { CalendarCheck, CodeXml, Megaphone, TvMinimalPlay } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function ServicesSection() {
  return (
    <div className="bg-white py-16 md:py-10">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-primaryYellow dark:text-primaryYellow">
            &ldquo;Your unfair advantage&rdquo;
          </p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            We turn brands into{' '}
            <span className="font-bold text-primaryYellow uppercase">obsessions.</span>
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our rigorous security and compliance standards are at the heart of all we do. We work
            tirelessly to protect you and your customers.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <Link href={'/contact'}>
                <Button className="bg-white ">
                  Contact Us
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </Link>
            </div>
            <div>
              <Link href={'/contact'}>
                <Button>
                  Book An Appointment
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div className="max-sm:flex max-sm:items-center max-sm:flex-col max-sm:text-center">
            <Megaphone size={48} className="text-primaryYellow" />
            <h3 className="mb-2 text-3xl font-bold dark:text-white">Advertising</h3>
            {/* <p className="font-light text-gray-500 dark:text-gray-400">For Landwind, with zero maintenance downtime</p> */}
          </div>
          <div className="max-sm:flex max-sm:items-center max-sm:flex-col max-sm:text-center">
            <CalendarCheck size={48} className="text-primaryYellow" />
            <h3 className="mb-2 text-3xl font-bold dark:text-white">Exhibit &amp; Events</h3>
            {/* <p className="font-light text-gray-500 dark:text-gray-400">Trusted by over 600 milion users around the world
                        </p> */}
          </div>
          <div className="max-sm:flex max-sm:items-center max-sm:flex-col max-sm:text-center">
            <TvMinimalPlay size={48} className="text-primaryYellow" />
            <h3 className="mb-2 text-3xl font-bold dark:text-white">
              Offline and Online Marketing
            </h3>
            {/* <p className="font-light text-gray-500 dark:text-gray-400">Have used Landwind to create functional websites */}
            {/* </p> */}
          </div>
          <div className="max-sm:flex max-sm:items-center max-sm:flex-col max-sm:text-center">
            <CodeXml size={48} className="text-primaryYellow" />
            <h3 className="mb-2 text-3xl font-bold dark:text-white">Web Development</h3>
            {/* <p className="font-light text-gray-500 dark:text-gray-400 ">From URL to IRL — we make you impossible to ignore.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
