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
                    <Typed 
                        className="typed-text" 
                        strings={
                            [
                            "I have a beautiful family",
                            "I'm born in Sweden",
                            "I with Kurdish origins from Turkey.",
                            "I am a fullstack developer in .Net"
                            ]
                        }
                        fadeOut={20}
                        typeSpeed={20}
                    
                        loop
                
                    >
                    </Typed>
                </div>
                    
                <div className="flexCenter">
                    <EdipGuy></EdipGuy>
                </div>
                    
            </div>
       
        </div>
    )
}

export default QuickFacts;
