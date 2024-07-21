import React from "react";
import MedicalRecords from "../MedicalRecords/MedicalRecords";
import HealthEdu from "../Health_Edu/Health_Edu";
import Prescriptions from "../Prescription/Prescriptions";
import HealthTrac from "../HealthTrac/HealthTrac";

export default function Dashboard() {
    return (
        <div>
            <MedicalRecords />
            <Prescriptions />
            <HealthTrac />
            <HealthEdu />
        </div>
    );
}
