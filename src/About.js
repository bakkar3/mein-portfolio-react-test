import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";

function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Über mich</h1>
            <div className="about__meta">
              <h2>Fullstack Web Entwicklung</h2>
              <p className="about__text p__color">
              <h4>DCI Digital Career Institute gGmbH, Hamburg,  12/2020 - 04/2022</h4>
                Ich mache momentan ein yares Weiterbildungs bei DCI{" "}
                <b>[Digital Career Institute]</b>, es wird
                HTML--CSS--JAVASCRIPT--REACT--Node.js und mehr... gelernt.
              </p>
              <p className="about__text p__color">
                Engagierter und zielstrebiger Junior Webentwickler, auf der
                Suche nach einer Position oder Praktikum, um meine theoretischen
                Fertigkeiten in die Praxis umzuwandeln und mich durch neue
                Erfahrungen weiterzuentwickeln.
              </p>
              <p className="about__text p__color">
                Durchführung einer einjährigen Vollzeit-Ausbildung,
                einschließlich Technologien des MERN-Stack Erarbeitung mehrerer
                kleiner und eines abschließenden großen praktischen Projekts zur
                Festigung der Programmierkenntnisse Teilnahme am
                Deutschunterricht im Rahmen des Kurses (Zertifikat der Stufe B2)
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#About">
                  <button className="about btn pointer">
                    {" "}
                    Lebenslauf herunterladen
                  </button>
                </a>
                <a href="#About">
                  <button className="about btn pointer">Ich bin da</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#About" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
