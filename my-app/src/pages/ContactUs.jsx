// src/pages/ContactUs.jsx
import { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent]  = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(form);          // dev-only
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-wrapper">
      <h2>Contact Us</h2>

      {/* --- new blurb --- */}
      <p className="contact-blurb">
        Have an idea, suggestion, or just want to chat? We’d love to hear from
        you! Fill out the form below and we’ll get back to you as soon as we
        can.
      </p>

      {sent && <div className="alert">Thanks for reaching out! ✉️</div>}

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
