import Image from "next/image";

export default function QuoteSection () {
  return (
    <div className="max-md:py-10 md:h-screen bg-black text-white w-full flex flex-col items-center justify-center px-4">
      <p className="text-4xl md:text-6xl text-center">
        “We Bridge the Words, We Bridge the Worlds.”
      </p>
      <Image src="/images/logo-2.png" height={100} width={300} alt="logo" className="object-cover h-64"/>
      <p className="text-2xl md:text-3xl font-light font-sans text-center">Uniting brands and audiences through catalytic ideas.</p>
    </div>
  )
}