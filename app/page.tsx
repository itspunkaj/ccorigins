"use client";
import React, { useState } from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const images = [
    {
        id: "1",
        alt: "bedroom",
        imgUrl: "/images/new-homepage/PNG/Bedroom.png",
        class: "top-0 left-0"
    },
    {
        id: "2",
        alt: "advertising",
        imgUrl: "/images/new-homepage/PNG/Advertising.png",
        class: "top-0 right-0"
    },
    {
        id: "3",
        alt: "banglow",
        imgUrl: "/images/new-homepage/PNG/Banglow.png",
        class: "bottom-0 left-0"
    },
    {
        id: "4",
        alt: "pavilion",
        imgUrl: "/images/new-homepage/PNG/Pavilion.png",
        class: "bottom-0 right-0"
    },
]

export default function Page() {
    return (
        <section className="h-[120dvh] bg-trasparent w-full flex flex-col">
            <div className="h-[80%] w-full">
                <div className="relative h-full w-full overflow-hidden">
                    {/* Rings on corners of the section */}
                    <div className="absolute 2xl:right-[35rem] right-0 -translate-y-1/2 2xl:-translate-y-1/4 translate-x-1/2 h-96 w-96 border-8 2xl:h-[30rem] 2xl:w-[30rem] 2xl:border-[20px] border-primaryYellow rounded-full"/>
                    <div className="absolute bottom-1/4 left-0 translate-y-1/2 2xl:translate-y-1/4 -translate-x-full md:-translate-x-1/2 h-96 w-96 border-8 2xl:h-[50rem] 2xl:w-[50rem] 2xl:border-[16px] border-gray-400 rounded-full"/>
                    
                    {/* Background images */}
                    {
                        images.map((img) => <Image key={img.id} src={img.imgUrl} height={500} width={800} alt={img.alt} className={`-z-10 h-1/2 w-1/2 object-cover absolute ${img.class}`} />)
                    }

                    {/* Lamp Image */}
                    <Image src={"/images/new-homepage/PNG/Lamp.png"} height={400} width={200} alt="lamp" className="absolute top-0 right-1/2 z-40 translate-x-1/2 object-cover w-[300%] md:w-[45%] 2xl:w-[40%] " />
                    <div className="absolute bottom-0 h-1/2 w-full flex items-center justify-center flex-col ">
                        <div className="max-w-8xl text-yellow-50  w-full h-full flex flex-col items-center justify-center">
                            <div className="h-1/3 flex font-bahn flex-col items-center justify-start">
                                <h1 className="2xl:text-7xl xl:text-5xl text-4xl font-thin tracking-widest">creative catalyst</h1>
                                <h2 className="text-lg xl:text-2xl 2xl:text-4xl capitalize">Defining Leadership 360 degree</h2>
                            </div>
                            <div className="flex-1 uppercase font-cinzel flex flex-col items-center justify-start">
                                <h1 className="text-3xl md:text-5xl 2xl:text-8xl font-semibold mb-4 text-center ">Creativity is our hallmark!</h1>
                                <h2 className="text-lg md:text-3xl 2xl:text-7xl font-thin text-center">We bring charms of both the worlds</h2>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-1.5 2xl:-bottom-2.5 z-10 max-w-8xl h-3 2xl:h-5 w-full bg-primaryYellow right-1/2 translate-x-1/2"></div>
                </div>
            </div>
            <div className="flex-1 flex flex-col relative bg-white items-center justify-center">
                <div className="flex z-20 absolute right-1/2 translate-x-1/2 top-0 -translate-y-1/2 max-w-7xl items-center justify-center md:space-x-1">
                    <Link href={"/interior-design"}>
                        <Button variant={"home"} className="rounded-r-full hover:shadow-2 2xl:text-3xl 2xl:p-8 !capitalize">
                            Architect & Interior
                        </Button>
                    </Link>
                    <Link href={"/advertising"}>
                        <Button variant={"home"} className="rounded-l-full 2xl:text-3xl 2xl:p-8 !capitalize">
                            Advertising & Event
                        </Button>
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <Image src={"/images/new-homepage/PNG/L_Complete.png"} alt="Logo" height={500} width={800} className="w-1/2 2xl:w-5/6 object-cover" />
                </div>
            </div>
        </section>
    )
}
