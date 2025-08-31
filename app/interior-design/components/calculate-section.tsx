import { Button } from "@/components/ui/button";

export default function CalculateSection() {
    return (
        <section className="bg-black w-full font-bahn">
            <div className="max-w-8xl grid md:grid-cols-2 mx-auto">
                <div className="bg-transparent py-10">
                    <div className=" flex max-sm:flex-col items-center justify-center">
                        <div className="w-1/3 px-2">
                            <Button className="w-full 2xl:text-2xl 2xl:py-6">Calculate</Button>
                        </div>
                        <div className="flex-1/3 text-white max-sm:mt-3 max-sm:text-center">
                            <h3 className="text-4xl">Get the estimate</h3>
                            <p>Calculate the approximate price of your project.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-primaryYellow py-10">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center md:w-1/3">
                            <Button className="w-full 2xl:text-2xl 2xl:py-6" variant={"secondary"}>Refer a friend</Button>
                            <p className="mt-3 text-lg">
                                Want to refer your friend
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}