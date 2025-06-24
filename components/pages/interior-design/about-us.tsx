import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row h-4/5 container mx-auto px-4 py-6 md:p-10">
        <div className="h-full max-md:order-last md:py-10 my-4 md:my-0 flex items-center justify-center md:w-1/2 overflow-hidden">
          <video className="w-full h-auto object-cover"
            src="/videos/interior-1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="h-full md:w-1/2 justify-center flex flex-col gap-4 md:p-10">
          <h1 className="text-4xl"> About Us</h1>
          <div className="mad:h-64 flex flex-col justify-center">

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed porta massa, viverra euismod enim. Morbi porttitor placerat placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sollicitudin pellentesque tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vestibulum
          </p>
            <Button className="mt-10 w-1/3 py-3 rounded-sm uppercase bg-transparent text-black border border-black h-12 hover:text-[#FFCC00]">Learn More</Button>
          </div>
        </div>
        
      </div>
    </div>
  )
}