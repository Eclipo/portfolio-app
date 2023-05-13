import React from "react";
import "../../IntersectionObserver.js";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div id="contactID" className="sectionAnimation">
      <div className="container-sm">
        <h2 className="flexCenter">Contact</h2>
        <hr></hr>
        <p className="duckText mx-auto">
          I am always open to connecting with decent and honest people who enjoy
          technology.
          <br></br>
          <br></br>
          Send me an e-mail or message on LinkedIn, and I'll do my best to
          reply.
        </p>
        <div className="container-sm">
          <a
            className="emailBtn mailText"
            href="mailto:edipsarac.work@gmail.com"
            rel="noopener noreferrer"
            target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className="my-auto" />
          </a>

          <a
            className="emailBtn linkedInIcon my-auto"
            href="https://se.linkedin.com/in/edipsarac"
            rel="noopener noreferrer"
            target="_blank">
            in
          </a>
        </div>
      </div>

      <div
        className="bottom-0"
        style={{ marginTop: "1rem", marginBottom: "0rem" }}>
        <p>Designed and built by Edip Sarac</p>
        <a
          href="https://www.simpleanalytics.com/?utm_source=edipsarac.com&utm_content=badge"
          referrerPolicy="origin"
          target="_blank">
          <picture>
            <source
              srcSet="https://simpleanalyticsbadges.com/edipsarac.com?mode=dark"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="https://simpleanalyticsbadges.com/edipsarac.com?mode=dark&text=a8b2d1"
              loading="lazy"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </picture>
        </a>
      </div>
    </div>
  );
};

export default Contact;
