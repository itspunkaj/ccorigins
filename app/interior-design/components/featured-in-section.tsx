import Image from "next/image"

const featuredIn = [
  {
    title : "Entrepreneur",
    imgUrl : "/images/interior-featured-in/Entrepreneur-India.jpeg",
    class : ""
  },
  {
    title : "Dainik Bharat",
    imgUrl : "/images/interior-featured-in/Dainik.jpeg",
    class : "!w-full"
  },
  {
    title : "Startup India Magazine",
    imgUrl : "/images/interior-featured-in/startup-india.jpeg",
    class : ""
  },
  {
    title : "The Hindu",
    imgUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Hindu_logo.svg/2560px-The_Hindu_logo.svg.png",
    class : ""
  }
]

export default function FeatureInSection () {
  return (
    <section className="container mx-auto md:px-6 my-10 flex flex-col gap-10 bg-white">
      <h2 className="text-4xl text-center">Featured and Trusted by</h2>
      <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 align-middle content-center ">
        {
          featuredIn.map((element)=>{
            return (
            <div className="flex items-center justify-center" key={element.title}>
              <Image height={500} width={500} src={element.imgUrl || ""} alt={element.title} className={`object-cover w-3/4 ${element.class}`} />
            </div>)
          })
        }
      </div>
    </section>
  )
}