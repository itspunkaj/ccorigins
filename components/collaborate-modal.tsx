import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useModalStore } from "@/store/modals-toggle-store";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function CollaborateModal() {
    const { setIsCollaborateModalOpen} = useModalStore()
    return (
        <div className="fixed inset-0 bg-black text-slate-800 bg-opacity-50 z-50 flex items-center justify-center font-bahn">
            <div className="relative bg-white rounded-lg p-6 w-full md:w-1/3 lg:w-1/4">
            <div className="absolute right-3 top-3">
                <button onClick={()=>{setIsCollaborateModalOpen(false)}}><X/></button>
            </div>
                <h3 className="text-2xl">Talk to an Expert</h3>
                <div className="flex flex-col gap-4 my-4">
                    <Input placeholder="Name" />
                    <Input placeholder="Email ID" />
                    <Input placeholder="Phone" />
                    <div className="flex items-center text-sm text-slate-500">
                        <input type="checkbox"/>
                        <IconBrandWhatsapp className="size-5 mx-1"/>
                        <span className="flex-1">
                        Send updates on Whatsapp
                        </span>
                    </div>
                    <Input placeholder="Project Name" />
                </div>
                <Button className="rounded-full w-full">
                    Submit
                </Button>
                <p className="text-center text-sm mt-2">
                    By submitting this form, you agree to the privacy policy & terms and conditions
                </p>
            </div>
        </div>
    )
}