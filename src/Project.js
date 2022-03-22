import React from "react";
import "./Project.css";
import Project1 from "./img/online-plants.png";
import Project2 from "./img/speiserkart.png";
import Project3 from "./img/todo.png";
import Project4 from "./img/portflio9.png";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Meine neuen Projekte</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project1}
                    alt="online plants"
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Online Plants</h5>
                <h4 className="project__text">
                  Gründung einer Online_Shop für Pflanzen
                </h4>
                <a
                  href="https://frontend-online-shop.netlify.app/"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Speisekarte-App</h5>
                <h4 className="project__text">
                    Speisekarten für Restaurants.
                </h4>
                <a
                  href="https://speiserkarte-react-ammar.netlify.app/"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">To-Do-Liste App</h5>
                <h4 className="project__text">
                 Anwendung zur Auflistung von To Do's
                </h4>
                <a href="https://react-todolist-ammar.netlify.app/" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Portfolio</h5>
                <h4 className="project__text">Portfolio mit Html  React && Css</h4>
                <a
                  href="https://ammarbakkar.netlify.app/"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Project;
