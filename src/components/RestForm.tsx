import { useContext, useState } from "react";
import { AuthResponse, BaseApiResponse, BaseRestaurant, RestFormProps } from "../types";
import instanceAxios from '../api/APIUtils';
import { toast } from "react-toastify";
import { ReloadContext } from "../contexto/ReloadContext";

const AddRestForm = ({ closeModal, dataRestaurant, setDataRestaurant }: RestFormProps) => {
  const [newRestaurant, setNewRestaurant] = useState<BaseRestaurant>({
    name: '',
    address: '',
    phone: ''
  });
  const { triggerReload } = useContext(ReloadContext);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const isEditing = !!dataRestaurant;
      const endpoint = isEditing ? `/restaurants/${dataRestaurant?.id}` : '/restaurants';
      const payload = isEditing ? dataRestaurant! : newRestaurant;

      const request = isEditing ? instanceAxios.putRequest : instanceAxios.postRequest;

      const res: BaseApiResponse | AuthResponse = await request({
        url: endpoint,
        data: payload
      });

      if(res.success) {
        const successMessage = isEditing ? 'Restaurante actualizado correctamente' : 'Restaurante añadido correctamente';
        toast.success(successMessage);
        closeModal();
        triggerReload();
      } else {
        const errorMessage= isEditing ? 'El restaurante no se pudo actualizar' : 'El restaurante ya está registrado';
        toast.error(errorMessage);
      }
    } catch (e: unknown) {
      console.error(e);
      toast.error('Error al añadir el restaurante');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-left">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="border text-gray-900 rounded-lg focus:border-yellow-500 block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-yellow-500"
          value={dataRestaurant?.name}
          onChange={handleChange}
          required
        />
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
          required
        />
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
          required
        />
      </div>

      <div className="text-end">
        <button
          type="submit"
          className="w-full text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:brightness-110 transition duration-200 mt-5 cursor-pointer"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default AddRestForm;