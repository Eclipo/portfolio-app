import React, { Component } from "react";
import "../Portfolio/portfolio.css";
import { Mario } from "./Mario/mario.js";
import "../../IntersectionObserver.js";
import PlayRefresh from "../PlayRefresh/PlayRefresh.js";
import coronaHero from "./images/coronahjalte.PNG";


class Portfolio extends Component {


  render() {
    return (
      <div id="portfolio" className="sectionAnimation">
        <div
          className="sectionLine"
          style={{ backgroundColor: "var(--primary-pink)" }}
        ></div>
        <h1 style={{ color: "var(--primary-pink" }}>Portfolio</h1>
        <PlayRefresh id="PortfolioAnimation" playBoolean={0}></PlayRefresh>

        <div className="flexCenter">
          <Mario></Mario>
        </div>

        <div className="flexCenter" id="portfolioContainerID">
          <div className="portfolioTextContainer">
            <h2>This is it</h2>
              <p>This website is what I feel comfortable sharing with and it's my best shot. 
              Down below you can read the story that resulted into this website.</p>

            <h3>The story</h3>
            <h4>Covid-19</h4>


              <div className="d-flex mt-5 mb-5">
              
                  <div className="avatarCircle">
                    <div className="eyesContainer">
                      <div className="eyeBrows"></div>
                      <div className="eyeBrows" id="eyebrowRightID"></div>
                      <div className="eyeAvatar" id='edipEyesID'>
                        <div className="eyePupil"></div>
                      </div>

                      <div className="eyeAvatar" id='edipEyesID'>
                        <div className="eyePupil"></div>
                      </div>
                   </div>

                    <div className="avatarNose" id="avatarEdipID"></div>
                    <div className="avatarMouth" id="avatarEdipMouthID"></div>
                  </div>
                  <p className="avatarEdipParagraph">Edip</p>

                  <div className="talkBubble" id="talkCovidID">
                    <p id="talkCovidParagraphID">Let's go</p>
                  </div>


                 
                  <div className="avatarCircle" id="avatarDad">
                    <div className="eyesContainer">
                      <div className="eyeBrows"></div>
                      <div className="eyeBrows" id="eyebrowRightID"></div>
                      
                      <div className="eyeAvatar" id='bawoEyesID'>
                        <div className="eyePupil"></div>
                      </div>

                      <div className="eyeAvatar" id='bawoEyesID'>
                        <div className="eyePupil"></div>
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
                      
                      <div className="eyeAvatar" id='momEyesID'>
                        <div className="eyePupil"></div>
                      </div>

                      <div className="eyeAvatar" id='momEyesID'>
                        <div className="eyePupil"></div>
                      </div>
                    </div>

                    <div className="avatarNose"></div>
                    <div className="avatarMouth" id="avatarMomMouthID"></div>
                  </div>
                  <p className="avatarMomParagraph">Mom</p>
           


              </div>
            
            
              <p className="mt-3">
                Covid-19 arrived and in one hit it threaten the lives of my parents. 
                My dad was at the hopstial and my mother just got infected. 
              </p>
            
            <div className="portfolioExp">
            <h4>Coronahero</h4>

            <div className="d-flex mt-5 mb-5">
            <div className="d-inline-flex mx-auto">
            <div className="lightYear" id="firstLight"></div>
            <div className="lightYear" id="firstLight"></div>

              <div className="avatarCircle" id="heroEdipID">
              
                <div className="eyesContainer">
                  <div className="eyeBrows"></div>
                  <div className="eyeBrows" id="eyebrowRightID"></div>
                  <div className="eyeAvatar" id='heroEdipEyesID'>
                    <div className="eyePupil"></div>
                  </div>

                  <div className="eyeAvatar" id='heroEdipEyesID'>
                    <div className="eyePupil"></div>
                  </div>
                </div>

                <div className="avatarNose" id="avatarEdipID"></div>
                <div className="avatarHeroMouth" id="heroEdipID"></div>

                <div className="rightArmAvatar"></div>

                <div className="leftArmAvatar"></div>

                <div className="rightLegAvatar"></div>

                <div className="leftLegAvatar"></div>
                <div className="lightYear" id="secondLight" style={{marginTop:'-3.5rem',marginLeft:'-3rem', zIndex:'-2', position:'absolute'}}></div>
                <div className="lightYear" id="firstLight" style={{marginTop:'-3.5rem',marginLeft:'-2rem',marginRight:'2rem', zIndex:'-2', position:'absolute'}}></div>

                <div className="lightYear" id="secondLight" style={{marginTop:'-3.75rem',zIndex:'-2', position:'absolute'}}></div>
                <div className="lightYear" id="firstLight" style={{marginTop:'-3.75rem',marginLeft:'1rem', zIndex:'-2', position:'absolute'}}></div>
                <div className="lightYear" id="secondLight" style={{marginTop:'-4rem',marginLeft:'2rem', zIndex:'-2', position:'absolute'}}></div>

                <div className="lightYear" id="firstLight" style={{marginTop:'-4rem',marginLeft:'3rem', zIndex:'-2', position:'absolute'}}></div>
                <div className="lightYear" id="secondLight" style={{marginTop:'-3.5rem',marginLeft:'4rem', zIndex:'-2', position:'absolute'}}></div>


              </div>
              <div className="lightYear"  id="secondLight"></div>
              <div className="lightYear" id="firstLight"></div>

         
            </div>

            </div>
              <p>
                However there was still time for me to help my mom. 
                I managed to get her a pulse oximeter eventhough it was almost sold out. 
                My parents survived Covid-19 and I decided to build my very first website,Coronahero, 
                where the users could give my avatar various symptoms and read more about Covid-19. 
              </p>
            </div>

            <h4>The mistakes</h4>

            <div className="d-flex mt-5 mb-5">
              <div className="avatarCircle mx-auto" id="headHitWall">
                <div className="eyesContainer">
                  <div className="eyeBrows" id="headHitWallLeft"></div>
                  <div className="eyeBrows" id="headHitWallRight"></div>
                  <div className="eyeAvatar" id='edipEyesID'>
                    <div className="eyePupil"></div>
                  </div>

                  <div className="eyeAvatar" id='edipEyesID'>
                    <div className="eyePupil"></div>
                  </div>
                </div>

                <div className="avatarNose" id="avatarEdipID"></div>
                <div className="avatarMouth" id="avatarEdipMouthID"></div>
              </div>

              <div className="wall" id="avatarWall"></div>
            </div>
              <p>
                I made many mistakes with my first website. 
                For starters it looked horrible and wasn't not mobile responsive at all. 
                I realised I had alot to learn.
              </p>
              
            <h4>A new journey begins</h4>
              {/* A sunrising and avatar looks to the horizon wiht a talkbubble */}

              <p>
                Despite my failures I still wanted accomplish a long-lasted dream. 
                Making a portfolio website.A website that would be entertaining and more mobile responsive.                
                However I was still a noob and I was left with no choice... I bought an Udemy course 
                specifically focusing on building a portfolio website combining React and Bootstrap.
              </p>
             
              {/* Avatar tries to jump to the grand vision but falls down....*/}

             <p>
              In the process of making this website I struggled between my grand visions 
              and the acquired skillevel I had at the time. 
              I had no patience and consequently I wasted alot of time and effort doing the wrong things.
             </p>

              {/* Zen-mode */}
             <p>
              Gradually as I got more skillful and wiser I decided to settle with 'Lagom'.  
              Then bits and pieces started to slowly fall into place and 
              almost a year later I re-wrote the code that I had been given from the course. 
              I finally have found my way of being 'Lagom'.   
             </p>

              {/* Avatar boxes very hard into a wall screaming "PATIENCE" "PATIENCE" "PATIENCE"  */}
              <h4>Lessons learned</h4>
                <p>
                  My biggest experiences from this project is patience and balance. 
                  I rushed into various technical challenges and paid for it in full. 
                  However since I was "crazy" enough in trying to achive 
                  some of the grand visions I had made me in the end a more skillful and wiser developer.
                </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
