import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <img className="contact__background" src="./night.jpeg" alt="" />
      <div className="contact">
        <h1>Contact Me </h1>

        <div id="contact-container">
          <div className="contact-information">
            <h4>Contact Information</h4>
            <p>This form is for design purposes only!</p>
            <div className="icon-text">
              <i class="fa fas fa-phone"></i>
              <span>716-316-2848</span>
            </div>
            <div className="icon-text">
              <i class="fa far fa-envelope"></i>
              <span>robgrac94@gmail.com</span>
            </div>
            <div className="icon-text">
              <i class="fa fas fa-map-pin"></i>
              <span>Sarasota, Florida</span>
            </div>
            <div className="social-media">
              <a href="#" className="icon-circle">
                <i class="fa fab fa-github"></i>
              </a>
              <a href="#" className="icon-circle">
                <i class="fa fab fa-linkedin"></i>
              </a>
              <a href="#" className="icon-circle">
                <i class="fa fab fa-instagram"></i>
              </a>
              <a href="#" className="icon-circle">
                <i class="fa fab fa-facebook-square"></i>
              </a>
            </div>
          </div>
          <form>
            <div className="col">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>E-Mail</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Phone #</label>
                <input type="tel" />
              </div>
            </div>
            <div className="col">
              <div className="form-group solo">
                <label>What can I help you with?</label>
                <div id="radio-buttons">
                  <div className="radio-button">
                    <input
                      type="radio"
                      id="radiopersonal"
                      name="type"
                      value="personal"
                    />
                    <label for="radiopersonal">Web Design</label>
                  </div>
                  <div className="radio-button">
                    <input
                      type="radio"
                      id="radioecommerce"
                      name="type"
                      value="ecommerce"
                    />
                    <label for="radioecommerce">Web Development</label>
                  </div>
                  <div className="radio-button">
                    <input
                      type="radio"
                      id="radiolandingpage"
                      name="type"
                      value="landingpage"
                    />
                    <label for="radiolandingpage">Other</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="form-group solo">
                <label>Message</label>
                <textarea></textarea>
              </div>
            </div>
            <div className="col">
              <div className="form-group solo right">
                <button className="primary">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
