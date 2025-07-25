import { useState } from "react";
import { ModalState } from "../types";

export default function useModal(): ModalState {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  // Abre y cierra el portal
  const openModal = () => { setIsOpen(true) }
  const closeModal = () => { setIsOpen(false) }

  return { openModal, closeModal, modalIsOpen }
}