import React, { useState, useEffect } from 'react';

const center = {
    textAlign: "center"
}

const top = {
    marginTop: "150px",
    marginBottom: "-300px"
}

let url = "http://localhost:3000/providers";

const Providers = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProviders(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return(
        <div className="Providers" style={top}>
            <h1 style={center}>View providers</h1>
            <br />
            {providers.map((provider) => {
                return (
                    <div className="provider" key={provider.id}>
                        <p className="providerName" style={center}>{provider.first_name} {provider.last_name}</p>
                        <p className="providerName" style={center}>Role: {provider.position}</p>
                        <br />
                    </div>
                );
            })}
        </div>
    );
}

export default Providers;
