// Contact.js
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <h2>📞 Contact Me</h2>

          <form
            className="contact-form"
            action="https://formsubmit.co/kshirsagarrushikesh545@gmail.com"
            method="POST"
          >
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Type your message"
                required
              ></textarea>
            </div>

            {/* Hidden Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="/ThankYou"
            />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for contacting me! I’ll get back to you shortly."
            />

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer>
        &copy; 2025 mayuri Shinde. All rights reserved.
      </footer>
    </>
  );
}

export default Contact;
