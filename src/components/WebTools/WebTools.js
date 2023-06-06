import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faEye,
  faEyeSlash,
  faTools,
  faAnglesLeft,
  faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import "./webtools.css"
export const WebTools = () => {
    const [isRed, setRedOutline] = useState(false);

    const [isCbRedGreen, setCbRedGreen] = useState(false);
  
    const [isCbYellowBlue, setCbYellowBlue] = useState(false);
  
    const [isCbTotal, setCbTotal] = useState(false);
  
    const [isTools, setTools]=useState(false);
    
    const toolsToogle=useRef();
    const redToggle = useRef();
    const cbRedGreenToggle = useRef();
    const cbYellowBlueToggle = useRef();
    const cbTotalToggle = useRef();
  
    toolsToogle.current=isTools;
    redToggle.current = isRed;
    cbRedGreenToggle.current = isCbRedGreen;
    cbYellowBlueToggle.current = isCbYellowBlue;
    cbTotalToggle.current = isCbTotal;
  
    const handleClickTools=()=>{
      setTools((current) => !current);
    }

    const outlineMode = () => {
      setRedOutline((current) => !current);
  
      let doc = document.querySelectorAll("*");
      if (redToggle.current === false) {
        doc.forEach((el) => {
          el.style.outline = "1px solid red";
        });
      } else {
        doc.forEach((el) => {
          el.style.outline = "";
        });
      }
    };
  
    function removeColors(input) {
      document.getElementById("ulNavID").classList.remove(input);
      document.getElementById("quickFacts").classList.remove(input);
      document.getElementById("about").classList.remove(input);
      document.getElementById("skills").classList.remove(input);
      document.getElementById("personality").classList.remove(input);
      document.getElementById("resumeOverview").classList.remove(input);
      document.getElementById("experiencesID").classList.remove(input);
      document.getElementById("contactID").classList.remove(input);
    }
  
    function addColors(input) {
      // document.getElementById("ulNavID").classList.add(input);
      document.getElementById("quickFacts").classList.add(input);
      document.getElementById("about").classList.add(input);
      document.getElementById("skills").classList.add(input);
      document.getElementById("personality").classList.add(input);
      document.getElementById("resumeOverview").classList.add(input);
      document.getElementById("experiencesID").classList.add(input);
      document.getElementById("contactID").classList.add(input);
    }
  
    const cbRedGreenMode = () => {
      setCbRedGreen((current) => !current);
      //
      if (cbRedGreenToggle.current === false) {
        addColors("colorBlindRedGreen");
  
        document.body.classList.remove("bodyDefaultBg");
        document.getElementById("root").classList.remove("bodyDefaultBg");
  
        document.body.classList.add("bodyRedGreen");
        document.getElementById("root").classList.add("bodyRedGreen");
  
        if (cbYellowBlueToggle.current === true) {
          cbYellowBlueMode();
        }
  
        if (cbTotalToggle.current === true) {
          cbTotalMode();
        }
      } else {
        removeColors("colorBlindRedGreen");
        document.body.classList.remove("bodyRedGreen");
        document.getElementById("root").classList.remove("bodyRedGreen");
  
        document.body.classList.add("bodyDefaultBg");
        document.getElementById("root").classList.add("bodyDefaultBg");
      }
    };
  
    const cbYellowBlueMode = () => {
      setCbYellowBlue((current) => !current);
  
      if (cbYellowBlueToggle.current === false) {
        addColors("colorBlindYellowBlue");
  
        document.body.classList.remove("bodyDefaultBg");
        document.getElementById("root").classList.remove("bodyDefaultBg");
  
        document.body.classList.add("bodyYellowBlue");
        document.getElementById("root").classList.add("bodyYellowBlue");
  
        if (cbRedGreenToggle.current === true) {
          cbRedGreenMode();
        }
  
        if (cbTotalToggle.current === true) {
          cbTotalMode();
        }
      } else {
        removeColors("colorBlindYellowBlue");
  
        document.body.classList.remove("bodyYellowBlue");
        document.getElementById("root").classList.remove("bodyYellowBlue");
  
        document.body.classList.add("bodyDefaultBg");
        document.getElementById("root").classList.add("bodyDefaultBg");
      }
    };
  
    const cbTotalMode = () => {
      setCbTotal((current) => !current);
  
      if (cbTotalToggle.current === false) {
        addColors("colorBlindTotal");
  
        document.body.classList.remove("bodyDefaultBg");
        document.getElementById("root").classList.remove("bodyDefaultBg");
  
        document.body.classList.add("bodyTotalGray");
        document.getElementById("root").classList.add("bodyTotalGray");
  
        if (cbRedGreenToggle.current === true) {
          cbRedGreenMode();
        }
  
        if (cbYellowBlueToggle.current === true) {
          cbYellowBlueMode();
        }
      } else {
        removeColors("colorBlindTotal");
  
        document.body.classList.remove("bodyTotalGray");
        document.getElementById("root").classList.remove("bodyTotalGray");
  
        document.body.classList.add("bodyDefaultBg");
        document.getElementById("root").classList.add("bodyDefaultBg");
      }
      
    };

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const toolsContainer = document.getElementById('tools');

      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        
          if(prevScrollPos > currentScrollPos || currentScrollPos < 10){
            
            toolsContainer.classList.remove('hideToolsMenu');
            setTimeout(() => {
              setVisible(true);        
            }, 500);
          }

          else{
            toolsContainer.classList.add('hideToolsMenu');
            setTimeout(() => {
              setVisible(false);        
            }, 500);          }
          setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener("scroll", handleScroll);
     
      return () => window.removeEventListener("scroll", handleScroll);
    });

    
  return (
  
<div id="tools" className="toolsContainer">
  <span>
  <button className={isTools ? "navSubIcon btnShowTools" : "navSubIcon extraWidth" } 
  type="button"
  onClick={handleClickTools}
  >
    {isTools ? 
    <span className="m-0 p-0"> 
      <FontAwesomeIcon 
      color="black"
      className="fntAwesome" icon={faAnglesRight} />
    </span>


    
  :   <span>
  <FontAwesomeIcon 
     color="text-black"
     className="fntAwesome" icon={faAnglesLeft} />
      <FontAwesomeIcon 
     className="fntAwesome" icon={faTools} />
     </span>


  }

    
  </button>
  </span>
 

  {isTools ?
  <div className="showToolsMenu">
   
<div className="d-inline-block pr-1 align-self">
  <h3 className="m-auto pr-5 mt-5">My web tools</h3>
</div>

<div className="d-inline-block align-self m-0">
  <h4 htmlFor="button" className="m-auto pr-1 pb-0">
    Outliner
  </h4>
  <button
    className={
      isRed
        ? "navSubIcon toolBtnActive mx-auto"
        : "navSubIcon mx-auto"
    }
    onClick={outlineMode}>
    <FontAwesomeIcon
      className="fntAwesome"
      icon={faPen}
      style={{
        color: isRed
          ? "var(--secondaryColor-darkest)"
          : "var(--primary-red)",
      }}></FontAwesomeIcon>
  </button>
</div>
<div className="d-inline-block m-0 align-self">
  <h4 className="m-auto pb-0">Color blindness</h4>
</div>

  <div className="d-inline-block align-self m-0">
    <label className="btnLabelNav" id="labelRedGreen">
      Red/Green
    </label>
    <button
      className={
        isCbRedGreen ? "navSubIcon toolBtnActive mx-auto" : "navSubIcon mx-auto"
      }
      onClick={cbRedGreenMode}>
      <FontAwesomeIcon
        className="fntAwesome"
        icon={isCbRedGreen ? faEyeSlash : faEye}
        style={{
          color: isCbRedGreen
            ? "var(--darkest-navy)"
            : "var(--primary-red)",
        }}></FontAwesomeIcon>
    </button>
  </div>

  <div className="d-inline-block align-self m-0">
    <label className="btnLabelNav" id="labelYellowBlue">
      Yellow/Blue
    </label>

    <button
      className={
        isCbYellowBlue ? "navSubIcon toolBtnActive mx-auto" : "navSubIcon mx-auto"
      }
      onClick={cbYellowBlueMode}>
      <FontAwesomeIcon
        className="fntAwesome"
        icon={isCbYellowBlue ? faEyeSlash : faEye }
        style={{
          color: isCbYellowBlue
            ? "var(--darkest-navy)"
            : "var(--primary-blue)",
        }}></FontAwesomeIcon>
    </button>
  </div>

  <div className="d-inline-block align-self m-0">
    <label className="btnLabelNav" id="labelTotalGreyColor">
      Total
    </label>
    <button
      className={
        isCbTotal ? "navSubIcon toolBtnActive  mx-auto" : "navSubIcon  mx-auto"
      }
      onClick={cbTotalMode}>
      <FontAwesomeIcon
        className="fntAwesome"
        icon={isCbTotal ? faEyeSlash :faEye }
        style={{
          color: isCbTotal
            ? "var(--darkest-navy)"
            : "black",
        }}></FontAwesomeIcon>
    </button>
  </div>
  </div> 
   : null}
</div>
  );
};

export default WebTools;

