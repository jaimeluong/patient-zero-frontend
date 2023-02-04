const cardStyle = {
    width: "18rem"
};

const cardsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    marginTop: "300px",
    marginBottom: "-200px"
}

const h1Style = {
    textAlign: "center",
    marginTop: "200px",
    marginBottom: "-100px"
}

const Home = () => {
    return(
        <div className="Home">
            <h1 style={h1Style}>Welcome to Patient Zero!</h1>
            <div style={cardsStyle}>
                <div className="card" style={cardStyle}>
                    <div className="card-body">
                        <h5 className="card-title">Providers</h5>
                        <a href="http://localhost:3001/providers" className="btn btn-primary">View and make providers</a>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <div className="card-body">
                        <h5 className="card-title">Patients</h5>
                        <a href="http://localhost:3001/patients" className="btn btn-primary">View and make patients</a>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <div className="card-body">
                        <h5 className="card-title">Appointments</h5>
                        <a href="http://localhost:3001/appointments" className="btn btn-primary">View and make appointments</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
