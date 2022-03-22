import React from "react";
import "./Contact.css";
import contactImg from "./img/about-9.jpg";
// import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

function Contact() {

    // const navigate = useNavigate();

    const sendEmail = (e) => {
      e.preventDefault();
    //   navigate("Home");
  
      emailjs
        .sendForm(
          "service_h61osmj",
          "template_lmz9sja",
          e.target,
          "user_RHA9wYucWpNkkR8eTG8Ky"
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    };
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Ccontact.</h1>
              <p className="hire__text white">
                Kontaktieren Sie mich telefonisch:
              </p>
              <p className="hire__text white">
                <strong>+49 543 876 110 33</strong> oder email{" "}
                <strong>amarbakar33@gmai.com</strong>
              </p>
            </div>
            <form  onSubmit={sendEmail}   className="input__box">
              <input
                type="text"
                name="name" 
                className="contact name"
                placeholder="Dein Name *"
              />
              <input
                type="email"
                name="user_email"
                className="contact email"
                placeholder="Dein Email *"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Schreib ein Betreff "
              />
              <textarea
                name="message"
                id="message"
                placeholder="Schreibe deine Nachricht "
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
