import { React, useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faPen,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import "../../IntersectionObserver.js";
import { EdipBrand } from "./edip-brand/EdipBrand.js";
import { isVisible } from "@testing-library/user-event/dist/utils/index.js";

export const Navbar = () => {
  const [isRed, setRedOutline] = useState(false);

  const [isCbRedGreen, setCbRedGreen] = useState(false);

  const [isCbYellowBlue, setCbYellowBlue] = useState(false);

  const [isCbTotal, setCbTotal] = useState(false);

  const redToggle = useRef();
  const cbRedGreenToggle = useRef();
  const cbYellowBlueToggle = useRef();
  const cbTotalToggle = useRef();

  redToggle.current = isRed;
  cbRedGreenToggle.current = isCbRedGreen;
  cbYellowBlueToggle.current = isCbYellowBlue;
  cbTotalToggle.current = isCbTotal;

  const outlineMode = () => {
    setRedOutline((current) => !current);

    let doc = document.querySelectorAll("*");
    if (redToggle.current === false) {
      doc.forEach((el) => {
        el.style.outline = "1px solid red";
      });
    } else {
      doc.forEach((el) => {
        el.style.outline = "";
      });
    }
  };

  function removeColors(input) {
    document.getElementById("ulNavID").classList.remove(input);
    document.getElementById("quickFacts").classList.remove(input);
    document.getElementById("about").classList.remove(input);
    document.getElementById("skills").classList.remove(input);
    document.getElementById("personality").classList.remove(input);
    document.getElementById("resumeOverview").classList.remove(input);
    document.getElementById("experiencesID").classList.remove(input);
    document.getElementById("contactID").classList.remove(input);
  }

  function addColors(input) {
    // document.getElementById("ulNavID").classList.add(input);
    document.getElementById("quickFacts").classList.add(input);
    document.getElementById("about").classList.add(input);
    document.getElementById("skills").classList.add(input);
    document.getElementById("personality").classList.add(input);
    document.getElementById("resumeOverview").classList.add(input);
    document.getElementById("experiencesID").classList.add(input);
    document.getElementById("contactID").classList.add(input);
  }

  const cbRedGreenMode = () => {
    setCbRedGreen((current) => !current);
    //
    if (cbRedGreenToggle.current === false) {
      addColors("colorBlindRedGreen");
      setTimeout(() => {
        // code to be executed after 2 seconds
      }, 2000);
      document.body.classList.remove("bodyDefaultBg");
      document.getElementById("root").classList.remove("bodyDefaultBg");

      document.body.classList.add("bodyRedGreen");
      document.getElementById("root").classList.add("bodyRedGreen");

      if (cbYellowBlueToggle.current === true) {
        cbYellowBlueMode();
      }

      if (cbTotalToggle.current === true) {
        cbTotalMode();
      }
    } else {
      removeColors("colorBlindRedGreen");
      document.body.classList.remove("bodyRedGreen");
      document.getElementById("root").classList.remove("bodyRedGreen");

      document.body.classList.add("bodyDefaultBg");
      document.getElementById("root").classList.add("bodyDefaultBg");
      console.log("redgren...", isCbRedGreen);
    }
  };

  const cbYellowBlueMode = () => {
    setCbYellowBlue((current) => !current);

    if (cbYellowBlueToggle.current === false) {
      addColors("colorBlindYellowBlue");

      document.body.classList.remove("bodyDefaultBg");
      document.getElementById("root").classList.remove("bodyDefaultBg");

      document.body.classList.add("bodyYellowBlue");
      document.getElementById("root").classList.add("bodyYellowBlue");

      if (cbRedGreenToggle.current === true) {
        cbRedGreenMode();
      }

      if (cbTotalToggle.current === true) {
        cbTotalMode();
      }
    } else {
      removeColors("colorBlindYellowBlue");

      document.body.classList.remove("bodyYellowBlue");
      document.getElementById("root").classList.remove("bodyYellowBlue");

      document.body.classList.add("bodyDefaultBg");
      document.getElementById("root").classList.add("bodyDefaultBg");
    }
  };

  const cbTotalMode = () => {
    setCbTotal((current) => !current);

    if (cbTotalToggle.current === false) {
      addColors("colorBlindTotal");

      document.body.classList.remove("bodyDefaultBg");
      document.getElementById("root").classList.remove("bodyDefaultBg");

      document.body.classList.add("bodyTotalGray");
      document.getElementById("root").classList.add("bodyTotalGray");

      if (cbRedGreenToggle.current === true) {
        cbRedGreenMode();
      }

      if (cbYellowBlueToggle.current === true) {
        cbYellowBlueMode();
      }
    } else {
      removeColors("colorBlindTotal");

      document.body.classList.remove("bodyTotalGray");
      document.getElementById("root").classList.remove("bodyTotalGray");

      document.body.classList.add("bodyDefaultBg");
      document.getElementById("root").classList.add("bodyDefaultBg");
    }
  };

  const clickNavToLink = () => {
    changeToggleIcon();
  };

  const [closeIcon, setCloseIcon] = useState(false);

  const changeToggleIcon = () => {
    setCloseIcon(true);
    setVisible(false);
    setIsActive(false);
  };

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
            }, 1000);
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
          <div className="col-2">
            <Link
              smooth={true}
              to={"quickFacts"}
              id="navLinkQuickFactsID"
              className="nav-link"
              onClick={clickNavToLink}
              href="#"
              tabIndex={0}>
              <EdipBrand></EdipBrand>
            </Link>
          </div>

          <div
            className="col-8 align-vertical-center flex-column collapse navbar-collapse"
            id="navbarNavDropdown">
            <div className=" linksContainer">
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
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth={true}
                    to={"experiencesID"}
                    id="navLinkExperiencesID"
                    className="nav-link"
                    href="#"
                    tabIndex={2}>
                    <h4>Work</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth={true}
                    to={"resumeOverview"}
                    id="navLinkResumeOverviewID"
                    className="nav-link"
                    href="#"
                    tabIndex={3}>
                    <h4>Resumé</h4>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    smooth={true}
                    to={"about"}
                    id="navLinkAboutID"
                    className="nav-link"
                    href="#"
                    tabIndex={4}>
                    <h4>ABOUT</h4>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    smooth={true}
                    to={"personality"}
                    id="navLinkPersonalityID"
                    className="nav-link"
                    href="#"
                    tabIndex={5}>
                    <h4 id="navLinkPersonalityH3ID">Persona</h4>
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
                    <h4>Contact</h4>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="toolsContainer">
              <div className="d-inline-block align-self">
                <h4 htmlFor="button" className="m-auto pr-1 pb-0">
                  Outliner
                </h4>
                <button
                  className={
                    isRed
                      ? "navSubIcon toolBtnActive mx-auto"
                      : "navSubIcon mx-auto"
                  }
                  onClick={outlineMode}>
                  <FontAwesomeIcon
                    className="fntAwesome"
                    icon={faPen}
                    style={{
                      color: isRed
                        ? "var(--secondaryColor-darkest)"
                        : "var(--primary-red)",
                    }}></FontAwesomeIcon>
                </button>
              </div>
              <div className="d-inline-block align-self">
                <h4 className="m-auto pr-2 pb-0">Color blindness</h4>
              </div>

              <div className="button-row">
                <div className="button-col">
                  <label className="btnLabelNav" id="labelRedGreen">
                    Red/Green
                  </label>
                  <button
                    className={
                      isCbRedGreen ? "navSubIcon toolBtnActive" : "navSubIcon"
                    }
                    onClick={cbRedGreenMode}>
                    <FontAwesomeIcon
                      className="fntAwesome"
                      icon={isCbRedGreen ? faEye : faEyeSlash}
                      style={{
                        color: isCbRedGreen
                          ? "var(--secondaryColor-darkest)"
                          : "var(--primary-red)",
                      }}></FontAwesomeIcon>
                  </button>
                </div>

                <div className="button-col">
                  <label className="btnLabelNav" id="labelYellowBlue">
                    Yellow/Blue
                  </label>

                  <button
                    className={
                      isCbYellowBlue ? "navSubIcon toolBtnActive" : "navSubIcon"
                    }
                    onClick={cbYellowBlueMode}>
                    <FontAwesomeIcon
                      className="fntAwesome"
                      icon={isCbYellowBlue ? faEye : faEyeSlash}
                      style={{
                        color: isCbYellowBlue
                          ? "var(--secondaryColor-darkest)"
                          : "var(--primary-blue)",
                      }}></FontAwesomeIcon>
                  </button>
                </div>

                <div className="button-col">
                  <label className="btnLabelNav">Grey</label>
                  <button
                    className={
                      isCbTotal ? "navSubIcon toolBtnActive" : "navSubIcon"
                    }
                    onClick={cbTotalMode}>
                    <FontAwesomeIcon
                      className="fntAwesome"
                      icon={isCbTotal ? faEye : faEyeSlash}
                      style={{
                        color: isCbTotal
                          ? "var(--secondaryColor-darkest)"
                          : "black",
                      }}></FontAwesomeIcon>
                  </button>
                </div>
              </div>
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
