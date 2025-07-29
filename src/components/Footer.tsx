import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-3 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="text-xs text-gray-500">
            &copy; 2025 - Desarrollado por Donato Marino
          </div>

          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <a 
              href="mailto:donato_8@icloud.com" 
              className="hover:text-yellow-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <HiOutlineMail size={14} />
              <span className="hidden sm:inline">donato_8@icloud.com</span>
            </a>
            <a 
              href="https://github.com/donatomarino" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <FaGithub size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;