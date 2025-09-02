import Image from "next/image"

const images = [
    {
        id : "1",
        url : "/images/interior-design/greenply.jpg",
        class : ""
    },
    {
        id : "2",
        url : "/images/interior-design/centuryply.jpg",
        class : "h-2/3"
    },
    {
        id : "3",
        url : "/images/interior-design/hettich.png",
        class : ""
    },
    {
        id : "4",
        url : "/images/interior-design/bosch.png",
        class : "mix-blend-multiply"
    },
    {
        id : "5",
        url : "/images/interior-design/kutchina.png",
        class : "h-32"
    },
    {
        id : "6",
        url : "/images/interior-design/godrej.png",
        class : "mix-blend-multiply"
    },

]

export default function TrustedPartnersSection () {
    return (
        <section className="bg-slate-200 py-10">
            <div className="max-w-8xl w-full px-4 mx-auto">
                <h2 className="text-4xl 4xl:text-6xl font-medium">
                    Our Trusted Partners
                </h2>
                <p className="text-lg md:text-2xl 4xl:text-4xl font-light my-4">
                    Clients Who Believe in Our Origin
                </p>
                <div className="grid grid-cols-2 md:grid-cols-6 my-4 gap-10 mx-auto">
                    {images.map((img)=>{
                        return (
                            <div key={img.id} className="flex items-center justify-center">
                                <Image className={`object-cover w-3/4 ${img.class}`} src={img.url} height={1000} width={1000} alt={img.id}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}