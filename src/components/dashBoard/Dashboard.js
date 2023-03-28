import React from 'react'
import MedicalRecords from '../MedicalRecords/MedicalRecords'
import Health_Edu from '../Health_Edu/Health_Edu'
import Prescriptions from '../Prescription/Prescriptions'
import HealthTrac from '../HealthTrac/HealthTrac'

export default function Dashboard() {
  return (
    <div>
      <MedicalRecords />
      <Prescriptions />
      <HealthTrac />
      <Health_Edu />
    </div>
  )
}
