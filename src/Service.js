import React from "react";
import "./Service.css";
// import webdev from "./img/browser-web-development.svg";
import { MdOutlineDeveloperMode } from 'react-icons/md';
function Service() {
  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <h1 className="heading">Mein Service</h1>
        <p className="heading p__color">was ich für dich tun kann</p>
      </div>

      <div className="container">
        <div className="row">
        <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
             < MdOutlineDeveloperMode />
              </div>
              <div className="service__meta">
                <h1 className="service__text">WEB ENTWICKLUNG</h1>

                <p className="p service__text p__color">
                  Dabei entwickeln wir sowohl Frontend[web app, mobile-app]- als
                  auch Backend-Lösungen[Data base, file Server].
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">WEB DESIGN</h1>

                <p className="p service__text p__color">
                GUTES DESIGN IST GUTES GESCHÄFT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
