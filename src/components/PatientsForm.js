import React, { useState } from 'react';

const down = {
  marginTop: "300px"
}

let url = "http://localhost:3000/patients";

const PatientsForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [medicalNotes, setMedicalNotes] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async(e) => {
        e.preventDefault();
        try {
            let res = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    age: age,
                    sex: sex,
                    medical_notes: medicalNotes,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setFirstName("");
                setLastName("");
                setAge("");
                setSex("");
                setMedicalNotes("");
                setMessage("Patient created successfully.");
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
              type="number"
              value={age}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="text"
              value={sex}
              placeholder="Sex"
              onChange={(e) => setSex(e.target.value)}
            />
            <input
              type="text"
              value={medicalNotes}
              placeholder="Medical notes"
              onChange={(e) => setMedicalNotes(e.target.value)}
            />
    
            <button type="submit">Create patient</button>
    
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </div>
      );
}

export default PatientsForm;
