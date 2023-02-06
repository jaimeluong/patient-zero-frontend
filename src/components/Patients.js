import React, { useState, useEffect } from 'react';

const center = {
    textAlign: "center"
}

const top = {
    marginTop: "150px",
    marginBottom: "-300px"
}

let url = "http://localhost:3000/patients";

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPatients(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return(
        <div className="Patients" style={top}>
            <h1 style={center}>View patients</h1>
            <br />
            {patients.map((patient) => {
                return (
                    <div className="patient" key={patient.id}>
                        <p className="patientName"><strong>{patient.first_name} {patient.last_name}</strong></p>
                        <p className="patientInfo">Age: {patient.age}, Sex: {patient.sex}</p>
                        <p className="medicalNotes">Medical notes: {patient.medical_notes}</p>
                        <br />
                    </div>
                );
            })}
            <a href="http://localhost:3001/patients/new">New patient</a>
        </div>
    );
}

export default Patients;
