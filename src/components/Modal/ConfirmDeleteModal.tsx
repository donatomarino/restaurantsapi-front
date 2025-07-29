import Modal from 'react-modal';
import { ModalDeleteState } from '../../types';

const ConfirmDeleteModal = ({ deleteModalIsOpen, closeDeleteModal, onConfirm }: ModalDeleteState) => {

  const handleConfirm: () => void = () => {
    onConfirm();
    closeDeleteModal();
  };

  return (
    <Modal
      isOpen={deleteModalIsOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={closeDeleteModal}
      contentLabel="Confirmar eliminación"
      className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow w-full max-w-lg mx-auto focus:outline-none"
      overlayClassName="fixed inset-0 bg-transparent flex items-center justify-center z-50 -60"
    >
      <>
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 mb-6 text-center">
          Confirmar eliminación
        </h2>

        <p className="text-gray-300 text-center mb-10">
          ¿Estás seguro de que deseas eliminar este restaurante?
        </p>

        <div className="flex justify-end space-x-4">
          <button
            onClick={closeDeleteModal}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-medium cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-200 font-medium shadow-lg cursor-pointer"
          >
            Eliminar
          </button>
        </div>
      </>
    </Modal>
  );
}

export default ConfirmDeleteModal;