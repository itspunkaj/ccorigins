import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"


export default function Footer() {
  return (
    <footer className="relative bg-primaryYellow text-black">
      <div className="max-w-8xl mx-auto relative bg-transparent z-10 py-12 px-6 font-bahn tracking-tight">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-8">
          <div className="md:col-span-3">
            <div className="flex items-center space-x-2">
              {/* <div className="h-8 w-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" /> */}
              <span className="text-xl 2xl:text-3xl font-medium leading-none">CCORIGINS PVT LTD</span>
            </div>
            <p className="text-slate-700 2xl:text-xl md:w-4/5">Transforming spaces and brands with creative excellence.</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="bg-slate-800 text-primaryYellow rounded-full p-2">
                <Facebook className="h-5 w-5 2xl:w-8 2xl:h-8" />
              </Link>
              <Link href="#" className="bg-slate-800 text-primaryYellow rounded-full p-2">
                <Instagram className="h-5 w-5 2xl:w-8 2xl:h-8"  />
              </Link>
              <Link href="#" className="bg-slate-800 text-primaryYellow rounded-full p-2">
                <Twitter className="h-5 w-5 2xl:w-8 2xl:h-8" />
              </Link>
              <Link href="#" className="bg-slate-800 text-primaryYellow rounded-full p-2">
                <Linkedin className="h-5 w-5 2xl:w-8 2xl:h-8" />
              </Link>
            </div>
            <p className="text-slate-700 2xl:text-xl">info@ccorigns.com</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg 2xl:text-3xl font-semibold">Architect</h3>
            <ul className="space-y-2 text-slate-700 2xl:text-2xl">
              <li>
                <p className="hover:text-white">
                  Bunglow
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Stand Alone Villa
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Duplex House
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Studio Apartment
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg 2xl:text-3xl font-semibold">Interior</h3>
            <ul className="space-y-2 2xl:text-2xl text-slate-700">
              <li>
                <p className="hover:text-white">
                  Home & Office
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Hotel Rooms
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Restraurant & Cafe
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Showroom
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg 2xl:text-3xl font-semibold">Advertising</h3>
            <ul className="space-y-2 2xl:text-2xl text-slate-700">
              <li>
                <p className="hover:text-white">
                  Logo Identity
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Brand Building
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Creative & Copy
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Web Design
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg 2xl:text-3xl font-semibold">Events</h3>
            <ul className="space-y-2 2xl:text-2xl text-slate-700">
              <li>
                <p className="hover:text-white">
                  Pavilion Design & Execution
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Corporate Events
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Product Launching
                </p>
              </li>
              <li>
                <p className="hover:text-white">
                  Gifting
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg 2xl:text-3xl font-semibold">Company</h3>
            <ul className="space-y-2 2xl:text-2xl text-slate-700">
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
                <p className="hover:text-white">
                  Careers
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className=" py-2 2xl:py-4 text-center 2xl:text-2xl bg-black text-slate-100">
        <p>&copy; 2024 CCORIGINS. All rights reserved.</p>
      </div>
    </footer>
  )
}