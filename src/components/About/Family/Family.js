
import React from 'react';
import './familly.css';

export const Family = () => {
    return (
      
          <table id="tableFamilyID" style={{marginTop:"-2rem",marginLeft:"0.10rem",marginRight:"0.10rem"}}>
          <tr>
            <td >
             {/* Edip */}
                <div className="wrapper"  >
                   
                    <div className="background-circle" style={{background:"none"}}>
                        <div className="edip-body" id="bodyStart"></div>        
                    </div>
            
                    <div className="head" id="headOne">            
                        <div className="hair-main" style={{background:"#3f2a14"}}>
                        </div>
                    

                    <div className="face" id="faceID">
                        <div className="nose" id="noseID"></div>
                
                        <div className="eye-shadow" id="left">
                            <div className="eyebrow"></div>
                            <div className="eye" id="eye_one">
                            <div className='laleh-kawai'></div>

                            </div>
                        </div>
                                
                        <div className="eye-shadow" id="right">
                            <div className="eyebrow"></div>
                                <div className="eye" id="eye_two">
                                <div className='laleh-kawai'></div>

                                </div>
                                <div className="sad-eye" id="sadeyeTwo" style={{opacity:"0"}}></div>
                            </div>
                                        
                            <div className="mouth"></div>
                            <div className="shadow-wrapper"></div>
                        </div>
                        
                        <div className="beard"></div>
                       
                       
                </div>            
                </div>
            </td>
            
            <td>
            {/* Erika */}
                <div className="wrapper" style={{marginTop:"-12rem", marginLeft:"-5rem", position:"absolute"}}>
                
                <div className="background-circle" style={{background:"none"}}>
                
                  <div className="erika-body"></div>
                
                </div>
                
                <div className="head erika-head">
                  <div className="hair-ball"></div>
                  <div className="erika-hair"></div>
                    <div className="face erika-face">

                    <div className="nose erika-nose"></div>
                    <div className="eye-shadow" id="left">
                      <div className="eyebrow erika-brow"></div>
                      <div className="eye erika-eye">
                      <div className='laleh-kawai'></div>

                      </div>
                    </div>
                    <div className="eye-shadow" id="right">
                      <div className="eyebrow erika-brow"></div>
                      <div className="eye erika-eye">
                      <div className='laleh-kawai'></div>

                      </div>
                    </div>
                    <div className="mouth erika-mouth"></div>
              

                    <div className="shadow-wrapper">
                    </div>
                  </div>  
                </div>

              </div>
            </td>
          
        </tr>
        <tr>
        <td>
            {/* NOAH */}
            ,
                <div className="wrapper" style={{transform:"scale(0.9)", marginLeft:"5rem",marginTop:"-16rem", position:"absolute"}}>
                
                <div className="background-circle" style={{background:"none"}}>
                
                  <div className="noah-body" ></div>
                
                </div>
                
                <div className="head noah-head">
                  <div className="noah-hair"></div>
                 
                    <div className="face noah-face">

                    <div className="nose noah-nose"></div>
                    <div className="eye-shadow" id="left">
                      <div className="eyebrow erika-brow"></div>
                      <div className="eye noah-eye">
                      <div className='laleh-kawai'></div>
                      </div>
                    </div>
                    <div className="eye-shadow" id="right">
                      <div className="eyebrow erika-brow"></div>
                      <div className="eye noah-eye">
                      <div className='laleh-kawai'></div>
                      </div>
                    </div>
                    <div className="mouth noah-mouth"></div>
                    <div className="shadow-wrapper">
                    </div>
                    <div className=".hair-sling-left"></div>
                  </div>  
                </div>

              </div>

            
              
            </td>

            <td>
              {/* LALEH */}
                <div className="wrapper" style={{transform:"scale(0.5)",bottom:"5rem",right:"5rem"}}>

                
                <div className="head laleh-head">
                 <div className='laleh-hair'></div>
                    <div className="face laleh-face">

                    <div className="nose laleh-nose"></div>
                    <div className="eye-shadow" id="left">
                      <div className="eyebrow erika-brow"></div>
                      <div className="eye noah-eye ">
                        <div className='laleh-kawai'></div>
                      </div>
                    </div>
                    <div className="eye-shadow" id="right">
                      <div className="eyebrow erika-brow"></div>
                      <div className="eye noah-eye">
                        <div className='laleh-kawai'></div>
                      </div>
                    </div>
                    
                    <div className="mouth laleh-mouth">

                    </div>
                    <div className='cheek cheek-left'></div>
                    <div className='cheek cheek-right'></div>
                    <div className="shadow-wrapper">
                    </div>
                  </div>  
                </div>
                <div className="laleh-body">
                <div className='laleh-np left-1'></div>
                <div className='laleh-np right-2'></div>

                <div className="laleh-diaper">
                  {/* <div className='laleh-foot-left'></div>
                  <div className='laleh-foot-right'></div> */}

                </div>
                </div>
              



              </div>
            </td>
        </tr>
    </table>

       

        
       
    
    )
}