import { useState } from "react";
import { sendContact } from "../api";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      const result = await sendContact(form);
      setStatus({ type: "success", text: result.message });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: err.message });
    } finally {
      setSending(false);
    }
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
          <button type="submit" className="btn" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
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
