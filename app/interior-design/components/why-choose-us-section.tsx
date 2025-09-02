import Image from "next/image"

const images = [
    {
        id: "1",
        url: "/images/interior-design/01.jpg"
    },
    {
        id: "2",
        url: "/images/interior-design/02.jpg"
    },
    {
        id: "3",
        url: "/images/interior-design/03.jpg"
    },
    {
        id: "4",
        url: "/images/interior-design/04.jpg"
    },
    {
        id: "5",
        url: "/images/interior-design/05.jpg"
    },
    {
        id: "6",
        url: "/images/interior-design/06.jpg"
    },
    {
        id: "7",
        url: "/images/interior-design/07.jpg"
    },
    {
        id: "8",
        url: "/images/interior-design/08.jpg"
    },
]

export default function WhyChooseUsSection() {
    return (
        <section className="w-full bg-slate-200">
            <div className="w-full max-w-8xl mx-auto flex flex-col items-center justify-center py-10 max-sm:px-4">
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-4xl 4xl:text-6xl font-gotham">
                        <span className="font-thin">Why Choose Us</span>
                    </h1>
                    <p className="text-lg md:text-2xl 4xl:text-4xl font-light mt-1">
                        We combine creativity, functionality, and attention to detail to transform your spaces.
                    </p>
                </div>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 items-center my-10 gap-10 h-full md:px-10">
                    {images.map((img, index) => (
                        <div
                            key={img.id}
                            className={`bg-white rounded-lg overflow-hidden p-4 flex justify-center`}
                        >
                            <Image
                                src={img.url}
                                className="object-cover h-full"
                                height={1000}
                                width={1000}
                                alt={img.id}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}