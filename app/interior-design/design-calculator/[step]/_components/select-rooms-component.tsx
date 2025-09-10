"use client"
import StepComponent from "./step-component";
import { Minus, Plus } from "lucide-react";
import { useRooms } from "@/store/useRooms";

export default function SelectRoomsComponent() {
    const { BHK, rooms, updateRooms } = useRooms();
    return (
        <StepComponent>
            {
                rooms.map((room, index) => {
                    return (
                        <div key={index} className="border rounded-md w-full p-4 gap-4 flex items-center justify-between">
                            <div>
                                {room.name}
                            </div>
                            <div className="flex items-center">
                                <button
                                    disabled={room.number <= BHK}
                                    onClick={() => updateRooms(room.name, -1)}
                                    className="flex items-center justify-center rounded-full p-1 bg-primaryYellow"><Minus className="size-4" /></button>
                                <span className="mx-2 w-2 text-center">{room.number}</span>
                                <button
                                    onClick={() => updateRooms(room.name, 1)}
                                    className="flex items-center justify-center rounded-full p-1 bg-primaryYellow"><Plus className="size-4" /></button>
                            </div>
                        </div>
                    )
                })
            }
        </StepComponent>
    )
}