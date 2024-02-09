import React from "react";
import "../App.css";
// import israr from "./images/bg-2.jpg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="card bg-dark text-white border-0">
          {/* <img src={israr} className="card-img" height="100vh" alt="..." /> */}
          <div className="card-img-overlay">
            <p className="card-text">
              <span>
                BIG BACHAT DAY <br />
              </span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              veniam sed saepe consequatur. Recusandae odio ad aspernatur aut
              et? Nisi odio ab voluptate ipsa consequatur ullam accusamus
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
