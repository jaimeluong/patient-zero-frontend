import React, { useState, useEffect } from 'react';

const center = {
    textAlign: "center"
}

const top = {
    marginTop: "150px",
    marginBottom: "-300px"
}

let url = "http://localhost:3000/appointments";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAppointments(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return(
        <div className="Appointments" style={top}>
            <h1 style={center}>View appointments</h1>
            <br />
            {appointments.map((appointment) => {
                return (
                    <div className="appointments" key={appointments.id}>
                        <p className="dates"><strong>Time: </strong>{appointment.start_date} to {appointment.start_date}</p>
                        <p className="category"><strong>Category: </strong>{appointment.category}</p>
                        <p className="description"><strong>Description: </strong>{appointment.description}</p>
                        <br />
                    </div>
                );
            })}
        </div>
    );
}

export default Appointments;
