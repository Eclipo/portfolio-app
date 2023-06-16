import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faPen,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "../../IntersectionObserver.js";
import { EdipBrand } from "./edip-brand/EdipBrand.js";

export const Navbar = () => {
  const clickNavToLink = () => {
    setIsActive(false);
    setTimeout(() => {
      setVisible(false);
    }, 2250);
  };

  const clickEdipNav = () => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const [closeIcon, setCloseIcon] = useState(false);

  const [firstTime, setfirstTime] = useState(true);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    //  toggle

    setIsActive((current) => !current);
    setCloseIcon((current) => !current);

    if (closeIcon && !isActive) {
      setIsActive(false);
      setfirstTime(true);
    }

    console.log("handle clicked!", isActive);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (isActive) {
        const screenHeight = window.innerHeight;

        if (screenHeight > 667) {
          // Only hide navbar if screen height is greater than 400px
          const scrollThreshold = screenHeight * 0.25;

          if (firstTime === false) {
            setVisible(
              prevScrollPos > currentScrollPos || currentScrollPos < 10
            );
            setPrevScrollPos(currentScrollPos);
          }

          if (firstTime === true) {
            setTimeout(() => {
              setVisible(true);
              setfirstTime(false);
            }, 2000);
          }
        } else {
          setVisible(true); // Show navbar for small screens
        }
      } else {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setfirstTime(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isActive]);

  return (
    <nav
      className={`flexCenter customNav navbar navbar-expand-lg${
        visible ? "" : " navbar-hidden"
      }`}>
      {" "}
      <div className="container">
        <div className="row">
          <div className="col-1 m-0 pb-0 customBrand">
            <Link
              smooth={true}
              to={"quickFacts"}
              id="navLinkQuickFactsID"
              className="nav-link"
              onClick={clickEdipNav}
              href="#"
              tabIndex={0}>
              <EdipBrand></EdipBrand>
            </Link>
          </div>

          <div
            className="col-9 align-vertical-center flex-column collapse navbar-collapse"
            id="navbarNavDropdown">
            <div className="my-auto linksContainer">
              <ul className="navbar-nav flexCenter" id="ulNavID">
                <li className="nav-item">
                  <Link
                    smooth={true}
                    to={"skills"}
                    id="navLinkSkillsID"
                    className="nav-link"
                    onClick={clickNavToLink}
                    href="#"
                    tabIndex={1}>
                    <h4>Skills</h4>
                    <span className="underline-animation"></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth={true}
                    to={"experiencesID"}
                    id="navLinkExperiencesID"
                    className="nav-link"
                    onClick={clickNavToLink}
                    href="#"
                    tabIndex={2}>
                    <h4>Experiences</h4>
                    <span className="underline-animation"></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth={true}
                    to={"resumeOverview"}
                    id="navLinkResumeOverviewID"
                    onClick={clickNavToLink}
                    className="nav-link"
                    href="#"
                    tabIndex={3}>
                    <h4>Résumé</h4>
                    <span className="underline-animation"></span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    smooth={true}
                    to={"about"}
                    id="navLinkAboutID"
                    className="nav-link"
                    onClick={clickNavToLink}
                    href="#"
                    tabIndex={4}>
                    <h4>ABOUT</h4>
                    <span className="underline-animation"></span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    smooth={true}
                    to={"personality"}
                    id="navLinkPersonalityID"
                    className="nav-link"
                    onClick={clickNavToLink}
                    href="#"
                    tabIndex={5}>
                    <h4 id="navLinkPersonalityH3ID">Persona</h4>
                    <span className="underline-animation"></span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    smooth={true}
                    to={"contactID"}
                    id="navLinkContactID"
                    className="nav-link"
                    onClick={clickNavToLink}
                    href="#"
                    tabIndex={6}>
                    <button className="ms-0 p-2 skillNav" id="navItemContact">
                      <h4 id="navItemContactH4">Contact</h4>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-2">
            <button
              id="navbarTogglerID"
              className="menuBtn navbar-toggler"
              type="button"
              onClick={handleClick}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <FontAwesomeIcon
                icon={closeIcon ? faClose : faBars}
                id="navIconID"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
