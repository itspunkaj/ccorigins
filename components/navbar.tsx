"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Interior Design", href: "/interior-design" },
    { name: "Advertising", href: "/advertising" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-black backdrop-blur ">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 overflow-hidden">
        <Link href="/" className="flex items-center space-x-2">
          {/* <div className="text-2xl font-light tracking-[0.3em] text-black">CCORIGINS</div> */}
          <Image src="/images/logo.jpeg" height={20} width={50} alt="Logo" className="bg-cover w-32"/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-light tracking-wider text-white transition-colors hover:text-gray-600 uppercase"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="bg-white text-black border-gray-300 font-light tracking-wider">
            Sign In
          </Button>
          <Button className="bg-black hover:bg-gray-800 text-white font-light tracking-wider">Get Started</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-light tracking-wider transition-colors hover:text-gray-600 uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="bg-white text-black border-gray-300 font-light tracking-wider">
                  Sign In
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white font-light tracking-wider">Get Started</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
