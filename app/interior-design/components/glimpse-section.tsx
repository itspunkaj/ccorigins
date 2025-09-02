import Image from "next/image";

export default function GlimpseSection() {
    return (
        <section className="w-full font-bahn">
            <div className="max-w-8xl mx-auto py-20 px-4 ">
                <div className="mb-10">
                    <h2 className="text-4xl 4xl:text-6xl ">
                        <span className="font-medium">Get Glimpse of CCO homes</span>
                    </h2>
                    <p className="text-lg md:text-2xl 4xl:text-4xl font-light mt-1">
                        Your dream interiors, made easy...
                    </p>
                </div>
                <div className="grid md:grid-cols-2 justify-around gap-4">
                    <div className="relative w-full rounded-lg overflow-hidden">
                        <Image src="/images/apartment-before.jpg" className="w-full h-full object-cover" height={800} width={800} alt="before apartment"/>
                        <p className="absolute bottom-2 left-4 text-2xl">
                            BEFORE
                        </p>
                    </div>
                    <div className="relative w-full rounded-lg overflow-hidden">
                        <Image src="/images/apartment.jpg" className="w-full h-full object-cover" height={800} width={800} alt="before apartment"/>
                        <p className="absolute bottom-2 left-4 text-2xl text-white">
                            AFTER
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}