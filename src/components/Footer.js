const footerStyle = {
    backgroundColor: "#d6ead4"
};

const Footer = () => {
    return(
        <div className="Footer">
            <footer className="footer text-center" style={footerStyle}>
                <div style={footerStyle}>
                    <br />
                    Patient Zero is a healthcare website for medical providers to manage their patients.
                    <br />
                    <br />
                </div>
            </footer>
        </div>
    );
}

export default Footer;
