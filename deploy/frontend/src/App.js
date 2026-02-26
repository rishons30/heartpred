import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Stat from "./Stats";
import About from "./About";
import Contact from "./Contact";
import HeartForm from "./Predict";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section
                className="company-brief"
                style={{
                  padding: "80px 20px",
                  textAlign: "center",
                  paddingTop: "120px",
                  backgroundColor: "#333333",
                  color: "#ffffff",
                }}
              >
                <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                  Empowering Early Detection of Heart Disease
                </h1>
                <p
                  style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    fontSize: "1.2rem",
                    lineHeight: "1.6",
                  }}
                >
                  At <strong>HeartCare</strong>, we aim to revolutionize heart
                  health awareness and diagnosis using AI-powered prediction
                  tools. Our goal is to provide accessible, early screening for
                  individuals, helping to prevent complications before they
                  arise.
                </p>
              </section>
              <About />
              <section id="stats">
                <Stat />
              </section>
            </>
          }
        />
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/predict" element={<HeartForm />} />
      </Routes>
    </Router>
  );
}

export default App;
