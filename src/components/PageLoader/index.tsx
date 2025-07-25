import loadingGif from '../../assets/loading-gif.gif';
import { FullPageLoaderProps } from '../../types';

const FullPageLoader = ({ loading }: FullPageLoaderProps) => {
  return (
    <>
      {loading ? (
        <div className="fixed inset-0 w-screen h-screen z-[1000] flex flex-col justify-center items-center">
          <img
            src={loadingGif}
            alt="Cargando..."
            className="w-[60px] h-[60px] mb-5"
          />
          <h6 className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-medium">Cargando...</h6>
        </div>

      ) : null}
    </>
  );
};

export default FullPageLoader;
