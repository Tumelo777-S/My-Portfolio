import { useState } from "react";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({
      type: "success",
      text: "Your email app should open with the message ready. Please press Send to deliver it.",
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact__grid">
        <div className="contact__info">
          <div className="contact__item">
            <h4>Address</h4>
            <p>{profile?.address}</p>
          </div>
          <div className="contact__item">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${profile?.email}`}>{profile?.email}</a>
            </p>
          </div>
          <div className="contact__item">
            <h4>Call</h4>
            <p>
              <a href={`tel:${profile?.phone?.replace(/\s/g, "")}`}>{profile?.phone}</a>
            </p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </label>
          <button type="submit" className="btn">
            Open Email App
          </button>
          {status.text && (
            <p className={`contact__status contact__status--${status.type}`}>
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
