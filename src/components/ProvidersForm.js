import React, { useState } from 'react';

const down = {
  marginTop: "300px"
}

let url = "http://localhost:3000/providers";

const ProvidersForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async(e) => {
        e.preventDefault();
        try {
            let res = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    position: position,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setFirstName("");
                setLastName("");
                setPosition("");
                setMessage("Provider created successfully.");
            } else {
                setMessage("An error occurred");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="ProvidersForm" style={down}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={firstName}
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              value={lastName}
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              value={position}
              placeholder="Provider position"
              onChange={(e) => setPosition(e.target.value)}
            />
    
            <button type="submit">Create provider</button>
    
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </div>
      );
}

export default ProvidersForm;
