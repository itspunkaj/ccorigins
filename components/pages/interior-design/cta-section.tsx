import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <div className="py-16 bg-slate-100">
      <div className="container m-auto md:px-6">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-6/12 lg:p-0 p-7">
            <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">Design Begins with a Conversation</h1>
            <p className="text-xl">Reach out to us to consult and catalyse your custom requirements.</p>

            <div className="py-5 flex flex-col md:flex-row gap-4">
              <Button size={"lg"} className="uppercase hover:scale-105 transition-all duration-150">
                Book A Consultation
              </Button>
              <Button variant={"outline"} size={"lg"} className=" uppercase group hover:bg-transparent hover:border-black">
                Contact Us
                <ArrowRight className="group-hover:translate-x-1 transition-all duration-150" />
              </Button>
            </div>

          </div>
          <div className="lg:w-5/12 order-2 p-4">
            <Image height={500} width={1000} src="/images/apartment.jpg" alt="" className="rounded" />
          </div>
        </div>

      </div>
    </div>
  )
}