import React, { useState } from 'react';

const down = {
  marginTop: "300px"
}

let url = "http://localhost:3000/appointments";

const AppointmentsForm = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async(e) => {
        e.preventDefault();
        try {
            let res = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    start_date: startDate,
                    end_date: endDate,
                    category: category,
                    description: description,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setStartDate("");
                setEndDate("");
                setCategory("");
                setDescription("");
                setMessage("Appointment created successfully.");
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
              type="datetime-local"
              value={startDate}
              placeholder="Start time"
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="datetime-local"
              value={endDate}
              placeholder="End time"
              onChange={(e) => setEndDate(e.target.value)}
            />
            <input
              type="text"
              value={category}
              placeholder="Category (routine, follow-up, urgent)"
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
    
            <button type="submit">Make appointment</button>
    
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </div>
      );
}

export default AppointmentsForm;
