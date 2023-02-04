import React, { useState, useEffect } from 'react';

const defaultStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "150px"
};

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
        <div className="Patients" style={defaultStyle}>
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
        </div>
    );
}

export default Patients;
