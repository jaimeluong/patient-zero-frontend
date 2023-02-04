const navbarStyle = {
    backgroundColor: "#d6ead4"
};

const Navbar = () => {
    return(
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg fixed-top" id="mainNav" style={navbarStyle}>
                <div className="container" style={navbarStyle}>
                    <a href="http://localhost:3001/" className="navbar-brand">Patient Zero</a>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="http://localhost:3001/">Home</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="http://localhost:3001/patients">Patients</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="http://localhost:3001/appointments">Appointments</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
