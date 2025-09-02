import {create} from "zustand"

type ModalStoreType = {
    isReferFriendModalOpen : boolean;
    setIsReferFriendModalOpen : (newState : boolean) => void
}

export const useModalStore = create<ModalStoreType>((set) => ({
    isReferFriendModalOpen : false,
    setIsReferFriendModalOpen : (newState) => set((state)=>({isReferFriendModalOpen : newState}))
}))