import React from 'react'
import {EdipGuy} from './EdipAvatar/EdipGuy';
import Typed from "react-typed"; 
import "../../IntersectionObserver.js";

import "./quickfacts.css";

const QuickFacts = () => {
    return (
        <div id="quickFacts" className="sectionAnimation">
            <div className="container d-block">
            <h1 className='flexCenter '>Quick facts!</h1>

                <div className="flexCenter">
                    <Typed 
                        className="typed-text" 
                        strings={
                            [
                            "C#",
                            "SQL",
                            "Kurdish meatballs",
                            "Javascript",
                            "Swedish meatballs",
                            "ASP.NET",
                            "HTML/CSS",
                            "Stockholm",
                            "Super honesty...",
                            "Powershell",
                            "Basket",
                            "Erika, Noah and Laleh"
                            ]
                        }
                        fadeOut={20}
                        typeSpeed={20}
                    
                        loop
                
                    >
                    </Typed>
                </div>
                    
                <div className="flexCenter mt-sm-5">
                    <EdipGuy></EdipGuy>
                </div>
                    
            </div>
        </div>
    )
}

export default QuickFacts;
