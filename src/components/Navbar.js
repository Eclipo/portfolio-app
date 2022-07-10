
import {React,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faFastForward,faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll';
// import '../components/navColorListener.js';


export const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  // const [change, changeMode] = useState(false);

  const handleMode = () => {
    //  toggle
    // changeMode(current => !current);

    // or set to true
    // setIsActive(true);
    document.body.style.backgroundColor = 'var(--primary-white)';
    
    document.getElementById('customNav').style.display='none';
    document.getElementById('customNav').style.opacity='0';
    document.getElementById('fullNavbarID').style.display='none';

    
    // document.getElementById('introSectionID').style.display='none';

    // document.getElementById('quickFacts').style.display='none';
    // document.getElementById('aboutMe').style.display='none';
    // document.getElementById('skills').style.display='none';
    // document.getElementById('personality').style.display='none';
    const wrappers = document.querySelectorAll(".sectionAnimation");
    wrappers.forEach((entry) => {
    entry.setAttribute('style','display:none');
    });

    document.getElementById('navHomeID').style.display='none';
    document.getElementById('navQuickFactsID').style.display='none';
    document.getElementById('navTestimonialsID').style.display='none';
    document.getElementById('navSkillsID').style.display='none';
    document.getElementById('navPersonalityID').style.display='none';
  };

  const handleClick = () => {
    //  toggle
    setIsActive(current => !current);

    // or set to true
    // setIsActive(true);
  };

    return (
     <div style={{marginTop:'-3rem'}}>

     
      <nav id ="overviewNav" className="navbar d-block m-3 sticky-top navbar-collapse navbar-light ">
        <div className="container-fluid m-0 p-0" >
      
        </div>
      </nav>

        <nav id ="customNav" className="navbar d-block m-3 sticky-top navbar-collapse navbar-light ">
      <div className="container-fluid m-0 p-0" id ="fullNavbarID">
        
       
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
  
        
          <ul className="navbar-nav pb-3 pt-3 mt-2" >
          <div className='m-auto'>
          <Link  to={"fastForwardID"} className="nav-link" href="#">

          

            <button
              className="bg-transparent navSubIcon"
            >
              <FontAwesomeIcon
                icon={faFastForward}
                color="var(--slate)"
                className="fntAwesome navSubIcon "
                onClick={handleMode}
              >
              </FontAwesomeIcon>
              <p className="row navP text-center" >Overview<br></br>version</p>

            </button>
            </Link>
          
        </div>
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
  </div>
    )
}
