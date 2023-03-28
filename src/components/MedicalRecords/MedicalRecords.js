import React from "react";
import "./MedicalRecords.css";

const MedicalRecords = () => {
  const medicalRecords = [
    {
      id: 1,
      date: "12/01/2022",
      doctor: "Dr. John Doe",
      diagnosis: "Common Cold",
      prescription: "Acetaminophen",
    },
    {
      id: 2,
      date: "01/15/2022",
      doctor: "Dr. Jane Smith",
      diagnosis: "Influenza",
      prescription: "Oseltamivir",
    },
    {
      id: 3,
      date: "02/23/2022",
      doctor: "Dr. Michael Johnson",
      diagnosis: "Migraine",
      prescription: "Sumatriptan",
    },
    {
      id: 4,
      date: "12/11/2022",
      doctor: "Dr. Pepper Pots",
      diagnosis: "Heart burn",
      prescription: "esomeprazole",
    },
    {
      id: 5,
      date: "2/01/2022",
      doctor: "Dr. Agrima Singh",
      diagnosis: "UTI",
      prescription: "Fosfomycin",
    },
    {
      id: 6,
      date: "12/11/2022",
      doctor: "Dr. Supreeth Vinay",
      diagnosis: "Acidity",
      prescription: "pantoprazole",
    },
    {
      id: 7,
      date: "01/01/2022",
      doctor: "Dr. Bhanu Vyshnav",
      diagnosis: "Arthritis",
      prescription: " etodolac",
    },
    {
      id: 8,
      date: "03/12/2022",
      doctor: "Dr. Robert Whittaker",
      diagnosis: "Dengue",
      prescription: "acetaminophen",
    },
    {
      id: 9,
      date: "04/12/2022",
      doctor: "Dr. Stephen Strange",
      diagnosis: "Malaria",
      prescription: "Atovaquone-proguanil",
    },
    {
      id: 10,
      date: "05/02/2022",
      doctor: "Dr. Robert dick",
      diagnosis: "Sea-sickness",
      prescription: "Scopolamine",
    }
  ];

  return (
    <div className="medical-records-container">
      <h1>Medical Records</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor</th>
            <th>Diagnosis</th>
            <th>Prescription</th>
          </tr>
        </thead>
        <tbody>
          {medicalRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.doctor}</td>
              <td>{record.diagnosis}</td>
              <td>{record.prescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalRecords;
