import { number } from "framer-motion";
import { create } from "zustand";

type Room = { name: string, number: number }

type RoomState = {
    BHK: number,
    setBHK: (bhk: number) => void;
    rooms: Room[];
    updateRooms: (roomName: string, delta: number) => void;
    PKG: string;
    setPackage: (pkg: string) => void;
}


export const useRooms = create<RoomState>(set => ({
    BHK: 1,
    rooms: [
        { name: "Living Room", number: 1 },
        { name: "Kitchen", number: 1 },
        { name: "Bedroom", number: 1 },
        { name: "Bathroom", number: 1 },
        { name: "Dining", number: 1 },
    ],
    PKG: "",
    setBHK: (bhk: number) => {
        set((state) => {
            return {
                BHK: bhk,
                rooms: state.rooms.map((room) => (room.name === "Bedroom" ? { ...room, number: bhk } : room))
            }
        })
    },
    updateRooms: (roomName, delta) => {
        set(state => ({
            rooms: state.rooms.map((room) => {
                return room.name === roomName ? { ...room, number: Math.max(0, room.number + delta) } : room
            })
        }))
    },
    setPackage: (pkg: string) => {
        set(() => ({ PKG: pkg }))
    }
}))