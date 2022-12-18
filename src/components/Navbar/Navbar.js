import { React, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faPen,
  faEye,
  faEyeSlash,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import "../../IntersectionObserver.js";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

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
    document.getElementById("introSectionID").classList.remove(input);
    document.getElementById("quickFacts").classList.remove(input);
    document.getElementById("aboutMe").classList.remove(input);
    document.getElementById("skills").classList.remove(input);
    document.getElementById("personality").classList.remove(input);
    document.getElementById("resumeOverview").classList.remove(input);
    document.getElementById("experiencesID").classList.remove(input);
    document.getElementById("portfolioID").classList.remove(input);
    document.getElementById("contactID").classList.remove(input);
  }

  function addColors(input) {
    document.getElementById("ulNavID").classList.add(input);
    document.getElementById("introSectionID").classList.add(input);
    document.getElementById("quickFacts").classList.add(input);
    document.getElementById("aboutMe").classList.add(input);
    document.getElementById("skills").classList.add(input);
    document.getElementById("personality").classList.add(input);
    document.getElementById("resumeOverview").classList.add(input);
    document.getElementById("experiencesID").classList.add(input);
    document.getElementById("portfolioID").classList.add(input);
    document.getElementById("contactID").classList.add(input);
  }

  const cbRedGreenMode = () => {
    setCbRedGreen((current) => !current);
    setIsActive((current) => true);
    if (cbRedGreenToggle.current === false) {
      addColors("colorBlindRedGreen");

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
      document.body.classList.remove("bodyRedgreen");
      document.getElementById("root").classList.remove("bodyRedgreen");

      document.body.classList.add("bodyDefaultBg");
      document.getElementById("root").classList.add("bodyDefaultBg");
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

  const handleClick = () => {
    //  toggle
    setIsActive((current) => !current);
  };

  return (
    <div className="containerNavbar " id="navContainerID">
      <nav id="customNav" className="navbar">
        <div className="container-fluid m-0 p-0" id="fullNavbarID">
          <button
            id="navbarTogglerID"
            className="menuBtn"
            type="button"
            onClick={handleClick}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <FontAwesomeIcon
              icon={isActive ? faClose : faBars}
              id="navIconID"
            />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav"
              id="ulNavID"
              style={{ marginLeft: "1rem" }}>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne">
                      <h3 className="navLinkH3 m-0">Design tools</h3>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p className="navP m-0 p-0">
                        These design tools have helpt me in building websites.{" "}
                        <br></br>Try them out for an enhanced experience and
                        understand my take on web design.
                      </p>

                      <hr className="navDivider"></hr>

                      <div className="navBtnMenu container-sm table-sm m-0">
                        <div className="row m-auto">
                          <div className="row m-auto">
                            <div className="col">
                              <button
                                className="navSubIcon m-auto"
                                onClick={outlineMode}
                                style={{
                                  backgroundColor: isRed
                                    ? "var(--lightest-slate)"
                                    : "transparent",
                                }}>
                                <FontAwesomeIcon
                                  className="fntAwesome"
                                  icon={faPen}
                                  style={{
                                    color: isRed
                                      ? "var(--darkest-navy)"
                                      : "var(--dark-slate)",
                                  }}></FontAwesomeIcon>
                                <p className="row navP text-center">
                                  Red outliner
                                </p>
                              </button>
                            </div>
                          </div>
                          <div className="row m-auto">
                            <p className="navP">
                              This tool shows the borders of each HTML element
                              and is great for positioning buttons, fields, and
                              tables. You will see more than meets the eye.
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr className="navDivider"></hr>
                      <div className="navBtnMenu container-sm m-0">
                        <div className="row mx-auto">
                          <div className="col">
                            <button
                              className="navSubIcon mx-auto"
                              style={{
                                borderRadius: "18px",
                                borderColor: "var(--slate)",
                                backgroundColor: isCbRedGreen
                                  ? "var(--lightest-slate)"
                                  : "transparent",
                              }}
                              onClick={cbRedGreenMode}>
                              <FontAwesomeIcon
                                className="fntAwesome"
                                icon={isCbRedGreen ? faEye : faEyeSlash}
                                style={{
                                  color: isCbRedGreen
                                    ? "var(--darkest-navy)"
                                    : "var(--dark-slate)",
                                }}></FontAwesomeIcon>
                              <p className="row navP text-center">
                                Red & Green<br></br>
                                (Protanopia)
                              </p>
                            </button>
                          </div>

                          <div className="col">
                            <button
                              className="navSubIcon mx-auto"
                              style={{
                                borderRadius: "18px",
                                borderColor: "var(--slate)",
                                backgroundColor: isCbYellowBlue
                                  ? "var(--lightest-slate)"
                                  : "transparent",
                              }}
                              onClick={cbYellowBlueMode}>
                              <FontAwesomeIcon
                                className="fntAwesome"
                                icon={isCbYellowBlue ? faEye : faEyeSlash}
                                style={{
                                  color: isCbYellowBlue
                                    ? "var(--darkest-navy)"
                                    : "var(--dark-slate)",
                                }}></FontAwesomeIcon>
                              <p className="row navP text-center">
                                Yellow & Blue<br></br>
                                (Tritanopia)
                              </p>
                            </button>
                          </div>

                          <div className="col">
                            <button
                              className="navSubIcon mx-auto"
                              style={{
                                borderRadius: "18px",
                                borderColor: "var(--slate)",
                                backgroundColor: isCbTotal
                                  ? "var(--lightest-slate)"
                                  : "transparent",
                              }}
                              onClick={cbTotalMode}>
                              <FontAwesomeIcon
                                className="fntAwesome"
                                icon={isCbTotal ? faEye : faEyeSlash}
                                style={{
                                  color: isCbTotal
                                    ? "var(--darkest-navy)"
                                    : "var(--dark-slate)",
                                }}></FontAwesomeIcon>
                              <p className="row navP text-center">
                                Shades of grey <br></br>
                                (Achromatopsia)
                              </p>
                            </button>
                          </div>
                        </div>

                        <div className="row m-auto">
                          <p className="navP my-auto">
                            These modes simulate how people with color blindness
                            see the web. Besides getting useful insights, it
                            also helps me with adjusting the colors.
                            <br></br>
                            <br></br>
                            Unfortunately, filter-effect is not supported on the iPhone's browser Safari.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <li className="nav-item active" style={{ marginTop: "-0.25rem" }}>
                <Link
                  smooth={true}
                  to={"introSectionID"}
                  id="navLinkHomeID"
                  className="nav-link"
                  href="#"
                  tabIndex={0}>
                  <h3 id="navLinkHomeH3ID" className="navLinkH3">
                    HOME
                  </h3>
                  <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  smooth={true}
                  to={"quickFacts"}
                  id="navLinkQuickFactsID"
                  className="nav-link"
                  href="#"
                  tabIndex={1}>
                  <h3 className="navLinkH3">Quick Facts</h3>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  smooth={true}
                  to={"testimonials"}
                  id="navLinkAboutID"
                  className="nav-link"
                  href="#"
                  tabIndex={2}>
                  <h3 className="navLinkH3">About</h3>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  smooth={true}
                  to={"skills"}
                  id="navLinkSkillsID"
                  className="nav-link"
                  href="#"
                  tabIndex={3}>
                  <h3 className="navLinkH3">Skills</h3>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  smooth={true}
                  to={"experiencesID"}
                  id="navLinkExperiencesID"
                  className="nav-link"
                  href="#"
                  tabIndex={6}>
                  <h3 className="navLinkH3">Major experiences</h3>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  smooth={true}
                  to={"resumeOverview"}
                  id="navLinkResumeOverviewID"
                  className="nav-link"
                  href="#"
                  tabIndex={5}>
                  <h3 className="navLinkH3">Resumé Overview</h3>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  smooth={true}
                  to={"personality"}
                  id="navLinkPersonalityID"
                  className="nav-link"
                  href="#"
                  tabIndex={4}>
                  <h3 id="navLinkPersonalityH3ID" className="navLinkH3">
                    Personality
                  </h3>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  smooth={true}
                  to={"portfolioID"}
                  id="navLinkPortfolioID"
                  className="nav-link"
                  href="#"
                  tabIndex={7}>
                  <h3 className="navLinkH3">The story</h3>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  smooth={true}
                  to={"contactID"}
                  id="navLinkContactID"
                  className="nav-link"
                  href="#"
                  tabIndex={8}>
                  <h3 className="navLinkH3">Contact</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
