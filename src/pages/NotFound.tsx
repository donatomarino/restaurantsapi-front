import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 bg-gray-800 border border-gray-700 p-8 rounded-lg shadow text-center">
        <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 mb-4">
          404 - Página no encontrada
        </h1>

        <p className="text-gray-300 text-m">
          La página que estás buscando no existe.
        </p>

        <button
          onClick={handleRedirect}
          className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:brightness-110 transition duration-200 cursor-pointer"
        >
          Volver al Login
        </button>
      </div>
    </div>
  );
};

export default NotFound;
