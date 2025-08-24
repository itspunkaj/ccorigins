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
                <div className="relative h-full w-full">
                    {
                        images.map((img) => <Image key={img.id} src={img.imgUrl} height={500} width={800} alt={img.alt} className={`-z-10 h-1/2 w-1/2 object-cover absolute ${img.class}`} />)
                    }
                    <Image src={"/images/new-homepage/PNG/Lamp.png"} height={400} width={200} alt="lamp" className="absolute top-0 right-1/2 z-40 translate-x-1/2 object-cover w-[300%] md:w-[45%] " />
                    <div className="absolute bottom-0 h-1/2 w-full flex items-center justify-center flex-col ">
                        <div className="max-w-7xl text-yellow-50  w-full h-full flex flex-col items-center justify-center">
                            <div className="h-1/3 flex font-bahn flex-col items-center justify-start">
                                <h1 className="text-4xl font-thin tracking-widest">creative catalyst</h1>
                                <h2 className="text-lg capitalize">Defining Leadership 360 degree</h2>
                            </div>
                            <div className="flex-1 uppercase font-cinzel flex flex-col items-center justify-start">
                                <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-center ">Creativity is our hallmark!</h1>
                                <h2 className="text-lg md:text-3xl font-thin text-center max-w-3xl">We bring charm from both the world Ideation & concept to execution</h2>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-1.5 max-w-7xl h-3 w-full bg-primaryYellow right-1/2 translate-x-1/2"></div>
                </div>
            </div>
            <div className="flex-1 flex flex-col relative bg-white items-center justify-center">
                <div className="flex absolute right-1/2 translate-x-1/2 top-0 -translate-y-1/2 max-w-7xl items-center justify-center md:space-x-1">
                <Link href={"/interior-design"}>
                    <Button variant={"home"} className="rounded-r-full hover:shadow-2">
                        Architect & Interior
                    </Button>
                </Link>
                <Link href={"/advertising"}>
                    <Button variant={"home"} className="rounded-l-full ">
                        Advertising & Event
                    </Button>
                </Link>
                </div>
                <div className="flex items-center justify-center">
                    <Image src={"/images/new-homepage/PNG/L_Complete.png"} alt="Logo" height={500} width={800} className="w-1/2 object-cover"/>
                </div>
            </div>
        </section>
    )
}
