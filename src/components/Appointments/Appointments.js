import React from "react";
import "./Appointments.css";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      date: "April 2, 2023",
      time: "10:00am",
      doctor: "Dr. John Smith",
      location: "123 Main St.",
    },
    {
      id: 2,
      date: "April 5, 2023",
      time: "2:30pm",
      doctor: "Dr. Sarah Johnson",
      location: "456 Park Ave.",
    },
    {
      id: 3,
      date: "April 8, 2023",
      time: "11:15am",
      doctor: "Dr. Michael Lee",
      location: "789 Elm St.",
    },
  ];

  return (
    <div className="appointments-container">
      <h2>Appointments</h2>
      {appointments.map((appointment) => (
        <div className="appointment-card" key={appointment.id}>
          <h3>{appointment.date} at {appointment.time}</h3>
          <p><strong>Doctor:</strong> {appointment.doctor}</p>
          <p><strong>Location:</strong> {appointment.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Appointments;
