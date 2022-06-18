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
          style={{backgroundColor:"var(--primary-pink)" }}
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
              There is no github.Down below you can read the story that resulted into this website.</p>

            <h3>The story</h3>


            <div className="container animContainer mb-3" >
              <h4 className="mb-5">Covid-19</h4>

              <div className="row">
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
            
            
              <p className="row mt-3">
                Covid-19 arrived and in one hit it threaten the lives of my parents. 
                My dad was at the hopstial and my mother just got infected. 
              </p>
            </div>
            

            <div className="container animContainer" >
            <h4>Coronahero</h4>

            
              <div className="row flexCenter">
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

              <div className="d-inline-flex">
                <p>
                  However there was still time for me to help my mom. 
                  I managed to get her a pulse oximeter eventhough it was almost sold out. 
                  My parents survived Covid-19 and I decided to build my very first website,Coronahero, 
                  where the users could give my avatar various symptoms and read more about Covid-19. 
                </p>
              </div>
            </div>

            </div>
              


      

            <div className="container animContainer">
            <h4>The mistakes</h4>

            <div className="row">
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
            </div>
          

              <div className="row">
                <p>
                  I made many mistakes with my first website. 
                  For starters it looked horrible and wasn't mobile responsive. 
                  I still had alot to learn.
                </p>
              </div>

            {/* Avatar looks down into his website and asks himself...
            'What have I done... What was I thinking ... This isn't what I wanted..." 
            */}

          
          </div>
          <div className="container animContainer">
            <h4>A new journey begins</h4>
              {/* A sunrising and avatar looks to the horizon wiht a talkbubble */}

            <div className="flexCenter">
              <div className="journeyScene">
              <div className="sunRise"></div>

              <div className="mountainScene">
              
                <div className="mountain" id="mountainOneID">
                  <div className="mountain" id="mountainFourID">
                    <div className="smallMountain" id="mountainThreeID"></div>
                  </div>
                </div>
                <div className="mountain" id="mountainTwoID">
                  
                </div>

                </div>
                <div className="ground"></div>
              </div>
            
            </div>
              
              <p>
                Despite my failures I still wanted accomplish a long-lasted dream. 
                Making a portfolio website.A website that would be entertaining and more mobile responsive.                
                However I was still a noob and I was left with no choice... I bought an Udemy course 
                specifically focusing on building a portfolio website combining React and Bootstrap.
              </p>
            </div>
             
              {/* Avatar tries to jump to the grand vision but falls down....*/}

            <div className="container animContainer">
            <h4>The struggle</h4>

            <div className="container">
              <div className="row">
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


              <div className="wall" id="avatarWall">
                <h4 style={{textAlign:'center', color:'var(--primary-white)'}}>
                N<br></br>
                O<br></br>
                O<br></br>
                B<br></br><br></br>
                W<br></br>
                A<br></br>
                L<br></br>
                L<br></br>

                </h4>
              </div>
              </div>
            </div>

             <p>
              In the process of making this website I struggled between my grand visions 
              and the acquired skillevel I had at the time. 
              I had no patience and consequently I wasted alot of time and effort doing the wrong things.
             </p>
            </div>

              
            <div className="container animContainer">
            <h4>Becomming Lagom</h4>
              {/* Zen-mode */}
              <div className="row">
                <div className="zenBigCircle" id="helveteCIRCLE">
                  <div className="zenSmallCircle m-auto mt-3"></div>
                </div>
                <div className="zenAvatarCircle">
                      <div className="zenEyes" id="zenEyeLeftID"></div>
                      <div className="zenEyes" id="zenEyeRightID"></div>
                      <div className="avatarNose" id="zenNoseID">
                      <div className="zenMouth" ></div>
                  </div>  
                </div>
            
             </div>

             <div className="row zenParagraph">
              <p>
                Gradually as I got more skillful and wiser I decided to settle with 'Lagom'.  
                Then bits and pieces started to slowly fall into place and 
                almost a year later I re-wrote the code that I had been given from the course. 
                I finally have found my way of being 'Lagom'.   
              </p>
             </div>
            </div>

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
