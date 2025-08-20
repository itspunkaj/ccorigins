import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {

    const arrowVariants = {
        hover: {
            x: 4,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };
    return (
        <section className="h-screen w-screen relative">

            <div className="z-10 bg-transparent max-md:hidden md:h-40 md:w-40 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full overflow-hidden">
                <Image src={"/images/logo.jpeg"} height={300} width={300} alt="logo" className="mix-blend-multiply" />
            </div>
            <div className="grid md:grid-cols-2 h-full w-full overflow-hidden">
                <div className="bg-primaryYellow h-full w-full relative ">
                    {/* <div className='absolute top-0 left-0 w-full h-full bg-black opacity-10'>
                    </div> */}
                    <div className='absolute bottom-10 right-96 h-48 w-48 transparent rounded-full border-8 border-white border-opacity-20'>
                    </div>
                    <div className='absolute bottom-[350px] left-[350px] h-48 w-48 transparent rounded-full border-[24px] border-white border-opacity-30'>
                    </div>
                    <div className='absolute bottom-[200px] left-[400px] h-96 w-96 transparent rounded-full border-[48px] border-white border-opacity-10'>
                    </div>
                    <div className='absolute bottom-32 right-96 h-[300px] w-[300px] transparent rounded-full border-8 border-white border-dotted border-opacity-30'>
                    </div>
                    <div className="h-2/3 w-full bg-transparent rounded-full overflow-hidden absolute -translate-x-1/4 translate-y-2 outline outline-2 outline-black outline-offset-4 ">
                        <Image src={"/images/yellow-bed.jpg"} width={1000} height={600} alt="bed" className="object-cover h-full shadow-sm" />
                    </div>
                    <div className="absolute bottom-0 left-0  w-4/5 h-1/3 flex items-center justify-center">
                        <Link href={"/interior-design"}>
                            <Button className="rounded-full md:h-16 md:px-10" variant={"outline"}>
                                Architecture & Interiors
                                <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="bg-white h-full w-full relative">
                    {/* <div className='absolute top-0 left-0 w-full h-full bg-black opacity-10'>
                    </div> */}
                    <div className='absolute top-10 right-96 h-48 w-48 transparent rounded-full border-8 border-primaryYellow border-opacity-20'>
                    </div>
                    <div className='absolute top-[350px] left-[350px] h-48 w-48 transparent rounded-full border-[24px] border-primaryYellow border-opacity-30'>
                    </div>
                    <div className='absolute -top-20 left-[400px] h-96 w-96 transparent rounded-full border-[48px] border-primaryYellow border-opacity-10'>
                    </div>
                    <div className='absolute top-32 right-96 h-[300px] w-[300px] transparent rounded-full border-8 border-primaryYellow border-dotted border-opacity-30'>
                    </div>
                    <div className="absolute top-0 right-0 w-4/5 h-1/3 flex items-center justify-center">
                        <Link href={"/advertising"}>
                            <Button className="rounded-full md:h-16 md:px-10">
                                Advertisements & Events
                                <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                    <div className="h-2/3 w-full absolute bottom-0 right-0  bg-transparent rounded-full overflow-hidden translate-x-1/4 -translate-y-2 outline outline-2 outline-black outline-offset-4 ">
                        <Image src={"/images/time-square.jpg"} width={1000} height={600} alt="bed" className="object-cover h-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}