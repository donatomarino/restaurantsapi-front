import { useContext, useState } from "react";
import { AuthResponse, BaseApiResponse, BaseRestaurant, ModalRestProps } from "../types";
import instanceAxios from '../api/APIUtils';
import { toast } from "react-toastify";
import { LoadContext } from "../contexto/LoadContext";
import { useErrors } from "../hooks/useErrors";

const RestForm = ({ closeModal, dataRestaurant, setDataRestaurant }: ModalRestProps) => {
  const [newRestaurant, setNewRestaurant] = useState<BaseRestaurant>({
    name: '',
    address: '',
    phone: ''
  });
  const { toggleReload, loading, toggleLoading } = useContext(LoadContext);
  const { errors, updateErrors, clearErrors } = useErrors();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      toggleLoading();
      /*
        Si se pasan datos de un restaurante, significa que estamos editando
        Si no, estamos añadiendo un nuevo restaurante
        En base a eso, definimos el endpoint y el payload
      */
      const isEditing = !!dataRestaurant;
      const endpoint = isEditing ? `/restaurants/${dataRestaurant?.id}` : '/restaurants';
      const payload = isEditing ? dataRestaurant! : newRestaurant;
      const request = isEditing ? instanceAxios.putRequest : instanceAxios.postRequest;

      const res: BaseApiResponse | AuthResponse = await request({
        url: endpoint,
        data: payload
      });

      /*
        Si la respuesta es exitosa, mostramos un mensaje de éxito y cerramos el modal
        Si es una edición, verificamos si se ha actualizado al menos un campo
        Si no, mostramos un mensaje de error específico
      */
      if (res.success) {
        const successMessage = isEditing ? 'Restaurante actualizado correctamente' : 'Restaurante añadido correctamente';
        clearErrors();
        closeModal();
        toast.success(successMessage);
        toggleReload();
      } else if (!res.error && isEditing ) {
        toast.error('Debes actualizar por lo menos un campo');
      } else {
        updateErrors(res);
      }

      // Si hay un error específico, lo mostramos
      res.error && toast.error(res.message);
    } catch (e: unknown) {
      console.error(e);
      toast.error('Error al añadir el restaurante');
    } finally {
      toggleLoading();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*
      Si estamos editando, actualizamos el estado del restaurante existente
      Si no, actualizamos el estado del nuevo restaurante
    */
    if (dataRestaurant) {
      setDataRestaurant({
        ...dataRestaurant,
        [e.target.name]: e.target.value
      });
    } else {
      setNewRestaurant({
        ...newRestaurant,
        [e.target.name]: e.target.value
      })
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h5 className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-lg font-semibold mb-4 text-center">Añadir o modificar restaurante</h5>

      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-left">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="border text-gray-900 rounded-lg focus:border-yellow-500 block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-yellow-500"
          value={dataRestaurant?.name}
          onChange={handleChange}
        />
        {errors?.message.name && (
          <div className="text-red-700 mt-2 mx-1">{errors.message.name}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block mb-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-left">
          Dirección
        </label>
        <input
          id="address"
          type="text"
          name="address"
          className="border text-gray-900 rounded-lg focus:border-yellow-500 block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-yellow-500"
          value={dataRestaurant?.address}
          onChange={handleChange}
        />
        {errors?.message.address && (
          <div className="text-red-700 mt-2 mx-1">{errors.message.address}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-left">
          Teléfono
        </label>
        <input
          id="phone"
          type="text"
          name="phone"
          className="border text-gray-900 rounded-lg focus:border-yellow-500 block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-yellow-500"
          value={dataRestaurant?.phone}
          onChange={handleChange}
        />
        {errors?.message.phone && (
          <div className="text-red-700 mt-2 mx-1">{errors.message.phone}</div>
        )}
      </div>

      <div className="text-end">
        <button
          type="submit"
          className="w-full text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:brightness-110 transition duration-200 mt-5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default RestForm;