import { Phone } from 'lucide-react';
import Link from 'next/link';

export default function CallButton() {
  return (
    <Link
      href="tel:+919331999111"
      className="fixed bottom-4 right-4 z-50 bg-primaryYellow hover:bg-yellow-500 text-white p-4 rounded-full shadow-lg transition duration-200"
      aria-label="Call Us"
    >
      <Phone className="w-6 h-6 text-black" />
    </Link>
  );
}
