import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function WhatsappButton() {
const phoneNumber = "919331999111"; // Replace with your number
  const message = "Hey! I want to know more about CCO.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <Link
      href={whatsappLink}
      className="fixed bottom-1/2 right-0 z-50 bg-primaryYellow hover:bg-yellow-500 text-white p-4 rounded-l-md shadow-lg transition duration-200"
      aria-label="Call Us"
    >
      <IconBrandWhatsapp className="w-8 h-8 text-black" />
    </Link>
  );
}
