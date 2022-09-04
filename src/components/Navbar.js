
import {React,useRef,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faClose, faFastForward,faArrowDown, faTableCells } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll';
import anime from 'animejs';
import "../IntersectionObserver.js";

// import '../components/navColorListener.js';


export const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const [isRed, setRedOutline] = useState(false);

  const redToggle = useRef();
  redToggle.current = isRed;

  // const [change, changeMode] = useState(false);

  const outlineMode = () => {
    setRedOutline(current => !current);

    let doc = document.querySelectorAll('*');
    if(redToggle.current === false){
      doc.forEach(el => {
        el.style.outline='1px solid red';
      }); 
    }

    else{
      doc.forEach(el => {
        el.style.outline='';
      }); 
    }
  
    
  }
 

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

  const animeToggle = anime.timeline({
    targets:'#navIconID',
    autoplay:false,
    loop:false
  });

  animeToggle.add({
    duration:2500,
    rotate:'2turn'
  });
  

  
  const handleClick = () => {
    //  toggle
    setIsActive(current => !current);

    animeToggle.restart();    
    
    // if(isActive){
    //   disableScroll.on();
    // }

    // else{
    //   disableScroll.of();
    // }
    // or set to true
    // setIsActive(true);
  };

    return (
     <div className="containerNavbar">

     
      <nav id ="overviewNav" className="navbar">
        <div className="container-fluid m-0 p-0" >
      
        </div>
      </nav>

        <nav id ="customNav" className="navbar bg-transparent">
      <div className="container-fluid m-0 p-0" id ="fullNavbarID">
        
       
        <button id="navbarTogglerID" className="navbar-toggler bg-transparent" type="button" 
       
        onClick={handleClick}
        
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={ isActive ? faClose : faBars } id ="navIconID" style={{
          color: isActive ? 'var(--tint-navy)' : 'var(--tint-navy)' 
        }}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
        
          <ul className="navbar-nav p-1 mt-2" style={{marginLeft:'1rem'}} >
          <div className='navBtnMenu'>
            <button
              className="navSubIcon p-1 mb-4"
              style={{
                borderRadius:'18px',
              borderColor:'var(--slate)'}}
            >
              <FontAwesomeIcon
                icon={faTableCells}
                style={{
                  color : isRed ? 'red' : 'var(--light-slate)' 
                }}
                className="fntAwesome "
                onClick={outlineMode}
              >
              </FontAwesomeIcon>
              <p className="row navP text-center" >Red outline<br></br>tool</p>

            </button>
          
        </div>
            <li className="nav-item active">
              <Link smooth={true} to={"introSectionID"} id="navLinkHomeID" className="nav-link" href="#" tabIndex={0}><h3 id="navLinkHomeH3ID" className='navLinkH3'>HOME</h3><span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link  smooth={true} to={"quickFacts"} id="navLinkQuickFactsID" className="nav-link" href="#" tabIndex={1}><h3 className='navLinkH3'>Quick Facts</h3></Link>
            </li>

            <li className="nav-item">
              <Link  smooth={true} to={"testimonials"} id="navLinkAboutID"  className="nav-link" href="#" tabIndex={2}><h3 className='navLinkH3'>About</h3></Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to={"skills"} id="navLinkSkillsID" className="nav-link" href="#" tabIndex={3}><h3 className='navLinkH3'>Skills</h3></Link>
            </li>

            <li className="nav-item" >
              <Link smooth={true} to={"personality"} id="navLinkPersonalityID" className="nav-link" href="#" tabIndex={4}><h3 id="navLinkPersonalityH3ID" className='navLinkH3'>Personality</h3></Link>
            </li>
            

            <li className="nav-item">
              <Link smooth={true} to={"resumeOverview"} id="navLinkResumeOverviewID" className="nav-link" href="#" tabIndex={5}><h3 className='navLinkH3'>Resumé Overview</h3></Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to={"experiencesID"} id="navLinkExperiencesID" className="nav-link" href="#" tabIndex={6}><h3 className='navLinkH3'>Major experiences</h3></Link>
            </li>

            <li className="nav-item">
            <Link smooth={true} to={"portfolioID"} id="navLinkPortfolioID" className="nav-link" href="#" tabIndex={7}><h3 className='navLinkH3'>Portfolio</h3></Link>
            </li>
      
            <li className="nav-item">
              <a className="nav-link" href="#" tabIndex={8}><h3 className='navLinkH3'>Reviews</h3></a>
            </li>

           
            <li className="nav-item mb-5">
              <a className="nav-link" href="#" tabIndex={9}><h3 className='navLinkH3'>Contact</h3></a>
            </li>
           
            
          </ul>
         
        </div>
      </div>
    </nav>
  </div>
    )
}
