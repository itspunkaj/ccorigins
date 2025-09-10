"use client"
import Image from "next/image";
import StepComponent from "./step-component";
import { useRooms } from "@/store/useRooms";
type Package = {
    name: string;
    desc: string;
    img : string;
    features: string[];

}
const packages: Array<Package> = [
    {
        name: "Essentials (₹₹)",
        desc: "A range of essential home interior solutions that's perfect for all your needs.",
        img : "/images/interior-design/essentials.jpg",
        features: [
            "Affordable pricing",
            "Convenient designs",
            "Basic accessories"
        ]
    },
    {
        name : "Premium (₹₹₹)",
        desc : "Superior home interior solutions that will take your interiors to the next level.",
        img : "/images/interior-design/premium.jpg",
        features : [
            "Mid-range pricing",
            "Premium designs",
            "Wide range of accessories"
        ]
    },
    {
        name : "Luxe (₹₹₹₹)",
        desc : "High-end interior solutions for the ultimate home interior experience you deserve.",
        img : "/images/interior-design/luxe.jpg",
        features : [
            "Elite pricing",
            "Lavish designs",
            "Extensive range of accessories"
        ]
    }
]

export default function PackageComponent() {
    const {PKG, setPackage} = useRooms()
    return (
        <StepComponent>
            {packages.map((pkg)=>{
                const isSelected = pkg.name === PKG;
                return (
                    <div key={pkg.name} onClick={()=>setPackage(pkg.name)} className={`cursor-pointer border rounded-md w-full p-4 gap-4 flex items-start ${isSelected && 'bg-yellow-50 border-primaryYellow'}`}>
                        <input
                            id={`${pkg.name}`}
                            checked={isSelected} 
                            onChange={()=>setPackage(pkg.name)}
                            name="bhk"
                            type="radio"
                            className="accent-primaryYellow border-none ring-0 mt-1"
                        />
                        <label htmlFor={`${pkg.name}`}>
                            <h2 className="">{pkg.name}</h2>
                            <p className="text-gray-600 font-thin text-sm">{pkg.desc}</p>
                            <Image src={pkg.img} height={400} width={400} alt={pkg.name} className="rounded-lg my-2"/>
                            <ul>
                                {pkg.features.map((feature)=>(
                                    <li key={feature} className="text-gray-600 font-thin text-sm list-disc">{feature}</li>
                                ))}
                            </ul>
                        </label>
                    </div>
                )
            })}
        </StepComponent>
    )
}