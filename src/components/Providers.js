import React, { useState, useEffect } from 'react';

const defaultStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "150px"
};

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
        <div className="Providers" style={defaultStyle}>
            {providers.map((provider) => {
                return (
                    <div className="provider" key={provider.id}>
                        <p className="providerName">{provider.first_name} {provider.last_name}</p>
                        <p className="providerName">Role: {provider.position}</p>
                        <br />
                    </div>
                );
            })}
        </div>
    );
}

export default Providers;
