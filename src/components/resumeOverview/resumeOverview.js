
import React from 'react';

import "../resumeOverview/resumeOverview.css";
import { LightSaber } from './lightSaber/lightSaber';
import "../../IntersectionObserver.js";
import PlayRefresh from '../PlayRefresh/PlayRefresh.js';


const ResumeOverview = () => {

    return (
        <div id="resumeOverview" className="sectionAnimation">
            <div  className="header-wraper" style={{marginTop:"-1.5rem"}} >
            
                <div className="main-info" style={{marginTop:"1rem"}}>
                    <h1 className="resumeHeaderOne">Resumé Overview</h1>
                    <PlayRefresh id='ResumeAnimation' playBoolean={true}></PlayRefresh>

                    <LightSaber></LightSaber>

                    <div style={{width:"100%",marginTop:"-40rem !important"}}>
                        <table className="resumeTable .table-striped  .table-responsive" style={{backgroundColor:"var(--navy)"}}>
                        <tr>                   

                              
                                <div className=" resumeSection" >
                                <div className="row"  style={{margin:"auto",marginBottom:"2vh"}}>

                                    <div className="col">
                                        <h3>Languages</h3>
                                    </div>
                                </div>
                                    {/* style={{width:"10vw",height:"  10vh"}} */}
            <div  style={{margin:"auto"}}>                            
            <table className="experienceTable">
                <tr>
                    <td>
                        <div className="expOverviewPeriod expOverviewPeriod-dotted" >
                            <div className="expHeader ">Swedish
                                <div className="header3UnderLine" style={{margin:"0.25rem"}}></div>
                                <div className="header3 " >Native</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="expOverviewPeriod expOverviewPeriod-dotted" >
                            <div className="expHeader ">English
                            <div className="header3UnderLine" style={{margin:"0.25rem"}}></div>
                                <div className="header3 " >Good</div>
                            </div>
                        </div>
                    </td>
                    <td >
                        <div className="expOverviewPeriod expOverviewPeriod-dotted" >
                            <div className="expHeader ">Turkish
                            <div className="header3UnderLine" style={{margin:"0.25rem"}}></div>
                                <div className="header3 " >Basic</div>
                            </div>
                        </div>
                    </td>
                    <td width="75%">
                        <div className="expOverviewPeriod expOverviewPeriod-dotted" >
                            <div className="expHeader ">Kurdish, French and Mandarin
                                <div className="header3UnderLine"></div>
                                <div className="header3 " >Almost nothing</div>
                            </div>
                        </div>
                    </td>
                </tr>

                </table>

                                        </div>
                                </div>

                            
                        </tr>

                        <tr>                   

    
    <div className=" resumeSection">
    <div className="row"  style={{margin:"auto",marginBottom:"2vh"}}>

        <div className="col">
            <h3 className="header2">Education</h3>
        </div>
    </div>


        {/* style={{width:"10vw",height:"  10vh"}} */}
         <div className="row" style={{margin:"auto"}}>

         <table className="experienceTable">
                <tr>
                    <td style={{padding:"0.5rem"}}>
                        <div className="expOverviewPeriod expOverviewPeriod-dotted" style={{width:"17rem",height:"11.75rem",margin:"auto"}} >
                            <div className="header">2015-2018</div>
                            <div className="header2" >Mid Sweden Unviersity</div> 
                            <div className="header2UnderLine"></div> 

                            <div className="header3">Higher education diploma</div>
                            <div className="header3UnderLine"></div> 

                            <div className="normalText">Computer science</div>
                            <div className="header4UnderLine"></div> 
                        </div>
                    </td>
                

                    <td style={{padding:"0.5rem"}}>
                        <div className="expOverviewPeriod expOverviewPeriod-dotted"  style={{width:"17rem",height:"11.75rem",margin:"auto"}} >
                            <div className="header">2009-2012</div>
                            <div className="header2" >Jönköping University</div> 
                            <div className="header2UnderLine"></div> 

                            <div className="header3">Bachelor degree</div>
                            <div className="header3UnderLine"></div> 

                            <div className="normalText">Business administration</div>
                            <div className="header4UnderLine"></div> 
                        </div>
                    </td>
                    
                    
                </tr>

                </table>
   

        </div>
    </div>



</tr>




        <div className="resumeSection">
            <div className="row"  style={{margin:"auto"}}>

                <div className="col">
                <h3>Experiences</h3>
                </div>
            </div>


            <table className="experienceTable">
                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted" >
                    <td width="30%">
                        <div className="header2">2019-12 - Present
                            <div className="header2" >CGI Sverige AB</div>     
                        </div>
                    </td>
                  
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>

                    <td width="25%">
                        <div className="header2" >Developer consultant</div>
                        
                    </td>
                    
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>
                    
                    <td width="30%">
                        <div className="header2">Full-stack .Net</div>
                    </td>
                    </div>
                </tr>
                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-reverseColor">
                        <td>
                            <div className="expHeader expHeader-reverseColor">2019-10 - 2019-12</div>
                            <div className="expHeader expHeader-reverseColor">Unemployment</div> 
                            <div className="header2 expHeader-reverseColor"><p>Bad luck</p></div> 

                        </td>
                    </div>
                </tr>

                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                    <td width="30%">
                        <div className="header2 ">2019-09 - 2019-09
                            <div className="header2" >Nexer AB</div>
                        </div>
                         
                    </td>
                  
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>

                    <td width="25%">
                        <div className="header3 ">Developer consultant</div>
                    </td>
                    
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>
                    
                    <td width="30%">
                        <div className="header2">Null</div>
                    </td>
                    </div>
                </tr>
                
                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                    <td width="30%">
                        <div className="header2 ">2015-09 - 2019-08
                            <div className="header2" >CGI Sverige AB</div> 
                        </div>
                    </td>
                  
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>

                    <td width="25%">
                        <div className="header2 ">Business consultant</div>
                    </td>
                    
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>
                    
                    <td width="30%">
                        <div className='header2'>Consulting and testing</div>
                    </td>
                    </div>
                </tr>

                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-reverseColor">
                        <td>
                            <div className="expHeader expHeader-reverseColor">2015-02 - 2015-08</div>
                            <div className="expHeader expHeader-reverseColor" >Unemployment</div> 
                            <div className="header2 expHeader-reverseColor">
                                <p>The lifechanging decision</p>
                            </div>
                                <p  className="header3 expHeader-reverseColor">
                                    I made a vow to never be unemployed again.
                                    I decided to become a software developer. For almost three years I studied 50% at Midsweden University 
                                    and worked 100% at CGI Sverige AB.
                                </p> 

                        </td>
                    </div>
                </tr>

                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                    <td width="30%">
                        <div className="header2">2013-08 - 2015-01
                            <div className="header2" >Software Innovation AB</div> 
                        </div>
                    </td>
                  
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>

                    <td width="25%">
                        <div className="header2 ">Sales assistant</div>
                    </td>
                    
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>
                    
                    <td width="30%">
                        <div className="header2">Leads</div>
                    </td>
                    </div>
                </tr>

                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                    <td width="30%">
                        <div className="header2">2013-05 - 2013-08
                            <div className="header2 " >Teleperformance Nordic AB</div> 
                        </div>
                    </td>
                  
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>

                    <td width="25%">
                        <div className="header2 ">Customer service</div>
                    </td>
                    
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>
                    
                    <td width="30%">
                        <div className="header2">Support</div>
                    </td>
                    </div>
                </tr>

                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-reverseColor">
                        <td>
                            <div className="expHeader expHeader-reverseColor">2013-03 - 2013-04</div>
                            <div className="expHeader expHeader-reverseColor" >Unemployment</div> 
                            <div className="header2 expHeader-reverseColor">
                                <p>The injust despair</p> 
                            </div> 

                        </td>
                    </div>
                </tr>

                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                    <td width="30%">
                        <div className="header2 ">2012-09 - 2013-02
                        <div className="header2" >KMD AB</div>
                        </div>
                    </td>
                  
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>

                    <td width="25%">
                        <div className="header2 ">Tester</div>
                    </td>
                    
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>
                    
                    <td width="30%">
                        <div className="header2">SAP </div>
                    </td>
                    </div>
                </tr>

                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-reverseColor">
                        <td>
                            <div className="expHeader expHeader-reverseColor">2009 - 2012</div>
                            <div className="header2 expHeader-reverseColor" >Full-time studies</div> 
                            <div className="header3 expHeader-reverseColor">
                            I entirely focused on my studies at Jönköping International Business School.</div> 

                        </td>
                    </div>
                </tr>
                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                    <td width="30%">
                        <div className="header2 ">2011-08 - 2011-09
                        <div className="header2" >Edip Sarac AB</div>
                        </div>
                    </td>
                  
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>

                    <td width="25%">
                        <div className="header2 ">Solo trader</div>
                    </td>
                    
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>
                    
                    <td width="30%">
                        <div className="">Marketing analysis </div>
                    </td>
                    </div>
                </tr>

                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                    <td width="30%">
                        <div className="header2 ">2010-06 - 2010-08
                        <div className="header2" >TeliaSonera AB</div>
                        </div>
                    </td>
                  
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>

                    <td width="25%">
                        <div className="header2 ">Customer service</div>
                    </td>
                    
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>
                    
                    <td width="30%">
                        <div className="header2">Support </div>
                    </td>
                    </div>
                </tr>

                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                    <td width="30%">
                        <div className="header2">2007-11 - 2009-04
                            <div className="header2 " >Teleperformance Nordic AB</div> 
                        </div>
                    </td>
                  
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>

                    <td width="25%">
                        <div className="header2 ">Customer service</div>
                    </td>
                    
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>
                    
                    <td width="30%">
                        <div className="header2">Support</div>
                    </td>
                    </div>
                </tr>
                
            </table>
      
        
    
    </div>

    </table>


{/* 
                        <tr>
                            <div className="expPeriod">Year</div>
                        </tr>
                        <tr>
                            <div className="expPeriod">07-09</div>
                        </tr>
                        <tr>
                            <div className="expPeriod">10-10</div>
                        </tr>
                        <tr>
                            <div className="expPeriod">11-11</div>
                        </tr>
                        <tr>
                            <div className="expPeriod">12-13</div>
                        </tr>
                        <tr>
                            <div className="expPeriod">13-13</div>
                        </tr>
                        <tr>
                            <div className="expPeriod">13-14</div>
                        </tr>
                        <tr>
                            <div className="expPeriod">15-19</div>
                        </tr>
                        <tr>
                            <div className="expPeriod">19-19</div>
                        </tr>
                        <tr > */}
                     
                        

                        
                    </div>
                </div>
            </div>
        </div>


        )
    }
    
    export default ResumeOverview;
    