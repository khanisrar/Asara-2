import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quas magni pariatur est accusantium voluptas enim nemo facilis sit
              debitis.
            </p>
          </div>
          <div className="box">
            <h3>Branch Locations</h3>
            <a href="#">India</a>
            <a href="#">USA</a>
            <a href="#">Japan</a>
            <a href="#">France</a>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com/profile.php?id=100035118105632">
              Facebook
            </a>
            <a href="http://www.instagram.com/israrkhan911">Instagram</a>
            <a href="http://www.Twitter.com/@ISRARKH55535054">Twitter</a>
            <a href="https://github.com/khanisrar">GitHub</a>
          </div>
        </div>
        <div className="portfolio">
          <h3>My Portfolio Website</h3>
          <a href="https://vigilant-hamilton-dbcaf6.netlify.app">Live</a>
        </div>
        <h1 className="credit">
          {" "}
          Created By <span> Mr. Israr Khan </span> | All Rights Reserved!{" "}
        </h1>
      </section>
    </>
  );
}
