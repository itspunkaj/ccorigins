"use client";
import React, { useState } from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import Link from "next/link";

export default function ThreeDMarqueeDemoSecond() {
  const images = [
    "/images/apartment.jpg",
    "/images/advertisements/ILS.png",
    "/images/architecture/villa-1.png",
    "/images/advertisements/Travel.png",
    "/images/bathroom.jpg",
    "/images/advertisements/saluja.png",
    "/images/architecture/villa-2.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];

  const arrowVariants = {
    hover: {
      x: 4,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const words = [
    "Defining Leadership.",
    "Designing spaces that inspire and elevate.",
    "Ideas that spark attention and create impact.",
    "Timeless interiors, tailored for your lifestyle.",
    "Campaigns that connect, events that captivate.",
  ]

  return (
    <div className="relative z-30 flex h-screen w-full  items-center justify-center overflow-hidden">
      <div className="h-full flex flex-col py-32 md:py-48">
      <h2 className="relative z-20 mx-auto w-full text-center text-4xl leading-relaxed font-bold text-balance text-white md:text-4xl lg:text-6xl">
        One Studio,{" "}
        <span className="relative z-20 inline-block rounded-xl bg-yellow-500/40 px-4 py-1 text-white underline decoration-primaryYellow decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          Two Worlds
        </span>{" "}
        of Creativity
      </h2>
      <div className="relative z-20 mx-auto max-w-3xl py-3 md:py-8 text-center text-md  md:text-2xl">
        <FlipWords className="text-slate-300" words={words} />
      </div>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        {/* Button 1: Outline on hover */}
        {(() => {
          const [hovered, setHovered] = React.useState(false);
          return (
            <motion.div className="mt-auto">
              <Link href="/interior-design">
                <Button
                  variant={hovered ? "default" : "outline"}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  View Architecture & Interiors
                  <motion.div variants={arrowVariants}>
                    <ArrowRight size={18} />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          );
        })()}
        {/* Button 2: Outline on hover */}
        {(() => {
          const [hovered, setHovered] = React.useState(false);
          return (
            <motion.div className="mt-auto">
              <Link href="/advertising">
              <Button
                variant={hovered ? "default" : "outline"}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                View Ads & Events
                <motion.div variants={arrowVariants}>
                  <ArrowRight size={18} />
                </motion.div>
              </Button>
              </Link>
            </motion.div>
          );
        })()}
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/40" />
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      </div>
      {/* <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      /> */}
    </div>
  );
}
