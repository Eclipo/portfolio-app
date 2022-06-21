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
              <p>My portfolio is this very website and it's what I am comfortable to share with you.
              No github but there is always F12.  
              <br></br><br></br>
              The tech I used for this website are React, Bootstrap, AnimeJS, alot of CSS and Javascript. 
              <br></br><br></br>
              Down below you can read the story about this website.</p>

            <h3>The story</h3>


            <div className="container animContainer" >
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
                    <p id="talkCovidParagraphID">...</p>
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
                My dad was at the hospital and my mother just got infected. 
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
                  There was still time for me to help my mom. 
                  I managed to get her a pulse oximeter even though it was almost sold out. 
                  My parents survived Covid-19 and I decided to build my very first website namely Coronahero. 
                  The users could give my avatar various symptoms and learn more about Covid-19. 
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
                  The website Coronahero was a disaster. 
                  It looked horrible and wasn't mobile responsive at all. 
                  I made many mistakes and I realised I had a long way to go.
                </p>
              </div>
 
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
                Despite my failures I still wanted to achieve one of my dreams. 
                Making a portfolio website that would be entertaining and mobile responsive.                
                However I was still a novice and I was left with no choice... but to buy an Udemy course 
                about building a portfolio website combining React and Bootstrap.
                On top of that I would also use AnimeJS for the animations.
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
              <div className="forceWall"></div>

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
              <div className="row flexCenter">
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
                After several setbacks I decided to settle with 'Lagom'.  
                Then bits and pieces started to slowly fall into place 
                where I didn't have too high expectations on myself.
                <br></br><br></br>

                With time I became better and in the end I have re-wrote 
                the whole code I had been given from the Udemy course.
                <br></br><br></br>
                Finally I have found my way of being 'Lagom'.   
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
