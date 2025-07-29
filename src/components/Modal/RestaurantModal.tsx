import Modal from "react-modal";
import RestForm from "../RestForm";
import { IoClose } from "react-icons/io5";
import { ModalRestProps } from "../../types";
import { LoadContext } from "../../contexto/LoadContext";
import { useContext } from "react";

const RestaurantModal = ({ modalIsOpen, ...rest }: ModalRestProps) => {
  const {loading} = useContext(LoadContext);
  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow w-full max-w-lg mx-auto focus:outline-none"

      overlayClassName="fixed inset-0 bg-transparent flex items-center justify-center z-50 -60"
      contentLabel='New Restaurant'
    >
      <div className="flex justify-end">
        <button
          type="button"
          className="py-1 rounded bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:brightness-110 text-white transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed p-2"
          onClick={rest.closeModal}
          disabled={loading}
        >
          <IoClose size={22} />
        </button>
      </div>

      <RestForm
        modalIsOpen={modalIsOpen}
        {...rest}
      />
    </Modal>
  )
}

export default RestaurantModal;