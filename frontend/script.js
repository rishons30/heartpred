document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `<div class="loading">⏳ Analyzing your data...</div>`;

  const formDataArray = [
    document.getElementById("age").value,
    document.getElementById("sex").value,
    document.getElementById("cp").value,
    document.getElementById("trestbps").value,
    document.getElementById("chol").value,
    document.getElementById("fbs").value,
    document.getElementById("restecg").value,
    document.getElementById("thalach").value,
    document.getElementById("exang").value,
    document.getElementById("oldpeak").value,
    document.getElementById("slope").value,
    document.getElementById("ca").value,
    document.getElementById("thal").value,
  ];

  const normalizedData = normalizeData(formDataArray);

  fetch("http://127.0.0.1:5000/predict/rf-rscv", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ features: normalizedData }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        outputDiv.innerHTML = `<h3>Error</h3><p>${data.error}</p>`;
      } else {
        outputDiv.innerHTML = `
          <h3>🩺 Prediction Result:</h3>
          <p><strong>Prediction:</strong> ${
            data.prediction === 1 ? "Heart Disease Detected" : "No Heart Disease"
          }</p>
          <p><strong>Probability:</strong> ${(data.probability * 100).toFixed(2)}%</p>
        `;
      }
    })
    .catch((error) => {
      outputDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });

  function normalizeData(formDataArray) {
    const normalizationRanges = {
      age: [29, 77],
      sex: [0, 1],
      cp: [0, 3],
      trestbps: [94, 200],
      chol: [126, 564],
      fbs: [0, 1],
      restecg: [0, 2],
      thalach: [71, 202],
      exang: [0, 1],
      oldpeak: [0, 6.2],
      slope: [0, 2],
      ca: [0, 3],
      thal: [1, 3],
    };

    return formDataArray.map((val, i) => {
      const key = Object.keys(normalizationRanges)[i];
      return normalize(val, normalizationRanges[key]);
    });
  }

  function normalize(value, range) {
    const epsilon = 0.000001;
    return (value - range[0]) / (range[1] - range[0] + epsilon);
  }
});

