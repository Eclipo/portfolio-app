
import {React,useRef,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faClose, faTableCells,faPalette } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll';
import anime from 'animejs';
import "../IntersectionObserver.js";


export const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const [isRed, setRedOutline] = useState(false);

  const [isCbRedGreen, setCbRedGreen] = useState(false);

  const [isCbYellowBlue, setCbYellowBlue] = useState(false);


  const redToggle = useRef();
  const cbRedGreenToggle = useRef();
  const cbYellowBlueToggle = useRef();

  redToggle.current = isRed;
  cbRedGreenToggle.current = isCbRedGreen;
  cbYellowBlueToggle.current = isCbYellowBlue;

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

  function removeColors(input){
    document.getElementById('ulNavID').classList.remove(input);
    document.getElementById('introSectionID').classList.remove(input);
    document.getElementById('quickFacts').classList.remove(input);
    document.getElementById('aboutMe').classList.remove(input);
    document.getElementById('skills').classList.remove(input);
    document.getElementById('personality').classList.remove(input);
    document.getElementById('resumeOverview').classList.remove(input);
    document.getElementById('experiencesID').classList.remove(input);
    document.getElementById('portfolioID').classList.remove(input);
  }

  function addColors(input){
    document.getElementById('ulNavID').classList.add(input);
    document.getElementById('introSectionID').classList.add(input);
    document.getElementById('quickFacts').classList.add(input);
    document.getElementById('aboutMe').classList.add(input);
    document.getElementById('skills').classList.add(input);
    document.getElementById('personality').classList.add(input);
    document.getElementById('resumeOverview').classList.add(input);
    document.getElementById('experiencesID').classList.add(input);
    document.getElementById('portfolioID').classList.add(input);
  }

  const cbRedGreenMode = () => {
    setCbRedGreen(current => !current);

    if(cbRedGreenToggle.current === false){
      addColors('colorBlindRedGreen');

      if(cbYellowBlueToggle.current === true){
        cbYellowBlueMode();
      }
    }

    else{
      removeColors('colorBlindRedGreen');
    }
  }
 
  const cbYellowBlueMode = () => {
    setCbYellowBlue(current => !current);

    if(cbYellowBlueToggle.current === false){
      addColors('colorBlindYellowBlue');

      if(cbRedGreenToggle.current === true){
        cbRedGreenMode();
      }    
    }

    else{
      removeColors('colorBlindYellowBlue');
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
     <div className="containerNavbar" id="navContainerID">

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
  
        
          <ul className="navbar-nav p-1" id="ulNavID" style={{marginLeft:'1rem'}} >
          <div className='navBtnMenu'>
          <h3 className='m-1 p-1 text-left' style={{color:'var(--light-slate)' }}>
            Designer tools
          </h3>
            <button
              className="navSubIcon mx-auto"
              style={{borderRadius:'18px',borderColor:'var(--slate)'}}>
              <FontAwesomeIcon
                className="fntAwesome"
                icon={faTableCells}
                style={{color : isRed ? 'red' : 'var(--light-slate)' }}
                onClick={outlineMode}>
              </FontAwesomeIcon>
              <p className="row navP text-center">Red outliner</p>
            </button>

            <button
              className="navSubIcon mx-auto"
              style={{borderRadius:'18px',borderColor:'var(--slate)'}}>
              <FontAwesomeIcon
                className="fntAwesome"
                icon={faPalette}
                style={{color : isCbRedGreen ? 'red' : 'var(--light-slate)' }}
                onClick={cbRedGreenMode}>
              </FontAwesomeIcon>
              <p className="row navP text-center" >Color blindness <br></br>Red & Green</p>
            </button>

            <button
              className="navSubIcon mx-auto"
              style={{borderRadius:'18px',borderColor:'var(--slate)'}}>
              <FontAwesomeIcon
                className="fntAwesome"
                icon={faPalette}
                style={{color : isCbYellowBlue ? 'red' : 'var(--light-slate)' }}
                onClick={cbYellowBlueMode}>
              </FontAwesomeIcon>
              <p className="row navP text-center" >Color blindness <br></br>Yellow & Blue</p>
            </button>
          </div>
            <li className="nav-item active" style={{marginTop:'-0.25rem'}}>
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

            <li className="nav-item">
              <Link smooth={true} to={"experiencesID"} id="navLinkExperiencesID" className="nav-link" href="#" tabIndex={6}><h3 className='navLinkH3'>Major experiences</h3></Link>
            </li>


            <li className="nav-item">
              <Link smooth={true} to={"resumeOverview"} id="navLinkResumeOverviewID" className="nav-link" href="#" tabIndex={5}><h3 className='navLinkH3'>Resumé Overview</h3></Link>
            </li>

            <li className="nav-item" >
              <Link smooth={true} to={"personality"} id="navLinkPersonalityID" className="nav-link" href="#" tabIndex={4}><h3 id="navLinkPersonalityH3ID" className='navLinkH3'>Personality</h3></Link>
            </li>
            

            <li className="nav-item">
            <Link smooth={true} to={"portfolioID"} id="navLinkPortfolioID" className="nav-link" href="#" tabIndex={7}><h3 className='navLinkH3'>The story</h3></Link>
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
