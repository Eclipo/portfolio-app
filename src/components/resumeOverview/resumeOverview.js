
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
                    <h1 style={{color:"var(--primary-red"}}>Resumé Overview</h1>
                    <PlayRefresh id='ResumeAnimation' playBoolean={true}></PlayRefresh>

                    <LightSaber></LightSaber>

                    <div style={{width:"100%",marginTop:"-40rem !important"}}>
                        <table className="resumeTable .table-striped  .table-responsive" style={{backgroundColor:"var(--navy)"}}>
                        <tr>                   

                              
                                <div className="resumeSection" >
                                <div className="row m-auto">

                                    <div className="col mt-1">
                                        <h2>Languages</h2>
                                    </div>
                                </div>
                                    {/* style={{width:"10vw",height:"  10vh"}} */}
            <div >                            
            <table className="experienceTable">
                <tr>
                    <td>
                        <div className="expOverviewPeriod expOverviewPeriod-dotted p-1" >
                            <h3>Swedish</h3>
                                <div className="header3UnderLine"></div>
                                <p className='m-auto p-1'>Native</p>
                        </div>
                    </td>
                    <td>
                        <div className="expOverviewPeriod expOverviewPeriod-dotted p-1" >
                            <h3>English</h3>
                            <div className="header3UnderLine"></div>
                            <p className='m-auto p-1'>Good</p>
                        </div>
                    </td>
                    <td >
                        <div className="expOverviewPeriod expOverviewPeriod-dotted p-1" >
                            <h3>Turkish</h3>
                            <div className="header3UnderLine"></div>
                            <p className='m-auto p-1'>Basic</p>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <div className="expOverviewPeriod expOverviewPeriod-dotted p-2" >
                            <h3>Kurdish, French and Mandarin</h3>
                                <div className="header3UnderLine"></div>
                                <p className="m-auto p-1" >Almost nothing</p>
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
                    <td >
                        <div className="expOverviewPeriod expOverviewPeriod-dotted p-3">
                            <h3 className="m-auto p-1">2015-2018</h3>
                            <h3 className="m-auto p-1" >Mid Sweden Unviersity</h3> 
                            <div className="header2UnderLine"></div> 
                            <h4 className="m-auto p-1"> Higher education diploma</h4>
                            <div className="header3UnderLine mt-1"></div> 
                            <p className="m-auto p-1"> Computer science</p>
                        </div>
                    </td>
                

                    <td >
                        <div className="expOverviewPeriod expOverviewPeriod-dotted p-3" >
                            <h3 className="m-auto p-1">2009-2012</h3>
                            <h3 className="m-auto p-1" >Jönköping University</h3> 
                            <div className="header2UnderLine"></div> 
                            <h4 className="m-auto p-1">Bachelor degree</h4>
                            <div className="header3UnderLine mt-1"></div> 

                            <p className="m-auto p-1">Business administration</p>
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
                    <div className="expOverviewPeriod expOverviewPeriod-dotted" >
                    <td width="30%">
                        <p className="m-1">2019-12 - Present</p>
                        <p className="m-1">CGI Sverige AB</p>     
                    </td>
                  
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>

                    <td width="25%">
                    <p className="m-1">Developer consultant</p>

                        
                    </td>
                    
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
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
                            <h3 className=" expHeader-reverseColor">2019-10 - 2019-12</h3>
                            <h3 className=" expHeader-reverseColor">Unemployment</h3>
                            <h4 className="expHeader-reverseColor">Bad luck</h4>
                        </td>
                    </div>
                </tr>

                <tr>
                    <div className="expOverviewPeriod expOverviewPeriod-dotted">
                    <td width="30%">
                        <div className="header2 ">2019-09 - 2019-09
                            <div className="header2 " >Nexer AB</div>
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
                            <div className="header2 " >CGI Sverige AB</div> 
                        </div>
                    </td>
                  
                    <td width="5%">
                        <div className="header2VerticalUnderLine" ></div>
                    </td>

                    <td width="25%">
                        <div className="header2">Business consultant</div>
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
                            <h3 className=" expHeader-reverseColor">2015-02 - 2015-08</h3>
                            <h3 className=" expHeader-reverseColor">Unemployment</h3>
                            <h4 className="expHeader-reverseColor">The lifechanging decision</h4>
                            <p  className="expHeader-reverseColor mx-auto w-75">
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
                            <div className="header2 " >Software Innovation AB</div> 
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
                        <div className="header2 " >KMD AB</div>
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
                        <div className="header2 " >Edip Sarac AB</div>
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
                        <div className="header2 " >TeliaSonera AB</div>
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

                        
                    </div>
                </div>
            </div>
        </div>


        )
    }
    
    export default ResumeOverview;
    