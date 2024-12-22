import React, { useState } from "react";
import "./BMICalculator.css";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);

      // Determine the health status
      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      }
    } else {
      alert("Please enter valid weight and height.");
    }
  };

  const resetFields = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setMessage("");
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
      </div>
      <div className="input-container">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      <button onClick={resetFields} className="reset-button">
        Reset
      </button>

      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>Status: {message}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
