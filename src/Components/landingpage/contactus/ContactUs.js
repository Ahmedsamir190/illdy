import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

function ContactUs() {
  const [validation, setValidation] = useState(false);

  return (
    <section className="cotact-us">
      <div className="container">
        <div className="cotact-us-content">
          <h1>Contact us</h1>
          <div className="contact">
            <div>
              <span>Address</span>
              <p>Street 221B Baker Street, London, UK</p>
              <span>Customer Support</span>
              <p>E-mail: contact@site.com Phone: (555) 555-5555</p>
              <div>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name">Your Name </label>
                <input type={"text"} placeholder="Name" id="name" />
              </div>
              <div>
                <label htmlFor="email">Your Email </label>
                <input type={"email"} placeholder="Email" id="email" />
              </div>
              <div>
                <textarea
                  name="subject"
                  cols="50"
                  rows="5"
                  placeholder="Write Message Here"
                  id="message"
                ></textarea>
              </div>
              <div className="submit-button">
                <input type={"submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
