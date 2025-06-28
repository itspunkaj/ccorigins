import Image from "next/image"

const featuredIn = [
  {
    title : "Elle Decor",
    imgUrl : "https://seekvectorlogo.com/wp-content/uploads/2019/06/elle-decor-vector-logo.png",
    class : ""
  },
  {
    title : "Falgunt Shane Peacock",
    imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXSJaKrO7UE25L4k1CirVqWVVwzAxZm04vA&s",
    class : "!w-full"
  },
  {
    title : "AD",
    imgUrl : "https://www.architecturaldigest.in/verso/static/architecturaldigest-global/assets/logo-seo.png",
    class : "!w-1/3"
  },
  {
    title : "Vogue",
    imgUrl : "https://upload.wikimedia.org/wikipedia/commons/f/f8/VOGUE_LOGO.svg",
    class : ""
  },
  {
    title : "GQ",
    imgUrl : "https://logovectorseek.com/wp-content/uploads/2019/12/gq-logo-vector.png",
    class : "!w-2/3"
  },
  {
    title : "The Hindu",
    imgUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Hindu_logo.svg/2560px-The_Hindu_logo.svg.png",
    class : ""
  }
]

export default function FeatureInSection () {
  return (
    <section className="container mx-auto md:px-6 my-20 flex flex-col gap-10">
      <h2 className="text-4xl text-center">Featured and Trusted by</h2>
      <div className="grid grid-cols-2 gap-y-10 md:grid-cols-6 align-middle content-center ">
        {
          featuredIn.map((element)=>{
            return (
            <div className="flex items-center justify-center">
              <Image height={500} width={500} src={element.imgUrl || ""} alt={element.title} className={`object-cover w-3/4 ${element.class}`} />
            </div>)
          })
        }
      </div>
    </section>
  )
}