import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function CTASection() {
  return (
    <section className="w-full flex items-center justify-center relative h-[40dvh] bg-[url(/images/interior-design/cta-bg.jpg)] bg-cover">
      {/* <Image className="w-full h-full" src="/images/interior-design/cta-bg.jpg" height={500} width={1000} alt="CTA Background" /> */}
      <div className=" text-4xl flex flex-col items-center justify-center text-center">
        <p className="">
          Your dream home is just a click away
        </p>
        <Button className="mt-4 md:flex rounded-none border-0 hover:shadow-2 shadow-2 text-lg 2xl:text-3xl 2xl:py-10 capitalize font-thin">
          Let's Collaborate
        </Button>
      </div>
    </section>
  )
}