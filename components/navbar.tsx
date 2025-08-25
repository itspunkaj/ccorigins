"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Arch & Interior Design", href: "/interior-design" },
    { name: "Advertising", href: "/advertising" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Career", href: "/advertising" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className={`fixed flex font-bahn justify-end items-center max-sm:px-2 top-0 z-50 w-full h-fit bg-transparent transition-all duration-150 ease-in-out ${isScrolled ? "bg-white text-black  shadow-md" : "text-white"}`}>
      <div className="max-w-8xl flex h-16 2xl:h-28 w-full mx-auto items-center justify-between px-4 md:px-6 overflow-hidden">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={`${isScrolled ? "/images/new-homepage/PNG/L_01.png" : "/images/new-homepage/PNG/L_02.png"}`} height={20} width={50} alt="Logo" className="object-cover w-20 2xl:w-32" />
        </Link>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center space-x-8"> */}
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hidden md:flex text-base 2xl:text-3xl font-light 2xl:font-extralight tracking-tight transition-colors hover:text-gray-600 capitalize"
          >
            {item.name}
          </Link>
        ))}

        <Button className="hidden md:flex rounded-none border-0 hover:shadow-2 shadow-2 2xl:text-3xl 2xl:py-10 capitalize font-thin">
          Let's Collaborate
        </Button>
        {/* </nav> */}

        {/* <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="bg-white text-black border-gray-300 font-light tracking-wider">
            Sign In
          </Button>
          <Button className="bg-black hover:bg-gray-800 text-white font-light tracking-wider">Get Started</Button>
        </div> */}

        {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen} >
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden bg-primaryYellow text-black">
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
            <Button className="rounded-none border-0 hover:shadow-2 shadow-2">
              Let's Collaborate
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      </div>
    </header>
  )
}
