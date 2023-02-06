import { Outlet } from "react-router-dom"; // Outlet allows variable content to be inserted between the header and footer
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
