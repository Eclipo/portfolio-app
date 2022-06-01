import React from "react";

import "../resumeOverview/resumeOverview.css";
import { LightSaber } from "./lightSaber/lightSaber";
import "../../IntersectionObserver.js";
import PlayRefresh from "../PlayRefresh/PlayRefresh.js";

const ResumeOverview = () => {
  return (
    <div id="resumeOverview" className="sectionAnimation">
      <div
        className="sectionLine"
        style={{ backgroundColor: "var(--primary-red)" }}
      ></div>
 <div className="experienceTable" style={{opacity:"1"}}>
                  <div className="row expOverviewPeriod expOverviewPeriod-dotted">
                      {/* 30 %  */}
                    <div className="col m-auto">
                        <p className="m-1 mx-auto">
                          Present<br></br>2019-12
                        </p>
                        <p className="m-1 mx-auto">
                          CGI Sverige AB
                        </p>

                    </div>
                      {/*5 %  */}
                     <div className="width1 m-auto">
                        <div className=" header2VerticalUnderLine"></div>
                      </div>
                      {/* 25 %  */}
                      <span className="col m-auto">
                        <p className="m-auto">Developer consultant</p>
                      </span>
                      {/* 5 %  */}
                      <div className="width1 m-auto">
                        <div className="header2VerticalUnderLine"></div>
                      </div>
                      {/* 30 %  */}
                      <div className="col m-auto">
                        <p className="m-auto">Full-stack .Net</p>
                        <p className="m-auto">Angular</p>
                      </div>
                    </div>

                    <div className="row expOverviewPeriod expOverviewPeriod-reverseColor">
                      <div className="col m-auto">
                        <h3 className=" expHeader-reverseColor">
                          2019-10 - 2019-12
                        </h3>
                        <h3 className=" expHeader-reverseColor">
                          Unemployment
                        </h3>
                        <h4 className="expHeader-reverseColor">Bad luck</h4>
                        <p 
                          className="expHeader-reverseColor mx-auto w-75"
                          style={{ textAlign: "left" }}>
                            Due to prior financial complications Nexer AB left me
                            speechless and I returned back to base.
                        </p>
                      </div>
                    </div>



                </div>
      <h1 style={{ color: "var(--primary-red" }}>Resumé Overview</h1>
      <PlayRefresh id="ResumeAnimation" playBoolean={true}></PlayRefresh>

      <div className="flexCenter">
        <LightSaber></LightSaber>
      </div>

      <div id="resumeContainerID">
        <div
          className="resumeTable"
          style={{ backgroundColor: "var(--navy)" }}
        >
          <div className="resumeSection">
              <div className="row m-auto">
                <div className="col mt-1">
                  <h2>Languages</h2>
                </div>
              </div>
               
               
                <div className="experienceTable">
                  <div className="row m-auto">
                    <div className="col mt-1">
                        <div className="expOverviewPeriod expOverviewPeriod-dotted p-2">
                          <h3>Swedish</h3>
                          <div className="header3UnderLine"></div>
                          <h4 className="m-auto p-1">Native</h4>
                        </div>
                      </div>
                    <div className="col mt-1">
                      <div className="expOverviewPeriod expOverviewPeriod-dotted p-2">
                        <h3>English</h3>
                        <div className="header3UnderLine"></div>
                        <h4 className="m-auto p-1">Good</h4>
                      </div>
                    </div>
                      
                    <div className="col mt-1">
                      <div className="expOverviewPeriod expOverviewPeriod-dotted p-2">
                        <h3>Turkish</h3>
                        <div className="header3UnderLine"></div>
                        <h4 className="m-auto p-1">Basic</h4>
                      </div>
                    </div>
                  </div>
                <div className="row m-auto">
                  <div className="col mt-1">
                    <div className="expOverviewPeriod expOverviewPeriod-dotted p-2">
                      <h3>Kurdish, French and Mandarin</h3>
                      <div className="header3UnderLine"></div>
                      <h4 className="m-auto p-1">Almost nothing</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
              <div className=" resumeSection">
                <div className="row m-auto">
                  <div className="col mt-1">
                    <h2>Education</h2>
                  </div>
                </div>
                <div className="m-auto">
                  <div className="experienceTable">
                   <div className="row m-auto">
                        <div className="col w-75">
                          <div className="expOverviewPeriod expOverviewPeriod-dotted p-3">
                            <h3 className="m-auto p-1">2015-2018</h3>
                            <h3 className="m-auto p-1">
                              Mid Sweden Unviersity
                            </h3>
                            <div className="header2UnderLine"></div>
                            <h4 className="m-auto p-1">
                              Higher education diploma
                            </h4>
                            <div className="header3UnderLine mt-1"></div>
                            <h4 className="m-auto p-1"> Computer science</h4>
                          </div>
                        </div>

                        <div className="col w-75">
                          <div className="expOverviewPeriod expOverviewPeriod-dotted p-3">
                            <h3 className="m-auto p-1">2009-2012</h3>
                            <h3 className="m-auto p-1">Jönköping University</h3>
                            <div className="header2UnderLine"></div>
                            <h4 className="m-auto p-1">Bachelor degree</h4>
                            <div className="header3UnderLine mt-1"></div>

                            <h4 className="m-auto p-1">
                              Business administration
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            

            <div className="resumeSection">
              <div className="row m-auto">
                <div className="col mt-1">
                  <h2>Experiences</h2>
                </div>
              </div>

              <div className="experienceTable" style={{opacity:"1"}}>
                  <div className="row">
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">

                  
                      {/* 30 %  */}
                    <div className="col">
                        <p className="m-1 mx-auto">
                          Present<br></br>2019-12
                        </p>
                        <p className="m-1 mx-auto">CGI Sverige AB</p>
                    </div>
                      {/*5 %  */}
                      <div className="col">
                        <div className="header2VerticalUnderLine"></div>
                      </div>
                      {/* 25 %  */}
                      <div className="col">
                        <p className="m-1 mx-auto">Developer consultant</p>
                      </div>
                      {/* 5 %  */}
                      <div className="col">
                        <div className="header2VerticalUnderLine"></div>
                      </div>
                      {/* 30 %  */}
                      <div className="col">
                        <p className="m-auto">Full-stack .Net</p>
                        <p className="m-auto">Angular</p>
                      </div>
                    </div>
                    </div>
                  </div>
                  {/* <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-reverseColor">
                      <td>
                        <h3 className=" expHeader-reverseColor">
                          2019-10 - 2019-12
                        </h3>
                        <h3 className=" expHeader-reverseColor">
                          Unemployment
                        </h3>
                        <h4 className="expHeader-reverseColor">Bad luck</h4>
                        <p
                          className="expHeader-reverseColor mx-auto w-75"
                          style={{ textAlign: "left" }}
                        >
                          Due to prior financial complications Nexer AB left me
                          speechless and I returned back to base.
                        </p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">
                          2019-09<br></br>2019-09
                        </p>
                        <p className="m-1 mx-auto">Nexer AB</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="25%">
                        <p className="m-1 mx-auto">Developer consultant</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="30%">
                        <p className="m-auto">Null</p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">
                          2019-08<br></br>2015-09
                        </p>
                        <p className="m-1 mx-auto">CGI Sverige AB</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="25%">
                        <p className="m-1 mx-auto">Business consultant</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="30%">
                        <p className="m-auto">Consulting and testing</p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-reverseColor">
                      <td>
                        <h3 className=" expHeader-reverseColor">
                          2015-02 - 2015-08
                        </h3>
                        <h3 className=" expHeader-reverseColor">
                          Unemployment
                        </h3>
                        <h4 className="expHeader-reverseColor">
                          The lifechanging decision
                        </h4>
                        <p
                          className="expHeader-reverseColor mx-auto w-75"
                          style={{ textAlign: "left" }}
                        >
                          I made a vow to never be unemployed again. For three
                          years I studied 50% at Midsweden University while
                          working 100% at CGI Sverige AB.
                        </p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">
                          2015-01<br></br>2013-08
                        </p>
                        <p className="m-1 mx-auto">Software Innovation AB</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="25%">
                        <p className="m-1 mx-auto">Sales assistant</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="30%">
                        <p className="m-auto">Leads</p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">
                          2013-08<br></br>2013-05
                        </p>
                        <p className="m-1 mx-auto">TP Sweden AB</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="25%">
                        <p className="m-1 mx-auto">Customer service</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="30%">
                        <p className="m-auto">Support</p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-reverseColor">
                      <td>
                        <h3 className=" expHeader-reverseColor">
                          2013-03 - 2013-04
                        </h3>
                        <h3 className=" expHeader-reverseColor">
                          Unemployment
                        </h3>
                        <h4 className="expHeader-reverseColor">
                          The injust despair
                        </h4>
                        <p
                          className="expHeader-reverseColor mx-auto w-75"
                          style={{ textAlign: "left" }}
                        >
                          I was sent away for new adventures despite my best
                          efforts.Long story short I was welcomed back at TP
                          Sweden (Teleperformance) and for that I am very
                          grateful.
                        </p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">
                          2013-02<br></br>2012-09
                        </p>
                        <p className="m-1 mx-auto">KMD AB</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="25%">
                        <p className="m-1 mx-auto">Tester</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="30%">
                        <p className="m-auto">SAP</p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-reverseColor">
                      <td>
                        <h3 className=" expHeader-reverseColor">2009 - 2012</h3>
                        <h4 className=" expHeader-reverseColor">
                          Full-time studies
                        </h4>

                        <p
                          className="expHeader-reverseColor mx-auto w-75"
                          style={{ textAlign: "left" }}
                        >
                          I studied and traveled around in Asia during my
                          studies at Jönköping International Business School.
                          Good times.
                        </p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">
                          2011-09<br></br>2011-08
                        </p>
                        <p className="m-1 mx-auto">Edip Sarac AB</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="25%">
                        <p className="m-1 mx-auto">Solo trader</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="30%">
                        <p className="m-auto">Marketing analysis</p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">
                          2010-08<br></br>2010-06
                        </p>
                        <p className="m-1 mx-auto">TeliaSonera AB</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="25%">
                        <p className="m-1 mx-auto">Customer service</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="30%">
                        <p className="m-auto">Support</p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">
                          2009-04<br></br>2007-11
                        </p>
                        <p className="m-1 mx-auto">TP Sweden AB</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="25%">
                        <p className="m-1 mx-auto">Customer service</p>
                      </td>

                      <td width="5%">
                        <div className="header2VerticalUnderLine"></div>
                      </td>

                      <td width="30%">
                        <p className="m-auto">Sales and support</p>
                      </td>
                    </div>
                  </tr> */}
              {/* </div>  */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeOverview;
