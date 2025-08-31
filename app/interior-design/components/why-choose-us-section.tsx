import Image from "next/image"

const images = [
    {
        id : "1",
        url : "/images/interior-design/01.jpg"
    },
    {
        id : "2",
        url : "/images/interior-design/02.jpg"
    },
    {
        id : "3",
        url : "/images/interior-design/03.jpg"
    },
    {
        id : "4",
        url : "/images/interior-design/04.jpg"
    },
    {
        id : "5",
        url : "/images/interior-design/05.jpg"
    }
]

export default function WhyChooseUsSection() {
    return (
        <section className="w-full bg-slate-200">
            <div className="w-full max-w-8xl mx-auto flex flex-col items-center justify-center py-10 max-sm:px-4">
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-4xl 2xl:text-6xl font-sans">
                        <span className="font-thin">Why Choose Us</span>
                    </h1>
                    {/* <p className="text-lg md:text-2xl 2xl:text-4xl text-center font-bahn font-light my-4">
                        Complete interior design from renovations to modular solutions-for your home or office.<br />
                        Explore our wide range of furniture and decor to bring your space to life.
                    </p> */}
                </div>
                <div className="flex-1 grid md:grid-cols-5 gap-4 my-10 h-full md:px-10">
                        {
                            images.map((img)=>{
                                return (
                                    <div key={img.id} className="bg-white rounded-lg overflow-hidden flex flex-col items-center justify-between p-4">
                                        <Image src={img.url} className="object-cover h-full" height={1000} width={1000} alt={img.id}/>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </section>
    )
}