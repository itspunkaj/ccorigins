import Image from "next/image";

export default function ArchitectureThatSpeaksStyleSection () {
    return (
        <section className="relative font-bahn text-white h-fit bg-black">
            <Image className="w-full" src={"/images/interior-design/architecture-bg.jpg"} height={1000} width={2000} alt="architecture background"/>
            <div className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2  h-full max-w-8xl mx-auto w-full grid md:grid-cols-2 p-10 gap-10">
                <div className="flex flex-col md:justify-end">
                    <h2 className="text-4xl 2xl:text-6xl">Architecture That Speaks Style</h2>
                    <p>

                    </p>
                    <Image className="rounded-tr-3xl rounded-bl-3xl object-cover w-full" src={"/images/interior-design/architecture.jpg"} width={600} height={600} alt="architecture"/>
                </div>
                <div className="flex flex-col justify-end uppercase">
                    <span className="text-2xl 2xl:text-4xl font-light">Modern Design of</span>
                    <span className="text-3xl 2xl:text-5xl font-semibold">Your</span>
                    <div className="my-4 flex flex-col text-5xl 2xl:text-7xl text-primaryYellow font-semibold">
                        <span>Bungalow</span>
                        <span>Stand-Alone Villa</span>
                        <span>Duplex House</span>
                        <span>Studio Apartment</span>
                    </div>
                    <span className="text-2xl 2xl:text-4xl">Your Civil Construction</span>
                    <span className="text-2xl 2xl:text-4xl">Architecture & Civil Work | Elevation Design</span>
                    <span className="text-2xl 2xl:text-4xl">Restoration | Re-Modelling | Renovation</span>
                </div>
            </div>
        </section>
    )
}