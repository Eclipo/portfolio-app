import anime from "animejs";


export const animate = (inputID)=>{
    //Animate buttons... based on their id... and then on their corresponding experience-div
    // title, staple-diagrams, etc... 
    

    let jobTitle='';
    let linkCustomerTitle ='';
    let linkToCustomer = '';
    let descpOne=''
    let descpTwo=''
    let descpThree=''
    let descpFour=''
    const allTechSkillContainer = document.querySelectorAll('div[id$=_tech]');
    const expCategoryMenu = document.getElementById('expCategoryMenu');

    
    var period = document.getElementById('period');
    var system = document.getElementById('system');
    var jobTitleEl = document.getElementById('jobTitleID');
    const linkEl = document.querySelectorAll('[id=linkID]');
    var liTwo = document.getElementById('_liTwo');
    var liThree = document.getElementById('_liThree');
    var liFour = document.getElementById('_liFour');

    var techSkills=inputID+'_tech';
    var chosenTechSkillContainer = document.getElementById(techSkills);
    var descOneEl=document.getElementById('_descOne');
    var descTwoEl=document.getElementById('_descTwo');
    var descThreeEl=document.getElementById('_descThree');
    var descFourEl=document.getElementById('_descFour');

    for(const el of allTechSkillContainer) {
        el.style.display = "none";
        el.style.opacity = 0;
      }


    var tab = '#'+inputID;

    var tabScrollLine='#'+inputID+'_scrollLine';
    
    var tabScrollLineEl = document.getElementById(inputID+'_scrollLine');

    var rect = tabScrollLineEl.getBoundingClientRect();

    var jobAtEl = document.getElementById('jobAtID');
    
    var jobAtText = '\u00A0@\u00A0'

    var tabContent = '#_container';

    var contentHeader='#_header';

    var contentPeriod='#_periodSystem';
    const objRef = document.body;

    // objRef.style.overflow='hidden';
    anime({
        targets:[contentHeader,contentPeriod,'.techText ul li','.techRow','.li_icon'],
        opacity:0,
        duration:50,
        complete:function(){
            expCategoryMenu.style.pointerEvents='none';

            anime({
                targets:'.techCategory',
                backgroundColor:'#0a192f',
                easing:'linear',
                duration:50,
                complete:function(){
                    anime({
                        targets:tab,
                        backgroundColor: ["#0a192f","#233554"],
                        easing: 'linear',
                        duration:50,
                        complete:function(){
                            anime({
                                targets:'.scrollLine',
                                opacity:0,
                                duration:50,
                                complete:function(){
                                    anime({
                                        targets:tabScrollLine,
                                        opacity:[0,1],
                                        translateX:["-50px","50px",0],
                                        width:[0,100],
                                        duration:350,
                                        easing:'easeInOutQuad',
                                        complete:function(){

                                            if (inputID === 'fintech'){
                                                jobTitle = 'Developer Consultant';
                                        
                                                linkCustomerTitle = 'fintech industry';
                                                linkToCustomer = '';
                                                period.innerText='2020-02-14 - Present';
                                                system.innerText='Full-stack application';

                                                descOneEl.innerText="Currently active within the fintech industry where I operate as a full-stack developer.";
                                                descTwoEl.innerText = 'The major technologies are Angular, C# and MS SQL.';
                                                descThreeEl.innerText = '';
                                                descFourEl.innerText = '';
                                                liThree.style.display='none';
                                                liFour.style.display='none';
                                                chosenTechSkillContainer.style.display='block';
                                                chosenTechSkillContainer.style.opacity='1';
                                                jobTitleEl.innerText=jobTitle;
                                                jobAtText = '\u00A0within the\u00A0';
                                                jobAtEl.innerText=jobAtText;

                                                for(const el of linkEl){
                                                    el.innerText=linkCustomerTitle;
                                                    el.href=linkToCustomer;
                                                }                                                
                                            }

                                            if(inputID === 'stockholm'){
                                                jobTitle = 'Developer Consultant';
                                        
                                                linkCustomerTitle = ' City of Stockholm';
                                                linkToCustomer = 'https://international.stockholm.se/';
                                                period.innerText='2020-08-01 - 2022-02-11';
                                                system.innerText='Platina (.Net WebForms)';
                                                liTwo.style.display='flex';
                                                liThree.style.display='flex';
                                                liFour.style.display='flex';
                                                descOneEl.innerText = 'I wrote several semi-automatic tests consisted of SQL and Excel which confirmed the deployed configurations in the system were properly set.';
                                                descTwoEl.innerText = 'In a critical project I developed comprehensive customization on several stored procedures and necessary work-arounds due to the existing architecture.';
                                                descThreeEl.textContent = 'Corrected a large set of files and database entries. PowerShell and SQL were used.';
                                                descFourEl.textContent = 'Developed a bookmarkscanner application in C# which scanned through several Microsoft Word templates and categorized the bookmarks to be standard or customized.';
                                                chosenTechSkillContainer.style.display='block';
                                                chosenTechSkillContainer.style.opacity='1';
                                        
                                                jobTitleEl.innerText=jobTitle;
                                                jobAtText = '\u00A0@\u00A0';
                                                jobAtEl.innerText=jobAtText;
                                                
                                                for(const el of linkEl){
                                                    el.innerText=linkCustomerTitle;
                                                    el.href=linkToCustomer;
                                                }
                                            }

                                            if (inputID === 'falu'){
                                                jobTitle = 'Developer Consultant';
                                        
                                                linkCustomerTitle = 'Falu Municipality';
                                                linkToCustomer = 'https://www.falun.se/';
                                                period.innerText='2020-05-01 - 2020-10-01';
                                                system.innerText='Platina (.Net WebForms) and Webdiary (.Net MVC)';

                                                descOneEl.innerText='Coupled together with a projectleader I acted as developer, deployer and solution architect.'
                                                descTwoEl.innerText = 'Me and my colleague managed to upgrade Platina from its version of 7.2 to 11 and its module Webdiary from version 1.0 to 2.0.';
                                                descThreeEl.innerText = 'During the project I worked throughout the whole stack consisting of MS SQL, Javascript, HTML/CSS and C#.';
                                                descFourEl.innerText = "Some of the major customizations were a simplified admin menu in Platina and for the Webdiary module I implemented Falu's design patterns.";
                                                liTwo.style.display='flex';
                                                liThree.style.display='flex';
                                                liFour.style.display='flex';

                                                chosenTechSkillContainer.style.display='block';
                                                chosenTechSkillContainer.style.opacity='1';
                                                jobTitleEl.innerText=jobTitle;
                                                jobAtText = '\u00A0@\u00A0';
                                                jobAtEl.innerText=jobAtText;

                                                for(const el of linkEl){
                                                    el.innerText=linkCustomerTitle;
                                                    el.href=linkToCustomer;
                                                }                                                
                                            }

                                            if (inputID === 'motala'){
                                                jobTitle = 'Developer Consultant';
                                        
                                                linkCustomerTitle = 'Motala Municipality';
                                                linkToCustomer = 'https://www.motala.se/';
                                                period.innerText='2020-02-01 - 2020-06-01';
                                                system.innerText='Platina (.Net WebForms)';

                                                descOneEl.innerText='In this project I acted as a full-stack developer and solution architect.'
                                                descTwoEl.innerText = 'Together with a senior developer/deployer and a projectleader we upgraded Platina from version 7.2 to 10.3';
                                                descThreeEl.innerText = "Among many things we did in this project were improvements in Motala's customized approvement process and UI of the meeting-module.";
                                                descFourEl.innerText = '';
                                                liTwo.style.display='flex';
                                                liThree.style.display='flex';
                                                liFour.style.display='none';
                                                chosenTechSkillContainer.style.display='block';
                                                chosenTechSkillContainer.style.opacity='1';
                                                jobAtText = '\u00A0@\u00A0';
                                                jobAtEl.innerText=jobAtText;
                                                jobTitleEl.innerText=jobTitle;

                                                for(const el of linkEl){
                                                    el.innerText=linkCustomerTitle;
                                                    el.href=linkToCustomer;
                                                }                                                
                                            }
                                            
                                        
                                            
                                            anime({
                                                targets:[contentHeader,contentPeriod,'.techText ul li','.techRow','.li_icon'],
                                                opacity:[0,1],
                                                translateX:['-10px',0],
                                                display:'block',
                                                delay: anime.stagger(75),
                                                complete:function(){
                                                    expCategoryMenu.style.pointerEvents='all';
                                                    // objRef.style.overflow='visible';

                                                }                                           
                                            })

                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });


    var posSelectedTab = document.querySelector(tab);

    var pos = posSelectedTab.getBoundingClientRect();

    var posX=pos.left;

   
    console.log('FÖR I HELVETE!!!');
}