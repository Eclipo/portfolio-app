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
                            "Erika, Noah and Laleh",
                            "I often find myself saying:",
                            "I don't know why it works.",
                            "But I'm happy that it does!",
                            "Nobody uses javascript. It's old tech",
                            "var sucks...",
                            "Typescript is better.", 
                            "margin:auto !important",
                            "style='just center it already!'",
                            "Bootstrap is like fastfood.", 
                            "It's addictive and not healthy.",
                            "Kurdish meatballs",
                            "Swedish meatballs",
                            "Was it left or right join?",
                            "DROP TABLE!!!",
                            "Stockholm",
                            "Super honesty!",
                            "Basket",
                            "Coffee",
                            "Sonic: Chemical Plant",
                            "Super Mario: File select",
                            "Zelda: Song of storms"
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
