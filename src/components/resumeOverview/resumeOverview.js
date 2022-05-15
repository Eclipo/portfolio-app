import React from "react";

import "../resumeOverview/resumeOverview.css";
import { LightSaber } from "./lightSaber/lightSaber";
import "../../IntersectionObserver.js";
import PlayRefresh from "../PlayRefresh/PlayRefresh.js";

const ResumeOverview = () => {
  return (
    
    <div id="resumeOverview" className="sectionAnimation">
    <div className='sectionLine' style={{backgroundColor:'var(--primary-red)'}}></div>
      
          <h1 style={{ color: "var(--primary-red" }}>Resumé Overview</h1>
          <PlayRefresh id="ResumeAnimation" playBoolean={true}></PlayRefresh>

          <div className="flexCenter">
          <LightSaber></LightSaber>
          </div>
          

          <div id="resumeContainerID" style={{ width: "100%" }}>
            <table
              className="resumeTable .table-striped  .table-responsive"
              style={{ backgroundColor: "var(--navy)" }}
            >
              <tr>
                <div className="resumeSection">
                  <div className="row m-auto">
                    <div className="col mt-1">
                      <h2>Languages</h2>
                    </div>
                  </div>
                  {/* style={{width:"10vw",height:"  10vh"}} */}
                  <div>
                    <table className="experienceTable">
                      <tr>
                        <td>
                          <div className="expOverviewPeriod expOverviewPeriod-dotted p-1">
                            <h3>Swedish</h3>
                            <div className="header3UnderLine"></div>
                            <p className="m-auto p-1">Native</p>
                          </div>
                        </td>
                        <td>
                          <div className="expOverviewPeriod expOverviewPeriod-dotted p-1">
                            <h3>English</h3>
                            <div className="header3UnderLine"></div>
                            <p className="m-auto p-1">Good</p>
                          </div>
                        </td>
                        <td>
                          <div className="expOverviewPeriod expOverviewPeriod-dotted p-1">
                            <h3>Turkish</h3>
                            <div className="header3UnderLine"></div>
                            <p className="m-auto p-1">Basic</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="expOverviewPeriod expOverviewPeriod-dotted p-2">
                            <h3>Kurdish, French and Mandarin</h3>
                            <div className="header3UnderLine"></div>
                            <p className="m-auto p-1">Almost nothing</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </tr>

              <tr>
                <div className=" resumeSection">
                  <div className="row m-auto">
                    <div className="col mt-1">
                      <h2>Education</h2>
                    </div>
                  </div>

                  {/* style={{width:"10vw",height:"  10vh"}} */}
                  <div className="m-auto">
                    <table className="experienceTable">
                      <tr>
                        <td className="w-75">
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
                            <p className="m-auto p-1"> Computer science</p>
                          </div>
                        </td>

                        <td className="w-75">
                          <div className="expOverviewPeriod expOverviewPeriod-dotted p-3">
                            <h3 className="m-auto p-1">2009-2012</h3>
                            <h3 className="m-auto p-1">Jönköping University</h3>
                            <div className="header2UnderLine"></div>
                            <h4 className="m-auto p-1">Bachelor degree</h4>
                            <div className="header3UnderLine mt-1"></div>

                            <p className="m-auto p-1">
                              Business administration
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </tr>

              <div className="resumeSection">
                <div className="row m-auto">
                  <div className="col mt-1">
                    <h2>Experiences</h2>
                  </div>
                </div>

                <table className="experienceTable">
                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">2019-12 - Present</p>
                        <p className="m-1 mx-auto">CGI Sverige AB</p>
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
                        <p className="m-auto">Full-stack .Net</p>
                        <p className="m-auto">Angular</p>
                      </td>
                    </div>
                  </tr>
                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-reverseColor">
                      <td>
                        <h3 className=" expHeader-reverseColor">
                          2019-10 - 2019-12
                        </h3>
                        <h3 className=" expHeader-reverseColor">
                          Unemployment
                        </h3>
                        <h4 className="expHeader-reverseColor">Bad luck</h4>
                        <p className="expHeader-reverseColor mx-auto w-75" style={{textAlign:"left"}}>
                            Due to prior financial complications Nexer AB left me speechless and I returned back to base.
                        </p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">2019-09 - 2019-09</p>
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
                        <p className="m-1 mx-auto">2015-09 - 2019-08</p>
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
                        <p className="expHeader-reverseColor mx-auto w-75" style={{textAlign:"left"}}>
                          I made a vow to never be unemployed again. <br></br>For three years I studied 50% at Midsweden University while working 100% at CGI Sverige AB.
                        </p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">2013-08 - 2015-01</p>
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
                        <p className="m-1 mx-auto">2013-05 - 2013-08</p>
                        <p className="m-1 mx-auto">Teleperformance Nordic AB</p>
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
                        <p className="expHeader-reverseColor mx-auto w-75" style={{textAlign:"left"}}>
                          I was sent away for new adventures despite my efforts.<br></br>Long story short I was welcomed back at Teleperformance and for that I am very grateful.
                        </p>
                      </td>
                    </div>
                  </tr>



                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">2012-09 - 2013-02</p>
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
                        <h3 className=" expHeader-reverseColor">
                        2009 - 2012
                        </h3>
                        <h4 className=" expHeader-reverseColor">
                            Full-time studies
                        </h4>

                        <p className="expHeader-reverseColor mx-auto w-75" style={{textAlign:"left"}}>
                            I studied and traveled around in Asia during my studies at Jönköping
                            International Business School. Good times.
                        </p>
                      </td>
                    </div>
                  </tr>

                  <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                      <td width="30%">
                        <p className="m-1 mx-auto">2011-08 - 2011-09</p>
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
                        <p className="m-1 mx-auto">2010-06 - 2010-08</p>
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
                        <p className="m-1 mx-auto">2007-11 - 2009-04</p>
                        <p className="m-1 mx-auto">Teleperformance Nordic AB</p>
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
                  </tr>

                </table>
              </div>
            </table>
          </div>
        </div>

  );
};

export default ResumeOverview;
