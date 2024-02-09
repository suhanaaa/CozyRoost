//customize hook

//Zustad library is used  to manage state of the modal
//manage global store
import { create } from "zustand";

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModel = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModel;
