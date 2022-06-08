import React, { Component } from "react";
import "../Portfolio/portfolio.css";
import { Mario } from "./Mario/mario.js";
import "../../IntersectionObserver.js";
import PlayRefresh from "../PlayRefresh/PlayRefresh.js";


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
              <p>This website is the only thing I can share with you.</p>

            <h3>The story</h3>
              <p>
              When Covid-19 arrived and almost threaten the lives of my parents 
                I decided to do something against Covid-19 and I guess also pre-occupy myself a bit from the familly trauma. 
              </p>
            
            <h4>Coronahjälte</h4>
              <p>
                Action was taken and the website Coronahjälte was made where the visitor could give my avatar various symptoms 
                which then would trigger various animations. Finally the visitor would recieve some useful links about Covid-19.
                It was my first website and fundamental flaws were made.
              </p>

            <h4>Copy & Paste</h4>
              <p>
                From the hard gained experiences I had with Coronahjälte I realised I was far from being 'Lagom'.
                But I had a dream about making a portfolio website that could be 'Lagom'.
                So I took a step back and did what I know best.<br></br>
                <b>Copy & Paste</b><br></br>
                I bought a course from Udemy which combined React and Bootstrap. 
                This gave me a clear structure while gaining the basics.
              </p>
              
            <h4>The painstaking journey of becoming 'Lagom'</h4>
              <p>
                In the process of making this website I was struggling between my grand visions and the acquired skillevel I had at the time.
                Gradually I realised I'll settle with 'Lagom' meaning good enough. Then bits and pieces started to slowly fall in place.
                With time (almost a year later) I re-wrote the code that I had been given from the course and I finally have found my way of being 'Lagom'.
              </p>
             
              <h4>Lessons learned</h4>
                <p>
                My biggest experiences from this project is patience and balance. 
                I rushed into various technical challenges and paid for it in full. 
                However if I wasn't "crazy" enough to try achive 
                some of the grand visions I had I probably wouldn't improved my skills to the level it is today.
                

                </p>
            

          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
