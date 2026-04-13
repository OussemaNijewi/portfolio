import { socialLinks } from "../constants";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="contact-layout">
        <div className="ml-20">
          <h2 className="mt-10">Contact Me</h2>
          <p className="mb-10">
            Please feel free to contact me and I will get back to you as soon as
            I can.
          </p>

          <form>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="3" />

            <button type="button">Send</button>
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
