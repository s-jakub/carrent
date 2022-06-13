import { createContext, useContext } from "react";

interface ModalContextInterface {
  showModal: boolean;
  setModal: (sM: boolean) => void;
}

export const ModalProvider = createContext<ModalContextInterface>({
  showModal: false,
  setModal: () => {},
});

export const useModal = () => useContext(ModalProvider);
