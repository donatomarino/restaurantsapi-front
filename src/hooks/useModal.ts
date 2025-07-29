import { useState } from "react";
import { ModalState } from "../types";

export default function useModal(): ModalState {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [deleteModalIsOpen, setDeleteIsOpen] = useState<boolean>(false);

  // Abre y cierra el portal
  const openModal = () => { setIsOpen(true) }
  const closeModal = () => { setIsOpen(false) }

  // Abre y cierra el portal para eliminar un restaurante
  const openDeleteModal = () => { setDeleteIsOpen(true) }
  const closeDeleteModal = () => { setDeleteIsOpen(false) }

  return { openModal, closeModal, modalIsOpen, openDeleteModal, closeDeleteModal, deleteModalIsOpen }
}