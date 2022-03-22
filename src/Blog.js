import React from "react";
import "./Blog.css";
import Blog1 from "./img/Blog1.avif";
import Blog2 from "./img/Bolg2.png";
import Blog3 from "./img/Blog4.jpg";

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">Blog</h1>
        <p className="heading p__color">Neuesten Nachrichten</p>
        <p className="heading p__color">Von Entwickler</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Entwickler</h5>
                {/* <h4 className="project__text">
                  Getting tickets to the big show
                </h4> */}
                <a href="#Blog" className="blog project__btn btn">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Entwickler</h5>
                {/* <h4 className="project__text">
                  Getting tickets to the big show
                </h4> */}
                <a href="#Blog" className="blog project__btn btn">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Entwickler</h5>
                {/* <h4 className="project__text">
                  Getting tickets to the big show
                </h4> */}
                <a href="#Blog" className="blog project__btn btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
