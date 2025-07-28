import { useContext, useState } from "react";
import { LoginPayload, BaseApiResponse, AuthResponse } from "../types";
import instanceAxios from '../api/APIUtils';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import FullPageLoader from "./PageLoader";
import { useErrors } from "../hooks/useErrors";
import { LoadContext } from "../contexto/LoadContext";

interface Data {
  credentials: LoginPayload,
  successResponse: AuthResponse,
  errorResponse: BaseApiResponse;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<Data['credentials']>({
    email: '',
    password: ''
  });

  const {errors, updateErrors, clearErrors} = useErrors();
  const navigate = useNavigate();
  const { loading, toggleLoading } = useContext(LoadContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      toggleLoading();
      const res: Data['successResponse'] | Data['errorResponse'] = await instanceAxios.postRequest({
        url: "/auth",
        data: formData
      });

      if (res.success && 'access_token' in res) {
        localStorage.setItem('token', res.access_token);
        clearErrors();
        navigate('/home');
      } else {
        updateErrors(res);
        toast.error('Insertar las credenciales indicadas en el placeholder');
      }

    } catch (e: unknown) {
      console.error(e);
    } finally {
      toggleLoading();
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      {loading && <FullPageLoader loading={loading} />}
      <form
        className="w-full max-w-md space-y-6 bg-gray-800 border border-gray-700 p-8 rounded-lg shadow"
        onSubmit={handleSubmit}
      >

        <h1 className="text-center font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-3xl mb-8">
          Restaurant Api
        </h1>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-left"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            id="email"
            placeholder="donato@wewelcome.com"
            className="placeholder-gray-400 border text-gray-900 rounded-lg focus:border-yellow-500 block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-yellow-500"
            autoComplete="email"
            disabled={loading}
          />
          {errors?.message.email && (
            <div className="text-red-700 mt-2 mx-1">{errors.message.email}</div>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-left"
          >
            Password
          </label>
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            name="password"
            id="password"
            placeholder="wewelcome2025"
            className="placeholder-gray-400 border text-gray-900 rounded-lg focus:border-yellow-500 block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-yellow-500"
            autoComplete="current-password"
            disabled={loading}
          />

          {errors?.message.password && (
            <div className="text-red-700 mt-2 mx-1">{errors.message.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:brightness-110 transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default LoginForm;
