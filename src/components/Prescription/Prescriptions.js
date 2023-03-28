import React from "react";
import "./Prescriptions.css";

const Prescriptions = () => {
  const prescriptionsData = [
    {
      id: 1,
      date: "02/15/2022",
      medication: "Lipitor",
      dosage: "20mg",
      doctor: "Dr. Smith",
      notes: "Take once a day with food.",
    },
    {
      id: 2,
      date: "02/17/2022",
      medication: "Metformin",
      dosage: "500mg",
      doctor: "Dr. Johnson",
      notes: "Take twice a day with meals.",
    },
    {
      id: 3,
      date: "02/20/2022",
      medication: "Zoloft",
      dosage: "50mg",
      doctor: "Dr. Brown",
      notes: "Take once a day in the morning.",
    },
    {
      id: 4,
      date: "12/25/2022",
      medication: "CT PRIDE TAB",
      dosage: "1mg",
      doctor: "Dr. Jane Smith",
      notes: "Take once a day in the morning.",
    },
    {
      id: 5,
      date: "10/15/2022",
      medication: "CYTONAC ER CAP",
      dosage: "200mg",
      doctor: "Dr. Michael Johnson",
      notes: "Take three times a day in the morning.",
    },
    {
      id: 6,
      date: "11/23/2022",
      medication: "BIPRA D CAP",
      dosage: "30mg",
      doctor: "Dr. Agrima Singh",
      notes: "Take after lunch.",
    },
    {
      id: 7,
      date: "03/17/2022",
      medication: "COLIGON O TAB",
      dosage: "10mg",
      doctor: "Dr. Supreeth Vinay",
      notes: "Take twice a day in the morning.",
    },
  ];

  return (
    <div className="prescriptions-container">
      <h2>Prescriptions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Doctor</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {prescriptionsData.map((prescription) => (
            <tr key={prescription.id}>
              <td>{prescription.date}</td>
              <td>{prescription.medication}</td>
              <td>{prescription.dosage}</td>
              <td>{prescription.doctor}</td>
              <td>{prescription.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prescriptions;
