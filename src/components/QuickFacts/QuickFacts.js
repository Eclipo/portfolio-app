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
                                
                                    <h4 className="quickH4">I have a <br></br>beautiful familly</h4>
                                
                            </div>
                        </div>
                            <div className='col m-1'>
                            <div className='quickCard'>
                                
                                    <h4 className="quickH4">7 years experience <br></br>in IT</h4>
                                
                            </div>
                            </div>
                    </div>
                   
                    <div className='row m-auto m-1'>
                        <div className='col m-1'>
                            <div className='quickCard'>
                                
                                    <h4 className="quickH4">.Net & Angular <br></br>developer</h4>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
               
                    
            </div>
       
        </div>
    )
}

export default QuickFacts;
