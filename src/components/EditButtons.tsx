import { FaRegEdit } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import instanceAxios from '../api/APIUtils';
import { EditButtonsProps } from "../types";
import { useContext, useState } from "react";
import { ReloadContext } from "../contexto/ReloadContext";
import RestaurantModal from "./Modal/RestaurantModal";
import useModal from "../hooks/useModal";
import { BaseRestaurant } from "../types";

export const EditButtons= ({ params }: EditButtonsProps) => {
  const { triggerReload } = useContext(ReloadContext);
  const { modalIsOpen, closeModal, openModal } = useModal();
  const [dataRestaurant, setDataRestaurant]= useState<BaseRestaurant>({
    id: params.row.id,
    name: params.row.name,
    address: params.row.address,
    phone: params.row.phone
  });

  const deleteRestaurant = async (): Promise<void> => {
    try {
      // Eliminar el restaurante tramite su id
      await instanceAxios.deleteRequest({
        url: `restaurants/${params.row.id}`,
      });
      toast.success('Restaurante eliminado correctamente');
      triggerReload();
    } catch (e: unknown) {
      console.error(e);
      toast.error('Error al eliminar el restaurante');
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex mt-2 space-x-2">
        <button
          type="button"
          className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-200 cursor-pointer"
          onClick={openModal}
        >
          <FaRegEdit size={22} />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 px-3 py-1 rounded bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:brightness-110 text-white transition duration-200 cursor-pointer"
          onClick={() => deleteRestaurant()}
        >
          <IoClose size={22} />
        </button>
      </div>

      <RestaurantModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        dataRestaurant={dataRestaurant}
        setDataRestaurant={setDataRestaurant}
      />
    </div>
  )
}