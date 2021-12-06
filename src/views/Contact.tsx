import React, { useState } from "react";
import "./Contact.css";

interface Contact {
  name: String;
  email: String;
  message: String;
}

function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = function (event: any) {
    console.log(
      ` nom: ${state.name} email: ${state.email} message: ${state.message}`
    );
    event.preventDefault();
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <section id="contact" className="gray-bg padding-top-bottom">
        <div className="container bootstrap snippets bootdey">
          <div className="row">
            <form
              id="Highlighted-form"
              className="col-sm-6 col-sm-offset-3"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label className="control-label" htmlFor="contact-name">
                  Name
                </label>
                <div className="controls">
                  <input
                    id="contact-name"
                    name="contactName"
                    placeholder="Your name"
                    className="form-control requiredField Highlighted-label"
                    data-new-placeholder="Your name"
                    type="text"
                    data-error-empty="Please enter your name"
                    value={state.name}
                  />
                  <i className="fa fa-user"></i>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="contact-mail">
                  Email
                </label>
                <div className=" controls">
                  <input
                    id="contact-mail"
                    name="email"
                    placeholder="Your email"
                    className="form-control requiredField Highlighted-label"
                    data-new-placeholder="Your email"
                    type="email"
                    data-error-empty="Please enter your email"
                    data-error-invalid="Invalid email address"
                    value={state.email}
                  />
                  <i className="fa fa-envelope"></i>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="contact-message">
                  Message
                </label>
                <div className="controls">
                  <textarea
                    id="contact-message"
                    name="comments"
                    placeholder="Your message"
                    className="form-control requiredField Highlighted-label"
                    data-new-placeholder="Your message"
                    data-error-empty="Please enter your message"
                    value={state.message}
                  ></textarea>
                  <i className="fa fa-comment"></i>
                </div>
              </div>
              <p>
                <button
                  name="submit"
                  type="submit"
                  className="btn btn-info btn-block"
                  data-error-message="Error!"
                  data-sending-message="Sending..."
                  data-ok-message="Message Sent"
                >
                  <i className="fa fa-location-arrow"></i>Send Message
                </button>
              </p>
              <input
                type="hidden"
                name="submitted"
                id="submitted"
                value="true"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
