import React from "react";
import contactImg from "../assets/images/contact.png";
import contactusImg from "../assets/images/contactus.png";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <img
            src={contactImg}
            alt="About Us"
            className="img-fluid contact-img"
          />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7 aboutus-text">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <button type="button" class="btn btn-primary">Submit</button>
          </div>
        </div>
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img
            src={contactusImg}
            alt="About Us"
            className="img-fluid aboutus-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
