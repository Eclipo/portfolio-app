import React from 'react'
import {EdipGuy} from './EdipAvatar/EdipGuy';
import Typed from "react-typed"; 
import "../../IntersectionObserver.js";

import "./quickfacts.css";

const QuickFacts = () => {
    return (
        <div id="quickFacts" className="sectionAnimation">
         <div className='sectionLine' style={{backgroundColor:'var(--primary-yellow)'}}></div> 
            <div className="container d-block">
            <h1 className='flexCenter' style={{color:"var(--primary-yellow"}}>Quick facts!</h1>
                    
                <div className="flexCenter">
                    <EdipGuy></EdipGuy>
                </div>

                <div className='container'>
                    <div className='row m-auto m-1'>
                    <div className='col m-1'>
                            <div className='quickCard'>
                                <span className='circ'></span>                               
                                <h4 className=" quickH4" style={{marginTop:"-5rem"}}>FAMILLY</h4>
                            </div>

                        </div>
                            <div className='col m-1'>
                            <div className='quickCard'>
                            <span className='circ'></span>                               

                                    <h4 className="quickH4" style={{marginTop:"-5rem"}}>SWEDEN</h4>
                                
                            </div>
                            </div>
                    </div>
                   
                    <div className='row m-auto m-1'>
                        <div className='col m-1'>
                            <div className='quickCard'>
                            <span className='circ'></span>                               

                                    <h4 className="quickH4" style={{marginTop:"-6rem"}}>WEB<br></br>DEVELOPER</h4>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
               
                    
            </div>
       
        </div>
    )
}

export default QuickFacts;
