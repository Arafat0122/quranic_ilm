import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import WhatsappButton from "../Common/WhatsappButton/WhatsappButton";


const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-[#FAF9F6] pt-[64px] min-w-6xl mx-auto">
                <WhatsappButton />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;