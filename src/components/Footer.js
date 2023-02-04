const footerStyle = {
    backgroundColor: "#d6ead4",
    marginTop: "500px"
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
