import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Layout = () => {
    return(
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
