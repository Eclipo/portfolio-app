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
              <div className="experienceTable  mt-2">
                <div className="row expOverviewPeriod expOverviewPeriod-dotted mb-4">
                  <div className="col m-auto">
                    <p className="m-1 mx-auto">
                      Present<br></br>2019-12
                    </p>
                    <p
                      className="m-1 mx-auto"
                      style={{ paddingRight: "0.35rem" }}>
                      CGI Sverige AB
                    </p>
                  </div>
                  <div className="width1 m-auto">
                    <div className=" header2VerticalUnderLine"></div>
                  </div>
                  <span className="col m-auto">
                    <p className="m-auto">
                      Developer <br></br>Consultant
                    </p>
                  </span>
                  <div className="width1 m-auto">
                    <div className="header2VerticalUnderLine"></div>
                  </div>
                  <div className="col m-auto">
                    <p className="m-auto">.Net</p>
                    <p className="m-auto">Angular</p>
                  </div>
                </div>

                <div className="row expOverviewPeriod expOverviewPeriod-dotted mb-4">
                  <div className="col m-auto">
                    <p className="m-1 mx-auto">
                      2019-09<br></br>2019-09
                    </p>
                    <p className="m-1 mx-auto">Nexer AB</p>
                  </div>

                  <div className="width1 m-auto">
                    <div className=" header2VerticalUnderLine"></div>
                  </div>

                  <span className="col m-auto">
                    <p className="m-auto">
                      Developer <br></br>Consultant
                    </p>
                  </span>

                  <div className="width1 m-auto">
                    <div className="header2VerticalUnderLine"></div>
                  </div>

                  <div className="col m-auto">
                    <p className="m-auto">Null</p>
                  </div>
                </div>

                <div className="row expOverviewPeriod expOverviewPeriod-dotted mb-4">
                  <div className="col m-auto">
                    <p className="m-1 mx-auto">
                      2019-08<br></br>2015-09
                    </p>
                    <p
                      className="m-1 mx-auto"
                      style={{ paddingRight: "0.35rem" }}>
                      CGI Sverige AB
                    </p>
                  </div>

                  <div className="width1 m-auto">
                    <div className=" header2VerticalUnderLine"></div>
                  </div>

                  <span className="col m-auto">
                    <p className="m-auto">
                      Business <br></br>Consultant
                    </p>
                  </span>

                  <div className="width1 m-auto">
                    <div className="header2VerticalUnderLine"></div>
                  </div>

                  <div className="col m-auto">
                    <p className="m-auto">
                      Consulting <br></br>&<br></br>Testing
                    </p>
                  </div>
                </div>

                <div className="row expOverviewPeriod expOverviewPeriod-dotted mb-4">
                  <div className="col m-auto">
                    <p className="m-1 mx-auto">
                      2015-01<br></br>2013-08
                    </p>
                    <p
                      className="m-1 mx-auto"
                      style={{ paddingRight: "0.35rem" }}>
                      Software Innovation AB
                    </p>
                  </div>

                  <div className="width1 m-auto">
                    <div className=" header2VerticalUnderLine"></div>
                  </div>

                  <span className="col m-auto">
                    <p className="m-auto">
                      Sales<br></br>Assistant
                    </p>
                  </span>

                  <div className="width1 m-auto">
                    <div className="header2VerticalUnderLine"></div>
                  </div>

                  <div className="col m-auto">
                    <p className="m-auto">Prospecting</p>
                  </div>
                </div>

                <div className="row expOverviewPeriod expOverviewPeriod-dotted mb-4">
                  <div className="col m-auto">
                    <p className="m-1 mx-auto">
                      2013-08<br></br>2013-05
                    </p>
                    <p className="m-1 mx-auto">TP Sweden AB</p>
                  </div>

                  <div className="width1 m-auto">
                    <div className=" header2VerticalUnderLine"></div>
                  </div>

                  <span className="col m-auto">
                    <p className="m-auto">
                      Customer<br></br>Service
                    </p>
                  </span>

                  <div className="width1 m-auto">
                    <div className="header2VerticalUnderLine"></div>
                  </div>

                  <div className="col m-auto">
                    <p className="m-auto">Support</p>
                  </div>
                </div>

                <div className="row expOverviewPeriod expOverviewPeriod-dotted mb-4">
                  <div className="col m-auto">
                    <p className="m-1 mx-auto">
                      2013-01<br></br>2012-09
                    </p>
                    <p className="m-1 mx-auto">KMD AB</p>
                  </div>

                  <div className="width1 m-auto">
                    <div className=" header2VerticalUnderLine"></div>
                  </div>

                  <span className="col m-auto">
                    <p className="m-auto">Tester</p>
                  </span>

                  <div className="width1 m-auto">
                    <div className="header2VerticalUnderLine"></div>
                  </div>

                  <div className="col m-auto">
                    <p className="m-auto">SAP</p>
                  </div>
                </div>

                <div className="row expOverviewPeriod expOverviewPeriod-dotted mb-4">
                  <div className="col m-auto">
                    <p className="m-1 mx-auto">
                      2011-09<br></br>2011-08
                    </p>
                    <p className="m-1 mx-auto">Edip Sarac AB</p>
                  </div>

                  <div className="width1 m-auto">
                    <div className=" header2VerticalUnderLine"></div>
                  </div>

                  <span className="col m-auto">
                    <p className="m-auto">Solo trader</p>
                  </span>

                  <div className="width1 m-auto">
                    <div className="header2VerticalUnderLine"></div>
                  </div>

                  <div className="col m-auto">
                    <p className="m-auto">
                      Marketing <br></br>Analysis
                    </p>
                  </div>
                </div>

                <div className="row expOverviewPeriod expOverviewPeriod-dotted mb-4">
                  <div className="col m-auto">
                    <p className="m-1 mx-auto">
                      2010-08<br></br>2010-06
                    </p>
                    <p className="m-1 mx-auto">TeliaSonera AB</p>
                  </div>

                  <div className="width1 m-auto">
                    <div className=" header2VerticalUnderLine"></div>
                  </div>

                  <span className="col m-auto">
                    <p className="m-auto">
                      Customer<br></br>Service
                    </p>
                  </span>

                  <div className="width1 m-auto">
                    <div className="header2VerticalUnderLine"></div>
                  </div>

                  <div className="col m-auto">
                    <p className="m-auto">Support</p>
                  </div>
                </div>

                <div className="row expOverviewPeriod expOverviewPeriod-dotted mb-4">
                  <div className="col m-auto">
                    <p className="m-1 mx-auto">
                      2009-04<br></br>2007-11
                    </p>
                    <p className="m-1 mx-auto">TP Sweden AB</p>
                  </div>

                  <div className="width1 m-auto">
                    <div className=" header2VerticalUnderLine"></div>
                  </div>

                  <span className="col m-auto">
                    <p className="m-auto">
                      Customer<br></br>Service
                    </p>
                  </span>

                  <div className="width1 m-auto">
                    <div className="header2VerticalUnderLine"></div>
                  </div>

                  <div className="col m-auto">
                    <p className="m-auto">
                      Sales &<br></br>Support
                    </p>
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
