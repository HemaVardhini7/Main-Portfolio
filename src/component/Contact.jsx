import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../Styles/style.css";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "h901091@gmail.com",
    href: "mailto:h901091@gmail.com",
    Icon: Mail,
    color: "#2DD4BF",
  },
  {
    label: "LinkedIn",
    value: "in/hema",
    href: "https://www.linkedin.com/in/hema-vardhini-670518383/",
    Icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    label: "GitHub",
    value: "github.com/hema",
    href: "https://github.com/HemaVardhini7",
    Icon: FaGithub,
    color: "#E9EBF2",
  },
  {
    label: "Instagram",
    value: "@hema",
    href: "https://www.instagram.com/silent.coder.dev/",
    Icon: FaInstagram,
    color: "#E1306C",
  },
];


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // TODO: wire this up to an email service (e.g. EmailJS, Formspree)
  //   // once you're ready to actually receive messages.
  //   console.log("Contact form submitted:", form);
  //   setSent(true);
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_uhnf3oc",
      "template_luoc554",
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "6bDEUIarDN4Jd5s8g"
    );

    setSent(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSent(false), 3000);
  } catch (error) {
    console.error("Email failed:", error);
    alert("Failed to send message. Please try again.");
  }
};


  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="about-header contact-header">
          <h2 className="about-title">
            Contact Me
            <span className="title-underline" />
          </h2>
          {/* <p className="contact-subtext">
            Ready to start your next project? Let's connect and make
            something amazing.
          </p> */}
        </div>

        <div className="contact-grid">
          {/* LEFT CARD */}
          <div className="info-card contact-info-card">
            <h3 className="contact-card-title">Get in Touch</h3>

            <div className="contact-detail-list">
              {CONTACT_LINKS.map(({ label, value, href, Icon, color }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" className="contact-detail" key={label}>
                  <span className="contact-detail-icon" style={{ color }}>
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="contact-detail-label">{label}</p>
                    <p className="contact-detail-value">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT CARD — FORM DIRECTLY */}
          <div className="info-card contact-form-card">
            <h3 className="contact-card-title">Send a Message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary contact-submit">
                <Send size={16} />
                {sent ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


