import React, { Component } from "react";
import "../Portfolio/portfolio.css";
import "../../IntersectionObserver.js";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { leftNavigate, rightNavigate } from "./portfolioFunctions.js";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.leftNav = this.leftNav.bind(this);
    this.rightNav = this.rightNav.bind(this);

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.state = {
      touchStart: null,
      touchEnd: null,
      minSwipeDistance: 50,
    };
  }

  onTouchStart(event) {
    this.setState({ touchEnd: null }); // otherwise the swipe is fired even with usual touch events
    this.setState({ touchStart: event.targetTouches[0].clientX }); // otherwise the swipe is fired even with usual touch events
  }

  onTouchMove(event) {
    this.setState({ touchEnd: event.targetTouches[0].clientX });
  }

  onTouchEnd(event) {
    if (!this.state.touchStart || !this.state.touchEnd) return;
    const distance = this.state.touchStart - this.state.touchEnd;
    const isLeftSwipe = distance > this.state.minSwipeDistance;
    const isRightSwipe = distance < -this.state.minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      isLeftSwipe ? rightNavigate() : leftNavigate();
  }

  leftNav(event) {
    leftNavigate();
  }

  rightNav(event) {
    rightNavigate();
  }

  render() {
    return (
      <div id="portfolioID" className="sectionAnimation">
        <div
          className="sectionLine"
          style={{ backgroundColor: "var(--primary-pink)" }}></div>
        <h1 style={{ color: "var(--primary-pink" }}>The story</h1>

        <div className="flexCenter" id="portfolioContainerID">
          <div className="flexCenter portfolioTextContainer">
            {/* <h2>This is it</h2> */}
            <p className="duckText mx-auto">
              This is my résumé website to let friends, colleagues, and others
              alike know more about me.<br></br>
              <br></br> My major goal with the website was to improve my
              front-end and design skills, but also making it mobile responsive
              (down to 320 px wide).
              <br></br>
              <br></br>
              The technologies applied on this site are React, Bootstrap,
              AnimeJS, CSS, and JavaScript.
              <br></br>
              <br></br>
              You can click on the arrows to read the story of my journey
              regarding this website.
              <br></br>
              <br></br>
              How it all started once upon a time.
            </p>

            {/* <h3>The story</h3> */}

            <div className="container flexCenter portfolioNavBtn">
              <div className="row">
                <div className="col">
                  <button
                    className="btnContainer mt-2"
                    id="leftBtnID"
                    onClick={this.leftNav}>
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="leftBtn"></FontAwesomeIcon>
                  </button>
                </div>

                <div className="col">
                  <button
                    className="btnContainer mt-2"
                    id="rightBtnID"
                    onClick={this.rightNav}>
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="rightBtn"></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
            <div
              id="story_0"
              className="container animContainer"
              onTouchStart={this.onTouchStart}
              onTouchMove={this.onTouchMove}
              onTouchEnd={this.onTouchEnd}>
              <h4 className="mb-5">Covid-19, march 2020</h4>

              <div className="row mx-auto">
                <div className="avatarCircle">
                  <div className="eyesContainer">
                    <div className="eyeBrows"></div>
                    <div className="eyeBrows" id="eyebrowRightID"></div>
                    <div className="eyeAvatar" id="edipEyesID">
                      <div className="eyePupil" id="edipEyePupilID"></div>
                    </div>

                    <div className="eyeAvatar" id="edipEyesID">
                      <div className="eyePupil" id="edipEyePupilID"></div>
                    </div>
                  </div>

                  <div className="avatarNose" id="avatarEdipID"></div>
                  <div className="avatarMouth" id="avatarEdipMouthID"></div>
                </div>
                <p className="avatarEdipParagraph">Edip</p>

                <div className="talkBubble" id="talkCovidID">
                  <p id="talkCovidParagraphID">...</p>
                </div>

                <div className="avatarCircle" id="avatarDad">
                  <div className="eyesContainer">
                    <div className="eyeBrows"></div>
                    <div className="eyeBrows" id="eyebrowRightID"></div>
                    <div className="eyeAvatar" id="bawoEyesID">
                      <div className="eyePupil" id="bawoEyePupilID"></div>
                    </div>

                    <div className="eyeAvatar" id="bawoEyesID">
                      <div className="eyePupil" id="bawoEyePupilID"></div>
                    </div>
                  </div>

                  <div className="avatarNose"></div>
                  <div className="avatarMouth" id="avatarDadMouthID"></div>
                </div>

                <p className="avatarDadParagraph">Dad</p>

                <div className="avatarCircle" id="avatarMom">
                  <div className="eyesContainer">
                    <div className="eyeBrows"></div>
                    <div className="eyeBrows" id="eyebrowRightID"></div>
                    <div className="eyeAvatar" id="momEyesID">
                      <div className="eyePupil"></div>
                    </div>

                    <div className="eyeAvatar" id="momEyesID">
                      <div className="eyePupil"></div>
                    </div>
                  </div>

                  <div className="avatarNose"></div>
                  <div className="avatarMouth" id="avatarMomMouthID"></div>
                </div>
                <p className="avatarMomParagraph">Mom</p>
              </div>

              <p className="portfolioParagraph">
                My dad ended up at the hospital.<br></br>
                My mom just got infected.<br></br>
                <br></br>
                Nobody knew what was going on.
              </p>
            </div>

            <div
              id="story_1"
              onTouchStart={this.onTouchStart}
              onTouchMove={this.onTouchMove}
              onTouchEnd={this.onTouchEnd}
              className="container animContainer">
              <h4>Coronahero</h4>

              <div className="row flexCenter m-auto">
                <div className="lightYear" id="firstLight"></div>
                <div className="lightYear" id="firstLight"></div>

                <div className="avatarCircle" id="heroEdipID">
                  <div className="eyesContainer">
                    <div className="eyeBrows"></div>
                    <div className="eyeBrows" id="eyebrowRightID"></div>
                    <div className="eyeAvatar" id="heroEdipEyesID">
                      <div className="eyePupil"></div>
                    </div>

                    <div className="eyeAvatar" id="heroEdipEyesID">
                      <div className="eyePupil"></div>
                    </div>
                  </div>

                  <div className="avatarNose" id="avatarEdipID"></div>
                  <div className="avatarHeroMouth" id="heroEdipID"></div>

                  <div className="rightArmAvatar"></div>

                  <div className="leftArmAvatar"></div>

                  <div className="rightLegAvatar"></div>

                  <div className="leftLegAvatar"></div>
                  <div
                    className="lightYear"
                    id="secondLight"
                    style={{
                      marginTop: "-3.5rem",
                      marginLeft: "-3rem",
                      zIndex: "2",
                      position: "absolute",
                    }}></div>
                  <div
                    className="lightYear"
                    id="firstLight"
                    style={{
                      marginTop: "-3.5rem",
                      marginLeft: "-2rem",
                      marginRight: "2rem",
                      zIndex: "2",
                      position: "absolute",
                    }}></div>

                  <div
                    className="lightYear"
                    id="secondLight"
                    style={{
                      marginTop: "-3.75rem",
                      zIndex: "2",
                      position: "absolute",
                    }}></div>
                  <div
                    className="lightYear"
                    id="firstLight"
                    style={{
                      marginTop: "-3.75rem",
                      marginLeft: "1rem",
                      zIndex: "2",
                      position: "absolute",
                    }}></div>
                  <div
                    className="lightYear"
                    id="secondLight"
                    style={{
                      marginTop: "-4rem",
                      marginLeft: "2rem",
                      zIndex: "2",
                      position: "absolute",
                    }}></div>

                  <div
                    className="lightYear"
                    id="firstLight"
                    style={{
                      marginTop: "-4rem",
                      marginLeft: "3rem",
                      zIndex: "2",
                      position: "absolute",
                    }}></div>
                  <div
                    className="lightYear"
                    id="secondLight"
                    style={{
                      marginTop: "-3.5rem",
                      marginLeft: "4rem",
                      zIndex: "2",
                      position: "absolute",
                    }}></div>
                </div>
                <div className="lightYear" id="secondLight"></div>
                <div className="lightYear" id="firstLight"></div>

                <div className="d-inline-flex">
                  <p className="portfolioParagraph">
                    I had to do something for my mom before it would be too
                    late, where I got her a pulseoximeter to give her any
                    fighting chance possible.
                    <br></br>
                    <br></br>
                    My parents survived COVID-19 and I decided to build my very
                    first website, Coronahero. The users could give my avatar
                    various symptoms and learn more about COVID-19.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="story_2"
              onTouchStart={this.onTouchStart}
              onTouchMove={this.onTouchMove}
              onTouchEnd={this.onTouchEnd}
              className="container animContainer">
              <h4>The mistakes</h4>

              <div className="row mb-4">
                <table className="rainDropTable">
                  <tbody className="rainDropTable">
                    <tr>
                      <td>
                        <div className="noDrop"></div>
                      </td>
                      <td>
                        <div className="noDrop"></div>
                      </td>
                      <td>
                        <div className="noDrop"></div>
                      </td>
                      <td>
                        <div className="rainDrop"></div>
                      </td>
                      <td>
                        <div className="rainDrop"></div>
                      </td>
                      <td>
                        <div className="rainDrop"></div>
                      </td>
                      <td>
                        <div className="rainDrop"></div>
                      </td>
                      <td>
                        <div className="rainDrop"></div>
                      </td>
                      <td>
                        <div className="rainDrop"></div>
                      </td>
                      <td>
                        <div className="rainDrop"></div>
                      </td>
                      <td>
                        <div className="noDrop"></div>
                      </td>
                      <td>
                        <div className="noDrop"></div>
                      </td>
                      <td>
                        <div className="noDrop"></div>
                      </td>
                      <td>
                        <div className="noDrop"></div>
                      </td>
                      <td>
                        <div className="noDrop"></div>
                      </td>
                      <td>
                        <div className="noDrop"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row flexCenter">
                <div className="talkBubble" id="talkBubbleRegretID">
                  <p id="talkRegretsID">No no no</p>
                </div>
              </div>
              <div className="row flexCenter">
                <div className="avatarCircle" id="avatarRegretID">
                  <div className="eyesContainer">
                    <div id="regretEyeBrowLeftID"></div>
                    <div id="regretEyeBrowRightID"></div>
                    <div className="eyeAvatar" id="edipEyesID">
                      <div className="eyePupil"></div>
                    </div>

                    <div className="eyeAvatar" id="edipEyesID">
                      <div className="eyePupil"></div>
                    </div>
                  </div>

                  <div className="avatarNose" id="avatarEdipID"></div>
                  <div className="avatarMouth" id="avatarEdipMouthID"></div>
                </div>
              </div>

              <div className="row flexCenter m-auto">
                <p className="portfolioParagraph">
                  The website Coronahero was a disaster. It looked horrible and
                  wasn't mobile responsive at all. <br></br>
                  <br></br>I made many mistakes and I realised I had a long way
                  to go.
                </p>
              </div>
            </div>
            <div
              id="story_3"
              onTouchStart={this.onTouchStart}
              onTouchMove={this.onTouchMove}
              onTouchEnd={this.onTouchEnd}
              className="container animContainer">
              <h4>A new journey begins</h4>
              {/* A sunrising and avatar looks to the horizon wiht a talkbubble */}

              <div className="flexCenter">
                <div className="journeyScene">
                  <div className="sunRise"></div>

                  <div className="mountainScene">
                    <div className="mountain" id="mountainOneID">
                      <div className="mountain" id="mountainFourID">
                        <div
                          className="smallMountain"
                          id="mountainThreeID"></div>
                      </div>
                    </div>
                    <div className="mountain" id="mountainTwoID"></div>
                  </div>
                  <div className="ground"></div>
                </div>
              </div>

              <p className="portfolioParagraph">
                Despite my failures, I still wanted to achieve one of my dreams:
                making a résumé website that would be fun to experience and
                mobile responsive.
                <br></br>
                <br></br>
                However, I was still a novice and I was left with no choice but
                to buy an Udemy course about building a portfolio website
                combining React and Bootstrap. On top of that, I would use
                AnimeJS for the animations.
              </p>
            </div>

            {/* NOOB WALL....*/}

            <div
              id="story_4"
              onTouchStart={this.onTouchStart}
              onTouchMove={this.onTouchMove}
              onTouchEnd={this.onTouchEnd}
              className="container animContainer">
              <h4>The struggle</h4>

              <div className="container">
                <div className="row">
                  <div className="avatarCircle mx-auto" id="headHitWall">
                    <div className="eyesContainer">
                      <div className="eyeBrows" id="headHitWallLeft"></div>
                      <div className="eyeBrows" id="headHitWallRight"></div>
                      <div className="eyeAvatar" id="edipEyesID">
                        <div className="eyePupil"></div>
                      </div>

                      <div className="eyeAvatar" id="edipEyesID">
                        <div className="eyePupil"></div>
                      </div>
                    </div>

                    <div className="avatarNose" id="avatarEdipID"></div>
                    <div className="avatarMouth" id="avatarEdipMouthID"></div>
                  </div>

                  <div className="wall" id="avatarWall">
                    <div className="forceWall"></div>

                    <h4
                      style={{
                        textAlign: "center",
                        color: "var(--primary-white)",
                      }}>
                      N<br></br>O<br></br>O<br></br>B<br></br>
                      <br></br>W<br></br>A<br></br>L<br></br>L<br></br>
                    </h4>
                  </div>
                </div>
              </div>

              <p className="portfolioParagraph">
                In the process of making this website I struggled between my
                grand vision and the acquired skills I had at the time.
                <br></br>
                <br></br>
                Due to my limited patience it consequently resulted into
                misplaced time and effort. I simply did the wrong things in a
                rush.
              </p>
            </div>

            <div
              id="story_5"
              onTouchStart={this.onTouchStart}
              onTouchMove={this.onTouchMove}
              onTouchEnd={this.onTouchEnd}
              className="container animContainer">
              <h4>Becomming Lagom</h4>
              {/* Zen-mode */}
              <div className="row flexCenter m-auto">
                <div className="zenBigCircle" id="helveteCIRCLE">
                  <div className="zenSmallCircle m-auto mt-3"></div>
                </div>
                <div className="zenAvatarCircle">
                  <div className="zenEyes" id="zenEyeLeftID"></div>
                  <div className="zenEyes" id="zenEyeRightID"></div>
                  <div className="avatarNose" id="zenNoseID">
                    <div className="zenMouth"></div>
                  </div>
                </div>
              </div>

              <div className="row zenParagraph">
                <p className="portfolioParagraph">
                  After several setbacks, I decided to settle with{" "}
                  <span className="highLight">Lagom</span>, meaning good enough
                  in Swedish. Then bits and pieces started to slowly fall into
                  place and I didn't have too high expectations for myself.
                  <br></br>
                  <br></br>
                  With time, my skills gradually improved and in the end I
                  re-wrote the whole code I had been given from the Udemy
                  course.
                  <br></br>
                  <br></br>
                  At last I have found my way of being Lagom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
