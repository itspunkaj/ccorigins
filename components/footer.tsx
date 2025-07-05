import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-black text-[#FFCC00]">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/office-2.jpg')",
        }}
      ></div> */}
      <div className="mx-auto relative h-full bg-transparent z-10 container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="h-8 w-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" /> */}
              <span className="text-xl font-bold">CCORIGINS</span>
            </div>
            <p className="text-gray-400">Transforming spaces and brands with creative excellence.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Interior Design</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/interior-design/residential" className="hover:text-white">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/interior-design/commercial" className="hover:text-white">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/interior-design/consultation" className="hover:text-white">
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/interior-design/3d-rendering" className="hover:text-white">
                  3D Rendering
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Advertising</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/advertising/brand-strategy" className="hover:text-white">
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link href="/advertising/digital-marketing" className="hover:text-white">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/advertising/creative-campaigns" className="hover:text-white">
                  Creative Campaigns
                </Link>
              </li>
              <li>
                <Link href="/advertising/social-media" className="hover:text-white">
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CCORIGINS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}