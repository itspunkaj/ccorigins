'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useModalStore } from '@/store/modals-toggle-store';
import CollaborateModal from './collaborate-modal';
import { usePathname } from 'next/navigation';
import path from 'path';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isCollaborateModalOpen, setIsCollaborateModalOpen } = useModalStore();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Arch & Interior Design', href: '/interior-design' },
    { name: 'Advertising', href: '/advertising' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Career', href: '/advertising' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed flex font-bahn justify-end items-center max-sm:px-2 top-0 z-50 w-full h-fit bg-transparent text-white transition-all duration-150 ease-in-out ${isScrolled ? 'bg-white !text-black  shadow-md' : ''}`}
    >
      <div className="max-w-7xl flex h-16 4xl:h-28 w-full mx-auto items-center justify-between px-4 md:px-6 overflow-hidden">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={`${isScrolled ? '/images/new-homepage/PNG/L_01.png' : '/images/new-homepage/PNG/L_02.png'}`}
            height={20}
            width={50}
            alt="Logo"
            className="object-cover w-20 4xl:w-32"
          />
        </Link>

        {/* Desktop Navigation */}

        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hidden md:flex text-base 4xl:text-3xl font-light 4xl:font-extralight tracking-tight transition-colors hover:text-gray-900 capitalize"
          >
            {item.name}
          </Link>
        ))}

        <Button
          className="hidden md:flex rounded-none border-0 hover:shadow-2 shadow-2 4xl:text-3xl 4xl:py-10 capitalize font-thin"
          onClick={() => {
            setIsCollaborateModalOpen(true);
          }}
        >
          Let&apos;s Collaborate
        </Button>
        {/* </nav> */}

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
              <Button
                className="rounded-none border-0 hover:shadow-2 shadow-2"
                onClick={() => {
                  setIsOpen(false);
                  setIsCollaborateModalOpen(true);
                }}
              >
                Let&apos;s Collaborate
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {isCollaborateModalOpen && <CollaborateModal />}
    </header>
  );
}
