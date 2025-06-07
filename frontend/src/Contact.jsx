import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple console log or further send to API
    console.log("Form submitted:");
    console.log({ name, email, subject, message });

    // Optionally show a success message or reset form
    alert("Thank you for your message!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contactsec">
      <form className="contdet" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <label>
          Name:
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>

        <label>
          Message:
          <textarea
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
