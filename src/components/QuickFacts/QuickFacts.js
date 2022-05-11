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
                            "Quack quack!",
                            "I'm a duck!",
                            "I don't like Javascript.",
                            "Particularly var.",
                            "Typescript is better.",
                            "I don't use Typescript.", 
                            "Bootstrap is fastfood.", 
                            "It's addictive",
                            "and unhealthy.",
                            "I use Bootstrap.",
                            "Centering an element is",
                            "exhausting.",
                            "Are you writing",
                            "self-explainatory code?",
                            "What are you five?",
                            "Just comment already..."
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
