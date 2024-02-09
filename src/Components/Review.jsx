import React from "react";
import "./Review.css";
// import hammad from "./images/hammad.jpg";

export default function Review() {
  return (
    <>
      <div className="review">
        <h1>REVIEW</h1>
        <div className="carousel" data-flickity='{ "autoPlay": true }'>
          <div className="carousel-cell">
            <div className="swiper-slide">
              <div className="box">
                {/* <img src={hammad} alt="" /> */}
                <h3>Hammad Khan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  adipisci quisquam sunt nesciunt fugiat odit minus illum
                  asperiores dolorum enim sint quod ipsam distinctio molestias
                  consectetur ducimus beatae, reprehenderit exercitationem!
                </p>
                <div className="stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="swiper-slide">
              <div className="box">
                <img src={hammad} alt="" />
                <h3>Hammad Khan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  adipisci quisquam sunt nesciunt fugiat odit minus illum
                  asperiores dolorum enim sint quod ipsam distinctio molestias
                  consectetur ducimus beatae, reprehenderit exercitationem!
                </p>
                <div className="stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="swiper-slide">
              <div className="box">
                <img src={hammad} alt="" />
                <h3>Hammad Khan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  adipisci quisquam sunt nesciunt fugiat odit minus illum
                  asperiores dolorum enim sint quod ipsam distinctio molestias
                  consectetur ducimus beatae, reprehenderit exercitationem!
                </p>
                <div className="stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="swiper-slide">
              <div className="box">
                <img src={hammad} alt="" />
                <h3>Hammad Khan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  adipisci quisquam sunt nesciunt fugiat odit minus illum
                  asperiores dolorum enim sint quod ipsam distinctio molestias
                  consectetur ducimus beatae, reprehenderit exercitationem!
                </p>
                <div className="stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="swiper-slide">
              <div className="box">
                <img src={hammad} alt="" />
                <h3>Hammad Khan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  adipisci quisquam sunt nesciunt fugiat odit minus illum
                  asperiores dolorum enim sint quod ipsam distinctio molestias
                  consectetur ducimus beatae, reprehenderit exercitationem!
                </p>
                <div className="stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
