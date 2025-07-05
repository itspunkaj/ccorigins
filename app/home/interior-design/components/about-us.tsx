import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row h-4/5 container mx-auto px-4 py-6 md:p-10">
        <div className="h-full max-md:order-last md:py-10 my-4 md:my-0 flex items-center justify-center md:w-1/2 overflow-hidden">
          <video className="w-full h-auto object-cover"
            src="https://res.cloudinary.com/do43v07fz/video/upload/v1751738554/interior-1_dphoti.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="h-full md:w-1/2 justify-center flex flex-col gap-4 md:p-10">
          <h1 className="text-4xl">The Origin Story</h1>
          <div className="mad:h-64 flex flex-col justify-center">

            <p>
              Our Concept
              "Design is not just what it looks and feels,
              Design is how it works" - Steven Jobs.
              At CCO when we take on a project, we also take on the
              responsibility not just of aesthetics, but functionality
              as well.
              <br/><br/>
              We at CCO work with a user-centric philosophy, based on
              listening to our clients & providing innovative solutions,
              on schedule, within budget. We encourage continuous
              client user participation throughout the project life. This
              helps foster productive interaction and build strong relationships.
              Our approach to design is tailor made to the owner's program,
              scope, time line and economy. Good design is truly innovative,
              eminently sensible and source of inspiration for          </p>
            <Button className="mt-10 w-1/3 py-3 rounded-sm uppercase bg-transparent text-black border border-black h-12 hover:text-[#FFCC00]">Learn More</Button>
          </div>
        </div>

      </div>
    </div>
  )
}