import { useRef, useState } from "react";
import { socialLinks } from "../constants";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state
    setStatus({ type: "", message: "" });

    const serviceId =
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID ||
      import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId =
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID ||
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey =
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY ||
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Please add EmailJS environment variables.",
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey,
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      setStatus({
        type: "success",
        message: "Message sent successfully. I'll get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again in a moment.",
      });
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="contact-layout">
        <div className="md:ml-20">
          <h2 className="mt-10">Contact Me</h2>
          <p className="mb-10">
            Please feel free to contact me and I will get back to you as soon as
            I can.
          </p>

          {/* ✅ CONNECT FORM */}
          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
            {status.message && (
              <p
                className={`mt-3 text-sm ${
                  status.type === "error" ? "text-red-600" : "text-green-700"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>

        <aside className="contact-info md:ml-39 mt-6">
          <h3>Location</h3>
          <p>Canada, Ontario</p>
          <p className="mb-10">in-person & remote</p>

          <h3>Hire me</h3>
          <p>+1 343 - 987 4841</p>
          <p className="mb-28">onije018@uottawa.ca</p>

          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} className="size-5" />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactSection;
