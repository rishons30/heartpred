import React, { useState } from "react";
import "./Predict.css"
const HeartForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // send to backend or ML model here
  };

  return (
    <form onSubmit={handleSubmit} className="heart-form">
      {Object.keys(formData).map((key) => (
        <div key={key} className="form-group">
          <label>{key.toUpperCase()}</label>
          <input
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Predict</button>
    </form>
  );
};

export default HeartForm;
