import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
    return (
        <div className="fixed z-50 flex flex-col items-center space-y-2 bottom-5 right-5 group">
          
            <div className="px-3 py-1 mb-1 text-sm text-gray-900 transition-opacity bg-gray-100 rounded-t-lg rounded-l-lg opacity-0 group-hover:opacity-100">
                Chat with us
            </div>

         
            <a
                href="https://wa.me/8801608318553"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center text-white transition-all bg-green-500 rounded-full shadow-lg w-14 h-14 hover:bg-green-600"
            >
               
                <span className="absolute z-0 w-full h-full bg-green-400 rounded-full animate-ping opacity-70"></span>

             
                <FaWhatsapp className="z-10 text-2xl" />
            </a>
        </div>
    );
};

export default WhatsappButton;