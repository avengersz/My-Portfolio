import React from "react";
import contact from "../../../images/contact.svg";
import "./Contacts.css";
// import "animate.css";
const Contacts = () => {
  return (
    <div style={{ marginTop: "7rem" }}>
      <h1 className="h1">Contact With Me</h1>
      <div className="row container mt-5 align-items-center">
        <div className="col-md-6 animate__fadeInLeft">
          <img src={contact} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 form-container animate__animated animate__bounce">
          <form
           action="https://formsubmit.co/enamul.hossain25@gmail.com"
            method="POST"
          >
            <input
              placeholder="enter your name"
              type="text"
              name="name"
              required
            />
            <input
              placeholder="enter your email"
              type="email"
              name="email"
              required
            />
            <input
              type="hidden"
              name="_next"
              
              value="https://my-portfolio-4e247.web.app/submit/success"
            />
            <textarea
              name="message"
              id="message"
              cols="10"
              rows="8"
              placeholder="enter your message"
              required
            ></textarea>
            <button type="submit" className="download_btn ms-2">
              Send 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

