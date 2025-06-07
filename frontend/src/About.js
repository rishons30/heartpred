import React from "react";
import "./About.css"; // Optional for custom styles

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          At <strong>HeartCare</strong>, our mission is to empower individuals
          to take control of their cardiovascular health. We provide an
          AI-powered heart disease prediction tool backed by data analysis,
          medical research, and a user-friendly interface. Our platform enables
          users to get early insights into their heart health, potentially
          reducing life-threatening risks with timely awareness.
        </p>
      </div>

      <div className="features-content">
        <h3>Key Features</h3>
        <div className="features-grid">
          <div className="feature-box">
            <h4>💡 AI-Powered Prediction</h4>
            <p>
              Uses machine learning to assess your heart disease risk based on
              medical input.
            </p>
          </div>
          <div className="feature-box">
            <h4>📊 Data Visualization</h4>
            <p>
              Interactive charts and graphs to help understand heart disease
              trends and risk factors.
            </p>
          </div>
          <div className="feature-box">
            <h4>🔐 Privacy First</h4>
            <p>We ensure all user data is confidential and handled securely.</p>
          </div>
          <div className="feature-box">
            <h4>⚙️ Easy to Use</h4>
            <p>Clean and intuitive interface designed for all age groups.</p>
          </div>
          <div className="feature-box">
            <h4>📱 Mobile Friendly</h4>
            <p>Fully responsive design that works smoothly on any device.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
