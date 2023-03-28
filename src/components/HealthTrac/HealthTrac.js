import React, { useState } from "react";
import "./HealthTrac.css";

const HealthTrac = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateBmi = () => {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    setBmi(bmi);
  };

  return (
    <div className="health-tracking-container">
      <h2>Health Tracking</h2>
      <div className="input-container">
        <label htmlFor="weight">Weight (in kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="height">Height (in cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      {bmi && (
        <div className="bmi-result">
          <h3>Your BMI is {bmi}</h3>
          <p>Underweight: &lt; 18.5</p>
          <p>Normal weight: 18.5 - 24.9</p>
          <p>Overweight: 25 - 29.9</p>
          <p>Obese: &gt;= 30</p>
        </div>
      )}
    </div>
  );
};

export default HealthTrac;