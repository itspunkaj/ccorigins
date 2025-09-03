import Image from 'next/image';

export default function ArchitectureThatSpeaksStyleSection() {
  return (
    <section className=" font-gotham text-white h-fit bg-[url(/images/interior-design/architecture-bg.jpg)] bg-cover">
      {/* <Image className="w-full" src={"/images/interior-design/architecture-bg.jpg"} height={1000} width={2000} alt="architecture background"/> */}
      <div className="  h-full max-w-8xl mx-auto w-full grid md:grid-cols-2 gap-10 p-10 pb-0">
        <div className="flex flex-col md:justify-end">
          <div className="flex flex-col mb-10">
            <h2 className="text-4xl 4xl:text-6xl">Architecture That Speaks Style</h2>
            <p className="md:text-lg 4xl:text-2xl font-thin mt-1">
              Step into spaces that inspire. From cozy corners to bold open plans,
              <br /> our interiors are designed to make you feel something - every single day.
            </p>
          </div>

          <Image
            className="rounded-tr-3xl rounded-bl-3xl object-cover w-full"
            src={'/images/interior-design/architecture.jpg'}
            width={600}
            height={600}
            alt="architecture"
          />
        </div>
        <div className="flex flex-col justify-end uppercase pb-8">
          <span className="text-2xl 4xl:text-4xl font-light">Modern Design of</span>
          <span className="text-3xl 4xl:text-5xl font-semibold">Your</span>
          <div className="my-4 flex flex-col text-5xl 4xl:text-7xl text-primaryYellow font-extrabold">
            <span>Bungalow</span>
            <span>Stand-Alone Villa</span>
            <span>Duplex House</span>
            <span>Studio Apartment</span>
          </div>
          <span className="text-2xl 4xl:text-4xl">Your Civil Construction</span>
          <span className="text-2xl 4xl:text-4xl">
            Architecture & Civil Work | Elevation Design
          </span>
          <span className="text-2xl 4xl:text-4xl">Restoration | Re-Modelling | Renovation</span>
        </div>
      </div>
    </section>
  );
}
