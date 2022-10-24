import React from 'react'
import "../../IntersectionObserver.js";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faEnvelope
  } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
    return (
        <div id="contactID" className="sectionAnimation">
         <div className='sectionLine' style={{backgroundColor:'var(--slate)'}}></div> 
            <div className="container-sm">
                <h1 className='flexCenter' style={{color:"var(--slate)"}}>Contact</h1>
                <p className='techText mx-auto' style={{color:"var(--lightest-slate)"}}>
                    At the moment I am not looking for any new adventures but I am always open to know decent people.
                    Particularly those who love to work with UX, .Net and Angular.
                    <br></br><br></br>
                    Thank you for your time and I wish you an awesome day!<br></br> 
                    Best regards<br></br>
                    Edip Sarac
                </p>
                <div className='container-sm'>
                        
                        <a 
                             className="emailBtn mailText"
                            href="mailto:edipsarac.work@gmail.com" 
                            rel="noopener noreferrer" 
                            target="_blank">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="my-auto"
                                style={{color:'var(--dark-navy)'}}
                                
                            />
                        </a>
                    
                    <a 
                            class="emailBtn linkedInIcon my-auto" 
                            href="https://se.linkedin.com/in/edipsarac" 
                            rel="noopener noreferrer" 
                            target="_blank">in
                        </a>
                    

                </div>
            </div>
            <div className='flexCenter'>
            <p style={{color:"var(--slate)"}}>
                Designed and built by Edip Sarac
            </p>
            </div>

        </div>
        
    )
}

export default Contact;
