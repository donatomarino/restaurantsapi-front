import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import RestaurantModal from "./RestaurantModal";
import useModal from "../hooks/useModal";

const Header = () => {
  const navigate = useNavigate();
  const {openModal, modalIsOpen, closeModal} = useModal();

  const handleLogout = (): void => {
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <div className="container mx-auto px-4 py-4 shadow-sm mt-3">
      <div className="flex justify-between items-center">
        <h1 className="font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-3xl mb-5">
          Restaurant Api - Donato Marino
        </h1>

        <div className="flex flex-col">
          <button
            type="button"
            className="border border-gray-800 text-gray-800 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded flex items-center px-3 py-1 hover:brightness-110 transition cursor-pointer"
            onClick={() => handleLogout()}
          >
            Cerrar sesión
          </button>

          <button
            type="button"
            className="bg-gray-800 hover:bg-gray-700 text-white rounded flex items-center gap-2 mt-2 px-3 py-1 hover:brightness-110 transition duration-200 cursor-pointer"
            onClick={openModal}
          >
            <FaPlus />
            Añadir
          </button>

          <RestaurantModal 
            modalIsOpen = {modalIsOpen}
            closeModal = {closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
