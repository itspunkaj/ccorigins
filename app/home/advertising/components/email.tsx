"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholder-vanish-input";



export function EmailSection() {
  const placeholders = [
    "Drop Your Email",
    "Drop Your Phone Number"
  ];

  const words = [
      "Our iDEA Incubators",
      "Our Originators",
      "Our Catalysts",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[20rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-6 text-xl text-center sm:text-5xl text-white font-extralight">
        Book a Consultation with <br/>
        <FlipWords className="text-primaryYellow" words={words}/>
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
