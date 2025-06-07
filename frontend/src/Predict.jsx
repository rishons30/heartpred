import React, { useState } from "react";
import "./Predict.css";

const HeartForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "1",
    cp: "0",
    trestbps: "",
    chol: "",
    fbs: "0",
    restecg: "0",
    thalach: "",
    exang: "0",
    oldpeak: "",
    slope: "0",
    ca: "",
    thal: "1",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const features = Object.values(formData).map((v) => parseFloat(v));

    try {
      const response = await fetch("http://127.0.0.1:5000/predict/xgb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ prediction: "Error", probability: "N/A" });
    }
    setLoading(false);
  };

  return (
    <form className="heart-form" onSubmit={handleSubmit}>
      <h2>Heart Disease Prediction</h2>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          min="1"
          max="120"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="sex">Sex</label>
        <select name="sex" id="sex" value={formData.sex} onChange={handleChange} required>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cp">Chest Pain Type</label>
        <select name="cp" id="cp" value={formData.cp} onChange={handleChange} required>
          <option value="0">Typical Angina</option>
          <option value="1">Atypical Angina</option>
          <option value="2">Non-anginal Pain</option>
          <option value="3">Asymptomatic</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="trestbps">Resting Blood Pressure</label>
        <input
          type="number"
          name="trestbps"
          id="trestbps"
          min="50"
          max="250"
          value={formData.trestbps}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="chol">Serum Cholesterol</label>
        <input
          type="number"
          name="chol"
          id="chol"
          min="100"
          max="600"
          value={formData.chol}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="fbs">Fasting Blood Sugar  120 mg/dl</label>
        <select name="fbs" id="fbs" value={formData.fbs} onChange={handleChange} required>
          <option value="0">False</option>
          <option value="1">True</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="restecg">Resting ECG Results</label>
        <select name="restecg" id="restecg" value={formData.restecg} onChange={handleChange} required>
          <option value="0">Normal</option>
          <option value="1">ST-T wave abnormality</option>
          <option value="2">Left ventricular hypertrophy</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="thalach">Max Heart Rate Achieved</label>
        <input
          type="number"
          name="thalach"
          id="thalach"
          min="60"
          max="220"
          value={formData.thalach}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="exang">Exercise Induced Angina</label>
        <select name="exang" id="exang" value={formData.exang} onChange={handleChange} required>
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="oldpeak">Oldpeak (ST Depression)</label>
        <input
          type="number"
          step="0.1"
          name="oldpeak"
          id="oldpeak"
          min="0"
          max="10"
          value={formData.oldpeak}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="slope">Slope of ST Segment</label>
        <select name="slope" id="slope" value={formData.slope} onChange={handleChange} required>
          <option value="0">Upsloping</option>
          <option value="1">Flat</option>
          <option value="2">Downsloping</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="ca">Number of Major Vessels (0–3)</label>
        <input
          type="number"
          name="ca"
          id="ca"
          min="0"
          max="3"
          value={formData.ca}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="thal">Thalassemia</label>
        <select name="thal" id="thal" value={formData.thal} onChange={handleChange} required>
          <option value="0">Null</option>
          <option value="1">Normal</option>
          <option value="2">Fixed Defect</option>
          <option value="3">Reversible Defect</option>
        </select>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Predicting..." : "Predict Heart Disease"}
      </button>

      {result && (
        <div className="prediction-result">
          <h3>Result</h3>
          <p><strong>Prediction:</strong> {result.prediction}</p>
          <p><strong>Probability:</strong> {(result.probability * 100).toFixed(2)}%</p>
        </div>
      )}
    </form>
  );
};

export default HeartForm;

