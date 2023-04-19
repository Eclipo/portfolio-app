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
      <div id="resumeOverview" className="sectionAnimation">
        <h1>
          Resumé <br></br>Overview
        </h1>
        <div id="resumeContainerID">
          <div className="resumeTable">
            <div className="resumeNavMenu mt-5">
              <div className="resumeNavRow">
                <button
                  id="resumeLangID"
                  className="resumeNav col"
                  onClick={this.handleClick}>
                  <h2 className="resumeNavH2" id="langH2">
                    Languages
                  </h2>
                </button>
                <button
                  className="resumeNav col"
                  id="resumeExpID"
                  onClick={this.handleClick}>
                  <h2 className="resumeNavH2" id="expH2">
                    Experiences
                  </h2>
                </button>
                <button
                  className="resumeNav col"
                  id="resumeEduID"
                  onClick={this.handleClick}>
                  <h2 className="resumeNavH2" id="eduH2">
                    Education
                  </h2>
                </button>
              </div>
            </div>
            <div
              className="resumeSection container-md"
              id="resumeLangSectionID">
              <div className="experienceTable">
                <div className="row m-auto">
                  <div className="col m-2">
                    <div className="expOverviewPeriod expOverviewPeriod-dotted p-2">
                      <h3>Swedish</h3>
                      <div className="header3UnderLine"></div>
                      <h4 className="roHeader4 m-auto p-1">Native</h4>
                    </div>
                  </div>
                  <div className="col m-2">
                    <div className="expOverviewPeriod expOverviewPeriod-dotted p-2">
                      <h3>English</h3>
                      <div className="header3UnderLine"></div>
                      <h4 className="m-auto p-1">Good</h4>
                    </div>
                  </div>

                  <div className="col m-2">
                    <div className="expOverviewPeriod expOverviewPeriod-dotted p-2">
                      <h3>Turkish</h3>
                      <div className="header3UnderLine"></div>
                      <h4 className="m-auto p-1">Basic</h4>
                    </div>
                  </div>
                </div>
                <div className="row m-auto">
                  <div className="col m-2">
                    <div className="expOverviewPeriod expOverviewPeriod-dotted p-2">
                      <h3>Kurdish, French and Mandarin</h3>
                      <div className="header3UnderLine w-100"></div>
                      <h4 className="m-auto p-1">Almost nothing</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="resumeSection container-md" id="resumeEduSectionID">
              <div className="experienceTable">
                <div className="row m-auto mb-2">
                  <div className="expOverviewPeriod expOverviewPeriod-dotted p-2 m-1">
                    <h3 className="m-auto p-1">2015 - 2018</h3>
                    <h3 className="m-auto p-1">
                      Mid Sweden <br></br> Unviersity
                    </h3>
                    <div className="header2UnderLine"></div>
                    <h4 className="m-auto p-1">Higher education diploma</h4>
                    <div className="header3UnderLine mt-1"></div>
                    <h4 className="m-auto p-1"> Computer science</h4>
                  </div>
                </div>

                <div className="row m-auto mb-2">
                  <div className="expOverviewPeriod expOverviewPeriod-dotted p-2 m-1">
                    <h3 className="m-auto p-1">2009 - 2012</h3>
                    <h3 className="m-auto p-1">
                      Jönköping International <br></br> Business School
                    </h3>
                    <div className="header2UnderLine"></div>
                    <h4 className="m-auto p-1">Bachelor degree</h4>
                    <div className="header3UnderLine mt-1"></div>

                    <h4 className="m-auto p-1">Business administration</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="resumeSection container-md" id="resumeExpSectionID">
              <div className="experienceTable mt-2">
                <div className="expSubContainer">
                  <div className=" row expRow">
                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">CGI SVERIGE AB</h4>
                        <p className="resumeExpText">Present - 12/2019</p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">DEVELOPER</h4>
                      </div>
                      <div className="row">
                        <p className="resumeExpText">.Net Angular</p>
                      </div>
                    </div>
                  </div>

                  <div className=" row expRow">
                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">NEXER AB</h4>
                        <p className="resumeExpText">09/2019 - 09/2019</p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">DEVELOPER</h4>
                      </div>
                      <div className="row">
                        <p className="resumeExpText">Null</p>
                      </div>
                    </div>
                  </div>

                  <div className=" row expRow">
                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">CGI SVERIGE AB</h4>
                        <p className="resumeExpText">09/2015 - 08/2019</p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">CONSULTANT</h4>
                      </div>
                      <div className="row">
                        <p className="resumeExpText">Business & Testing</p>
                      </div>
                    </div>
                  </div>

                  <div className=" row expRow">
                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">
                          SOFTWARE INNOVATION AB
                        </h4>
                        <p className="resumeExpText">08/2013 - 01/2015</p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">SALES ASSISTANT</h4>
                      </div>
                      <div className="row">
                        <p className="resumeExpText">Prospecting</p>
                      </div>
                    </div>
                  </div>

                  <div className=" row expRow">
                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">TP SWEDEN AB</h4>
                        <p className="resumeExpText">05/2013 - 08/2013</p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">SUPPORT</h4>
                      </div>
                      <div className="row">
                        <p className="resumeExpText">Tech & Sales </p>
                      </div>
                    </div>
                  </div>

                  <div className="row expRow">
                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">KMD AB</h4>
                        <p className="resumeExpText">09/2012 - 01/2013</p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">TESTER</h4>
                      </div>
                      <div className="row">
                        <p className="resumeExpText">SAP</p>
                      </div>
                    </div>
                  </div>

                  <div className="row expRow">
                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">EDIP SARAC AB</h4>
                        <p className="resumeExpText">08/2011 - 09/2011</p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">Consultant</h4>
                      </div>
                      <div className="row">
                        <p className="resumeExpText">Strategy</p>
                      </div>
                    </div>
                  </div>

                  <div className="row expRow">
                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">TELIASONERA AB</h4>
                        <p className="resumeExpText">06/2010 - 08/2010</p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">SUPPORT</h4>
                      </div>
                      <div className="row">
                        <p className="resumeExpText">Tech</p>
                      </div>
                    </div>
                  </div>

                  <div className="row expRow">
                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">TP SWEDEN AB</h4>
                        <p className="resumeExpText">11/2007 - 04/2009</p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="row">
                        <h4 className="resumeExpText m-1">SUPPORT</h4>
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
      </div>
    );
  }
}

export default ResumeOverview;
