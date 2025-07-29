import Image from "next/image";

interface client {
  name: string,
  imgUrl: string,
  class?: string
}

const clients: client[] = [
  {
    name: "Vector",
    imgUrl: "/images/interior-design-clients/vector.jpeg",
    class: ""
  },
  {
    name: "RDP",
    imgUrl: "/images/interior-design-clients/RDP.jpeg",
    class: ""
  },
  {
    name: "BLR",
    imgUrl: "/images/interior-design-clients/BLR.jpeg",
    class: ""
  },
  {
    name: "CRM",
    imgUrl: "/images/interior-design-clients/CRM.jpeg",
    class: "w-5/12"
  },
  // {
  //   name: "Sharma",
  //   imgUrl: "/images/interior-design-clients/sharma.jpeg",
  //   class: ""
  // },
  // {
  //   name: "Dover",
  //   imgUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  //   class: ""
  // },
  // {
  //   name: "Forbes Marshall",
  //   imgUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
  //   class: ""
  // },
]

export default function ClientCarouselSection() {
  return (
    <section className="white py-8 bg-white">
      <h2 className="text-4xl text-center mb-10">Clients Who Believe <span className="text-primaryYellow font-bold">in Our Origins</span></h2>
      <div className="slider container mx-auto px-6 ">
        <div className="slide-track  flex items-center bg-white ">
          {
            clients.map((client) => {
              return (<div className="slide flex items-center justify-center" key={client.name}>
                <Image className={`object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-150 w-3/4 ${client.class}`} src={client.imgUrl} height={1000} width={1000} alt={client.name} />
              </div>)
            })
          }
          {
            clients.map((client) => {
              return (<div className="slide flex items-center justify-center" key={client.name}>
                <Image className={`object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-150 w-3/4 ${client.class}`} src={client.imgUrl} height={1000} width={1000} alt={client.name} />
              </div>)
            })
          }
        </div>
      </div>
    </section>
  )
}