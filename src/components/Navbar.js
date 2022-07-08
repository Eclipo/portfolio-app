
import {React,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll';
// import '../components/navColorListener.js';


export const Navbar = () => {

  const [isActive, setIsActive] = useState(false);


  const handleClick = () => {
    //  toggle
    setIsActive(current => !current);

    // or set to true
    // setIsActive(true);
  };

    return (
     
        <nav id ="customNav" className="navbar d-block m-3 sticky-top navbar-collapse navbar-light ">
      <div className="container-fluid m-0 p-0" >
        
       
        <button id="navbarTogglerID" className="navbar-toggler" type="button" 
         style={{
          borderColor: isActive ? 'var(--primary-orange)' : 'var(--slate)'
        }}
        onClick={handleClick}
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} id ="navIconID" style={{
          color: isActive ? 'var(--slate)' : 'var(--primary-orange)' 
        }}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul className="navbar-nav pb-3 pt-3 mt-2">
         
            <li className="nav-item active">
              <Link smooth={true} to={"introSectionID"} className="nav-link" href="#"><p>HOME</p><span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link  smooth={true} to={"quickFacts"} className="nav-link" href="#"><p>Quick Facts</p></Link>
            </li>

            <li className="nav-item">
              <Link  smooth={true} to={"testimonials"} className="nav-link" href="#"><p>About</p></Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to={"skills"} className="nav-link" href="#"><p>Skills</p></Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to={"personality"} className="nav-link" href="#"><p>Personality</p></Link>
            </li>
            

            <li className="nav-item">
              <Link smooth={true} to={"resumeOverview"} className="nav-link" href="#"><p>Resumé Overview</p></Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to={"experiencesID"} className="nav-link" href="#"><p>Major experiences</p></Link>
            </li>

            <li className="nav-item">
            <Link smooth={true} to={"portfolioID"} className="nav-link" href="#"><p>Portfolio</p></Link>
            </li>
      
            <li className="nav-item">
              <a className="nav-link" href="#">Reviews</a>
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
