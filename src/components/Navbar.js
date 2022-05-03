
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll';
// import '../components/navColorListener.js';


export const Navbar = () => {


    return (
     
        <nav id ="customNav" className="navbar d-block m-3 sticky-top navbar-collapse navbar-light ">
      <div className="container-fluid m-0 p-0" >
        
       
        <button id="navbarTogglerID" class="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} id ="navIconID"/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav pb-3 pt-3 mt-2">
            <li className="nav-item active">
              <Link smooth={true} to={"home"} className="nav-link" href="#">HOME<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link  smooth={true} to={"quickFacts"} className="nav-link" href="#">Quick Facts</Link>
            </li>

            <li className="nav-item">
              <Link  smooth={true} to={"testimonials"} className="nav-link" href="#">About</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to={"skills"} className="nav-link" href="#">Skills</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to={"personality"} className="nav-link" href="#">Personality</Link>
            </li>
            

            <li className="nav-item">
              <Link smooth={true} to={"resumeOverview"} className="nav-link" href="#">Resumé Overview</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to={"experiencesID"} className="nav-link" href="#">Major experiences</Link>
            </li>

      
            <li className="nav-item">
              <a className="nav-link" href="#">Reviews</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
           
            
          </ul>
         
        </div>
      </div>
    </nav>
    )
}
