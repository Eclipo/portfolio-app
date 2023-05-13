import React, { Component } from "react";
import "../resumeOverview/resumeOverview.css";
import "../../IntersectionObserver.js";
import { animateResume } from "./resumeOverviewFunctions";

class ResumeOverview extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    animateResume(event.currentTarget.id);
  }

  render() {
    return (
      <div id="resumeOverview" className="sectionAnimation container-sm">
        <h2>Resumé</h2>
        <hr></hr>
        <div id="resumeContainerID">
          <div className="resumeTable">
            <div className="resumeNavMenu ">
              <div className="resumeNavRow">
                <button
                  id="resumeLangID"
                  className="resumeNav col"
                  onClick={this.handleClick}>
                  <h3 className="resumeNavH2" id="langH2">
                    Languages
                  </h3>
                </button>
                <button
                  className="resumeNav col"
                  id="resumeExpID"
                  onClick={this.handleClick}>
                  <h3 className="resumeNavH2" id="expH2">
                    Experiences
                  </h3>
                </button>
                <button
                  className="resumeNav col"
                  id="resumeEduID"
                  onClick={this.handleClick}>
                  <h3 className="resumeNavH2" id="eduH2">
                    Education
                  </h3>
                </button>
              </div>
            </div>

            <div id="resumeLangSectionID">
              <div className="expSubContainer">
                <div className=" row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">Swedish</h4>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">Native</h4>
                    </div>
                  </div>
                </div>

                <div className=" row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">English</h4>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">Good</h4>
                    </div>
                  </div>
                </div>

                <div className=" row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">Turkish</h4>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">Basic</h4>
                    </div>
                  </div>
                </div>

                <div className=" row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">Kurdish</h4>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">Little</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="resumeEduSectionID">
              <div className="expSubContainer">
                <div className="row col-md expRow">
                  <div className="col-md row-sm">
                    <div className="row">
                      <h4 className="resumeExpText m-1">
                        Mid Sweden Unviersity
                      </h4>
                      <p className="resumeExpText">2015 - 2018</p>
                    </div>
                  </div>

                  <div className="col-md row-sm">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">
                        Higher education diploma
                      </h4>
                    </div>
                    <div className="row">
                      <p className="resumeExpText">Computer science</p>
                    </div>
                  </div>
                </div>

                <div className="row col-md expRow">
                  <div className="col-md row-sm">
                    <div className="row">
                      <h4 className="resumeExpText m-1">
                        Jönköping International<br></br>Business School
                      </h4>
                      <p className="resumeExpText">2009 - 2012</p>
                    </div>
                  </div>

                  <div className="col-md row-sm">
                    <div className="row">
                      <h4 className="text-black resumeExpText m-1">
                        Bachelor degree
                      </h4>
                    </div>
                    <div className="row">
                      <p className="resumeExpText">Business administration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="resumeExpSectionID">
              <div className="expSubContainer">
                <div className=" row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">CGI SVERIGE AB</h4>
                      <p className="resumeExpText">Present - 12/2019</p>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">
                        DEVELOPER
                      </h4>
                    </div>
                    <div className="row">
                      <p className="resumeExpText">.Net Angular</p>
                    </div>
                  </div>
                </div>

                <div className=" row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">NEXER AB</h4>
                      <p className="resumeExpText">09/2019 - 09/2019</p>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">
                        DEVELOPER
                      </h4>
                    </div>
                    <div className="row">
                      <p className="resumeExpText">Null</p>
                    </div>
                  </div>
                </div>

                <div className=" row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">CGI SVERIGE AB</h4>
                      <p className="resumeExpText">09/2015 - 08/2019</p>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">
                        CONSULTANT
                      </h4>
                    </div>
                    <div className="row">
                      <p className="resumeExpText">Handyman</p>
                    </div>
                  </div>
                </div>

                <div className=" row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">
                        SOFTWARE INNOVATION AB
                      </h4>
                      <p className="resumeExpText">08/2013 - 01/2015</p>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">
                        SALES ASSISTANT
                      </h4>
                    </div>
                    <div className="row">
                      <p className="resumeExpText">Prospecter</p>
                    </div>
                  </div>
                </div>

                <div className=" row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">TP SWEDEN AB</h4>
                      <p className="resumeExpText">05/2013 - 08/2013</p>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">SUPPORT</h4>
                    </div>
                    <div className="row">
                      <p className="resumeExpText">Tech & Sales </p>
                    </div>
                  </div>
                </div>

                <div className="row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">KMD AB</h4>
                      <p className="resumeExpText">09/2012 - 01/2013</p>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">TESTER</h4>
                    </div>
                    <div className="row">
                      <p className="resumeExpText">SAP</p>
                    </div>
                  </div>
                </div>

                <div className="row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">EDIP SARAC AB</h4>
                      <p className="resumeExpText">08/2011 - 09/2011</p>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">
                        Consultant
                      </h4>
                    </div>
                    <div className="row">
                      <p className="resumeExpText">Strategy</p>
                    </div>
                  </div>
                </div>

                <div className="row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">TELIASONERA AB</h4>
                      <p className="resumeExpText">06/2010 - 08/2010</p>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">SUPPORT</h4>
                    </div>
                    <div className="row">
                      <p className="resumeExpText">Tech</p>
                    </div>
                  </div>
                </div>

                <div className="row expRow">
                  <div className="col-7">
                    <div className="row">
                      <h4 className="resumeExpText m-1">TP SWEDEN AB</h4>
                      <p className="resumeExpText">11/2007 - 04/2009</p>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <h4 className="resumeExpText text-black m-1">SUPPORT</h4>
                    </div>
                    <div className="row">
                      <p className="resumeExpText">Tech & Sales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeOverview;
