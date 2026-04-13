import { useRef, useState } from "react";
import { socialLinks } from "../constants";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="contact-layout">
        <div className="ml-20">
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

            {/* ✅ BUTTON FIX */}
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <aside className="contact-info ml-39 mt-6">
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
