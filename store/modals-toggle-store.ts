import { create } from 'zustand';

type ModalStoreType = {
  isReferFriendModalOpen: boolean;
  setIsReferFriendModalOpen: (newState: boolean) => void;
  isCollaborateModalOpen: boolean;
  setIsCollaborateModalOpen: (newState: boolean) => void;
};

export const useModalStore = create<ModalStoreType>((set) => ({
  isReferFriendModalOpen: false,
  isCollaborateModalOpen: false,
  setIsReferFriendModalOpen: (newState) => set(() => ({ isReferFriendModalOpen: newState })),
  setIsCollaborateModalOpen: (newState) => set(() => ({ isCollaborateModalOpen: newState })),
}));
